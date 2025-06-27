import Socials from "./ui/socials";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Andi Haller',
  description: 'The official web of Andi Haller',
  alternates: {
    canonical: 'https://theandihaller.com/',
  },
};

export default async function Home() {
  const projects = getAllPosts("projects", "en").slice(0, 2);
  const blogPosts = getAllPosts("blog", "en").slice(0, 2);

  return (
    <main className="sm:px-0 px-4">
      <div className="mb-8 md:mb-10">
        <h1 className="text-lg md:text-xl font-bold pb-3 md:pb-4">
          {"Hi! I'm Andi"}
        </h1>
        <div>
          <p className="mb-4 md:mb-5 text-sm md:text-base">
            I&apos;m a <strong> programmer, maker, and designer </strong> with
            over six years of experience building projects, both for myself and
            as a freelancer. I thrive on learning and experimenting across
            various fields—embracing the idea of being a &quot;Jack of all
            trades, master of none.&quot;
          </p>
          <p className="mb-4 md:mb-5 text-sm md:text-base">
            Currently, I&apos;m on a journey to make programming my full-time
            career, seeking to carve out my place in the tech world.
          </p>
        </div>
      </div>
      {<Socials />}

      {/* Latest Projects Section */}
      <div className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">
          Latest Projects
        </h2>
        <div className="space-y-4 md:space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`View details for project ${project.title}`}
              className="group block rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-[#2C2E31] border border-[#343a40] hover:border-yellow-400"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Text Section */}
                <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-0.5 md:h-1 w-6 md:w-8 bg-yellow-400 rounded mb-2 md:mb-3 opacity-70" />
                  <p className="text-gray-300 text-xs md:text-sm mb-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {/* Image Section */}
                <div className="md:w-48 w-full h-32 md:h-auto relative flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-b-lg md:rounded-b-none md:rounded-r-xl"
                    sizes="(max-width: 768px) 100vw, 192px"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 md:mt-6">
          <Link
            href="/projects"
            className="text-yellow-400 hover:text-yellow-300 text-sm md:text-base font-medium"
          >
            View all projects →
          </Link>
        </div>
      </div>

      {/* Latest Blog Posts Section */}
      <div className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">
          Latest Blog Posts
        </h2>
        <div className="space-y-4 md:space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              aria-label={`View details for blog post ${post.title}`}
              className="group block rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-[#2C2E31] border border-[#343a40] hover:border-yellow-400"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Text Section */}
                <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="h-0.5 md:h-1 w-6 md:w-8 bg-yellow-400 rounded mb-2 md:mb-3 opacity-70" />
                  <p className="text-gray-300 text-xs md:text-sm mb-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                {/* Image Section */}
                <div className="md:w-48 w-full h-32 md:h-auto relative flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-b-lg md:rounded-b-none md:rounded-r-xl"
                    sizes="(max-width: 768px) 100vw, 192px"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 md:mt-6">
          <Link
            href="/blog"
            className="text-yellow-400 hover:text-yellow-300 text-sm md:text-base font-medium"
          >
            View all blog posts →
          </Link>
        </div>
      </div>
    </main>
  );
}
