import type { Metadata } from "next";
import Link from "next/link";
import { ProjectNav } from "@/components/safenest/ProjectNav";
import { ScreensCarousel } from "@/components/safenest/ScreensCarousel";
import { SAFENEST_DATA } from "@/data/safenestData";
import { CANDIDATE_INFO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SafeNest Mobile App UI Case Study | Israt Jahan Mim",
  description:
    "Mobile app UI concept designed in Figma by Israt Jahan Mim for accommodation discovery and booking.",
  alternates: {
    canonical: `${SITE_URL}/projects/safenest`,
  },
  openGraph: {
    title: "SafeNest Mobile App UI Case Study | Israt Jahan Mim",
    description:
      "User-focused mobile interfaces for accommodation discovery and booking designed in Figma.",
    url: `${SITE_URL}/projects/safenest`,
    siteName: "Israt Jahan Mim Portfolio",
    type: "article",
  },
};

export default function SafeNestPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-5xl mx-auto">
      <ProjectNav />

      {/* Header & Hero */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-violet-bg text-accent-violet-text border border-accent-violet/30 mb-4">
          <span>{SAFENEST_DATA.tool} UI Concept</span>
          <span>•</span>
          <span>Mobile Interfaces</span>
        </div>

        <h1 className="hero-title-clamp font-heading font-extrabold text-content-primary tracking-tight">
          SafeNest
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-content-secondary font-medium leading-relaxed">
          {SAFENEST_DATA.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-content-muted">
          <span className="px-3 py-1.5 rounded-xl bg-background-secondary border border-border-subtle">
            Role: <strong className="text-content-primary">{SAFENEST_DATA.role}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-background-secondary border border-border-subtle">
            Tool: <strong className="text-content-primary">{SAFENEST_DATA.tool}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-background-secondary border border-border-subtle">
            Designer: <strong className="text-content-primary">{CANDIDATE_INFO.name}</strong>
          </span>
        </div>
      </div>

      {/* 1. Overview */}
      <section className="mb-14 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="font-heading font-bold text-2xl text-content-primary mb-3 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-coral" />
          Overview
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          {SAFENEST_DATA.overview}
        </p>
      </section>

      {/* 2. My Role */}
      <section className="mb-14 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="font-heading font-bold text-2xl text-content-primary mb-3 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-violet" />
          My Role
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
          {SAFENEST_DATA.roleDescription}
        </p>
      </section>

      {/* 3. Design Approach */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider font-bold text-accent-yellow-text px-3 py-1 rounded-full bg-accent-yellow-bg border border-accent-yellow/30">
            Methodology
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary mt-2">
            Design Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAFENEST_DATA.designApproach.map((item, idx) => (
            <div
              key={item.title}
              className="bg-background-secondary border border-border-subtle hover:border-accent-yellow/50 rounded-2xl p-6 shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-accent-yellow-bg text-accent-yellow-text flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-heading font-bold text-lg text-content-primary mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-content-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Screens Carousel */}
      <section className="mb-16 pt-4 border-t border-border-subtle">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-accent-violet px-3 py-1 rounded-full bg-accent-violet-bg border border-accent-violet/30">
            Interactive Showcase
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary mt-2">
            Mobile Interface Screens
          </h2>
          <p className="text-sm text-content-secondary mt-1 max-w-lg mx-auto">
            Swipe or use the arrows to inspect the discovery, listing, and booking reservation flows.
          </p>
        </div>

        <ScreensCarousel />
      </section>

      {/* 5. Takeaways */}
      <section className="mb-16 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="font-heading font-bold text-2xl text-content-primary mb-6 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
          Key Takeaways
        </h2>

        <div className="space-y-4">
          {SAFENEST_DATA.takeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/15 text-accent-cyan font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </span>
              <p className="text-base text-content-secondary leading-relaxed">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA & Return Navigation */}
      <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#featured"
          className="inline-flex items-center gap-2 text-sm font-semibold text-content-secondary hover:text-accent-violet transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <a
          href={`mailto:${CANDIDATE_INFO.email}?subject=Inquiry%20regarding%20SafeNest%20Design`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm text-white bg-accent-violet hover:bg-violet-700 shadow-md shadow-accent-violet/20 transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet"
        >
          Discuss this Project
        </a>
      </div>
    </div>
  );
}

