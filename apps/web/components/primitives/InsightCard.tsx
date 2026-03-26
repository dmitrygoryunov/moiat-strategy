import type { InsightCard as InsightCardType, SignalType } from "@/lib/seed-data";

const signalConfig: Record<
  SignalType,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  momentum: {
    label: "Momentum",
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
  risk: {
    label: "Risk",
    color: "text-signal-risk",
    bg: "bg-signal-risk-bg",
    border: "border-signal-risk/20",
    dot: "bg-signal-risk",
  },
  action: {
    label: "Action",
    color: "text-signal-action",
    bg: "bg-signal-action-bg",
    border: "border-signal-action/20",
    dot: "bg-signal-action",
  },
};

interface InsightCardProps {
  insight: InsightCardType;
}

export function InsightCard({ insight }: InsightCardProps) {
  const config = signalConfig[insight.signal_type];

  return (
    <div
      className={`insight-card border-l-4 ${
        insight.signal_type === "momentum"
          ? "border-l-signal-momentum"
          : insight.signal_type === "opportunity"
          ? "border-l-signal-opportunity"
          : insight.signal_type === "risk"
          ? "border-l-signal-risk"
          : "border-l-signal-action"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide ${config.bg} ${config.color}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
          {config.label}
        </span>
        <span className="text-[10px] text-gray-400 flex-shrink-0 font-medium">
          {insight.data_period}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">
        {insight.title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed mb-3">
        {insight.summary}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="text-[10px] text-gray-400">
          {insight.evidence_ids.length} evidence source
          {insight.evidence_ids.length !== 1 ? "s" : ""}
        </span>
        {insight.deferred && (
          <span className="text-[10px] text-signal-risk bg-signal-risk-bg px-2 py-0.5 rounded font-medium">
            Partial — data pending
          </span>
        )}
      </div>
    </div>
  );
}
