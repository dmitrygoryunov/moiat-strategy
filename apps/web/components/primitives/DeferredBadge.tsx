interface DeferredBadgeProps {
  reason: string;
  className?: string;
}

export function DeferredBadge({ reason, className = "" }: DeferredBadgeProps) {
  return (
    <div
      className={`rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-3 flex items-start gap-3 ${className}`}
    >
      <svg
        className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <div className="text-xs font-medium text-gray-500">
          Content deferred
        </div>
        <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
          {reason}
        </div>
      </div>
    </div>
  );
}
