"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Certifications() {
  const certs = PORTFOLIO_DATA.certifications;

  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="Professional Certifications"
    >
      <SectionHeading
        badge="Credentials & Training"
        title="Continuous learning across design, marketing & AI"
        subtitle="Verified specialized courses reinforcing practical tools, digital campaign setup, and modern UI methodologies."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-background-secondary border border-border-subtle hover:border-accent-violet/50 rounded-2xl p-6 shadow-2xs transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-accent-violet-bg text-accent-violet-text flex items-center justify-center font-bold text-xs">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-background-tertiary text-content-secondary border border-border-subtle">
                  Verified
                </span>
              </div>

              <h3 className="font-heading font-bold text-base sm:text-lg text-content-primary mb-2 group-hover:text-accent-violet transition-colors">
                {cert.title}
              </h3>
            </div>

            <div className="pt-4 mt-2 border-t border-border-subtle/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-yellow" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-yellow-text">
                {cert.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

