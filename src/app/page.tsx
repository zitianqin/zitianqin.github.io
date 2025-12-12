"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl min-h-[1.2em]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Zitian.")
                .start();
            }}
            options={{
              cursor: "_",
              delay: 75,
            }}
          />
        </h1>
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl max-w-2xl">
          I like building things that matter.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="https://github.com/zitianqin"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/zitian-qin"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.instagram.com/zitibuilds/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:zitianqinpublic@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">About</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
          <p className="leading-relaxed">
            Hi, I'm currently a Computer Science student at UNSW. I'm passionate about building tools that make a difference in the world. In the rare instances when I'm not coding you might find me playing piano, badminton, or reading books.
          </p>
        </div>
      </section>

    </div>
  );
}
