"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function SkillsAndTools() {
  const skillCategories = PORTFOLIO_DATA.skillsAndTools;

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Skills & Tools"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <SectionHeading
          badge="Skills & Tools"
          title="Skills & Tools"
          subtitle="The tools and skills I use to design, build and grow digital experiences."
        />
      </div>

      <div className="space-y-4">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-background-secondary border border-border-subtle rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Category Title with Icon */}
            <div className="flex items-center gap-3 min-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center font-bold text-sm">
                {cat.category === "Graphic Design" && "🎨"}
                {cat.category === "UI/UX Design" && "📱"}
                {cat.category === "Digital Marketing" && "📈"}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-content-primary">
                {cat.category}
              </h3>
            </div>

            {/* Tool Chips matching mockup pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {cat.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-content-primary bg-background-tertiary border border-border-subtle hover:border-accent-terracotta/40 transition-colors shadow-2xs"
                >
                  {/* Subtle tool icon indicator */}
                  <span className="w-2 h-2 rounded-full bg-accent-terracotta" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

