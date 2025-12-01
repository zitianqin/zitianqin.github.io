import { getPostData, getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Comments from '@/components/Comments';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container max-w-4xl py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-muted-foreground mb-8">
        <time>{formatDate(postData.date)}</time>
      </div>
      
      <div className="prose prose-invert max-w-none mb-20">
        <MDXRemote source={postData.content} />
      </div>

      <div className="mb-12">
        <Comments />
      </div>
    </article>
  );
}
