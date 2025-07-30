"use client";

import { useEffect, useState } from "react";
import eventIdeas from "@/data/event-ideas.json";
import { EventCard, Button } from "@/components";
import type { Event } from "@/types";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const EVENTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `/api/event/public?limit=${EVENTS_PER_PAGE}&page=${page}`
        );
        const data = await res.json();
        if (data.success) {
          setEvents(data.events);
          setTotal(data.total);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEvents();
  }, [page]);

  const totalPages = Math.ceil(total / EVENTS_PER_PAGE);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-[#fdfaf3]">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[#ffd700] text-center mb-12">
        Discover Events & Get Inspired
      </h1>

      {/* Event Cards Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id || event._id} {...event} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            color="blue"
            outline
            rounded
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <span className="text-sm font-semibold text-gray-700">
            Page {page} of {totalPages}
          </span>
          <Button
            color="blue"
            outline
            rounded
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </section>

      {/* Event Ideas Grid */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-[#ffd700] text-center mb-12">
          100+ Community Event Ideas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {Object.entries(eventIdeas).map(([category, ideas], i) => {
            const bgVariants = [
              "bg-yellow-50",
              "bg-blue-50",
              "bg-red-50",
              "bg-green-50",
              "bg-pink-50",
              "bg-purple-50",
              "bg-orange-50",
            ];
            const bg = bgVariants[i % bgVariants.length];

            return (
              <div
                key={i}
                className={`rounded-lg border-l-4 border-yellow-400 p-5 shadow-sm hover:shadow-md transition ${bg}`}
              >
                <h3 className="text-md font-semibold text-blue-800 mb-3">
                  {category}
                </h3>
                <div className="overflow-y-auto max-h-[220px] pr-1 custom-scroll">
                  <ul className="text-sm text-gray-800 space-y-1 list-disc pl-4">
                    {ideas.map((idea, idx) => (
                      <li key={idx}>{idea}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
