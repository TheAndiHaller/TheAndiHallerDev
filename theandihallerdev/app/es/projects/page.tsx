import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../../lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos - TheAndiHaller',
  description: 'Mis proyectos.',
  alternates: {
    canonical: 'https://theandihaller.com/es/projects',
  },
};

export default async function Blog() {
  const posts = getAllPosts("projects", "es");

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-yellow-400">Proyectos</h2>
      <div className="space-y-6 md:space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/es/projects/${post.slug}`}
            aria-label={`Ver detalles para el proyecto ${post.title}`}
            className="group block rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-[#2C2E31] border border-[#343a40] hover:border-yellow-400"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Text Section */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                <h3 className="text-lg md:text-2xl font-semibold md:font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <div className="h-0.5 md:h-1 w-8 md:w-12 bg-yellow-400 rounded mb-3 md:mb-4 opacity-70" />
                <p className="text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
                  {post.description}
                </p>
              </div>
              {/* Image Section */}
              <div className="md:w-64 w-full h-40 md:h-auto relative flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-b-xl md:rounded-b-none md:rounded-r-2xl"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority={false}
                  loading="lazy"
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
