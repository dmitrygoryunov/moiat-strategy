interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: "default" | "deferred" | "live";
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  badge,
  badgeVariant = "default",
  children,
}: PageHeaderProps) {
  const badgeClasses = {
    default: "bg-brand-light text-brand font-medium",
    deferred: "bg-gray-100 text-gray-500 font-medium",
    live: "bg-signal-momentum-bg text-signal-momentum font-medium",
  };

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          {badge && (
            <span
              className={`inline-block text-xs px-2.5 py-0.5 rounded-full mb-2 ${badgeClasses[badgeVariant]}`}
            >
              {badge}
            </span>
          )}
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        {children && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
