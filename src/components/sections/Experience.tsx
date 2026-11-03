"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Experience() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Professional Experience"
    >
      {/* Header with 2+ Years Badge matching mockup */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center">
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
              <rect width="20" height="14" x="2" y="7" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-terracotta">
              Career Journey
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary">
              Professional Experience
            </h2>
          </div>
        </div>

        <span className="self-start sm:self-auto px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-accent-terracotta text-white shadow-xs">
          2+ Years of Experience
        </span>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="bg-background-secondary border border-border-subtle hover:border-accent-terracotta/40 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-content-primary group-hover:text-accent-terracotta transition-colors">
                  {exp.role}{" "}
                  <span className="font-normal text-content-muted">|</span>{" "}
                  <span className="text-content-secondary font-semibold">
                    {exp.company}
                  </span>
                </h3>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-background-tertiary text-content-secondary border border-border-subtle">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2.5 text-sm text-content-secondary">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta mt-2 shrink-0 select-none" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
