import React from "react";
import { BadgeCheck } from "lucide-react";
import { about, certifications } from "../data/portfolioData.js";

const About = () => (
  <section id="about" className="px-6 sm:px-12 py-14 sm:py-16">
    <p className="font-mono text-sm text-ink-900/40 dark:text-paper-100/40 mb-4">
      {"// about"}
    </p>
    <p className="text-lg sm:text-xl leading-relaxed text-ink-900 dark:text-paper-100/90 max-w-2xl">
      {about}
    </p>

    <div className="mt-10 max-w-2xl">
      <p className="flex items-center gap-2 font-mono text-sm text-ink-900/60 dark:text-paper-100/60 mb-3">
        <BadgeCheck size={15} className="text-brand-light dark:text-brand-dark" />
        certifications
      </p>
      <ul className="space-y-2.5">
        {certifications.map((c) => (
          <li
            key={c}
            className="text-base text-ink-900/80 dark:text-paper-100/80 pl-4 border-l-2 border-paper-200 dark:border-ink-700"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
