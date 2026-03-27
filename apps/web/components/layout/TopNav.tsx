"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="bg-white sticky top-0 z-30 shadow-sm">
      {/* Gold gradient bar */}
      <div className="h-2 bg-gradient-to-b from-[#CBA344] to-[#92722A]" />

      {/* Single row: logo + nav + context */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center h-16 gap-6">
          {/* Logo + title */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/uae-logo.png"
              alt="National emblem"
              className="h-10 w-auto"
            />
            <div className="h-7 w-px bg-gray-200" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-aeblack-900 font-heading">
                Strategy Intelligence
              </div>
              <div className="text-[11px] text-aeblack-400">
                Evidence-led decision support
              </div>
            </div>
          </div>

          {/* Navigation — inline with header */}
          <nav className="flex items-center gap-1 flex-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors no-underline ${
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

          {/* Context date — right side */}
          <div className="flex-shrink-0 text-right">
            <div className="text-[11px] text-aeblack-400 uppercase tracking-wider font-heading">
              Context
            </div>
            <div className="text-sm font-semibold text-aeblack-800">
              {APP_DATA_CONTEXT.as_of}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
