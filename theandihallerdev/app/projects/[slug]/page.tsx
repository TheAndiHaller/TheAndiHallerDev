import { getPost, getAllPostSlugs } from "../../../lib/markdown";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost("projects", "en", params.slug);

  return (
    <div>
      <h2 className="text-xl mb-4">{post.title}</h2>
      <p className="text-gray-500 mb-4">{ new Date(post.date).toISOString().split('T')[0] }</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs("projects", "en");
}

export const dynamic = "force-static";