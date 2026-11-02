"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Experience() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="Professional Experience"
    >
      <SectionHeading
        badge="Career Journey"
        title="Proven track record in customer operations & web engineering"
        subtitle="Practical roles demonstrating accountability, technical troubleshooting, and cross-functional teamwork."
      />

      <div className="relative border-l-2 border-border-prominent ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Marker Node */}
            <span
              className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background-primary border-4 border-accent-violet group-hover:scale-125 transition-transform duration-200"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="bg-background-secondary border border-border-subtle hover:border-accent-violet/40 rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-content-primary">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-accent-violet">
                    {exp.company}{" "}
                    <span className="text-xs font-normal text-content-muted">
                      ({exp.location})
                    </span>
                  </p>
                </div>
                <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-accent-violet-bg text-accent-violet-text border border-accent-violet/20">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-content-secondary">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-accent-coral mt-1 select-none font-bold">
                      →
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

