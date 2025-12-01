import React from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A selection of things I've built, mostly at hackathons or for fun.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            className="group block"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight group-hover:underline decoration-2 underline-offset-4">
                  {project.title}
                </h2>
              </div>
              <p className="text-muted-foreground group-hover:underline decoration-2 underline-offset-4">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
