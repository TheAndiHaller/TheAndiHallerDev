import Link from "next/link";
import { getPost, getAllPostSlugs } from "../../../lib/markdown";
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `${slug}`,
    alternates: {
      canonical: `https://theandihaller.com/projects/${slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost("projects", "en", params.slug);

  return (
    <div className="mb-8">
      <Link
        key="Back"
        href="/projects"
      >
        Back to projects
      </Link>
      <h1 className="text-2xl my-8 font-bold">{post.title}</h1>
      <div className="my-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link
        key="Back"
        href="/projects"
      >
        Back to projects
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs("projects", "en");
}

export const dynamic = "force-static";