import { HackathonCard } from "@/components/HackathonCard";

const hackathons = [
  {
    title: "DevSoc Game Jam Hackathon 2025",
    link: "https://sussyuni.com/",
    achievement: "Winner",
    description:
      "Sussy Uni - An Among Us inspired game for university students. 1st Place at DevSoc Game Jam Hackathon 2025.",
  },
  {
    title: "NextGen Ventures FoundersHack Sydney 2025",
    link: "https://getagenti.com",
    achievement: "Winner",
    description:
      "Agenti - Allows anyone to automate tasks on the web using plain English. 1st Place at NextGen Ventures FoundersHack Sydney 2025 and interviewed at YC.",
  },
  {
    title: "UNIHACK 2025",
    link: "https://collabai.denzeliskandar.com/",
    achievement: "Winner: Best use of DataStax",
    description:
      "CollabAI - Learning assistant with concept graphs. Best use of DataStax at UNIHACK 2025 (4th place overall).",
  },
  {
    title: "Nosu AI Hackathon",
    link: "https://chromewebstore.google.com/detail/wislock-smart-website-blo/bicajookbbojofgpjkmlicgbfhagjnia",
    achievement: "Prize winner",
    description:
      "WisLock - Smart website blocker. Prize winner at Nosu AI Hackathon.",
  },
  {
    title: "Build Club EdTech Hackathon",
    link: "https://www.linkedin.com/posts/chris-yoo_hack-sleep-hack-repeat-just-36-hours-ugcPost-7271117053770493953-xmuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3GNeUBc1Q8e-1VBIL0G3DYYBb_MrdOy6M",
    achievement: "2nd place",
    description:
      "StudyBuddy AI - Watches you when you study 👀 – made in 5 hours. 2nd place at Build Club EdTech Hackathon.",
  },
];

export default function Hackathons() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Hackathons
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          I love hackathons – they're where I learn fastest, build things, and
          meet great people.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </section>

      {/* Hackathons Grid */}
      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={index}
            title={hackathon.title}
            description={hackathon.description}
            link={hackathon.link}
            achievement={hackathon.achievement}
          />
        ))}
      </div>
    </div>
  );
}
