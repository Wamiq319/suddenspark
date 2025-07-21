"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav
      className="navbar fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 bg-opacity-60 border-b border-base-200 shadow-md"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 shadow-md w-9 h-9">
            <Image
              src="/Logo.png"
              alt="SuddenSpark Logo"
              width={28}
              height={28}
              className="rounded-full object-cover"
              priority
            />
          </span>
          <span className="text-2xl font-bold transition-colors duration-200 gold group-hover:gold">
            SuddenSparkEvents
          </span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link
            href="/events"
            className="text-white text-sm transition-colors duration-200 hover:gold"
          >
            Events
          </Link>
          <Link
            href="/submit"
            className="text-white text-sm transition-colors duration-200 hover:gold"
          >
            Submit
          </Link>
          <Link
            href="/about"
            className="text-white text-sm hidden sm:inline-block transition-colors duration-200 hover:bg-yellow-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm hidden sm:inline-block transition-colors duration-200 hover:gold"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
