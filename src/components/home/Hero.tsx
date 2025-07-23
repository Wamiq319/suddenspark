"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section
      className="relative px-6 py-20 overflow-hidden min-h-screen flex items-center bg-base-100"
      style={{
        backgroundImage: "url('/home/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-start gap-6 text-left text-white">
        <h1 className="text-4xl md:text-5xl font-bold gold">
          Ignite Your Community
        </h1>

        <p className="text-lg opacity-90">
          Host events that inspire. From local meetups to large-scale
          experiences, we help you launch, grow, and engage your community with
          ease.
        </p>
        <p className="text-lg opacity-90">
          Discover events that match your passions and connect with like-minded
          people. Find your next great experience — or create it.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
          <Link href="/events">
            <Button color="gold" rounded className="w-full sm:w-auto">
              Explore Events
            </Button>
          </Link>
          <Link href="/submit">
            <Button color="white" outline rounded className="w-full sm:w-auto">
              List an Event
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
