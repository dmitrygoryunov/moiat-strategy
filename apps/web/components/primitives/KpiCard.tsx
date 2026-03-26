import type { KpiDef } from "@/lib/seed-data";
import { EvidenceDrawer } from "./EvidenceDrawer";

interface KpiCardProps {
  kpi: KpiDef;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const isDeltaUp = kpi.delta_direction === "up";
  const isDeltaDown = kpi.delta_direction === "down";

  return (
    <div className="kpi-card relative group">
      {kpi.deferred && (
        <div className="absolute top-3 right-3">
          <DeferredPill reason={kpi.deferred_reason} />
        </div>
      )}

      <div className="mb-3">
        <span className="section-label">{kpi.label}</span>
      </div>

      <div className="flex items-end gap-2.5 mb-2">
        <span
          className={`text-3xl font-bold tracking-tight leading-none ${
            kpi.deferred ? "text-gray-300" : "text-brand-navy"
          }`}
        >
          {kpi.deferred ? "—" : kpi.value}
        </span>
        {kpi.unit_label && (
          <span className="text-xs text-gray-400 mb-0.5 leading-tight max-w-[80px]">
            {kpi.unit_label}
          </span>
        )}
      </div>

      {kpi.delta && !kpi.deferred && (
        <div className="flex items-center gap-1 mb-3">
          <span
            className={`text-xs font-medium ${
              isDeltaUp
                ? "text-signal-momentum"
                : isDeltaDown
                ? "text-signal-risk"
                : "text-gray-500"
            }`}
          >
            {isDeltaUp ? "▲" : isDeltaDown ? "▼" : "→"} {kpi.delta}
          </span>
        </div>
      )}

      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
        <EvidenceDrawer evidence={kpi.evidence} triggerLabel={kpi.label} />
        {kpi.deferred && (
          <span className="text-[10px] text-gray-400">Data pending</span>
        )}
      </div>
    </div>
  );
}

function DeferredPill({ reason }: { reason?: string }) {
  return (
    <div className="group/pill relative">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-400">
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Deferred
      </span>
      {reason && (
        <div className="absolute right-0 top-6 w-56 bg-gray-800 text-white text-[10px] rounded-md px-2.5 py-2 z-10 leading-relaxed opacity-0 group-hover/pill:opacity-100 pointer-events-none transition-opacity shadow-lg">
          {reason}
        </div>
      )}
    </div>
  );
}
