import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData.js";

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-100 dark:bg-ink-900 px-6 py-6 hover:border-brand-light dark:hover:border-brand-dark transition-colors"
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <h3 className="font-display font-semibold text-lg text-ink-950 dark:text-paper-100">
        {project.title}
      </h3>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-ink-900/30 dark:text-paper-100/30 group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors"
      />
    </div>
    <p className="text-base leading-relaxed text-ink-900/75 dark:text-paper-100/75 mb-4">
      {project.description}
    </p>
    <div className="mt-auto flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 rounded font-mono text-xs bg-paper-50 dark:bg-ink-950 border border-paper-200 dark:border-ink-700 text-ink-900/70 dark:text-paper-100/70"
        >
          {tech}
        </span>
      ))}
    </div>
  </a>
);

const Projects = () => (
  <section id="projects" className="px-6 sm:px-12 py-14 sm:py-16">
    <p className="font-mono text-sm text-ink-900/40 dark:text-paper-100/40 mb-4">
      {"// projects"}
    </p>
    <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
