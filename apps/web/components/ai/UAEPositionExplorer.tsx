"use client";

import { useEffect, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
type ComparatorSet = "GCC Peers" | "Advanced Manufacturing" | "Trade & Investment Hubs";
type PolicyLens = "Growth" | "Complexity" | "Resilience";

interface ComparatorRow {
  country: string;
  gdp_growth: number;
  gdp_growth_source: string;
  manuf_pct_gdp: number;
  manuf_note: string;
  gii_rank: number;
  imd_rank: number;
  is_approx?: boolean;
}

// ─── Comparator data ─────────────────────────────────────────────────────────
// GDP growth: IMF WEO April 2025 estimates. National: FCSC 9M 2025 (official pulse).
// Manufacturing %: World Bank latest available (2022–2024).
// WIPO GII: 2024 edition (published Sep 2024).
// IMD WDC: 2024 edition (published May 2024).

const NATIONAL_ANCHOR: ComparatorRow = {
  country: "National",
  gdp_growth: 5.1, gdp_growth_source: "9M 2025 · FCSC (official pulse)",
  manuf_pct_gdp: 9.4, manuf_note: "FY 2024 · World Bank",
  gii_rank: 36, imd_rank: 14,
};

const COMPARATOR_ROWS: Record<ComparatorSet, ComparatorRow[]> = {
  "GCC Peers": [
    { country: "Saudi Arabia", gdp_growth: 2.6, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 11.8, manuf_note: "2022 · World Bank", gii_rank: 61, imd_rank: 28 },
    { country: "Qatar", gdp_growth: 2.5, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 9.0, manuf_note: "2022 · World Bank approx.", gii_rank: 44, imd_rank: 21, is_approx: true },
    { country: "Bahrain", gdp_growth: 3.1, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 14.0, manuf_note: "2023 · World Bank approx.", gii_rank: 51, imd_rank: 20, is_approx: true },
  ],
  "Advanced Manufacturing": [
    { country: "South Korea", gdp_growth: 2.0, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 26.1, manuf_note: "2023 · World Bank", gii_rank: 10, imd_rank: 6 },
    { country: "Germany", gdp_growth: 0.8, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 18.9, manuf_note: "2023 · World Bank", gii_rank: 11, imd_rank: 12 },
    { country: "Singapore", gdp_growth: 2.3, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 21.2, manuf_note: "2023 · World Bank", gii_rank: 5, imd_rank: 1 },
  ],
  "Trade & Investment Hubs": [
    { country: "Singapore", gdp_growth: 2.3, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 21.2, manuf_note: "2023 · World Bank", gii_rank: 5, imd_rank: 1 },
    { country: "Netherlands", gdp_growth: 1.5, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 12.3, manuf_note: "2023 · World Bank", gii_rank: 6, imd_rank: 5 },
    { country: "Switzerland", gdp_growth: 1.5, gdp_growth_source: "IMF WEO Apr '25 est.", manuf_pct_gdp: 16.5, manuf_note: "2023 · World Bank approx.", gii_rank: 1, imd_rank: 3, is_approx: true },
  ],
};

const LENS_FRAMING: Record<PolicyLens, { headline: string; highlighted: string }> = {
  Growth: { headline: "National growth momentum leads every comparator set — the question is whether it is building complexity.", highlighted: "manuf_pct_gdp" },
  Complexity: { headline: "Manufacturing complexity is the defining gap — the nation at 9.4% faces a 12–17 point gap against advanced peers.", highlighted: "gii_rank" },
  Resilience: { headline: "Non-oil diversification (77.5%) and digital readiness (14th) are the nation's structural resilience foundations.", highlighted: "imd_rank" },
};

function SegmentedControl<T extends string>({ label, options, value, onChange }: { label: string; options: T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">{label}</span>
      <div className="flex gap-1">
        {options.map((opt) => (
          <button key={opt} onClick={() => onChange(opt)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${value === opt ? "bg-[#F2ECCF] text-[#5D3B26]" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"}`}>{opt}</button>
        ))}
      </div>
    </div>
  );
}

export function PositionExplorer() {
  const [comparatorSet, setComparatorSet] = useState<ComparatorSet>("GCC Peers");
  const [policyLens, setPolicyLens] = useState<PolicyLens>("Growth");
  const [aiState, setAiState] = useState<"loading" | "done" | "error">("loading");
  const [observations, setObservations] = useState<string[]>([]);

  useEffect(() => {
    setAiState("loading");
    const url = `/api/ai/position-summary?set=${encodeURIComponent(comparatorSet)}&lens=${encodeURIComponent(policyLens)}`;
    fetch(url)
      .then((r) => r.json())
      .then((data: { text?: string; error?: string }) => {
        if (data.error || !data.text) { setAiState("error"); return; }
        const lines = data.text.split("\n").map((l) => l.trim()).filter((l) => /^\d+\./.test(l)).map((l) => l.replace(/^\d+\.\s*/, ""));
        setObservations(lines.length > 0 ? lines : [data.text]);
        setAiState("done");
      })
      .catch(() => setAiState("error"));
  }, [comparatorSet, policyLens]);

  const peers = COMPARATOR_ROWS[comparatorSet];
  const lensFrame = LENS_FRAMING[policyLens];
  const lensHighlight = lensFrame.highlighted as keyof ComparatorRow;
  const metricLabel = policyLens === "Growth" ? "Manuf. % GDP" : policyLens === "Complexity" ? "WIPO GII rank" : "IMD WDC rank";
  const metricFn = (row: ComparatorRow): string =>
    policyLens === "Growth" ? `${row.manuf_pct_gdp.toFixed(1)}%` : policyLens === "Complexity" ? `#${row.gii_rank}` : `#${row.imd_rank}`;

  return (
    <div className="space-y-6 mb-10">
      {/* Controls */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <div className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider font-heading">Exploration Controls</div>
        <div className="flex flex-col gap-3">
          <SegmentedControl label="Comparator Set" options={["GCC Peers", "Advanced Manufacturing", "Trade & Investment Hubs"] as ComparatorSet[]} value={comparatorSet} onChange={setComparatorSet} />
          <SegmentedControl label="Policy Lens" options={["Growth", "Complexity", "Resilience"] as PolicyLens[]} value={policyLens} onChange={setPolicyLens} />
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-[#7C5E24] leading-relaxed">
            <span className="font-semibold text-aeblack-900">{policyLens} lens: </span>
            {lensFrame.headline}
          </p>
        </div>
      </div>

      {/* Comparator context */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-semibold text-gray-700 font-heading">{comparatorSet} — Comparator Context</h2>
            <p className="text-xs text-gray-400 mt-0.5">GDP growth: IMF WEO Apr 2025 est. · Manufacturing: World Bank latest annual · WIPO GII & IMD WDC: 2024 editions</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {/* National anchor */}
          <div className="bg-slate-100 rounded-2xl border-2 border-[#92722A]/20 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#92722A] mb-1.5">National · Anchor</div>
            <div className="text-xs font-semibold text-aeblack-900 mb-2">National</div>
            <div className="space-y-1.5">
              <div>
                <div className="text-[11px] text-aeblack-400 uppercase tracking-wide">GDP growth</div>
                <div className="text-sm font-bold text-aeblack-900">{NATIONAL_ANCHOR.gdp_growth}%<span className="text-[11px] font-normal text-signal-momentum ml-1">FCSC pulse</span></div>
              </div>
              <div>
                <div className="text-[11px] text-aeblack-400 uppercase tracking-wide">{metricLabel}</div>
                <div className={`text-sm font-bold ${policyLens === "Growth" ? "text-signal-risk" : "text-aeblack-900"}`}>
                  {metricFn(NATIONAL_ANCHOR)}
                  {lensHighlight === "manuf_pct_gdp" && <span className="text-[11px] font-normal text-aeblack-400 ml-1">vs 26% target peers</span>}
                </div>
              </div>
            </div>
          </div>

          {peers.map((peer) => (
            <div key={peer.country} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-aeblack-400 mb-1.5">Peer</div>
              <div className="text-xs font-semibold text-aeblack-800 mb-2">{peer.country}</div>
              <div className="space-y-1.5">
                <div>
                  <div className="text-[11px] text-aeblack-400 uppercase tracking-wide">GDP growth</div>
                  <div className="text-sm font-bold text-aeblack-700">{peer.gdp_growth}%<span className="text-[11px] font-normal text-aeblack-400 ml-1">est.</span></div>
                </div>
                <div>
                  <div className="text-[11px] text-aeblack-400 uppercase tracking-wide">{metricLabel}</div>
                  <div className={`text-sm font-bold ${policyLens === "Complexity" && peer.gii_rank < NATIONAL_ANCHOR.gii_rank ? "text-signal-risk" : policyLens === "Resilience" && peer.imd_rank < NATIONAL_ANCHOR.imd_rank ? "text-signal-risk" : "text-aeblack-700"}`}>
                    {metricFn(peer)}{peer.is_approx && <span className="text-[11px] font-normal text-aeblack-400 ml-1">approx.</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-aeblack-400 mt-2">GDP growth estimates are IMF WEO April 2025 projections — not actuals. Manufacturing % is World Bank latest available annual (2022–2024). WIPO GII 2024 and IMD WDC 2024 are published rankings reflecting the stated year.</p>
      </section>

      {/* AI Leadership Readout */}
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-[#92722A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#92722A] font-heading">Leadership Readout · AI Synthesis</span>
        </div>
        <div className="text-sm font-semibold text-aeblack-900 mb-3">What leadership should notice · {comparatorSet} · {policyLens} lens</div>

        {aiState === "loading" && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#92722A] animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm text-[#7C5E24]">Generating readout for {comparatorSet} · {policyLens}…</span>
          </div>
        )}

        {aiState === "error" && <p className="text-sm text-[#7C5E24] italic">Leadership readout unavailable — check server connection.</p>}

        {aiState === "done" && (
          <ol className="space-y-2.5">
            {observations.map((obs, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#92722A] font-bold text-xs mt-0.5 flex-shrink-0">{i + 1}.</span>
                <span className="text-sm text-[#5D3B26] leading-snug">{obs}</span>
              </li>
            ))}
          </ol>
        )}

        <div className="mt-4 pt-3 border-t border-[#E6D7A2] text-xs text-[#7C5E24]">
          AI synthesis · {comparatorSet} comparator set · {policyLens} lens · FCSC 9M/H1 2025 + World Bank + IMF WEO + WIPO GII + IMD WDC · Approved evidence only
        </div>
      </div>
    </div>
  );
}
