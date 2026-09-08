import React from "react";
import { profile } from "../data/portfolioData.js";

const Footer = () => (
  <footer className="border-t border-paper-200 dark:border-ink-700">
    <div className="px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="font-mono text-xs text-ink-900/40 dark:text-paper-100/40">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs text-ink-900/40 dark:text-paper-100/40">
        built with React + Tailwind
      </p>
    </div>
  </footer>
);

export default Footer;
