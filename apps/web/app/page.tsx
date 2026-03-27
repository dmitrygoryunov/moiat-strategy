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
        subtitle="National industrial strategy — evidence-led overview"
      >
        <Link
          href="/brief-builder"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, #92722A 0%, #CBA344 50%, #92722A 100%)", backgroundSize: "200% 200%"  }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
            />
          </svg>
          Build Decision Brief
        </Link>
      </PageHeader>

      {/* Data context bar — pulse-plus-annual model at a glance */}
      <div className="flex flex-wrap items-center gap-5 bg-white border border-gray-200 rounded-lg px-5 py-3.5 mb-8 text-sm shadow-sm">
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

      {/* Narrative band — AE Gold primary-50 treatment */}
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl px-8 py-6 mb-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5E24] mb-3 font-heading">
            Chapter 1 · The Nation Starts From Strength · Latest official pulse: 9M 2025
          </div>
          <h2 className="text-xl font-bold leading-snug mb-3 font-heading text-[#5D3B26]">
            As of March 2026, the latest official pulse shows real GDP growing at
            5.1% with non-oil GDP accelerating to 6.1% through September 2025
          </h2>
          <p className="text-base text-[#7C5E24] leading-relaxed">
            The freshest available official data — FCSC 9M 2025 — shows national real
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
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-lg font-bold text-aeblack-900 font-heading">
            National KPI Snapshot
          </h2>
          <span className="text-xs text-aeblack-400">
            9M 2025 pulse (FCSC) + FY 2024 annual (World Bank) · Extracted 2026-03-26
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {heroKpis.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>
      </section>

      {/* Signal Overview */}
      <section className="mb-10">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-aeblack-800 font-heading">
              Signal Overview
            </h2>
            <span className="text-xs text-aeblack-400">
              Rule-based signals · 9M 2025 pulse + FY 2024 annual · AI summarisation deferred
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {dashboardInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: watchlist + recommended brief */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Watchlist / anomaly */}
        <section>
          <h2 className="text-base font-semibold text-gray-700 mb-4 font-heading">
            Watchlist
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-signal-risk mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug font-heading">
                  {watchlistItem.title}
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {watchlistItem.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-signal-risk bg-signal-risk-bg px-2.5 py-0.5 rounded font-medium">
                  Evidence gap
                </span>
                <span className="text-xs text-gray-400">
                  {watchlistItem.data_period}
                </span>
              </div>
              <Link
                href="/brief-builder"
                className="text-xs text-[#92722A] hover:text-[#B68A35] font-medium transition-colors"
              >
                Investigate →
              </Link>
            </div>
          </div>
        </section>

        {/* Operation 300bn tracker */}
        <section>
          <h2 className="text-base font-semibold text-gray-700 mb-4 font-heading">
            Operation 300bn Progress
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
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
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">2021 baseline</span>
                <span className="text-xs text-gray-400">
                  ~65% · illustrative
                </span>
                <span className="text-xs text-gray-400">2031 target</span>
              </div>
            </div>
            <DeferredBadge reason="Progress figure is illustrative. The real manufacturing GDP value requires a structured FCSC/national statistics export — not yet in the data cache." />
          </div>
        </section>
      </div>

      {/* Recommended brief — prominent CTA */}
      <section>
        <div className="rounded-2xl overflow-hidden border border-[#E6D7A2] shadow-md" style={{ background: "linear-gradient(135deg, #F9F7ED 0%, #F2ECCF 100%)" }}>
          <div className="p-8 flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-[#92722A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#92722A] font-heading">
                  Recommended Decision Brief
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#5D3B26] mb-3 font-heading leading-snug">
                Manufacturing sector adjacency: where should the nation concentrate
                industrial policy effort through 2026–2031?
              </h3>
              <p className="text-sm text-[#7C5E24] leading-relaxed mb-4">
                The latest pulse (9M 2025) confirms non-oil GDP growth at 6.1% and
                real GDP at 5.1%. FY 2024 data shows manufacturing VA at 9.4% of
                GDP. The open question — requiring Comtrade and complexity data —
                is which adjacencies to target to close the gap with Singapore-tier
                complexity benchmarks before the 2031 Operation 300bn deadline.
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs bg-signal-momentum-bg text-signal-momentum px-2.5 py-0.5 rounded-full font-medium">
                  Momentum signal
                </span>
                <span className="text-xs bg-signal-opportunity-bg text-signal-opportunity px-2.5 py-0.5 rounded-full font-medium">
                  Opportunity signal
                </span>
                <span className="text-xs text-[#92722A]">
                  5 official evidence sources
                </span>
              </div>
            </div>
            <Link
              href="/brief-builder"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #92722A 0%, #CBA344 50%, #92722A 100%)", backgroundSize: "200% 200%" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
              Open Brief Builder
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
