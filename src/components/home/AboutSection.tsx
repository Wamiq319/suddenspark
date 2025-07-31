"use client";
import Link from "next/link";
import { Button } from "@/components";
import { FaUsers, FaHeart, FaLightbulb } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FaUsers className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What is Sudden Spark?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Enhanced Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Sudden Spark is a community-powered platform designed to help
              anyone share local events, organize meaningful gatherings, and
              promote causes that matter.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you&apos;re hosting a small meetup, a volunteer
              initiative, or a creative event — Sudden Spark makes it easy to
              connect with people who care. Every event submission is reviewed
              to ensure quality, safety, and alignment with our mission.
            </p>

            <div className="pt-6">
              <Link href="/about">
                <Button color="amber" outline size="lg" className="group">
                  <span className="flex items-center justify-center gap-2">
                    Learn More About Us
                    <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 h-full">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Community Driven
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  Built by and for local communities, ensuring authentic
                  connections and meaningful experiences.
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 h-full">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-amber-900">
                  Quality Focused
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  Every event is carefully reviewed to maintain high standards
                  and community values.
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 h-full">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-900">
                  Purpose Built
                </h3>
                <p className="text-green-800 leading-relaxed">
                  Designed to support meaningful causes and bring people
                  together for positive impact.
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 h-full">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-900">
                  Inclusive Platform
                </h3>
                <p className="text-purple-800 leading-relaxed">
                  Welcoming all types of events that foster community growth and
                  connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
