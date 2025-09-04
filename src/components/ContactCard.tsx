"use client";

import React, { useRef } from "react";

export function ContactCard({
  name,
  handle,
  url,
  preferred,
  icon,
}: {
  name: string;
  handle: string;
  url: string;
  preferred: boolean;
  icon: string;
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
      href={url}
      className="group block p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 will-change-transform"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      target={name !== "Email" ? "_blank" : undefined}
      rel={name !== "Email" ? "noopener noreferrer" : undefined}
    >
      <div className="relative">
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                  {name}
                </h3>
                {preferred && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                    Preferred
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{handle}</p>
        </div>
      </div>
    </a>
  );
}
