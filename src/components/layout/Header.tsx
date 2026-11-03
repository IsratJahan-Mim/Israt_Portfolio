"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { CANDIDATE_INFO } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Works", href: "/#works" },
    { label: "Process", href: "/#process" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/85 dark:bg-background-primary/90 backdrop-blur-md border-b border-border-subtle/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo: MIM. */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent-terracotta rounded-lg p-1"
          aria-label={`${CANDIDATE_INFO.brand} Home`}
        >
          <span className="font-heading font-extrabold text-2xl sm:text-3xl text-content-primary tracking-tight">
            MIM<span className="text-accent-terracotta">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-background-secondary/90 px-3 py-1.5 rounded-full border border-border-subtle shadow-xs"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-content-secondary hover:text-content-primary px-3 py-1.5 rounded-full hover:bg-background-tertiary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls & Let's Talk CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-accent-terracotta hover:bg-accent-terracotta-hover shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-xs">↗</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border-subtle bg-background-secondary text-content-primary focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-background-secondary px-5 py-4 transition-all shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-content-primary hover:text-accent-terracotta px-3 py-2.5 rounded-lg hover:bg-background-tertiary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-border-subtle">
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-accent-terracotta hover:bg-accent-terracotta-hover transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <span>↗</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
