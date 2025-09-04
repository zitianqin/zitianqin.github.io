import React from "react";

export function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
