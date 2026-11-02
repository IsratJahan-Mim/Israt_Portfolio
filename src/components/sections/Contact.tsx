"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CANDIDATE_INFO } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="Contact Information"
    >
      <SectionHeading
        badge="Get in Touch"
        title="Let's build engaging digital campaigns together"
        subtitle="Open for SEO, digital marketing, and content roles. Direct communication via email and LinkedIn."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-background-secondary via-background-secondary to-accent-violet-bg/30 border border-border-prominent rounded-3xl p-8 sm:p-14 shadow-lg text-center relative overflow-hidden"
      >
        <div
          className="absolute -top-24 -left-24 w-60 h-60 bg-accent-coral/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-60 h-60 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          <span className="w-14 h-14 rounded-2xl bg-accent-coral-bg text-accent-coral-text flex items-center justify-center mb-6 shadow-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-accent-coral"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>

          <h3 className="font-heading font-bold text-2xl sm:text-4xl text-content-primary mb-3">
            Ready to connect?
          </h3>
          <p className="text-base sm:text-lg text-content-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you are looking for an SEO auditor, content coordinator, or digital marketing specialist, feel free to reach out directly.
          </p>

          {/* Contact Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Email CTA */}
            <a
              href={`mailto:${CANDIDATE_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-base text-white bg-accent-coral hover:bg-rose-700 shadow-lg shadow-accent-coral/25 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-3 focus:ring-accent-coral/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{CANDIDATE_INFO.email}</span>
            </a>

            {/* LinkedIn CTA */}
            <a
              href={CANDIDATE_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-base text-content-primary bg-background-primary border border-border-prominent hover:border-accent-violet hover:text-accent-violet shadow-sm transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-3 focus:ring-accent-violet/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-accent-violet"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Location & References Strictly as Required */}
          <div className="mt-10 pt-6 border-t border-border-subtle/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-content-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Location: <strong>{CANDIDATE_INFO.location}</strong>
            </span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>
              Professional References: <strong className="text-content-secondary font-semibold">{PORTFOLIO_DATA.references}</strong>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

