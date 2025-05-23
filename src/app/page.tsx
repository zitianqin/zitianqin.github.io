export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Zitian Qin</h1>
        <p className="text-xl">
          Software Engineer and CS Student @ UNSW
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="CollabAI"
            description="Learning assistant with concept graphs (Hackathon Prize Winner)"
            link="https://collabai.denzeliskandar.com/"
          />
          <ProjectCard
            title="WisLock"
            description="Smart website blocker (Hackathon Prize Winner)"
            link="https://www.wislockapp.com"
          />
          <ProjectCard
            title="StudyBuddy AI"
            description="Watches you when you study 👀 – made in 5 hours (Hackathon Prize Winner)"
            link="https://www.linkedin.com/posts/chris-yoo_hack-sleep-hack-repeat-just-36-hours-ugcPost-7271117053770493953-xmuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3GNeUBc1Q8e-1VBIL0G3DYYBb_MrdOy6M"
          />
          <ProjectCard
            title="FlowmoTime"
            description="Evidence-based focus timer"
            link="https://www.flowmotime.com"
          />
          <ProjectCard
            title="Discord Message Scheduler"
            description="Bot for scheduling messages"
            link="https://github.com/zitianqin/Discord-Messenger-Bot"
          />
          <ProjectCard
            title="CSESoc Newsletter Generator"
            description="Very quick and small project but one that saves a lot of time"
            link="https://zitianqin.com/csesoc-newsletter-generator/"
          />
        </div>
        <div className="mt-8 text-center">
          <ProjectCard
            title="More Projects"
            description="Check out my GitHub for more projects!"
            link="https://github.com/zitianqin"
          />
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

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
