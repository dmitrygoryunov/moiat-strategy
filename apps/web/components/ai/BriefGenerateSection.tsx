"use client";

import { useState } from "react";

interface EvidenceItem {
  id: string;
  label: string;
  period: string;
  source: string;
  type: "official" | "modeled" | "illustrative";
  deferred?: boolean;
}

interface Option {
  id: string;
  label: string;
  summary: string;
  tradeoff: string;
}

interface BriefInput {
  issue: string;
  framing: string;
  evidence: EvidenceItem[];
  options: Option[];
  risks: string[];
}

function parseAISections(text: string): { heading: string; body: string }[] {
  const sections: { heading: string; body: string }[] = [];
  const lines = text.split("\n");
  let heading = "";
  let bodyLines: string[] = [];

  for (const line of lines) {
    const match = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (match) {
      if (heading) sections.push({ heading, body: bodyLines.join(" ").trim() });
      heading = match[1];
      bodyLines = [];
    } else if (line.trim() && heading) {
      bodyLines.push(line.trim());
    }
  }
  if (heading) sections.push({ heading, body: bodyLines.join(" ").trim() });
  return sections;
}

export function BriefGenerateSection({ brief }: { brief: BriefInput }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [text, setText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleGenerate() {
    setState("loading");
    try {
      const res = await fetch("/api/ai/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          issue: brief.issue,
          framing: brief.framing,
          evidence: brief.evidence,
          options: brief.options,
          risks: brief.risks,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? "Generation failed.");
        setState("error");
      } else {
        setText(data.text);
        setState("done");
      }
    } catch {
      setErrorMsg("Network error — could not reach the generation service.");
      setState("error");
    }
  }

  if (state === "idle") {
    return (
      <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-1">
              Generate Executive Summary
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              AI will synthesise the evidence above into a concise ministerial
              brief. Based on approved repository evidence only — verify before
              use in official communications.
            </p>
          </div>
          <button
            onClick={handleGenerate}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-brand-navy text-white hover:bg-brand transition-colors"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Generate Brief
          </button>
        </div>
      </section>
    );
  }

  if (state === "loading") {
    return (
      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 text-brand-medium">
          <svg
            className="w-4 h-4 animate-spin"
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
          <span className="text-sm font-medium">
            Generating executive summary from approved evidence…
          </span>
        </div>
      </section>
    );
  }

  if (state === "error") {
    return (
      <section className="bg-signal-risk-bg rounded-xl border border-signal-risk/20 p-5">
        <div className="flex items-start gap-3">
          <svg
            className="w-4 h-4 text-signal-risk mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <div className="text-sm font-semibold text-signal-risk mb-1">
              Generation failed
            </div>
            <p className="text-xs text-gray-600">{errorMsg}</p>
            <button
              onClick={() => setState("idle")}
              className="mt-3 text-xs text-brand-medium underline"
            >
              Try again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // done — render the AI output
  const sections = parseAISections(text);
  const confirmedCount = brief.evidence.filter((e) => !e.deferred).length;

  return (
    <section className="bg-white rounded-xl border border-brand-gold/30 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-6 py-4 bg-brand-light border-b border-brand-gold/20">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-brand-medium"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-sm font-semibold text-brand">
            AI Executive Summary
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gray-400">
            Derived from {confirmedCount} approved evidence items
          </span>
          <button
            onClick={() => setState("idle")}
            className="text-[10px] text-brand-medium underline"
          >
            Regenerate
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        {sections.length > 0 ? (
          sections.map((s) => (
            <div key={s.heading}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-medium mb-1.5">
                {s.heading}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <svg
          className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
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
        <span className="text-[10px] text-gray-400">
          AI-assisted synthesis over approved repository evidence. Verify
          against original sources before use in official communications.
        </span>
      </div>
    </section>
  );
}
