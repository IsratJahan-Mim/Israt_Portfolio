"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CANDIDATE_INFO } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function About() {
  const edu = CANDIDATE_INFO.education;

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="About Israt Jahan Mim"
    >
      <SectionHeading
        badge="About Me"
        title="Engineering foundation meets digital marketing agility"
        subtitle="Bridging technical web development principles with high-impact organic search and audience strategy."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
        >
          <div
            className="absolute -top-16 -right-16 w-40 h-40 bg-accent-violet/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <h3 className="font-heading font-bold text-xl sm:text-2xl text-content-primary mb-4">
            Hello! I&apos;m Israt Jahan Mim
          </h3>

          <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-6">
            {PORTFOLIO_DATA.about.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-coral-bg flex items-center justify-center text-accent-coral-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-accent-coral"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m12 6 4 6h-8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-content-muted">
                  Focus Areas
                </p>
                <p className="text-sm font-semibold text-content-primary">
                  SEO &amp; Digital Strategy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-violet-bg flex items-center justify-center text-accent-violet-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-accent-violet"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-content-muted">
                  Location
                </p>
                <p className="text-sm font-semibold text-content-primary">
                  {CANDIDATE_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Core Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Education Box */}
          <div className="bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-yellow/15 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-yellow-text px-3 py-1 rounded-full bg-accent-yellow-bg border border-accent-yellow/30">
                Graduated {edu.year}
              </span>
              <span className="text-xs font-semibold text-content-muted">
                CGPA: <strong className="text-content-primary font-bold">{edu.cgpa}</strong> / 4.00
              </span>
            </div>

            <h4 className="font-heading font-bold text-lg text-content-primary mb-1">
              {edu.degree}
            </h4>
            <p className="text-sm font-medium text-accent-violet mb-4">
              {edu.institution}
            </p>
            <p className="text-xs text-content-secondary leading-relaxed">
              Rigorous curriculum covering computer networks, communications engineering, algorithm design, and software fundamentals.
            </p>
          </div>

          {/* Value Proposition Sticker Banner */}
          <div className="bg-gradient-to-br from-accent-violet/10 via-background-secondary to-accent-coral/10 border border-accent-violet/20 rounded-3xl p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wider font-bold text-accent-violet mb-2">
              The Strategic Advantage
            </p>
            <p className="text-sm text-content-secondary leading-relaxed">
              Combines structured analytical rigor from an engineering degree with real-world customer relationship empathy and modern digital marketing executions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

