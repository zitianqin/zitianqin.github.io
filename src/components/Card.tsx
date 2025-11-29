"use client";

import React, { useRef } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  date?: string;
  badges?: string[];
};

export function Card({
  title,
  description,
  href,
  isExternal = false,
  date,
  badges,
}: CardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8; // left-right
    const rotateX = (0.5 - py) * 6; // up-down
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const onLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  const content = (
    <div className="relative h-full flex flex-col">
      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        <div className="flex flex-col items-start justify-between mb-1">
          <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          {date && (
            <span className="text-xs text-gray-400/75 mt-2">{date}</span>
          )}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/5"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const className = "group block p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 will-change-transform h-full flex flex-col";

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {content}
    </Link>
  );
}
