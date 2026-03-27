import type { KpiDef } from "@/lib/seed-data";
import { EvidenceDrawer } from "./EvidenceDrawer";

const KPI_ICONS: Record<string, React.ReactNode> = {
  real_gdp_growth: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  non_oil_gdp_growth: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  non_oil_gdp_share: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  ),
  gdp_value: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  non_oil_exports_proxy: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  manufacturing_va_pct_gdp: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
};

interface KpiCardProps {
  kpi: KpiDef;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const isDeltaUp = kpi.delta_direction === "up";
  const isDeltaDown = kpi.delta_direction === "down";
  const hasMeaningfulDelta = kpi.delta && (isDeltaUp || isDeltaDown);
  const icon = KPI_ICONS[kpi.id];

  return (
    <div className="kpi-card relative group flex flex-col">
      {kpi.deferred && (
        <div className="absolute top-4 right-4">
          <DeferredPill reason={kpi.deferred_reason} />
        </div>
      )}

      {/* Header: icon + label */}
      <div className="flex items-center gap-2 mb-4">
        {icon && (
          <span className="text-[#92722A] flex-shrink-0">{icon}</span>
        )}
        <span className="text-sm font-semibold text-aeblack-600 font-heading">
          {kpi.label}
        </span>
      </div>

      {/* Hero value — dominant element */}
      <div className="mb-3">
        <span
          className={`text-4xl font-extrabold tracking-tight leading-none font-heading ${
            kpi.deferred ? "text-gray-300" : "text-aeblack-950"
          }`}
        >
          {kpi.deferred ? "—" : kpi.value}
        </span>

        {/* Delta — only if meaningful direction */}
        {hasMeaningfulDelta && !kpi.deferred && (
          <span
            className={`ml-2.5 text-sm font-semibold ${
              isDeltaUp ? "text-signal-momentum" : "text-signal-risk"
            }`}
          >
            {isDeltaUp ? "▲" : "▼"} {kpi.delta}
          </span>
        )}
      </div>

      {/* Single source line — period + publisher */}
      <div className="text-xs text-aeblack-400 mb-0 flex-1">
        {kpi.evidence.display_period} · {kpi.evidence.publisher}
      </div>

      {/* Footer: evidence drawer */}
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
        <EvidenceDrawer evidence={kpi.evidence} triggerLabel={kpi.label} />
        {kpi.deferred && (
          <span className="text-xs text-aeblack-400 italic">Data pending</span>
        )}
      </div>
    </div>
  );
}

function DeferredPill({ reason }: { reason?: string }) {
  return (
    <div className="group/pill relative">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-gray-100 text-aeblack-400">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Deferred
      </span>
      {reason && (
        <div className="absolute right-0 top-8 w-64 bg-aeblack-800 text-white text-xs rounded-md px-3 py-2.5 z-10 leading-relaxed opacity-0 group-hover/pill:opacity-100 pointer-events-none transition-opacity shadow-lg">
          {reason}
        </div>
      )}
    </div>
  );
}
