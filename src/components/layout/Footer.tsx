import Link from "next/link";
import { CANDIDATE_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-secondary py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-heading font-bold text-lg text-content-primary">
            {CANDIDATE_INFO.name}
          </p>
          <p className="text-sm text-content-secondary mt-1 max-w-md">
            {CANDIDATE_INFO.headline}
          </p>
          <p className="text-xs text-content-muted mt-1">
            Based in {CANDIDATE_INFO.location}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
          <a
            href={`mailto:${CANDIDATE_INFO.email}`}
            className="text-accent-coral hover:underline focus:outline-none focus:ring-2 focus:ring-accent-coral rounded px-1"
          >
            {CANDIDATE_INFO.email}
          </a>
          <span className="hidden sm:inline text-content-muted" aria-hidden="true">
            •
          </span>
          <a
            href={CANDIDATE_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-violet hover:underline focus:outline-none focus:ring-2 focus:ring-accent-violet rounded px-1"
          >
            LinkedIn Profile
          </a>
          <span className="hidden sm:inline text-content-muted" aria-hidden="true">
            •
          </span>
          <Link
            href="/projects/safenest"
            className="text-accent-yellow hover:underline focus:outline-none focus:ring-2 focus:ring-accent-yellow rounded px-1"
          >
            SafeNest Project
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border-subtle/50 text-center text-xs text-content-muted">
        <p>© {currentYear} {CANDIDATE_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

