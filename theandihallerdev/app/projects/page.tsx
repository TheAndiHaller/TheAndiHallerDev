import Link from "next/link";
import { getAllPosts, Post } from "../../lib/markdown";

export default async function Blog() {
  const posts = getAllPosts("projects", "en");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/projects/${post.slug}`} className="font-bold">
              {post.title}
            </Link>
            <span className="text-gray-500"> - {new Date (post.date).toISOString().split('T')[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = "force-static";