"use client";

import { useEffect, useRef } from "react";
import {
  FaUtensils,
  FaHandsHelping,
  FaBicycle,
  FaPaintBrush,
  FaBook,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components";

const ideas = [
  {
    label: "Taco fundraiser",
    icon: FaUtensils,
    bg: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Prayer walk",
    icon: FaHandsHelping,
    bg: "bg-blue-100 text-blue-600",
  },
  { label: "Bike parade", icon: FaBicycle, bg: "bg-green-100 text-green-600" },
  {
    label: "Paint in the park",
    icon: FaPaintBrush,
    bg: "bg-red-100 text-red-500",
  },
  { label: "Book swap", icon: FaBook, bg: "bg-pink-100 text-pink-600" },
  {
    label: "Ice cream social",
    icon: FaUtensils,
    bg: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Chalk art contest",
    icon: FaPaintBrush,
    bg: "bg-purple-100 text-purple-600",
  },
  { label: "Open mic night", icon: FaBook, bg: "bg-blue-100 text-blue-600" },
  {
    label: "Face painting booth",
    icon: FaHandsHelping,
    bg: "bg-red-100 text-red-500",
  },
  {
    label: "Live music jam",
    icon: FaBicycle,
    bg: "bg-green-100 text-green-600",
  },
  { label: "Bake sale", icon: FaUtensils, bg: "bg-yellow-100 text-yellow-600" },
  { label: "Talent show", icon: FaBook, bg: "bg-pink-100 text-pink-600" },
];

export const EventIdeasScroller = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let scrollAmount = el.scrollLeft;
    let frame: number;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= el.scrollWidth - el.clientWidth) scrollAmount = 0;
      el.scrollLeft = scrollAmount;
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-16   bg-gradient-to-br from-[#f4f9ff] to-[#fef7e0] ">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold gold mb-2">Event Ideas</h2>
        <div className="w-10 h-[2px] bg-gray-300 mx-auto my-2" />
      </div>

      <div
        ref={ref}
        className="w-full flex gap-6 overflow-x-auto px-4 sm:px-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {ideas.map(({ label, icon: Icon, bg }, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-white rounded-[28px] px-6 py-8 shadow-sm hover:shadow-md flex flex-col items-center text-center transition"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bg}`}
            >
              <Icon className="text-2xl" />
            </div>
            <p className="text-sm font-semibold text-gray-800">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/event_ideas">
          <Button color="gold" rounded>
            Explore more
          </Button>
        </Link>
      </div>
    </section>
  );
};
