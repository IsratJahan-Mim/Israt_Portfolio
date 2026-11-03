"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function DesignProcess() {
  const steps = PORTFOLIO_DATA.designProcess;

  return (
    <section
      id="process"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="My Design Process"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <SectionHeading
          badge="How I Work"
          title="My Design Process"
          subtitle="A simple and effective process to turn ideas into impactful results."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-background-secondary border border-border-subtle hover:border-accent-terracotta/40 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
          >
            {/* Step Number Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon === "search" && (
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
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                  )}
                  {item.icon === "target" && (
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
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  )}
                  {item.icon === "layers" && (
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
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                    </svg>
                  )}
                  {item.icon === "send" && (
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
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  )}
                </div>

                <span className="font-heading font-extrabold text-sm text-content-muted/80 bg-background-tertiary px-3 py-1 rounded-full">
                  Step {item.step}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-content-primary mb-2 group-hover:text-accent-terracotta transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-content-secondary leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Desktop Connector Arrow */}
            {index < steps.length - 1 && (
              <div
                className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-background-secondary border border-border-subtle items-center justify-center text-accent-terracotta text-xs font-bold shadow-xs"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

