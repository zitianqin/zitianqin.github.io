"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background md:bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container max-w-4xl flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Zitian Qin</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>
        <button
          className="md:hidden p-2 -mr-6 text-muted-foreground hover:text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-14 left-0 w-full border-b border-border/40 bg-background z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container max-w-4xl py-4 flex flex-col gap-4">
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
