import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, tutorials, and updates.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {allPostsData.map(({ slug, date, title, description }) => (
          <Link key={slug} href={`/blog/${slug}`} className="group block">
            <div className="flex flex-col gap-2 border-b border-border/40 pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h2 className="text-xl font-semibold tracking-tight group-hover:underline decoration-2 underline-offset-4">
                  {title}
                </h2>
                <time className="text-sm text-muted-foreground shrink-0">
                  {formatDate(date)}
                </time>
              </div>
              <p className="text-muted-foreground max-w-2xl group-hover:underline decoration-2 underline-offset-4">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
