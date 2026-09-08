import React from "react";
import { skills } from "../data/portfolioData.js";

const LABELS = {
  languages: "languages",
  frontend: "frontend",
  backend: "backend",
  databases: "databases",
  cloud_devops: "cloud_devops",
};

const Skills = () => (
  <section id="skills" className="px-6 sm:px-12 py-14 sm:py-16">
    <p className="font-mono text-sm text-ink-900/40 dark:text-paper-100/40 mb-4">
      {"// skills"}
    </p>
    <div className="max-w-2xl rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-100 dark:bg-ink-900 px-5 py-6 sm:px-8 sm:py-8">
      <p className="font-mono text-sm mb-4">
        <span className="text-brand-light dark:text-brand-dark">const</span>{" "}
        <span className="text-ink-900 dark:text-paper-100">skills</span>{" "}
        <span className="text-ink-900/60 dark:text-paper-100/60">= {"{"}</span>
      </p>

      <div className="space-y-5">
        {Object.entries(skills).map(([key, values]) => (
          <div key={key}>
            <p className="font-mono text-sm text-ink-900 dark:text-paper-100 mb-2">
              {LABELS[key] ?? key}
              <span className="text-ink-900/60 dark:text-paper-100/60">:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="px-2.5 py-1 rounded font-mono text-xs sm:text-sm bg-paper-50 dark:bg-ink-950 border border-paper-200 dark:border-ink-700 text-sand-light dark:text-sand-dark"
                >
                  "{v}"
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-sm text-ink-900/60 dark:text-paper-100/60 mt-5">
        {"};"}
      </p>
    </div>
  </section>
);

export default Skills;
