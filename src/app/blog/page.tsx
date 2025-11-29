import { getSortedPostsData } from '@/lib/posts';
import { Card } from '@/components/Card';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {allPostsData.map(({ slug, date, title, description }) => (
          <Card
            key={slug}
            title={title}
            description={description}
            href={`/blog/${slug}`}
            date={date}
          />
        ))}
      </div>
    </div>
  );
}
