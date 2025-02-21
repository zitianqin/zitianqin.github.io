"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b mb-8">
      <nav className="max-w-4xl mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Zitian Qin
          </Link>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b py-4 space-y-4 shadow-lg z-40">
            <li>
              <Link href="/" className="block hover:underline px-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:underline px-4">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:underline px-4">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:underline px-4">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
