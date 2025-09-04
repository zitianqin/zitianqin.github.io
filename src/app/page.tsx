import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Zitian Qin</h1>
        <p className="text-xl">Building...</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="prose dark:prose-invert">
          <p>Hi, I'm currently a Computer Science student at UNSW.</p>
          <p>
            I'm passionate about building tools that help people work more
            effectively and stay focused in our increasingly distracting digital
            world.
          </p>
          <p>
            When I'm not coding, you can find me playing piano, badminton, or
            reading books.
          </p>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What I'm Working On</h2>
        <div className="space-y-6">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                link={p.link}
              />
            ))}
        </div>
      </section>
      {/* <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="space-y-4">
          <article className="p-4 border rounded-lg hover:bg-gray-50">
            <Link href="/blog/on-signs-from-the-universe">
              <h3 className="text-xl font-medium">
                On Signs from the Universe
              </h3>
              <p className="text-gray-600">February 20, 2025</p>
            </Link>
          </article>
        </div>
      </section> */}
    </div>
  );
}
