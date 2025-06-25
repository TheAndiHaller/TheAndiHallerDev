import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - TheAndiHaller',
  description: 'My blog.',
  alternates: {
    canonical: 'https://theandihaller.com/blog',
  },
};

export default async function Blog() {
  const posts = getAllPosts("blog", "en");

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-8 text-yellow-400">Blog</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            aria-label={`View details for project ${post.title}`}
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-[#2C2E31]/80 border border-[#343a40] hover:border-yellow-400 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <div className="h-1 w-12 bg-yellow-400 rounded mb-4 opacity-70" />
                <p className="text-gray-300 text-base mb-2 leading-relaxed">
                  {post.description}
                </p>
              </div>
              {/* Image Section */}
              <div className="md:w-64 w-full h-48 md:h-auto relative flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority={true}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-static";
