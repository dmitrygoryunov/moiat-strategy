import type { InsightCard as InsightCardType, SignalType } from "@/lib/seed-data";

const signalConfig: Record<
  SignalType,
  { label: string; color: string; bg: string; dot: string; borderLeft: string }
> = {
  momentum: {
    label: "Momentum",
    color: "text-signal-momentum",
    bg: "bg-signal-momentum-bg",
    dot: "bg-signal-momentum",
    borderLeft: "border-l-signal-momentum",
  },
  opportunity: {
    label: "Opportunity",
    color: "text-signal-opportunity",
    bg: "bg-signal-opportunity-bg",
    dot: "bg-signal-opportunity",
    borderLeft: "border-l-signal-opportunity",
  },
  risk: {
    label: "Risk",
    color: "text-signal-risk",
    bg: "bg-signal-risk-bg",
    dot: "bg-signal-risk",
    borderLeft: "border-l-signal-risk",
  },
  action: {
    label: "Action",
    color: "text-signal-action",
    bg: "bg-signal-action-bg",
    dot: "bg-signal-action",
    borderLeft: "border-l-signal-action",
  },
};

interface InsightCardProps {
  insight: InsightCardType;
}

export function InsightCard({ insight }: InsightCardProps) {
  const config = signalConfig[insight.signal_type];

  return (
    <div className={`bg-gray-50 rounded-xl border border-gray-100 p-5 border-l-4 ${config.borderLeft}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${config.bg} ${config.color}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
          {config.label}
        </span>
        <span className="text-xs text-aeblack-400 flex-shrink-0 font-medium">
          {insight.data_period}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-aeblack-900 leading-snug mb-2.5 font-heading">
        {insight.title}
      </h3>

      <p className="text-sm text-aeblack-500 leading-relaxed mb-4">
        {insight.summary}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <span className="text-xs text-aeblack-400">
          {insight.evidence_ids.length} evidence source
          {insight.evidence_ids.length !== 1 ? "s" : ""}
        </span>
        {insight.deferred && (
          <span className="text-xs text-signal-risk bg-signal-risk-bg px-2.5 py-0.5 rounded font-medium">
            Partial — data pending
          </span>
        )}
      </div>
    </div>
  );
}
