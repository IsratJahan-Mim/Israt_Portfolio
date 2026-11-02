"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { CANDIDATE_INFO } from "@/lib/constants";
import { FloatingShape } from "@/components/ui/FloatingShape";

export function Hero() {
  const words = CANDIDATE_INFO.name.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Animated Gradient Blobs */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute w-[360px] sm:w-[600px] h-[360px] sm:h-[600px] bg-gradient-to-tr from-accent-violet/20 via-accent-coral/15 to-accent-yellow/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse-slow" />
      </div>

      {/* Floating Animated Geometric Shapes (Circle, Squiggle, Star, Blob) */}
      <FloatingShape
        type="circle"
        color="coral"
        size={72}
        className="absolute top-28 left-[8%] sm:left-[14%]"
      />
      <FloatingShape
        type="star"
        color="yellow"
        size={64}
        className="absolute top-36 right-[8%] sm:right-[15%]"
      />
      <FloatingShape
        type="squiggle"
        color="violet"
        size={56}
        className="absolute bottom-32 left-[6%] sm:left-[12%]"
      />
      <FloatingShape
        type="blob"
        color="coral"
        size={84}
        className="absolute bottom-28 right-[7%] sm:right-[16%]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-coral-bg text-accent-coral-text border border-accent-coral/30 mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-accent-coral animate-ping" />
          <span>SEO &amp; Digital Marketing Specialist</span>
        </motion.div>

        {/* The H1 is her name, fluid clamp-based */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-title-clamp font-heading font-extrabold text-content-primary tracking-tight max-w-4xl"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.3em] last:mr-0 bg-gradient-to-br from-content-primary via-content-primary to-accent-violet bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Positioning Headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-6 text-lg sm:text-2xl font-medium text-content-secondary max-w-3xl leading-relaxed"
        >
          {CANDIDATE_INFO.headline}
        </motion.p>

        {/* Location & Graduate Credential */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-2 text-sm text-content-muted flex items-center justify-center gap-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-accent-coral"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{CANDIDATE_INFO.location}</span>
          <span className="text-content-muted/60" aria-hidden="true">•</span>
          <span>B.Sc in ICE Graduate</span>
        </motion.p>

        {/* Two CTAs: "Contact me" (mailto) & "View SafeNest case study" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href={`mailto:${CANDIDATE_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-heading font-semibold text-base text-white bg-gradient-to-r from-accent-coral via-rose-600 to-accent-coral hover:opacity-95 shadow-lg shadow-accent-coral/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-3 focus:ring-accent-coral/50"
          >
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact me
          </a>

          <Link
            href="/projects/safenest"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-heading font-semibold text-base text-content-primary bg-background-secondary border border-border-prominent hover:border-accent-violet hover:text-accent-violet shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-3 focus:ring-accent-violet/50"
          >
            <span>View SafeNest case study</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

