import { getPostData, getSortedPostsData } from '@/lib/posts';
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
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-600 mb-8">
        <time>{postData.date}</time>
      </div>
      
      <div className="prose prose-invert max-w-none mb-32">
        <MDXRemote source={postData.content} />
      </div>

      <div className="mb-12">
        <Comments />
      </div>
    </article>
  );
}
