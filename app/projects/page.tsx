import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1> */}
      <div className="space-y-6">
        {projects
          .sort((a, b) => {
            const [dayA, monthA, yearA] = a.date.split("-").map(Number);
            const [dayB, monthB, yearB] = b.date.split("-").map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateB.getTime() - dateA.getTime();
          })
          .map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="block p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 group transition-colors duration-200"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.date}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={`${link.text}-${linkIndex}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm inline-flex items-center gap-1"
                    >
                      {link.text}
                      <span className="text-xs">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
