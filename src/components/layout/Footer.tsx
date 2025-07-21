"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 border-t border-base-300">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} SuddenSpark Events. All rights
            reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/about" className="link link-hover">
            About
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/events" className="link link-hover">
            Events
          </Link>
        </div>
      </div>
    </footer>
  );
};
