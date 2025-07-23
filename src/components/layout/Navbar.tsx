"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HiMenu } from "react-icons/hi";

export function Navbar() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <li>
      <Link
        href={href}
        className={`text-sm transition-colors duration-200 hover:gold ${
          pathname === href ? "gold font-semibold" : "text-black"
        }`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <div className="drawer z-50">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Navbar */}
      <div className="drawer-content">
        <nav className="navbar bg-white border-b border-base-200 shadow-md fixed top-0 left-0 w-full z-50">
          <div className="w-full px-4 flex items-center justify-between">
            {/* Left: Logo + text */}
            <Link href="/" className="flex items-center gap-2 min-w-0">
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
              <span className="text-lg sm:text-xl font-bold gold truncate">
                SuddenSpark
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-4">
              <ul className="menu menu-horizontal px-1 gap-3">
                {navLink("/", "Home")}
                {navLink("/events", "Events")}
                {navLink("/about", "About")}
                {navLink("/contact", "Contact")}
              </ul>
              <Link href="/submit">
                <Button color="gold" outline rounded>
                  List an Event
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <label
              htmlFor="nav-drawer"
              className="btn btn-ghost btn-sm md:hidden"
            >
              <HiMenu className="w-6 h-6" />
            </label>
          </div>
        </nav>
      </div>

      {/* Drawer content for mobile */}
      <div className="drawer-side md:hidden z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-72 min-h-full bg-white text-base-content flex flex-col justify-between">
          <ul className="space-y-1">
            {navLink("/", "Home")}
            {navLink("/events", "Events")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
          </ul>

          <Link href="/submit" className="mt-6">
            <Button color="gold" outline rounded className="w-full">
              List an Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
