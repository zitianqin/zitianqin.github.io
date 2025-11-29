import React from "react";
import { Card } from "@/components/Card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          A selection of things I've built, mostly at hackathons or for fun.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </section>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.link}
            isExternal={true}
            badges={project.achievement ? [project.achievement] : undefined}
          />
        ))}
      </div>
    </div>
  );
}
