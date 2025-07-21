"use client";

import Image from "next/image";
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
          Spark connections, celebrate creativity, and empower communities with
          unforgettable events that bring people together.
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
