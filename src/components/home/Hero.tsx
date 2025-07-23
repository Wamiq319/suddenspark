"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib";

export const Hero = () => {
  return (
    <section
      className="relative w-full py-20 overflow-x-hidden min-h-screen flex items-center bg-base-100"
      style={{
        backgroundImage: "url('/home/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-3xl flex flex-col gap-6 text-center sm:text-left text-white items-center sm:items-start w-full mx-auto px-6">
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

        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
          <Link href={ROUTES.events}>
            <Button color="gold" rounded className="w-full sm:w-auto">
              Explore Events
            </Button>
          </Link>
          <Link href={ROUTES.eventSubmit}>
            <Button color="white" outline rounded className="w-full sm:w-auto">
              List an Event
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
