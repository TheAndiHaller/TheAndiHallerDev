import Link from "next/link";
import { getPost, getAllPostSlugs } from "../../../../lib/markdown";
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `${slug}`,
    alternates: {
      canonical: `https://theandihaller.com/es/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost("blog", "es", params.slug);

  return (
    <div className="mb-8">
      <Link
        key="Back"
        href="/es/blog"
      >
        Volver a Blog
      </Link>
      <h2 className="text-2xl mt-8 font-bold">{post.title}</h2>
      <p className="text-gray-300 mb-4">{new Date(post.date).toISOString().split('T')[0]}</p>
      <div className="my-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link
        key="Back"
        href="/es/blog"
      >
        Volver a Blog
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs("blog", "es");
}

export const dynamic = "force-static";