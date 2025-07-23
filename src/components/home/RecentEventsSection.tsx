"use client";

import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/Button";

const recentEvents = [
  {
    id: "1",
    title: "Local Art & Music Fair",
    description:
      "A vibrant showcase of local artists, musicians, and food vendors.",
    date: "July 27, 2025",
    time: "4:00 PM",
    slug: "local-art-music-fair",
    image: "/events/art-music.jpg",
    category: "Art & Culture",
  },
  {
    id: "2",
    title: "Community Clean-Up Drive",
    description: "Join us in keeping the neighborhood clean and green.",
    date: "August 2, 2025",
    time: "10:00 AM",
    slug: "clean-up-drive",
    image: "/events/cleanup.jpg",
    category: "Volunteer",
  },
  {
    id: "3",
    title: "Open Mic Night",
    description: "Share your voice, poetry, or stand-up in a welcoming crowd.",
    date: "August 10, 2025",
    time: "7:30 PM",
    slug: "open-mic-night",
    image: "",
    category: "Entertainment",
  },
];

export const RecentEventsSection = () => {
  return (
    <section className="bg-base-200 text-base-content py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Events</h2>
        <p className="text-lg mb-10">
          Discover the latest events happening in your community.
        </p>

        <div className="grid gap-8 md:grid-cols-3 justify-center mb-10">
          {recentEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <Button
          color="blue"
          outline
          rounded
          onClick={() => (window.location.href = "/events")}
        >
          View All Events
        </Button>
      </div>
    </section>
  );
};
