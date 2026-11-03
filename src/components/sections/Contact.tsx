"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CANDIDATE_INFO } from "@/lib/constants";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating graceful submission with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoLink = `mailto:${CANDIDATE_INFO.email}?subject=${encodeURIComponent(
        formState.subject || "Project Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Contact Information"
    >
      <div className="bg-background-secondary border border-border-subtle rounded-3xl p-6 sm:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-terracotta-bg text-accent-terracotta-text border border-accent-terracotta/20 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta" />
              Get in Touch
            </span>

            {/* Headline */}
            <h2 className="section-title-clamp font-heading font-extrabold text-content-primary tracking-tight mb-4 leading-tight">
              Have a project in mind?<br />
              <span className="text-accent-terracotta">Let&apos;s create something meaningful.</span>
            </h2>

            <p className="text-base text-content-secondary leading-relaxed mb-8">
              I&apos;m always open to discussing new ideas, collaborations, or creative opportunities.
            </p>

            {/* Contact Details matching mockup */}
            <div className="space-y-4 w-full">
              {/* Email */}
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-background-tertiary border border-border-subtle hover:border-accent-terracotta/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center shrink-0">
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
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted">Email</p>
                  <p className="text-sm font-semibold text-content-primary group-hover:text-accent-terracotta transition-colors truncate">
                    {CANDIDATE_INFO.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={CANDIDATE_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-background-tertiary border border-border-subtle hover:border-accent-terracotta/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center shrink-0">
                  <span className="font-bold text-xs">in</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted">LinkedIn</p>
                  <p className="text-sm font-semibold text-content-primary group-hover:text-accent-terracotta transition-colors truncate">
                    linkedin.com/in/isratjahanm/
                  </p>
                </div>
              </a>

              {/* Behance */}
              <a
                href={CANDIDATE_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-background-tertiary border border-border-subtle hover:border-accent-terracotta/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center shrink-0">
                  <span className="font-bold text-xs">Bē</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted">Behance</p>
                  <p className="text-sm font-semibold text-content-primary group-hover:text-accent-terracotta transition-colors truncate">
                    behance.net/mim
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={CANDIDATE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-background-tertiary border border-border-subtle hover:border-accent-terracotta/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center shrink-0">
                  <span className="font-bold text-xs">f</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted">Facebook</p>
                  <p className="text-sm font-semibold text-content-primary group-hover:text-accent-terracotta transition-colors truncate">
                    facebook.com/mim
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 w-full bg-background-primary/60 dark:bg-background-tertiary/40 border border-border-subtle rounded-3xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-terracotta-bg text-accent-terracotta flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-xl text-content-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-content-secondary max-w-sm mx-auto mb-6">
                  Thank you for reaching out. Opening your email client to send directly to {CANDIDATE_INFO.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-accent-terracotta text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background-secondary border border-border-subtle text-content-primary placeholder:text-content-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50 focus:border-accent-terracotta transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background-secondary border border-border-subtle text-content-primary placeholder:text-content-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50 focus:border-accent-terracotta transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background-secondary border border-border-subtle text-content-primary placeholder:text-content-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50 focus:border-accent-terracotta transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, goals, or timeline..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background-secondary border border-border-subtle text-content-primary placeholder:text-content-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50 focus:border-accent-terracotta transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-white bg-accent-terracotta hover:bg-accent-terracotta-hover shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta/50 disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span>↗</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
