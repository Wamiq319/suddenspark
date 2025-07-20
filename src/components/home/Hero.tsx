// Hero section for homepage, styled with daisyUI
"use client";

import { Button } from "@/components";

export const Hero = () => {
  return (
    <section className="bg-base-100 text-base-content py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Spark Local Change.
        </h1>
        <p className="text-lg mb-6">
          Submit or discover events that bring your community together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="primary"
            onClick={() => (window.location.href = "/submit")}
          >
            Submit an Event
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/events")}
          >
            Browse Events
          </Button>
        </div>
      </div>
    </section>
  );
};
