import Link from "next/link";

export default function Hackathons() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hackathons</h1>
      <ul className="space-y-6">
        <li>
          <span className="font-semibold">Winner:</span>{" "}
          <Link
            href="https://getagenti.com"
            className="underline"
            target="_blank"
          >
            Agenti
          </Link>{" "}
          for NextGen Ventures FoundersHack Sydney 2025
        </li>
        <li>
          <span className="font-semibold">Winner: Best use of DataStax</span>{" "}
          for{" "}
          <Link
            href="https://collabai.denzeliskandar.com/"
            className="underline"
            target="_blank"
          >
            CollabAI
          </Link>{" "}
          at UNIHACK 2025 (4th place overall)
        </li>
        <li>
          <span className="font-semibold">Prize winner:</span>{" "}
          <Link
            href="https://chromewebstore.google.com/detail/wislock-smart-website-blo/bicajookbbojofgpjkmlicgbfhagjnia"
            className="underline"
            target="_blank"
          >
            WisLock
          </Link>{" "}
          at Nosu AI Hackathon
        </li>
        <li>
          <span className="font-semibold">2nd place:</span>{" "}
          <Link
            href="https://www.linkedin.com/posts/chris-yoo_hack-sleep-hack-repeat-just-36-hours-ugcPost-7271117053770493953-xmuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3GNeUBc1Q8e-1VBIL0G3DYYBb_MrdOy6M"
            className="underline"
            target="_blank"
          >
            StudyBuddy AI
          </Link>{" "}
          at Build Club EdTech Hackathon
        </li>
      </ul>
    </div>
  );
}
