import { Card } from "@/components/Card";

const contactMethods = [
  {
    name: "LinkedIn",
    handle: "Zitian Qin",
    url: "https://www.linkedin.com/in/zitian-qin/",
    preferred: true,
    icon: "",
  },
  {
    name: "GitHub",
    handle: "@zitianqin",
    url: "https://github.com/zitianqin",
    preferred: false,
    icon: "",
  },
  {
    name: "Email",
    handle: "zitianqinpublic@gmail.com",
    url: "mailto:zitianqinpublic@gmail.com",
    preferred: false,
    icon: "",
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          You can reach me through any of the following channels:
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </section>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            title={method.name}
            description={method.handle}
            href={method.url}
            isExternal={method.name !== "Email"}
            badges={method.preferred ? ["Preferred"] : undefined}
          />
        ))}
      </div>
    </div>
  );
}
