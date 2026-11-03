"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function EducationCertifications() {
  const edu = PORTFOLIO_DATA.education;
  const certs = PORTFOLIO_DATA.certifications;

  return (
    <section
      id="education"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Education & Certifications"
    >
      <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border-subtle">
        <div className="w-10 h-10 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center">
          <span className="text-lg">🎓</span>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-terracotta">
            Academic &amp; Training
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary">
            Education &amp; Certifications
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center text-sm">
                🎓
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-content-primary">
                Education
              </h3>
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base sm:text-lg text-content-primary">
                {edu.fullDegree}
              </h4>
              <p className="text-sm font-semibold text-accent-terracotta">
                {edu.institution}
              </p>
              <div className="pt-4 mt-4 border-t border-border-subtle/80 flex items-center justify-between text-xs sm:text-sm text-content-secondary">
                <span>
                  CGPA: <strong className="text-content-primary font-bold">{edu.cgpa}</strong> / 4.00
                </span>
                <span className="px-2.5 py-1 rounded-full bg-background-tertiary font-semibold text-content-muted">
                  Class of {edu.year}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-subtle/60">
            <p className="text-xs text-content-muted">
              Specialized foundation in digital signal processing, algorithm logic, and modern web communications.
            </p>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center text-sm">
                🏅
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-content-primary">
                Certifications
              </h3>
            </div>

            <div className="space-y-3.5">
              {certs.map((cert) => (
                <div key={cert.title} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-accent-terracotta-bg text-accent-terracotta text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-content-primary leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-accent-terracotta font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-subtle/60">
            <p className="text-xs text-content-muted">
              Coursework completed with verified credentials across graphic software, UX methodologies, and digital campaign tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

