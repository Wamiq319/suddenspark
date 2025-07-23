"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HiMenu, HiX } from "react-icons/hi";
import { ROUTES } from "@/lib";

const NAV_ITEMS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.events, label: "Events" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.contact, label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href ? "gold font-semibold" : "text-black";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-base-200">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.home} className="flex items-center gap-2 min-w-0">
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors hover:gold ${isActive(
                  item.href
                )}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href={ROUTES.eventSubmit}>
            <Button color="gold" outline rounded>
              List an Event
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden btn btn-ghost btn-sm"
          aria-label="Toggle menu"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 border-t border-base-200">
          <ul className="flex flex-col gap-3 mt-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-base py-1 ${isActive(item.href)}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={ROUTES.eventSubmit} className="block mt-4">
            <Button color="gold" outline rounded className="w-full">
              List an Event
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
