"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA, SkillGroup } from "@/data/portfolioData";

export function SkillsBento() {
  const groups = PORTFOLIO_DATA.skillGroups;

  // Accent styling mappings adhering strictly to WCAG AA contrast rules
  const accentStyles: Record<
    SkillGroup["accent"],
    {
      cardBorder: string;
      badgeBg: string;
      badgeText: string;
      chipBg: string;
      chipText: string;
      chipBorder: string;
      dotColor: string;
    }
  > = {
    coral: {
      cardBorder: "hover:border-accent-coral/60",
      badgeBg: "bg-accent-coral-bg",
      badgeText: "text-accent-coral-text",
      chipBg: "bg-accent-coral/10 hover:bg-accent-coral-bg",
      chipText: "text-accent-coral-text",
      chipBorder: "border-accent-coral/30",
      dotColor: "bg-accent-coral",
    },
    violet: {
      cardBorder: "hover:border-accent-violet/60",
      badgeBg: "bg-accent-violet-bg",
      badgeText: "text-accent-violet-text",
      chipBg: "bg-accent-violet/10 hover:bg-accent-violet-bg",
      chipText: "text-accent-violet-text",
      chipBorder: "border-accent-violet/30",
      dotColor: "bg-accent-violet",
    },
    yellow: {
      cardBorder: "hover:border-accent-yellow/60",
      badgeBg: "bg-accent-yellow-bg",
      badgeText: "text-accent-yellow-text",
      chipBg: "bg-accent-yellow/15 hover:bg-accent-yellow-bg",
      chipText: "text-accent-yellow-text",
      chipBorder: "border-accent-yellow/40",
      dotColor: "bg-accent-yellow",
    },
    cyan: {
      cardBorder: "hover:border-sky-500/60",
      badgeBg: "bg-sky-100 dark:bg-sky-950/60",
      badgeText: "text-sky-800 dark:text-sky-300",
      chipBg: "bg-sky-50 dark:bg-sky-900/30 hover:bg-sky-100 dark:hover:bg-sky-900/50",
      chipText: "text-sky-900 dark:text-sky-200",
      chipBorder: "border-sky-300 dark:border-sky-700",
      dotColor: "bg-sky-500",
    },
    fuchsia: {
      cardBorder: "hover:border-fuchsia-500/60",
      badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-950/60",
      badgeText: "text-fuchsia-800 dark:text-fuchsia-300",
      chipBg: "bg-fuchsia-50 dark:bg-fuchsia-900/30 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/50",
      chipText: "text-fuchsia-900 dark:text-fuchsia-200",
      chipBorder: "border-fuchsia-300 dark:border-fuchsia-700",
      dotColor: "bg-fuchsia-500",
    },
    emerald: {
      cardBorder: "hover:border-emerald-500/60",
      badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
      badgeText: "text-emerald-800 dark:text-emerald-300",
      chipBg: "bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50",
      chipText: "text-emerald-900 dark:text-emerald-200",
      chipBorder: "border-emerald-300 dark:border-emerald-700",
      dotColor: "bg-emerald-500",
    },
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="Skills & Expertise"
    >
      <SectionHeading
        badge="Skills & Capabilities"
        title="Bento Grid: Disciplined execution across marketing & tech"
        subtitle="Each card represents a core capability area, organized by primary focus with SEO holding center stage."
      />

      {/* Bento Grid: 1 column on mobile (375px), 6-column grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
        {groups.map((group, index) => {
          const style = accentStyles[group.accent];
          // Bento layout spans: SEO is largest (col-span-4 on md), others distribute cleanly
          const colSpanClass = group.isLarge
            ? "md:col-span-4 lg:col-span-4"
            : group.id === "digital-marketing"
            ? "md:col-span-2 lg:col-span-2"
            : group.id === "social-media"
            ? "md:col-span-3 lg:col-span-3"
            : group.id === "design-video"
            ? "md:col-span-3 lg:col-span-3"
            : group.id === "technical"
            ? "md:col-span-3 lg:col-span-3"
            : "md:col-span-3 lg:col-span-3";

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`${colSpanClass} bg-background-secondary border border-border-subtle ${style.cardBorder} rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${style.badgeBg} ${style.badgeText} border ${style.chipBorder}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dotColor}`} />
                    {group.isLarge ? "Primary Discipline" : "Specialization"}
                  </span>
                  {group.isLarge && (
                    <span className="text-xs font-bold text-accent-coral px-2.5 py-0.5 rounded-md bg-accent-coral/10">
                      High Impact
                    </span>
                  )}
                </div>

                <h3
                  className={`font-heading font-bold text-content-primary mb-2 ${
                    group.isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {group.title}
                </h3>

                {group.description && (
                  <p className="text-sm text-content-secondary mb-6 leading-relaxed">
                    {group.description}
                  </p>
                )}
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium border ${style.chipBorder} ${style.chipBg} ${style.chipText} transition-colors cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

