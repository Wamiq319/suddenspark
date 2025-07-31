"use client";

import {
  FaPlusCircle,
  FaCheckCircle,
  FaCalendarAlt,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components";

export const EventFlowSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-24 px-6 text-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-blue-800/90"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* Enhanced Header */}
        <div className="mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FaRocket className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Creating and sharing your event is fast, simple, and impactful.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg group-hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPlusCircle className="text-3xl text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Submit an Event</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Fill out a short form with your event info and details.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg group-hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="text-3xl text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Admin Review</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Your event is reviewed and approved manually for quality.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg group-hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaCalendarAlt className="text-3xl text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Go Live</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Once approved, it&apos;s live and visible to all community
                members.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg mb-8 opacity-90">
            Hosting something meaningful? Let the community know and inspire
            others to join your cause.
          </p>
          <Link href="/event_submit">
            <Button color="amber" size="lg" className="group">
              <span className="flex items-center justify-center gap-2">
                <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                List Your Event Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
