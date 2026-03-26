import { PageHeader } from "@/components/primitives/PageHeader";
import { KpiCard } from "@/components/primitives/KpiCard";
import { InsightCard } from "@/components/primitives/InsightCard";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import {
  heroKpis,
  dashboardInsights,
  watchlistItem,
  APP_DATA_CONTEXT,
} from "@/lib/seed-data";
import Link from "next/link";

export default function LeadershipDashboard() {
  return (
    <div>
      <PageHeader
        title="Leadership Dashboard"
        subtitle="UAE industrial strategy — evidence-led overview"
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

      {/* Data context bar — pulse-plus-annual model at a glance */}
      <div className="flex flex-wrap items-center gap-4 bg-white border border-gray-200 rounded-lg px-5 py-3 mb-6 text-xs shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-medium" />
          <span className="text-gray-500">Context:</span>
          <span className="font-semibold text-brand-navy">{APP_DATA_CONTEXT.as_of}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-momentum" />
          <span className="text-gray-500">Latest pulse:</span>
          <span className="font-semibold text-signal-momentum">{APP_DATA_CONTEXT.latest_pulse_period}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          <span className="text-gray-500">Latest annual:</span>
          <span className="font-semibold text-gray-700">{APP_DATA_CONTEXT.data_vintage}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-gray-500">Extracted:</span>
          <span className="font-semibold text-gray-700">{APP_DATA_CONTEXT.extraction_date}</span>
        </div>
        <div className="ml-auto text-gray-400 italic hidden lg:block">
          {APP_DATA_CONTEXT.data_vintage_note}
        </div>
      </div>

      {/* Narrative band */}
      <div className="bg-brand-navy rounded-xl px-6 py-5 mb-8 text-white">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
            Chapter 1 · UAE Starts From Strength · Latest official pulse: 9M 2025
          </div>
          <h2 className="text-xl font-bold leading-snug mb-2">
            As of March 2026, the latest official pulse shows real GDP growing at
            5.1% with non-oil GDP accelerating to 6.1% through September 2025
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            The freshest available official data — FCSC 9M 2025 — shows UAE real
            GDP reaching AED 1.4 trillion with 5.1% real growth and non-oil GDP
            growing at 6.1%. The H1 2025 pulse puts non-oil GDP share at 77.5%,
            up from 75.5% in the FY 2024 annual snapshot. Manufacturing value
            added stands at 9.4% of GDP (FY 2024, World Bank). The challenge
            ahead is not ambition: it is precision — which sectors, which
            emirates, which interventions, and which KPIs move the needle toward
            the 2031 Operation 300bn targets.
          </p>
        </div>
      </div>

      {/* Hero KPIs */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            National KPI Snapshot
          </h2>
          <span className="text-xs text-gray-400">
            Mixed vintage · 9M 2025 pulse (FCSC) + FY 2024 annual (World Bank / MoE) · Extracted 2026-03-26
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
            Rule-based signals · 9M 2025 pulse + FY 2024 annual · AI summarisation deferred
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
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              {watchlistItem.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-signal-risk bg-signal-risk-bg px-2 py-0.5 rounded font-medium">
                  Evidence gap
                </span>
                <span className="text-[10px] text-gray-400">
                  {watchlistItem.data_period}
                </span>
              </div>
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
                  ~65% · illustrative
                </span>
                <span className="text-[10px] text-gray-400">2031 target</span>
              </div>
            </div>
            <DeferredBadge reason="Progress figure is illustrative. The real manufacturing GDP value requires a structured FCSC/UAE.Stat export — not yet in the data cache." />
          </div>
        </section>
      </div>

      {/* Recommended brief */}
      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Recommended Decision Brief
        </h2>
        <div className="bg-white rounded-xl border border-brand-medium/30 p-5 shadow-sm flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-wide text-brand-medium mb-1.5">
              Suggested brief
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
              Manufacturing sector adjacency: where should UAE concentrate
              industrial policy effort through 2026–2031?
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              The latest pulse (9M 2025) confirms non-oil GDP growth at 6.1% and
              real GDP at 5.1%. FY 2024 data shows manufacturing VA at 9.4% of
              GDP. The open question — requiring Comtrade and complexity data —
              is which adjacencies to target to close the gap with Singapore-tier
              complexity benchmarks before the 2031 Operation 300bn deadline.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] bg-signal-momentum-bg text-signal-momentum px-2 py-0.5 rounded font-medium">
                Momentum signal
              </span>
              <span className="text-[10px] bg-signal-opportunity-bg text-signal-opportunity px-2 py-0.5 rounded font-medium">
                Opportunity signal
              </span>
              <span className="text-[10px] text-gray-400">
                9M 2025 pulse + FY 2024 annual · 5 official evidence sources
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
