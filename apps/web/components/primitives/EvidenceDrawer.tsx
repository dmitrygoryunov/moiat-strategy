"use client";

import { useState } from "react";
import type { EvidenceMeta, EvidenceType } from "@/lib/seed-data";
import { APP_DATA_CONTEXT } from "@/lib/seed-data";

const evidenceTypeConfig: Record<
  EvidenceType,
  { label: string; color: string; bg: string; desc: string }
> = {
  official: {
    label: "Official",
    color: "text-evidence-official",
    bg: "bg-evidence-official-bg",
    desc: "Sourced directly from a named authoritative public institution.",
  },
  modeled: {
    label: "Modeled",
    color: "text-evidence-modeled",
    bg: "bg-evidence-modeled-bg",
    desc: "Derived or computed from official inputs using a defined methodology.",
  },
  illustrative: {
    label: "Illustrative",
    color: "text-evidence-illustrative",
    bg: "bg-evidence-illustrative-bg",
    desc: "Workflow or demo data. Not real ministry data.",
  },
};

interface EvidenceDrawerProps {
  evidence: EvidenceMeta;
  triggerLabel?: string;
}

export function EvidenceDrawer({
  evidence,
  triggerLabel = "Evidence",
}: EvidenceDrawerProps) {
  const [open, setOpen] = useState(false);
  const config = evidenceTypeConfig[evidence.evidence_type];

  return (
    <>
      {/* Trigger badge */}
      <button
        onClick={() => setOpen(true)}
        className={`evidence-badge ${config.bg} ${config.color} hover:opacity-80`}
        aria-label={`View evidence for ${triggerLabel}`}
      >
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {config.label}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed right-0 top-0 h-full w-[420px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-200 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Evidence details"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Evidence & Provenance
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              Source, data period, extraction date, and methodology
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close evidence drawer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* Evidence type */}
          <div>
            <span className="section-label block mb-2">Evidence Type</span>
            <div className={`flex items-start gap-3 px-3 py-2.5 rounded-lg ${config.bg}`}>
              <span className={`text-sm font-semibold ${config.color}`}>
                {config.label}
              </span>
              <span className={`text-xs leading-relaxed ${config.color} opacity-80`}>
                {config.desc}
              </span>
            </div>
            {evidence.evidence_type === "illustrative" && (
              <p className="text-xs text-evidence-illustrative mt-2 leading-relaxed flex items-start gap-1.5">
                <svg
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
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
                Illustrative workflow data — to be replaced by live ministry
                data in production
              </p>
            )}
          </div>

          {/* Date model — three tiers, always shown together */}
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
              <span className="section-label">Date Model</span>
            </div>
            <div className="divide-y divide-gray-100">
              <DateModelRow
                tier="Context date"
                value={APP_DATA_CONTEXT.as_of}
                note="When this prototype is being reviewed"
                highlight
              />
              <DateModelRow
                tier="Data period"
                value={evidence.display_period}
                note="The period this value represents"
              />
              <DateModelRow
                tier="Extracted"
                value={evidence.extraction_date}
                note="When the raw data file was downloaded"
              />
            </div>
          </div>

          <EvidenceRow label="Source" value={evidence.source_name} />
          <EvidenceRow label="Publisher" value={evidence.publisher} />
          <EvidenceRow label="Geography" value={evidence.geography} />
          <EvidenceRow label="Unit" value={evidence.unit} />
          <EvidenceRow
            label="Confidence"
            value={
              evidence.confidence.charAt(0).toUpperCase() +
              evidence.confidence.slice(1)
            }
          />

          {evidence.formula && (
            <div>
              <span className="section-label block mb-1.5">Formula / Indicator</span>
              <code className="text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 block leading-relaxed font-mono">
                {evidence.formula}
              </code>
            </div>
          )}

          {evidence.caveats && (
            <div>
              <span className="section-label block mb-1.5">Caveats</span>
              <p className="text-xs text-gray-600 leading-relaxed">
                {evidence.caveats}
              </p>
            </div>
          )}

          {evidence.methodology_notes && (
            <div>
              <span className="section-label block mb-1.5">
                Methodology Notes
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                {evidence.methodology_notes}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-[10px] text-gray-400 leading-snug">
            Source ID: <code className="font-mono">{evidence.source_id}</code>
            <br />
            Evidence metadata is attached to every KPI and insight for audit and reproducibility.
          </p>
        </div>
      </div>
    </>
  );
}

function DateModelRow({
  tier,
  value,
  note,
  highlight = false,
}: {
  tier: string;
  value: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div className={`px-3 py-2.5 flex items-start justify-between gap-3 ${highlight ? "bg-brand-light" : ""}`}>
      <div>
        <div className={`text-[10px] font-semibold uppercase tracking-wide ${highlight ? "text-brand" : "text-gray-400"}`}>
          {tier}
        </div>
        <div className={`text-xs mt-0.5 ${highlight ? "text-gray-400" : "text-gray-400"}`}>
          {note}
        </div>
      </div>
      <span className={`text-sm font-semibold flex-shrink-0 ${highlight ? "text-brand" : "text-gray-800"}`}>
        {value}
      </span>
    </div>
  );
}

function EvidenceRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <span className="section-label block mb-0.5">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}
