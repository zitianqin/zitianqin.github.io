import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b mb-8">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Zitian Qin
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
