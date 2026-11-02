"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SAFENEST_DATA } from "@/data/safenestData";

export function FeaturedProject() {
  return (
    <section
      id="featured"
      className="py-20 sm:py-28 px-4 max-w-6xl mx-auto"
      aria-label="Featured Work & Projects"
    >
      <SectionHeading
        badge="Design & Case Studies"
        title="Featured Work: Human-centered interfaces & strategy"
        subtitle="Exploring mobile accommodation workflows and setting the foundation for upcoming client case studies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main SafeNest Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bg-gradient-to-br from-background-secondary via-background-secondary to-accent-violet-bg/30 border border-border-prominent hover:border-accent-violet/60 rounded-3xl p-6 sm:p-10 shadow-md flex flex-col justify-between group transition-all"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-violet-bg text-accent-violet-text border border-accent-violet/20">
                {SAFENEST_DATA.tool} UI Concept
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-coral-bg text-accent-coral-text border border-accent-coral/20">
                {SAFENEST_DATA.role}
              </span>
              <span className="text-xs text-content-muted">Mobile App UI</span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary mb-3 group-hover:text-accent-violet transition-colors">
              {SAFENEST_DATA.title}
            </h3>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-6">
              {SAFENEST_DATA.overview}
            </p>

            {/* Visual Preview Thumbnails */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {SAFENEST_DATA.screens.slice(0, 3).map((screen, idx) => (
                <div
                  key={screen.id}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border-subtle shadow-xs group-hover:scale-[1.02] transition-transform duration-300"
                >
                  <Image
                    src={screen.image}
                    alt={`${screen.title} UI preview screen ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 30vw, 20vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] sm:text-xs font-medium text-white line-clamp-1">
                      {screen.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-content-muted">
              Interactive 6-screen carousel &amp; design breakdown
            </span>

            <Link
              href="/projects/safenest"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm text-white bg-accent-violet hover:bg-violet-700 shadow-md shadow-accent-violet/20 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet"
            >
              <span>Explore Case Study</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* "More work coming soon" Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 bg-background-secondary border-2 border-dashed border-border-prominent rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-accent-yellow-bg text-accent-yellow-text flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-accent-yellow"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-yellow-bg text-accent-yellow-text border border-accent-yellow/30 inline-block mb-3">
              In Development
            </span>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-content-primary mb-3">
              More Work Coming Soon
            </h3>

            <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-4">
              Currently preparing in-depth case studies covering:
            </p>

            <ul className="space-y-2.5 text-sm text-content-secondary">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow" />
                <span>On-Page SEO Audits &amp; Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
                <span>Social Media Content Calendars &amp; Graphics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                <span>Organic Search Keyword Mapping</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-border-subtle mt-6">
            <p className="text-xs text-content-muted italic">
              Strictly verified artifacts — no placeholder or simulated metrics added.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

