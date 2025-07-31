"use client";

import Link from "next/link";
import { Button } from "@/components";
import { ROUTES } from "@/lib";
import { FaRocket, FaCalendarAlt } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      className="relative w-full py-20 overflow-x-hidden min-h-screen flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/home/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-blue-900/30"></div>

      <div className="relative z-10 max-w-4xl flex flex-col gap-8 text-center sm:text-left text-white items-center sm:items-start w-full mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center sm:text-left">
          <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FaRocket className="text-3xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ignite Your Community
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto sm:mx-0 mb-8 rounded-full"></div>
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-xl opacity-95 leading-relaxed">
            Host events that inspire. From local meetups to large-scale
            experiences, we help you launch, grow, and engage your community
            with ease.
          </p>
          <p className="text-xl opacity-95 leading-relaxed">
            Discover events that match your passions and connect with
            like-minded people. Find your next great experience — or create it.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
          <Link href={ROUTES.events}>
            <Button color="amber" size="lg" className="group">
              <span className="flex items-center justify-center gap-2">
                <FaCalendarAlt className="group-hover:scale-110 transition-transform duration-300" />
                Explore Events
              </span>
            </Button>
          </Link>
          <Link href={ROUTES.eventSubmit}>
            <Button color="white" outline size="lg" className="group">
              <span className="flex items-center justify-center gap-2">
                <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                List an Event
              </span>
            </Button>
          </Link>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl">
          <div className="text-center group">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-sm opacity-90">Events Created</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-amber-400 mb-2">10K+</div>
              <div className="text-sm opacity-90">Community Members</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-sm opacity-90">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
