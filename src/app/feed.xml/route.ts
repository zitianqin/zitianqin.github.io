import RSS from 'rss';
import { getSortedPostsData } from '@/lib/posts';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getSortedPostsData();
  const siteUrl = 'https://zitianqin.github.io';

  const feed = new RSS({
    title: "Zitian Qin's Blog",
    description: "Thoughts on tech, life, and everything in between.",
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Zitian Qin`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
