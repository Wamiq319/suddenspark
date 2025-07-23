"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Column: Brand */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2">SuddenSpark Events</h3>
          <p className="opacity-80">
            Community-powered platform to discover, submit, and share events
            that make a difference.
          </p>
        </div>

        {/* Column: Navigation */}
        <div className="flex flex-col text-center sm:text-left gap-2">
          <h4 className="font-semibold mb-1">Explore</h4>
          <Link href="/events" className="link link-hover">
            Events
          </Link>
          <Link href="/submit" className="link link-hover">
            Submit Event
          </Link>
          <Link href="/about" className="link link-hover">
            About
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </div>

        {/* Column: Call to action */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-2">Stay Updated</h4>
          <p className="mb-4 opacity-80">
            Join our mailing list for news and upcoming events.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-base-300 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SuddenSpark Events. All rights
        reserved.
      </div>
    </footer>
  );
}
