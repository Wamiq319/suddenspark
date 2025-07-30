"use client";

import { useEffect, useState } from "react";
import eventIdeas from "@/data/event-ideas.json";
import { EventCard, Button } from "@/components";
import type { Event } from "@/types";
import Link from "next/link";
import { ROUTES } from "@/lib";

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
          const formatted = data.events.map(
            (event: { _id: string; [key: string]: unknown }) => ({
              ...event,
              id: event._id,
            })
          );
          setEvents(formatted);
          setTotal(data.total || 0);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEvents();
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(total / EVENTS_PER_PAGE));

  return (
    <main className="max-w-7xl mx-auto pt-16 pb-32">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Discover Events & Get Inspired
      </h1>

      <section className="flex flex-col lg:flex-row gap-16">
        {/* Event Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events
            .filter(
              (event): event is Event & { id: string; slug: string } =>
                !!event.id && !!event.slug
            )
            .map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
        </div>

        {/* Sidebar CTA Section */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
          {/* Blue Card */}
          <div className="bg-blue-700 text-white rounded-xl p-6 h-64 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">Host Your Event</h3>
              <p className="text-sm">
                Share your community story and bring people together with your
                local event.
              </p>
            </div>
            <Link href={ROUTES.eventSubmit}>
              <Button color="white" rounded>
                List Event
              </Button>
            </Link>
          </div>

          {/* Gradient Card */}
          <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-xl p-6 h-64 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">Empower Community</h3>
              <p className="text-sm">
                Every event posted sparks connection. Be a part of the growing
                movement.
              </p>
            </div>
            <Button color="white" rounded>
              Learn More
            </Button>
          </div>

          {/* Neutral Card */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 h-64 flex flex-col justify-between shadow">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Why Join In?
              </h3>
              <p className="text-sm text-gray-700">
                By attending events, you&apos;re helping strengthen
                neighborhoods and build lasting connections.
              </p>
            </div>
            <Link href={ROUTES.about}>
              <Button color="blue" rounded>
                Our Mission
              </Button>
            </Link>
          </div>
        </aside>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-20">
        <Button
          color="blue"
          outline
          rounded
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <span className="text-sm font-medium text-gray-700">
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

      {/* Event Ideas */}
      <section className="mt-28 px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          100+ Community Event Ideas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(eventIdeas).map(([category, ideas], i) => {
            const bgVariants = [
              "bg-yellow-100",
              "bg-blue-100",
              "bg-red-100",
              "bg-green-100",
              "bg-pink-100",
              "bg-purple-100",
              "bg-orange-100",
            ];
            const bg = bgVariants[i % bgVariants.length];

            return (
              <div
                key={i}
                className={`rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition ${bg}`}
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  {category}
                </h3>
                <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
                  {ideas.map((idea, idx) => (
                    <li key={idx}>{idea}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
