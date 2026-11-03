import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectNav } from "@/components/safenest/ProjectNav";
import { ScreensCarousel } from "@/components/safenest/ScreensCarousel";
import { SAFENEST_DATA } from "@/data/safenestData";
import { CANDIDATE_INFO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SafeNest – Stay Booking App UI Case Study | Israt Jahan Mim",
  description:
    "Mobile app UI concept designed in Figma by Israt Jahan Mim for accommodation discovery and booking.",
  alternates: {
    canonical: `${SITE_URL}/projects/safenest`,
  },
  openGraph: {
    title: "SafeNest – Stay Booking App UI Case Study | Israt Jahan Mim",
    description:
      "A user-friendly accommodation booking app that helps users find, book, and manage stays easily.",
    url: `${SITE_URL}/projects/safenest`,
    siteName: "MIM. Portfolio",
    type: "article",
  },
};

export default function SafeNestPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <ProjectNav />

      {/* Hero Spotlight Grid matching Case Study Panel in Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-terracotta-bg text-accent-terracotta-text border border-accent-terracotta/20 mb-4">
            <span>UI/UX Design</span>
            <span>•</span>
            <span>{SAFENEST_DATA.tool}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-content-primary tracking-tight leading-tight">
            SafeNest – Stay Booking App
          </h1>

          <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
            A user-friendly accommodation booking app that helps users find, book, and manage stays easily.
          </p>

          <div className="mt-8 pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">
                Project Overview
              </p>
              <p className="text-sm text-content-secondary leading-relaxed">
                A modern and intuitive mobile app for booking accommodations, designed with a focus on simplicity, trust, and a seamless user experience.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-content-muted mb-1">
                My Role
              </p>
              <p className="text-sm font-semibold text-content-primary leading-relaxed">
                UI/UX Design • Research • Wireframing • UI Design • Prototyping
              </p>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup Preview */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle bg-background-tertiary">
          <Image
            src="/images/safenest-phones.jpg"
            alt="SafeNest Phone Mockup Screens"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Design Approach */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider font-bold text-accent-terracotta px-3 py-1 rounded-full bg-accent-terracotta-bg border border-accent-terracotta/20">
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
              className="bg-background-secondary border border-border-subtle hover:border-accent-terracotta/40 rounded-2xl p-6 shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center font-bold text-xs mb-4">
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

      {/* Screens Carousel */}
      <section className="mb-16 pt-4 border-t border-border-subtle">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-wider font-bold text-accent-terracotta px-3 py-1 rounded-full bg-accent-terracotta-bg border border-accent-terracotta/20">
            Screen Exploration
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-content-primary mt-2">
            Mobile Interface Screens
          </h2>
          <p className="text-sm text-content-secondary mt-1 max-w-lg mx-auto">
            Swipe or use the navigation buttons to inspect discovery, search filters, and checkout screens.
          </p>
        </div>

        <ScreensCarousel />
      </section>

      {/* Key Takeaways */}
      <section className="mb-16 bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="font-heading font-bold text-2xl text-content-primary mb-6 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-terracotta" />
          Key Takeaways
        </h2>

        <div className="space-y-4">
          {SAFENEST_DATA.takeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-accent-terracotta-bg text-accent-terracotta font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
          href="/#works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-content-secondary hover:text-accent-terracotta transition-colors"
        >
          ← Back to Selected Works
        </Link>

        <a
          href={`mailto:${CANDIDATE_INFO.email}?subject=Inquiry%20regarding%20SafeNest%20Design`}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-sm text-white bg-accent-terracotta hover:bg-accent-terracotta-hover shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
        >
          Discuss this Project
        </a>
      </div>
    </div>
  );
}
