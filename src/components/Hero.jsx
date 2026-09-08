import React from "react";
import { Download, Mail } from "lucide-react";
import { profile } from "../data/portfolioData.js";

const Hero = () => (
  <section id="home" className="px-6 sm:px-12 pt-14 sm:pt-20 pb-16">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-paper-200 dark:border-ink-700 mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-light dark:bg-brand-dark" />
      <span className="font-mono text-xs text-ink-900/60 dark:text-paper-100/60">
        Open to full-stack engineering roles
      </span>
    </div>

    <h1 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] text-ink-950 dark:text-paper-100 max-w-3xl">
      I build products that{" "}
      <span className="italic font-serif text-brand-light dark:text-brand-dark">
        actually
      </span>{" "}
      ship.
    </h1>

    <p className="mt-6 text-lg sm:text-xl text-ink-900/70 dark:text-paper-100/70 max-w-2xl leading-relaxed">
      {profile.tagline}
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={profile.resumeUrl}
        download
        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm font-medium bg-brand-light dark:bg-brand-dark text-paper-50 dark:text-ink-950 hover:opacity-90 transition-opacity"
      >
        <Download size={16} /> Download resume
      </a>
      <a
        href={`mailto:${profile.email}`}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm border border-paper-200 dark:border-ink-700 text-ink-900 dark:text-paper-100 hover:border-brand-light dark:hover:border-brand-dark transition-colors"
      >
        <Mail size={16} /> Get in touch
      </a>
    </div>
  </section>
);

export default Hero;
