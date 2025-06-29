'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const asPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const isSpanish = asPath.startsWith('/es');
    // Handle homepage explicitly
    const togglePath = isSpanish
      ? asPath === '/es'
        ? '/' // Spanish homepage to English homepage
        : asPath.replace('/es', '') // Other Spanish pages to English
      : asPath === '/'
        ? '/es' // English homepage to Spanish homepage
        : `/es${asPath}`; // Other English pages to Spanish

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-[700px] mx-auto mb-24">
        <div className="flex justify-end sm:justify-between w-full h-16">
          <div className="flex items-center size-full sm:size-auto pl-6 sm:px-0">
            <Link href={ !isSpanish ? "/" : "/es" } className="text-white font-bold text-xl pr-6 sm:px-0">
              TheAndiHaller
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              title="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-12">
            <Link href={ !isSpanish ? "/projects" : "/es/projects" }  className="text-gray-300 text-underline">
              { !isSpanish ? "Projects" : "Proyectos" }
            </Link>
            <Link href={ !isSpanish ? "/blog" : "/es/blog" } className="text-gray-300 text-underline">
              { !isSpanish ? "Blog" : "Blog" }
            </Link>
            <Link href={ !isSpanish ? "/resume" : "/es/resume" } className="text-gray-300 text-underline">
              { !isSpanish ? "Resume" : "Mi CV" }
            </Link>
          </div>
          <div className="flex items-center px-6 sm:px-0">
            <Link
              type='button'
              href={togglePath}
              className="w-10 h-10 bg-gray-700 text-white text-lg font-semibold flex items-center justify-center rounded-md hover:bg-gray-600 "
            >
              {!isSpanish ? "Es" : "En" }
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-left bg-gray-700 rounded-md absolute top-16 right-24 opacity-90">
            <Link href={ !isSpanish ? "/projects" : "/es/projects" } className="block text-gray-300">
              { !isSpanish ? "Projects" : "Proyectos" }
            </Link>
            <Link href={ !isSpanish ? "/blog" : "/es/blog" } className="block text-gray-300">
              { !isSpanish ? "Blog" : "Blog" }
            </Link>
            <Link href={ !isSpanish ? "/resume" : "/es/resume" } className="block text-gray-300">
              { !isSpanish ? "Resume" : "Mi CV" }
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};