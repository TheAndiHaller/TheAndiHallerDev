import Link from "next/link";
import { getPost, getAllPostSlugs } from "../../../lib/markdown";
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Post: ${slug}`,
    alternates: {
      canonical: `https://theandihaller.com/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost("blog", "en", params.slug);

  return (
    <div className="mb-8">
      <Link
        key="Back"
        href="/blog"
      >
        Back to Blog
      </Link>
      <h2 className="text-2xl mt-8 font-bold">{post.title}</h2>
      <p className="text-gray-500 mb-4">{new Date(post.date).toISOString().split('T')[0]}</p>
      <div className="my-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link
        key="Back"
        href="/blog"
      >
        Back to Blog
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs("blog", "en");
}

export const dynamic = "force-static";