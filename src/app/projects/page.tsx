import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
// 3D gallery removed per request; using 2D tilt cards instead

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <p className="text-xl text-gray-600 mb-8">
        A selection of things I've built, mostly at hackathons or for fun.
      </p>
      {/* 3D gallery removed */}
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
