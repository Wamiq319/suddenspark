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
        <h1
          className="text-4xl md:text-5xl font-bold animate-[fadeInUp_0.6s_ease-out]"
          style={{
            color: "#FFD700", // Golden headline
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          Ignite Your Community
        </h1>

        <p
          className="text-lg animate-[fadeInUp_0.8s_ease-out] opacity-90"
          style={{
            color: "white",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Spark connections, celebrate creativity, and empower communities with
          unforgettable events that bring people together.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1s_ease-out] w-full">
          <Link href="/events" passHref legacyBehavior>
            <Button variant="primary" rounded className="w-full sm:w-auto">
              Explore Events
            </Button>
          </Link>
          <Link href="/submit" passHref legacyBehavior>
            <Button variant="outline" rounded className="w-full sm:w-auto">
              List an Event
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
