import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/markdown";

export default async function Blog() {
  const posts = getAllPosts("projects", "en");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/projects/${post.slug}`}
            className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow  flex items-center"
          >
            <div className="flex-1 p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-2">{post.description}</p>
            </div>
            <div className="w-48 h-32 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-static";