"use client";

import Link from "next/link";

const NAV_LINK_CLASSNAME = "px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300";

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
                className={NAV_LINK_CLASSNAME}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={NAV_LINK_CLASSNAME}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={NAV_LINK_CLASSNAME}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={NAV_LINK_CLASSNAME}
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
