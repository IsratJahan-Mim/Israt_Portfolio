"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Languages() {
  const languages = PORTFOLIO_DATA.languages;

  const flagIcons = {
    English: "EN",
    Bangla: "BN",
    Hindi: "HI",
  };

  return (
    <section
      id="languages"
      className="py-16 sm:py-24 px-4 max-w-6xl mx-auto"
      aria-label="Languages"
    >
      <SectionHeading
        badge="Multilingual Capabilities"
        title="Languages: Fluent communication across diverse markets"
        subtitle="Enabling clear stakeholder alignment, multi-regional audience coordination, and localized content delivery."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {languages.map((item, index) => (
          <motion.div
            key={item.language}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-background-secondary border border-border-subtle hover:border-accent-coral/40 rounded-3xl p-6 sm:p-8 shadow-xs transition-all flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-coral-bg text-accent-coral-text flex items-center justify-center font-heading font-extrabold text-sm border border-accent-coral/20 shrink-0">
              {flagIcons[item.language as keyof typeof flagIcons] || item.language.slice(0, 2)}
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-content-primary">
                {item.language}
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary mt-1">
                {item.level}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

