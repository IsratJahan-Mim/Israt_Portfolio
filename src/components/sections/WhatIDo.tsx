"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function WhatIDo() {
  const services = PORTFOLIO_DATA.services;

  return (
    <section
      id="services"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="What I Do"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <SectionHeading
          badge="What I Do"
          title="Design. Create. Grow."
          subtitle="A combination of creative design, user-centered experiences and strategic marketing to build meaningful brand presence."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="bg-background-secondary border border-border-subtle hover:border-accent-terracotta/40 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
          >
            <div>
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-2xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {service.icon === "palette" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
                  </svg>
                )}
                {service.icon === "layout" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                )}
                {service.icon === "trending" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-content-primary mb-4 group-hover:text-accent-terracotta transition-colors">
                {service.title}
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-6 text-sm text-content-secondary">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-accent-terracotta-bg text-accent-terracotta text-xs flex items-center justify-center font-bold shrink-0">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Mockup Image Preview */}
            <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-border-subtle bg-background-tertiary mt-2">
              <Image
                src={service.image}
                alt={`${service.title} preview mockup`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

