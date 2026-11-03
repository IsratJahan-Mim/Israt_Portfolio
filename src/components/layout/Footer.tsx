import Link from "next/link";
import { CANDIDATE_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-secondary py-12 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <Link
            href="/"
            className="font-heading font-extrabold text-2xl text-content-primary tracking-tight inline-block"
          >
            MIM<span className="text-accent-terracotta">.</span>
          </Link>
          <p className="text-xs sm:text-sm text-content-secondary mt-1 max-w-md">
            {CANDIDATE_INFO.headline}
          </p>
          <p className="text-xs text-content-muted mt-0.5">
            Based in {CANDIDATE_INFO.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium">
          <a
            href={`mailto:${CANDIDATE_INFO.email}`}
            className="text-content-secondary hover:text-accent-terracotta transition-colors"
          >
            Email
          </a>
          <span className="text-content-muted" aria-hidden="true">•</span>
          <a
            href={CANDIDATE_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-content-secondary hover:text-accent-terracotta transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-content-muted" aria-hidden="true">•</span>
          <a
            href={CANDIDATE_INFO.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-content-secondary hover:text-accent-terracotta transition-colors"
          >
            Behance
          </a>
          <span className="text-content-muted" aria-hidden="true">•</span>
          <a
            href={CANDIDATE_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-content-secondary hover:text-accent-terracotta transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-content-muted text-center sm:text-left">
        <p>© {currentYear} {CANDIDATE_INFO.name}. All rights reserved.</p>
        <p>Crafted with precision &amp; care.</p>
      </div>
    </footer>
  );
}
