"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CANDIDATE_INFO } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function About() {
  const edu = CANDIDATE_INFO.education;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="About Me"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side: Workspace Aesthetic Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/4.5] rounded-[2.5rem] overflow-hidden border-2 border-border-subtle bg-background-secondary shadow-lg">
            <Image
              src="/images/about-workspace.jpg"
              alt="MIM Workspace setup"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Tag */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-terracotta-bg text-accent-terracotta-text border border-accent-terracotta/20 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
            About Me
          </span>

          {/* Heading */}
          <h2 className="section-title-clamp font-heading font-extrabold text-content-primary tracking-tight mb-4">
            {PORTFOLIO_DATA.about.title}
          </h2>

          {/* Bio */}
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-8">
            {PORTFOLIO_DATA.about.summary}
          </p>

          {/* Stats / Info Badges matching mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
            {/* Education */}
            <div className="bg-background-secondary border border-border-subtle rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-accent-terracotta">
                <span className="text-base">🎓</span>
                <span className="text-xs font-bold uppercase tracking-wider text-content-muted">
                  Education
                </span>
              </div>
              <p className="text-sm font-bold text-content-primary">
                {edu.shortDegree}
              </p>
              <p className="text-xs text-content-secondary mt-0.5">
                CGPA: {edu.cgpa}
              </p>
            </div>

            {/* Experience */}
            <div className="bg-background-secondary border border-border-subtle rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-accent-terracotta">
                <span className="text-base">💼</span>
                <span className="text-xs font-bold uppercase tracking-wider text-content-muted">
                  Experience
                </span>
              </div>
              <p className="text-sm font-bold text-content-primary">
                2+ Years
              </p>
              <p className="text-xs text-content-secondary mt-0.5">
                (CRO &amp; Web Intern)
              </p>
            </div>

            {/* Location */}
            <div className="bg-background-secondary border border-border-subtle rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5 text-accent-terracotta">
                <span className="text-base">📍</span>
                <span className="text-xs font-bold uppercase tracking-wider text-content-muted">
                  Location
                </span>
              </div>
              <p className="text-sm font-bold text-content-primary">
                Dhaka
              </p>
              <p className="text-xs text-content-secondary mt-0.5">
                Bangladesh
              </p>
            </div>
          </div>

          {/* Download CV CTA */}
          <a
            href={`mailto:${CANDIDATE_INFO.email}?subject=Requesting%20Resume%20-%20Israt%20Jahan%20Mim`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-heading font-semibold text-sm sm:text-base text-white bg-[#1C1815] hover:bg-black dark:bg-[#FAF7F2] dark:text-[#1C1815] dark:hover:bg-white shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
          >
            <span>Download CV</span>
            <span>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
