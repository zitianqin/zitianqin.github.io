import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const contactMethods = [
  {
    name: "LinkedIn",
    handle: "Zitian Qin",
    url: "https://www.linkedin.com/in/zitian-qin",
    preferred: true,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    handle: "@zitianqin",
    url: "https://github.com/zitianqin",
    preferred: false,
    icon: Github,
  },
  {
    name: "Email",
    handle: "zitianqinpublic@gmail.com",
    url: "mailto:zitianqinpublic@gmail.com",
    preferred: false,
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Contact</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          You can reach me through any of the following channels:
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactMethods.map((method, index) => (
          <Link
            key={index}
            href={method.url}
            target="_blank"
            className="group block"
          >
            <div className="flex items-center gap-4 p-4 -mx-4 rounded-lg transition-colors hover:bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-background transition-colors">
                <method.icon className="h-5 w-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">{method.name}</h2>
                <p className="text-sm text-muted-foreground">{method.handle}</p>
              </div>
              <span className="text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
