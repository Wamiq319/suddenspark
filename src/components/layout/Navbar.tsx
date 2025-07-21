"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 text-base-content border-b border-base-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          SuddenSpark
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/events" className="btn btn-ghost text-sm">
            Events
          </Link>
          <Link href="/submit" className="btn btn-ghost text-sm">
            Submit
          </Link>
          <Link
            href="/about"
            className="btn btn-ghost text-sm hidden sm:inline-block"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="btn btn-ghost text-sm hidden sm:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
