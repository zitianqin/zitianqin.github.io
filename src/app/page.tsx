export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Zitian Qin</h1>
        <p className="text-xl">CS Student @ UNSW</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What I've been up to</h2>
        <div className="prose dark:prose-invert">
          <p>
            Hi, I'm Zitian Qin, a software engineer and Computer Science student
            at UNSW. I'm passionate about building tools that help people work
            more effectively and stay focused in our increasingly distracting
            digital world.
          </p>
          <p>
            When I'm not coding, you can find me playing piano, reading books,
            or working on personal projects.
          </p>
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
