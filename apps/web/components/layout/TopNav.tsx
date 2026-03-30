"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { APP_DATA_CONTEXT } from "@/lib/seed-data";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/uae-position", label: "National Position" },
  { href: "/sectors", label: "Sectors" },
  { href: "/emirates", label: "Emirates" },
  { href: "/brief-builder", label: "Decision Brief" },
  { href: "/roadmap", label: "Roadmap" },
];

export function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-30 shadow-sm">
      {/* Gold gradient bar */}
      <div className="h-2 bg-gradient-to-b from-[#CBA344] to-[#92722A]" />

      {/* Desktop + mobile bar */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center h-14 gap-6">
          {/* HORIZONS logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-horisons-v3.png"
              alt="HORIZONS"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#F2ECCF] text-[#5D3B26]"
                      : "text-aeblack-500 hover:text-[#6C4527] hover:bg-[#F9F7ED]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Context date — desktop */}
          <div className="hidden md:block flex-shrink-0 text-right">
            <div className="text-[11px] text-aeblack-400 uppercase tracking-wider font-heading">
              Context
            </div>
            <div className="text-sm font-semibold text-aeblack-800">
              {APP_DATA_CONTEXT.as_of}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg text-aeblack-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-[1400px] mx-auto px-8 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#F2ECCF] text-[#5D3B26]"
                      : "text-aeblack-500 hover:text-[#6C4527] hover:bg-[#F9F7ED]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-gray-100 text-xs text-aeblack-400">
              Context: <span className="font-semibold text-aeblack-800">{APP_DATA_CONTEXT.as_of}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
