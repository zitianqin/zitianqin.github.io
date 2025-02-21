import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      slug: "on-signs-from-the-universe",
      title: "On Signs from the Universe",
      date: "February 20, 2025",
      excerpt:
        "Exploring the connections between dreams, coincidences, and patterns in our daily lives.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
