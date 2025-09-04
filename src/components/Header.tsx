"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="max-w-4xl mx-auto px-4 py-5 relative">
        {/* Subtle border with gradient */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="relative flex items-center justify-center">
          {/* Hamburger button */}
          <button
            className="md:hidden p-3 z-50 absolute right-0 top-1/2 -translate-y-1/2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-2">
            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/hackathons"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Hackathons
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 py-4 shadow-2xl z-40">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/hackathons"
                  className="block px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
