"use client";

import { useEffect, useState } from "react";
import type { Event } from "@/types";
import { Button } from "@/components";
import { Loader } from "@/components/ui";
import clsx from "clsx";
import Image from "next/image";
import { DatePickerField } from "@/components/input/DatePicker";

const ITEMS_PER_PAGE = 10;

type RawEvent = Omit<Event, "id"> & { _id: string };

export default function AdminEventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<{
    type: "approve" | "decline" | "delete";
    eventId: string;
  } | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (date?: Date | null, page = 1) => {
    try {
      setLoading(true);
      let url = `/api/admin/events?limit=${ITEMS_PER_PAGE}&page=${page}`;
      if (date) {
        // Format date as yyyy-mm-dd using local time, not UTC
        const pad = (n: number) => n.toString().padStart(2, "0");
        const localDate = `${date.getFullYear()}-${pad(
          date.getMonth() + 1
        )}-${pad(date.getDate())}`;
        url += `&date=${localDate}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok && data.success) {
        // Map _id to id for frontend compatibility
        const mappedEvents = data.events.map((event: RawEvent) => ({
          ...event,
          id: event._id,
        }));
        setEvents(mappedEvents);
        setTotal(data.total);
      }
    } catch (e) {
      console.error("Fetch events error", e);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async () => {
    if (!confirmAction?.eventId) return;

    const { eventId, type } = confirmAction;
    const method = type === "delete" ? "DELETE" : "PATCH";
    const body =
      type === "delete" ? { id: eventId } : { id: eventId, action: type };

    await fetch("/api/admin/events", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setConfirmAction(null);
    setModalOpen(false);
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents(); // Only fetch all events on mount
  }, []);

  const handleApplyFilter = () => {
    setCurrentPage(1);
    fetchEvents(selectedDate, 1);
  };

  const handleClearFilter = () => {
    setSelectedDate(null);
    setCurrentPage(1);
    fetchEvents(undefined, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchEvents(selectedDate, page);
  };

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Events</h1>
      {/* Date Filter */}
      <div className="mb-6 flex items-center gap-4">
        <DatePickerField
          value={selectedDate}
          onChange={setSelectedDate}
          placeholder="Filter by date"
        />
        <Button
          color="blue"
          rounded
          onClick={handleApplyFilter}
          disabled={loading}
        >
          Apply Filter
        </Button>
        {selectedDate && (
          <Button
            color="red"
            outline
            rounded
            onClick={handleClearFilter}
            disabled={loading}
          >
            Clear
          </Button>
        )}
        {loading && <Loader size={24} className="ml-2" />}
      </div>

      <div className="overflow-x-auto rounded-md shadow border border-base-300 bg-base-100">
        <table className="min-w-full divide-y divide-base-200">
          <thead className="bg-base-200">
            <tr>
              {[
                "Image",
                "Title",
                "Date",
                "Time",
                "Location",
                "Status",
                "Actions",
              ].map((label) => (
                <th
                  key={label}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-base-200">
            {events.map((event, idx) => (
              <tr
                key={event.id || `${event.title}-${idx}`}
                className="hover:bg-base-50 transition"
              >
                <td className="px-4 py-2">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={80}
                      height={48}
                      className="rounded object-cover w-20 h-12"
                    />
                  ) : (
                    <div className="w-20 h-12 bg-base-300 rounded flex items-center justify-center text-xs text-gray-400">
                      No Image
                    </div>
                  )}
                </td>
                <td className="px-4 py-2 font-medium">{event.title}</td>
                <td className="px-4 py-2">{event.date}</td>
                <td className="px-4 py-2">{event.time}</td>
                <td className="px-4 py-2">{event.location}</td>
                <td className="px-4 py-2">
                  <span
                    className={clsx("font-semibold", {
                      "text-yellow-600": !event.approved,
                      "text-green-600": event.approved,
                    })}
                  >
                    {event.approved ? "Approved" : "Pending"}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <Button
                    color="blue"
                    onClick={() => {
                      setSelectedEvent(event);
                      setModalOpen(true);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    color="red"
                    outline
                    rounded
                    onClick={() =>
                      setConfirmAction({ type: "delete", eventId: event.id! })
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const page = idx + 1;
          return (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              outline={currentPage !== page}
              color="blue"
              rounded
              disabled={loading}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Event Detail Modal */}
      {modalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-0 w-full max-w-lg max-h-[80vh] overflow-hidden relative flex flex-col">
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Event Details</h2>
              <button
                className="text-gray-600 hover:text-black text-2xl ml-4"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            {/* Event Image */}
            {selectedEvent.image && (
              <div className="w-full max-h-64 overflow-hidden flex-shrink-0">
                <Image
                  src={selectedEvent.image}
                  alt="Event"
                  width={600}
                  height={256}
                  className="w-full object-cover max-h-64"
                />
              </div>
            )}
            {/* Event Details Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 text-sm">
              <p>
                <strong>Title:</strong> {selectedEvent.title}
              </p>
              <p>
                <strong>Date:</strong> {selectedEvent.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedEvent.time}
              </p>
              <p>
                <strong>Location:</strong> {selectedEvent.location}
              </p>
              <p>
                <strong>Email:</strong> {selectedEvent.email}
              </p>
              <p>
                <strong>Category:</strong> {selectedEvent.category}
              </p>
              <p>
                <strong>Description:</strong> {selectedEvent.description}
              </p>
            </div>
            {/* Approve/Decline Buttons */}
            {!selectedEvent.approved && (
              <div className="px-6 py-4 border-t border-gray-200 flex gap-3 bg-white sticky bottom-0 z-10">
                <Button
                  color="gold"
                  rounded
                  onClick={() =>
                    setConfirmAction({
                      type: "approve",
                      eventId: selectedEvent.id!,
                    })
                  }
                >
                  Approve
                </Button>
                <Button
                  color="red"
                  outline
                  rounded
                  onClick={() =>
                    setConfirmAction({
                      type: "decline",
                      eventId: selectedEvent.id!,
                    })
                  }
                >
                  Decline
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmAction && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
          <div className="bg-white rounded-md p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Confirm{" "}
              {confirmAction.type.charAt(0).toUpperCase() +
                confirmAction.type.slice(1)}
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Are you sure you want to {confirmAction.type} this event?
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleAction} color="blue" rounded>
                Yes
              </Button>
              <Button
                onClick={() => setConfirmAction(null)}
                color="red"
                outline
                rounded
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
