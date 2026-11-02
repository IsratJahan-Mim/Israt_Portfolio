interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-violet-bg text-accent-violet-text border border-accent-violet/20 mb-3 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
        {badge}
      </span>
      <h2 className="section-title-clamp font-heading font-bold text-content-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-content-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

