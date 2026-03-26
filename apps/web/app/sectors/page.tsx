import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import { sectorRows } from "@/lib/seed-data";
import Link from "next/link";

const statusConfig = {
  strong: {
    label: "Strong",
    color: "text-signal-momentum",
    bg: "bg-signal-momentum-bg",
    border: "border-signal-momentum/20",
    dot: "bg-signal-momentum",
  },
  opportunity: {
    label: "Opportunity",
    color: "text-signal-opportunity",
    bg: "bg-signal-opportunity-bg",
    border: "border-signal-opportunity/20",
    dot: "bg-signal-opportunity",
  },
  "at-risk": {
    label: "At Risk",
    color: "text-signal-risk",
    bg: "bg-signal-risk-bg",
    border: "border-signal-risk/20",
    dot: "bg-signal-risk",
  },
  strategic: {
    label: "Strategic",
    color: "text-brand",
    bg: "bg-brand-light",
    border: "border-brand/20",
    dot: "bg-brand",
  },
};

const evidenceTypeConfig = {
  official: { label: "Official", color: "text-evidence-official", bg: "bg-evidence-official-bg" },
  modeled: { label: "Modeled", color: "text-evidence-modeled", bg: "bg-evidence-modeled-bg" },
  illustrative: { label: "Illustrative", color: "text-evidence-illustrative", bg: "bg-evidence-illustrative-bg" },
};

export default function SectorsPage() {
  const strongSectors = sectorRows.filter((s) => s.status === "strong");
  const opportunitySectors = sectorRows.filter(
    (s) => s.status === "opportunity"
  );
  const strategicSectors = sectorRows.filter((s) => s.status === "strategic");

  return (
    <div>
      <PageHeader
        title="Sector Prioritization"
        subtitle="Which sectors should MoIAT prioritize for national industrial policy?"
        badge="Scaffold · modeled signals"
        badgeVariant="deferred"
      />

      {/* Framing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Prioritization framework
        </div>
        <h2 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
          Not all sectors deserve equal attention — the question is which to
          accelerate, which to protect, and which to develop from scratch
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-4">
          The sector view organizes the national industrial portfolio into four
          categories: sectors where the UAE is already strong and should be
          defended and scaled; sectors with strong growth opportunity that are
          currently underdeveloped; sectors with strategic national importance
          facing concentrated risks; and emerging sectors requiring early
          positioning.
        </p>
        <DeferredBadge
          reason="Full sector scoring requires UN Comtrade product-level data (access pending) and UNIDO industrial statistics (download not yet complete). Current classification is directional and modeled."
        />
      </div>

      {/* Core questions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          {
            q: "Which sectors are already strong?",
            count: strongSectors.length,
            color: "text-signal-momentum",
            bg: "bg-signal-momentum-bg",
          },
          {
            q: "Which are attractive but underdeveloped?",
            count: opportunitySectors.length,
            color: "text-signal-opportunity",
            bg: "bg-signal-opportunity-bg",
          },
          {
            q: "Which matter strategically but face risks?",
            count: strategicSectors.length,
            color: "text-brand",
            bg: "bg-brand-light",
          },
          {
            q: "Which require cross-emirate coordination?",
            count: "TBD",
            color: "text-gray-400",
            bg: "bg-gray-100",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <div className={`text-2xl font-bold mb-2 ${item.color}`}>
              {item.count}
            </div>
            <p className="text-xs text-gray-500 leading-snug">{item.q}</p>
          </div>
        ))}
      </div>

      {/* Sector card grid */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Sector Overview
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sectorRows.map((sector) => {
            const status = statusConfig[sector.status];
            const evidType = evidenceTypeConfig[sector.evidence_type];
            return (
              <div
                key={sector.id}
                className={`bg-white rounded-xl border p-5 shadow-sm ${status.border} border`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${status.dot}`}
                    />
                    <h3 className="text-sm font-semibold text-gray-900">
                      {sector.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {sector.notes}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${evidType.bg} ${evidType.color}`}
                    >
                      {evidType.label}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Momentum: {sector.momentum_label}
                    </span>
                  </div>
                  <Link
                    href="/brief-builder"
                    className="text-xs text-brand-medium hover:underline font-medium"
                  >
                    Brief →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Opportunity and risk callouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Top Opportunity Signal
          </h2>
          <div className="bg-white rounded-xl border border-signal-opportunity/20 p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-signal-opportunity bg-signal-opportunity-bg px-2.5 py-1 rounded-full inline-flex mb-3">
              Opportunity
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Pharma & Food Security adjacency to existing UAE logistics
              platform
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              The UAE&apos;s free zone and cold-chain logistics infrastructure creates
              a natural platform for pharma and agri-tech manufacturing that is
              currently underutilized relative to the national investment already
              made in these areas. Export complexity data (pending Comtrade
              access) would sharpen this signal.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Top Risk Signal
          </h2>
          <div className="bg-white rounded-xl border border-signal-risk/20 p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-signal-risk bg-signal-risk-bg px-2.5 py-1 rounded-full inline-flex mb-3">
              Risk
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Petrochemical and downstream exposure to long-run energy
              transition
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              While the petrochemical sector remains a strong contributor today,
              the transition trajectory across key export markets creates a
              medium-term demand risk. The question for MoIAT is when to
              accelerate diversification investment relative to continued
              downstream optimization.
            </p>
          </div>
        </section>
      </div>

      {/* Evidence access */}
      <section>
        <div className="bg-brand-light rounded-xl p-5 flex items-start gap-4">
          <svg
            className="w-5 h-5 text-brand-medium mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div className="text-sm font-semibold text-brand mb-1">
              Evidence & Data Status
            </div>
            <p className="text-xs text-brand/80 leading-relaxed">
              Sector classification in this view is directional and based on
              modeled signals from World Bank indicators plus MoIAT public
              context. Full sector scoring will require UN Comtrade product-level
              exports (API access pending) and UNIDO manufacturing structure
              data. Evidence badges on each card indicate the current data
              confidence level.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
