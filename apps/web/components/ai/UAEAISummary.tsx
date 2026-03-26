"use client";

import { useEffect, useState } from "react";

export function UAEAISummary() {
  const [state, setState] = useState<"loading" | "done" | "error">("loading");
  const [observations, setObservations] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/ai/position-summary")
      .then((r) => r.json())
      .then((data: { text?: string; error?: string }) => {
        if (data.error || !data.text) {
          setState("error");
          return;
        }
        // Parse numbered lines: "1. ...", "2. ...", "3. ..."
        const lines = data.text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => /^\d+\./.test(l))
          .map((l) => l.replace(/^\d+\.\s*/, ""));
        if (lines.length > 0) {
          setObservations(lines);
        } else {
          // Fallback: treat the whole response as one block
          setObservations([data.text]);
        }
        setState("done");
      })
      .catch(() => setState("error"));
  }, []);

  // Silent fail — don't break the page with an error card
  if (state === "error") return null;

  if (state === "loading") {
    return (
      <section className="mb-8">
        <div className="bg-brand-navy/80 rounded-xl p-5 flex items-center gap-3">
          <svg
            className="w-4 h-4 text-brand-gold animate-spin flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="text-sm text-blue-200 font-medium">
            Generating leadership readout…
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="bg-brand-navy rounded-xl p-5 text-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-4 h-4 text-brand-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Leadership Readout · AI Synthesis
          </span>
        </div>
        <div className="text-sm font-semibold text-white mb-3">
          What leadership should notice · March 2026
        </div>

        {/* Observations */}
        <ol className="space-y-2.5">
          {observations.map((obs, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-brand-gold font-bold text-xs mt-0.5 flex-shrink-0">
                {i + 1}.
              </span>
              <span className="text-sm text-blue-100 leading-snug">{obs}</span>
            </li>
          ))}
        </ol>

        {/* Source attribution */}
        <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-blue-300">
          AI synthesis over FCSC 9M/H1 2025 + World Bank FY 2022–2024 ·
          Approved evidence only · Not a substitute for official analysis
        </div>
      </div>
    </section>
  );
}
