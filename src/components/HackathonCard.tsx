"use client";

import React, { useRef } from "react";

export function HackathonCard({
  title,
  description,
  link,
  achievement,
}: {
  title: string;
  description: string;
  link: string;
  achievement: string;
}) {
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

  return (
    <a
      ref={ref}
      href={link}
      className="group block p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 will-change-transform"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                  {achievement}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </a>
  );
}
