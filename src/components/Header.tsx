"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative">
      <nav className="max-w-4xl mx-auto px-4 py-5 relative">
        {/* Subtle border with gradient */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="relative flex items-center justify-center">
          {/* Navigation menu - always visible */}
          <ul className="flex space-x-1 md:space-x-2">
            <li>
              <Link
                href="/"
                className="px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/hackathons"
                className="px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Hackathons
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
