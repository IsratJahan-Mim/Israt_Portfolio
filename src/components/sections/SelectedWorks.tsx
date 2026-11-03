"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

type CategoryFilter = "All" | "Graphic Design" | "UI/UX Design" | "Digital Marketing";

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const projects = PORTFOLIO_DATA.projects;

  const categories: CategoryFilter[] = [
    "All",
    "Graphic Design",
    "UI/UX Design",
    "Digital Marketing",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="works"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Selected Works & Projects"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          badge="Featured Projects"
          title="Selected Works"
          subtitle="A showcase of digital products, brand identities, and organic search marketing projects."
        />

        {/* Filter Tabs matching mockup */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-background-secondary border border-border-subtle rounded-full w-fit shadow-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#1C1815] text-white dark:bg-[#FAF7F2] dark:text-[#1C1815] shadow-xs"
                    : "text-content-secondary hover:text-content-primary hover:bg-background-tertiary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2x2 Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-background-secondary border border-border-subtle hover:border-accent-terracotta/40 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-background-tertiary border border-border-subtle mb-5">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-terracotta-bg text-accent-terracotta-text border border-accent-terracotta/20">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-content-primary mb-1 group-hover:text-accent-terracotta transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-content-muted mb-2">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-content-secondary line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Action Row with Arrow Button ↗ */}
              <div className="pt-4 mt-4 border-t border-border-subtle/80 flex items-center justify-between">
                <span className="text-xs text-content-muted">
                  {project.id === "safenest" ? "Full interactive case study" : "Client case study"}
                </span>

                <Link
                  href={project.link || "#contact"}
                  className="w-9 h-9 rounded-full bg-background-tertiary border border-border-subtle group-hover:bg-accent-terracotta group-hover:text-white group-hover:border-accent-terracotta flex items-center justify-center text-content-primary text-sm font-bold transition-all shadow-xs"
                  aria-label={`View ${project.title}`}
                >
                  ↗
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA Button: View All Projects */}
      <div className="mt-12 text-center">
        <Link
          href="/projects/safenest"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-content-primary bg-background-secondary border border-border-prominent hover:border-accent-terracotta hover:text-accent-terracotta shadow-xs transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta/40"
        >
          <span>View All Projects</span>
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

