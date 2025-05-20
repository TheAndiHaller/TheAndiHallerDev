import Link from "next/link";
import { getAllPosts, Post } from "../markdown";

// This works, but can 'use client' when two page.tsx, getAllPosts can send en or es depending on wich

export default async function Blog() {
  const posts = getAllPosts("en");

  return (
    <div>
      <h2 className="text-xl mb-4">Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${post.slug}`} className="text-blue-600">
              {post.title}
            </Link>
            <span className="text-gray-500"> - {new Date(post.date).toString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = "force-static";





/*
export default function Page() {
  return (
    <main>
      <h1 className="text-xl font-bold">Blog</h1>
    </main>
  );
}


*/