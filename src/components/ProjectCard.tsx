"use client";

import React, { useRef } from "react";

export function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10; // left-right
    const rotateX = (0.5 - py) * 8; // up-down
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const onLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <a
      ref={ref}
      href={link}
      className="block p-6 border rounded-lg bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-xl transition-[transform,box-shadow] will-change-transform"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08)",
          }}
        />
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}
