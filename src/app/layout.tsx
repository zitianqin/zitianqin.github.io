import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zitian Qin",
  description: "I like building things.",
  icons: {
    icon: "/chopin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground min-h-[100dvh] flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-8">{children}</main>
      </body>
    </html>
  );
}
