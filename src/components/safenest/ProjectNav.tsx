import Link from "next/link";

export function ProjectNav() {
  return (
    <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-subtle">
      <Link
        href="/#featured"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-violet-700 dark:hover:text-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-violet rounded px-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span>Back to Portfolio</span>
      </Link>

      <span className="text-xs uppercase tracking-wider font-bold text-accent-yellow-text px-3 py-1 rounded-full bg-accent-yellow-bg border border-accent-yellow/30">
        Case Study
      </span>
    </div>
  );
}

