"use client";

import { FaPlusCircle, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const EventFlowSection = () => {
  return (
    <section className="blue-bg py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg mb-12">
          Creating and sharing your event is fast, simple, and impactful.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow text-white flex flex-col items-center">
            <FaPlusCircle className="text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-1">Submit an Event</h3>
            <p className="text-sm opacity-90">
              Fill out a short form with your event info.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow text-white flex flex-col items-center">
            <FaCheckCircle className="text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-1">Admin Review</h3>
            <p className="text-sm opacity-90">
              Your event is reviewed and approved manually.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow text-white flex flex-col items-center">
            <FaCalendarAlt className="text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-1">Go Live</h3>
            <p className="text-sm opacity-90">
              Once approved, it’s live and visible to all users.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-md opacity-90">
            Hosting something meaningful? Let the community know.
          </p>
          <Link href="/submit">
            <Button color="white" rounded>
              List Your Event Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
