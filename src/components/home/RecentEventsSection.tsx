// Recent events section for homepage, styled with daisyUI
"use client";

import { Button } from "@/components";

export const RecentEventsSection = () => {
  return (
    <section className="bg-base-200 text-base-content py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Events</h2>
        <p className="text-lg mb-6">
          Discover the latest events happening in your community.
        </p>
        <Button
          variant="primary"
          onClick={() => (window.location.href = "/events")}
        >
          View All Events
        </Button>
      </div>
    </section>
  );
};
