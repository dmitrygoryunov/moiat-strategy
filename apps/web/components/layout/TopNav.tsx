"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_DATA_CONTEXT } from "@/lib/seed-data";

const navItems = [
  { href: "/", label: "Dashboard", full: "Leadership Dashboard" },
  {
    href: "/uae-position",
    label: "UAE Position",
    full: "UAE Position & Peer Benchmarking",
  },
  { href: "/sectors", label: "Sectors", full: "Sector Prioritization" },
  { href: "/emirates", label: "Emirates", full: "Emirate Portfolio" },
  {
    href: "/brief-builder",
    label: "Decision Brief",
    full: "Decision Brief Builder",
  },
  { href: "/roadmap", label: "Roadmap", full: "Roadmap & Operating Model" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      {/* MoIAT gold accent bar — mirrors official site top stripe */}
      <div className="h-[3px] bg-brand-gold" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center h-[60px] gap-6">
          {/* Official MoIAT logo + product sub-label */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/moiat-logo-eng.svg"
              alt="Ministry of Industry & Advanced Technology"
              className="h-8 w-auto"
            />
            <div className="h-5 w-px bg-gray-200" />
            <span className="text-[10px] font-semibold text-brand-medium tracking-wide whitespace-nowrap">
              Strategy Intelligence
            </span>
          </div>

          {/* Vertical divider */}
          <div className="h-7 w-px bg-gray-200 flex-shrink-0" />

          {/* Navigation links */}
          <nav className="flex items-stretch flex-1 h-full">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.full}
                  className={`px-4 flex items-center text-sm font-medium transition-colors border-b-2 -mb-px ${
                    isActive
                      ? "text-brand-navy border-brand-gold"
                      : "text-gray-500 border-transparent hover:text-brand-navy hover:border-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Context date */}
          <div className="flex-shrink-0 text-right pl-4 border-l border-gray-100">
            <div className="text-[9px] text-gray-400 leading-none uppercase tracking-wider">
              Context
            </div>
            <div className="text-xs font-semibold text-brand-navy mt-0.5">
              {APP_DATA_CONTEXT.as_of}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
