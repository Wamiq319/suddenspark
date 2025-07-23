"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HiMenu, HiX } from "react-icons/hi";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <li>
      <Link
        href={href}
        className={`text-sm transition-colors duration-200 hover:gold ${
          pathname === href ? "gold font-semibold" : "text-black"
        }`}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="navbar bg-white border-b border-base-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-full mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 shadow-md w-9 h-9 shrink-0">
            <Image
              src="/Logo.png"
              alt="SuddenSpark Logo"
              width={28}
              height={28}
              className="rounded-full object-cover"
              priority
            />
          </span>
          <span className="font-bold transition-colors duration-200 gold group-hover:gold text-lg sm:text-xl md:text-2xl truncate">
            SuddenSparkEvents
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {navLink("/", "Home")}
            {navLink("/events", "Events")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
          </ul>
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link href="/submit" className="hidden sm:inline-block">
            <Button color="gold" outline rounded type="button">
              List an Event
            </Button>
          </Link>
          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-base-200">
          <ul className="menu px-4 py-2 space-y-1">
            {navLink("/", "Home")}
            {navLink("/events", "Events")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
            <li>
              <Link
                href="/submit"
                className="btn btn-sm btn-outline border-[#ffd700] text-[#ffd700] w-full mt-2"
              >
                List an Event
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
