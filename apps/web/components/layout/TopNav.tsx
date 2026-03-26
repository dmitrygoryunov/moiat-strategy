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
          {/* Logo lock-up */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <MoIATCrestMark />
            <div>
              {/* Arabic ministry name — part of the official identity */}
              <div className="text-[8px] text-gray-400 leading-none tracking-wide">
                وزارة الصناعة والتكنولوجيا المتقدمة
              </div>
              <div className="text-[9px] font-bold text-brand-navy leading-tight mt-0.5 tracking-widest uppercase">
                Ministry of Industry &amp; Advanced Technology
              </div>
              <div className="text-[9px] text-brand-medium tracking-wide leading-none mt-0.5 font-medium">
                Strategy Intelligence
              </div>
            </div>
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

/**
 * MoIAT crest mark — faithful representation of the UAE government
 * ministry emblem style: 5 stars in arc + falcon silhouette in gold.
 * Not the registered trademark; a prototype-grade institutional mark.
 */
function MoIATCrestMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-9 w-auto flex-shrink-0"
      aria-label="MoIAT crest mark"
    >
      {/* 5 five-pointed stars in an arc — representing UAE emirates */}
      <polygon
        fill="#C9A84C"
        points="9,6 9.45,7.38 10.9,7.38 9.73,8.24 10.18,9.62 9,8.77 7.82,9.62 8.27,8.24 7.1,7.38 8.55,7.38"
      />
      <polygon
        fill="#C9A84C"
        points="16,3 16.45,4.38 17.9,4.38 16.73,5.24 17.18,6.62 16,5.77 14.82,6.62 15.27,5.24 14.1,4.38 15.55,4.38"
      />
      <polygon
        fill="#C9A84C"
        points="24,2 24.45,3.38 25.9,3.38 24.73,4.24 25.18,5.62 24,4.77 22.82,5.62 23.27,4.24 22.1,3.38 23.55,3.38"
      />
      <polygon
        fill="#C9A84C"
        points="32,3 32.45,4.38 33.9,4.38 32.73,5.24 33.18,6.62 32,5.77 30.82,6.62 31.27,5.24 30.1,4.38 31.55,4.38"
      />
      <polygon
        fill="#C9A84C"
        points="39,6 39.45,7.38 40.9,7.38 39.73,8.24 40.18,9.62 39,8.77 37.82,9.62 38.27,8.24 37.1,7.38 38.55,7.38"
      />

      {/* Falcon / eagle silhouette in gold */}
      {/* Left wing — swept back shape */}
      <path
        d="M22 21 C18 17 7 13 2 16 C8 20 19 25 22 28 Z"
        fill="#C9A84C"
      />
      {/* Right wing — mirror */}
      <path
        d="M26 21 C30 17 41 13 46 16 C40 20 29 25 26 28 Z"
        fill="#C9A84C"
      />
      {/* Body — narrow teardrop */}
      <ellipse cx="24" cy="35" rx="3" ry="6" fill="#C9A84C" />
      {/* Head */}
      <circle cx="24" cy="18" r="3.8" fill="#C9A84C" />
      {/* Beak pointing right — heraldic style */}
      <path d="M27.2 17.2 L32 18.8 L27.2 20.2 Z" fill="#C9A84C" />
    </svg>
  );
}
