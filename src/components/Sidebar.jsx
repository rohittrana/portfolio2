import React, { useState } from "react";
import { Github, Linkedin, Twitter, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { profile } from "../data/portfolioData.js";

const LINKS = [
  { id: "home", num: "01", label: "home" },
  { id: "about", num: "02", label: "about" },
  { id: "skills", num: "03", label: "skills" },
  { id: "projects", num: "04", label: "projects" },
  { id: "contact", num: "05", label: "contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const SOCIALS = [
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.twitter, icon: Twitter, label: "Twitter" },
];

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-light dark:bg-brand-dark" />
          <span className="font-mono text-sm text-ink-900 dark:text-paper-100">
            {profile.name.toLowerCase().replace(" ", "")}
          </span>
        </div>
        <p className="font-display font-semibold text-ink-950 dark:text-paper-100 text-base">
          {profile.role}
        </p>
        <p className="mt-1 text-sm text-ink-900/50 dark:text-paper-100/50 leading-relaxed">
          building full-stack products and shipping them end to end
        </p>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              scrollTo(link.id);
              setMobileOpen(false);
            }}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-left font-mono text-sm text-ink-900/60 dark:text-paper-100/60 hover:bg-paper-100 dark:hover:bg-ink-800 hover:text-ink-950 dark:hover:text-paper-100 transition-colors"
          >
            <span className="text-ink-900/30 dark:text-paper-100/30">
              {link.num}
            </span>
            {link.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40 mb-3">
          let's connect
        </p>
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md border border-paper-200 dark:border-ink-700 text-ink-900/70 dark:text-paper-100/70 hover:border-brand-light dark:hover:border-brand-dark hover:text-brand-light dark:hover:text-brand-dark transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="ml-auto p-2 rounded-md border border-paper-200 dark:border-ink-700 text-ink-900/70 dark:text-paper-100/70 hover:border-brand-light dark:hover:border-brand-dark transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden sm:flex fixed left-0 top-0 h-screen w-72 flex-col px-6 py-8 border-r border-paper-200 dark:border-ink-700 bg-paper-50 dark:bg-ink-950">
        {content}
      </aside>

      {/* Mobile top bar */}
      <div className="sm:hidden sticky top-0 z-50 flex items-center justify-between px-5 h-14 border-b border-paper-200 dark:border-ink-700 bg-paper-50/95 dark:bg-ink-950/95 backdrop-blur">
        <span className="font-mono text-sm text-ink-900 dark:text-paper-100">
          {profile.name.toLowerCase().replace(" ", "")}
        </span>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-md border border-paper-200 dark:border-ink-700 text-ink-900 dark:text-paper-100"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="sm:hidden fixed inset-x-0 top-14 z-50 flex flex-col px-6 py-6 border-b border-paper-200 dark:border-ink-700 bg-paper-50 dark:bg-ink-950 max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      )}
    </>
  );
};

export default Sidebar;
