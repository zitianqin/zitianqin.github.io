export type Project = {
  title: string;
  description: string;
  link: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "PrintJarvis",
    description:
      "Instantly spot weak walls and problem geometries before PLA FDM printing using contextually-aware tools. Built at HACK48.",
    link: "http://printjarvis.com/",
    featured: true,
  },
  {
    title: "Agenti",
    description:
      "Allows anyone to automate tasks on the web using plain English. 1st Place at NextGen Ventures FoundersHack Sydney 2025.",
    link: "https://getagenti.com",
  },
  {
    title: "Sussy Uni",
    description:
      "An Among Us inspired game for university students. 1st Place at DevSoc Game Jam Hackathon 2025.",
    link: "https://sussyuni.com/",
    featured: true,
  },
  {
    title: "CollabAI",
    description:
      "Learning assistant with concept graphs. Best use of DataStax at UNIHACK 2025 (4th place overall).",
    link: "https://collabai.denzeliskandar.com/",
  },
  {
    title: "WisLock",
    description: "Smart website blocker. Prize winner at Nosu AI Hackathon.",
    link: "https://chromewebstore.google.com/detail/wislock-smart-website-blo/bicajookbbojofgpjkmlicgbfhagjnia",
  },
  {
    title: "StudyBuddy AI",
    description:
      "Watches you when you study 👀 – made in 5 hours. 2nd place at Build Club EdTech Hackathon.",
    link: "https://www.linkedin.com/posts/chris-yoo_hack-sleep-hack-repeat-just-36-hours-ugcPost-7271117053770493953-xmuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3GNeUBc1Q8e-1VBIL0G3DYYBb_MrdOy6M",
  },
  {
    title: "FlowmoTime",
    description: "Evidence-based focus timer.",
    link: "https://www.flowmotime.com",
  },
  {
    title: "Discord Message Scheduler",
    description: "Bot for scheduling messages.",
    link: "https://github.com/zitianqin/Discord-Messenger-Bot",
  },
  {
    title: "CSESoc Newsletter Generator",
    description:
      "Very quick and small project but one that saves a lot of time.",
    link: "https://zitianqin.com/csesoc-newsletter-generator/",
  },
];
