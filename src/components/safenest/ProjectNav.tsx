import Link from "next/link";

export function ProjectNav() {
  return (
    <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-subtle">
      <Link
        href="/#works"
        className="inline-flex items-center gap-2 text-sm font-semibold text-content-secondary hover:text-accent-terracotta transition-colors focus:outline-none focus:ring-2 focus:ring-accent-terracotta rounded px-1"
      >
        <span>← Back to Projects</span>
      </Link>

      <span className="text-xs uppercase tracking-wider font-bold text-accent-terracotta-text px-3 py-1 rounded-full bg-accent-terracotta-bg border border-accent-terracotta/30">
        UI/UX Case Study
      </span>
    </div>
  );
}
