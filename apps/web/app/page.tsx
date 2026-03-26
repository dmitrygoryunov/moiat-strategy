import { PageHeader } from "@/components/primitives/PageHeader";
import { KpiCard } from "@/components/primitives/KpiCard";
import { InsightCard } from "@/components/primitives/InsightCard";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import {
  heroKpis,
  dashboardInsights,
  watchlistItem,
} from "@/lib/seed-data";
import Link from "next/link";

export default function LeadershipDashboard() {
  return (
    <div>
      <PageHeader
        title="Leadership Dashboard"
        subtitle="UAE industrial strategy — evidence-led weekly overview"
        badge="Live scaffold · seed data"
        badgeVariant="deferred"
      >
        <Link
          href="/brief-builder"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-brand-navy text-white hover:bg-brand transition-colors"
        >
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
          Build Brief
        </Link>
      </PageHeader>

      {/* Narrative band */}
      <div className="bg-brand-navy rounded-xl px-6 py-5 mb-8 text-white">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
            Chapter 1 · UAE Starts From Strength
          </div>
          <h2 className="text-xl font-bold leading-snug mb-2">
            The UAE enters 2024 with a strong non-oil foundation and rising
            industrial momentum
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            Non-oil GDP represents 75.5% of real output. Manufacturing value
            added has reached 9.4% of GDP. Real GDP grew at 4.0%. The
            challenge ahead is not ambition — it is precision: which sectors,
            which emirates, which interventions, and which measurable KPIs.
          </p>
        </div>
      </div>

      {/* Hero KPIs */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            National KPI Overview
          </h2>
          <span className="text-xs text-gray-400">
            Sources: World Bank, FCSC / UAE.Stat · Extracted 2026-03-26
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {heroKpis.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>
      </section>

      {/* Insight row */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Signal Overview
          </h2>
          <span className="text-xs text-gray-400">
            Rule-based signals · AI summarization deferred
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {dashboardInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </section>

      {/* Two-column: watchlist + recommended brief */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Watchlist / anomaly */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Watchlist
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-signal-risk mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                  {watchlistItem.title}
                </h3>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {watchlistItem.summary}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-signal-risk bg-signal-risk-bg px-2 py-0.5 rounded font-medium">
                Evidence gap — illustrative
              </span>
              <Link
                href="/brief-builder"
                className="text-xs text-brand-medium hover:underline font-medium"
              >
                Investigate →
              </Link>
            </div>
          </div>
        </section>

        {/* Operation 300bn tracker */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Operation 300bn Progress
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="mb-4">
              <div className="flex items-end justify-between mb-1.5">
                <span className="text-xs text-gray-500">
                  Manufacturing GDP target
                </span>
                <span className="text-xs font-semibold text-brand-navy">
                  AED 300bn by 2031
                </span>
              </div>
              <div className="flex items-end justify-between mb-3">
                <span className="text-sm font-bold text-brand-navy">
                  Current baseline
                </span>
                <span className="text-sm font-bold text-brand-navy">
                  ~AED 196bn est.
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-brand-medium h-2.5 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[10px] text-gray-400">2021 baseline</span>
                <span className="text-[10px] text-gray-400">
                  65% of target · est. 2024
                </span>
                <span className="text-[10px] text-gray-400">2031 target</span>
              </div>
            </div>
            <DeferredBadge
              reason="Progress figure is illustrative. Exact manufacturing GDP value requires FCSC/UAE.Stat structured export."
              className="mt-2"
            />
          </div>
        </section>
      </div>

      {/* Recommended brief */}
      <section className="mb-2">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Recommended Decision Brief
        </h2>
        <div className="bg-white rounded-xl border border-brand-medium/30 p-5 shadow-sm flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-wide text-brand-medium mb-1.5">
              Suggested brief
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
              Manufacturing sector adjacency: where should UAE prioritize in
              2025?
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Manufacturing VA is rising and FDI is strong, but the complexity
              profile suggests an untapped opportunity in higher-value
              industries. This brief would frame the options, trade-offs, and
              evidence base for a targeted sector intervention decision.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] bg-signal-momentum-bg text-signal-momentum px-2 py-0.5 rounded font-medium">
                Momentum signal
              </span>
              <span className="text-[10px] bg-signal-opportunity-bg text-signal-opportunity px-2 py-0.5 rounded font-medium">
                Opportunity signal
              </span>
              <span className="text-[10px] text-gray-400">
                2 evidence sources
              </span>
            </div>
          </div>
          <Link
            href="/brief-builder"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-brand-light text-brand hover:bg-brand hover:text-white transition-colors"
          >
            Open Brief Builder
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
