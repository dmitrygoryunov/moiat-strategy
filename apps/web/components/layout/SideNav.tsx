"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Leadership Dashboard",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/uae-position",
    label: "National Position",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    href: "/sectors",
    label: "Sector Prioritization",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    href: "/emirates",
    label: "Emirate Portfolio",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    href: "/brief-builder",
    label: "Decision Brief Builder",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    href: "/roadmap",
    label: "Roadmap & Operating Model",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="w-64 min-h-screen bg-brand-navy flex flex-col">
      {/* Logo / product identity */}
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3 mb-3">
          {/* Emblem: ascending-bar mark representing industrial growth */}
          <svg viewBox="0 0 30 30" fill="none" className="w-7 h-7 flex-shrink-0">
            <rect x="1" y="19" width="5" height="9" rx="1.5" fill="white" fillOpacity="0.4" />
            <rect x="8" y="14" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.6" />
            <rect x="15" y="9" width="5" height="19" rx="1.5" fill="white" fillOpacity="0.8" />
            <rect x="22" y="4" width="5" height="24" rx="1.5" fill="#B08D57" />
          </svg>
          <div>
            <div className="text-sm font-bold text-white leading-tight tracking-wide">
              Strategy
            </div>
            <div className="text-[9px] text-white/50 leading-tight mt-0.5 tracking-wide">
              Intelligence
            </div>
          </div>
        </div>
        <div className="text-[8px] text-white/25 leading-snug tracking-widest uppercase">
          Evidence-led decision support
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex-1 px-3 py-5 space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-white text-brand-navy"
                  : "text-white/65 hover:text-white hover:bg-white/10"
              }`}
            >
              <span
                className={
                  isActive ? "text-brand-medium" : "text-white/35"
                }
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Footer — prototype label */}
      <div className="px-5 py-4 border-t border-white/10">
        <div className="text-[10px] text-white/30 leading-snug">
          <span className="font-medium text-white/50">Prototype</span>
          {" · "}
          EPAM × the Ministry
          <br />
          Evidence-led decision support
        </div>
      </div>
    </nav>
  );
}
