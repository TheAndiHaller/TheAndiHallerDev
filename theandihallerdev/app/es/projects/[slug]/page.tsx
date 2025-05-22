import Link from "next/link";
import { getPost, getAllPostSlugs } from "../../../../lib/markdown";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost("projects", "es", params.slug);

  return (
    <div className="mb-8">
      <Link
        key="Back"
        href="/es/projects"
      >
        Volver a Proyectos
      </Link>
      <h1 className="text-2xl my-8 font-bold">{post.title}</h1>
      <div className="my-4 prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link
        key="Back"
        href="/es/projects"
      >
        Volver a Proyectos
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs("projects", "es");
}

export const dynamic = "force-static";