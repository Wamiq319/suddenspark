"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  return (
    <nav className="navbar bg-white border-b border-base-200 shadow-md fixed top-0 left-0 w-full z-50 flex-nowrap overflow-x-auto">
      <div className="w-full mx-auto px-4 flex flex-nowrap items-center">
        <div className="navbar-start">
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
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link
                href="/events"
                className="text-black text-sm transition-colors duration-200 hover:gold"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/submit"
                className="text-black text-sm transition-colors duration-200 hover:gold"
              >
                Submit
              </Link>
            </li>
            <li className="hidden sm:inline-block">
              <Link
                href="/about"
                className="text-black text-sm transition-colors duration-200 hover:bg-yellow-500"
              >
                About
              </Link>
            </li>
            <li className="hidden sm:inline-block">
              <Link
                href="/contact"
                className="text-black text-sm transition-colors duration-200 hover:gold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button
            color="gold"
            outline
            rounded
            className="ml-0 sm:ml-4"
            type="button"
          >
            List Event
          </Button>
        </div>
      </div>
    </nav>
  );
};
