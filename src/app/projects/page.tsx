import React from "react";

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
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        A selection of things I've built, mostly at hackathons or for fun.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Agenti"
          description="Allows anyone to automate tasks on the web using plain English. 1st Place at NextGen Ventures FoundersHack Sydney 2025."
          link="https://getagenti.com"
        />
        <ProjectCard
          title="Sussy Uni"
          description="An Among Us inspired game for university students. 1st Place at DevSoc Game Jam Hackathon 2025."
          link="https://sussyuni.com/"
        />
        <ProjectCard
          title="CollabAI"
          description="Learning assistant with concept graphs. Best use of DataStax at UNIHACK 2025 (4th place overall)."
          link="https://collabai.denzeliskandar.com/"
        />
        <ProjectCard
          title="WisLock"
          description="Smart website blocker. Prize winner at Nosu AI Hackathon."
          link="https://chromewebstore.google.com/detail/wislock-smart-website-blo/bicajookbbojofgpjkmlicgbfhagjnia"
        />
        <ProjectCard
          title="StudyBuddy AI"
          description="Watches you when you study 👀 – made in 5 hours. 2nd place at Build Club EdTech Hackathon."
          link="https://www.linkedin.com/posts/chris-yoo_hack-sleep-hack-repeat-just-36-hours-ugcPost-7271117053770493953-xmuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3GNeUBc1Q8e-1VBIL0G3DYYBb_MrdOy6M"
        />
        <ProjectCard
          title="FlowmoTime"
          description="Evidence-based focus timer."
          link="https://www.flowmotime.com"
        />
        <ProjectCard
          title="Discord Message Scheduler"
          description="Bot for scheduling messages."
          link="https://github.com/zitianqin/Discord-Messenger-Bot"
        />
        <ProjectCard
          title="CSESoc Newsletter Generator"
          description="Very quick and small project but one that saves a lot of time."
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
    </div>
  );
}
