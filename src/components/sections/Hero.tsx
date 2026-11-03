"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { CANDIDATE_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-1/4 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] bg-gradient-to-br from-accent-terracotta/10 via-amber-500/5 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag / Micro-Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-content-muted bg-background-tertiary border border-border-subtle mb-6"
          >
            <span>CREATIVE PORTFOLIO</span>
            <span className="text-accent-terracotta">•</span>
            <span>2026</span>
          </motion.div>

          {/* Headline matching mockup typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title-clamp font-heading font-extrabold text-content-primary tracking-tight leading-[1.08]"
          >
            Hello, I&apos;m {CANDIDATE_INFO.shortName}.<br />
            <span className="text-accent-terracotta">Graphic Designer,</span><br />
            UI/UX Designer &amp;<br />
            Digital Marketer.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-content-secondary max-w-xl leading-relaxed"
          >
            {CANDIDATE_INFO.subheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/#works"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-sm sm:text-base text-white bg-[#1C1815] hover:bg-black dark:bg-[#FAF7F2] dark:text-[#1C1815] dark:hover:bg-white shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
            >
              <span>Explore My Work</span>
              <span>↗</span>
            </Link>

            <a
              href={`mailto:${CANDIDATE_INFO.email}?subject=Requesting%20Resume%20-%20Israt%20Jahan%20Mim`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-sm sm:text-base text-content-primary bg-background-secondary border border-border-prominent hover:border-accent-terracotta hover:text-accent-terracotta shadow-xs transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta/40"
            >
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-content-secondary"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{CANDIDATE_INFO.status}</span>
          </motion.div>
        </div>

        {/* Right Column: Mim's Portrait & Floating Skills Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#F5ECE0] to-[#EBE0D0] dark:from-[#2A231C] dark:to-[#1E1914] border-2 border-border-subtle p-3 shadow-xl">
            {/* Inner photo container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#FAF5EE] dark:bg-[#1C1815]">
              <Image
                src="/images/mim-portrait.jpg"
                alt="Israt Jahan Mim - Graphic Designer, UI/UX Designer & Digital Marketer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top"
              />

              {/* Gradient overlay at bottom of image for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlay Badge (matching mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-background-secondary/95 dark:bg-background-secondary/90 backdrop-blur-md border border-border-subtle rounded-2xl p-3.5 shadow-xl flex flex-col gap-2 min-w-[170px]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-content-primary">
                <span className="w-5 h-5 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-600 flex items-center justify-center text-[11px]">
                  🎨
                </span>
                <span>Graphic Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-content-primary">
                <span className="w-5 h-5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[11px]">
                  📱
                </span>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-content-primary">
                <span className="w-5 h-5 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center text-[11px]">
                  📈
                </span>
                <span>Digital Marketing</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
