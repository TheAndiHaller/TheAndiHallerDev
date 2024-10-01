"use client";

import { useLanguage } from "@/app/LanguageContext";
import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[600px] mx-auto">
        {language === "En" ? (
          // eslint-disable-next-line react/no-unescaped-entities
          <h1 className=" text-xl font-bold">Hi! I'm Andi</h1>
        ) : (
          <h1 className="text-xl font-bold">¡Hola! Soy Andi</h1>
        )}
        {language === "En" ? (
          <>
            <p>
              I&apos;m a <strong> programmer, maker, and designer </strong> with over
              six years of experience building projects, both for myself and as
              a freelancer. I thrive on learning and experimenting across
              various fields—embracing the idea of being a &quot;Jack of all trades,
              master of none.&quot;
            </p>
            <p>
              Currently, I&apos;m on a journey to make programming my full-time
              career, seeking to carve out my place in the tech world.
            </p>
          </>
        ) : (
          <>
            <p>
              Soy un <strong>programador, maker y diseñador</strong> con más de
              seis años de experiencia construyendo proyectos, tanto para mí
              mismo como freelancer. Disfruto aprender y experimentar en
              diversos campos, siendo un &quot;aprendiz de mucho, maestro de nada.&quot;
            </p>
            <p>
              En este momento, estoy en un camino para convertir la programación
              en mi carrera a tiempo completo, buscando forjar mi lugar en el
              mundo de la tecnología.
            </p>
          </>
        )}

        <h1 className="text-xl font-bold">
          {language === "En" ? "Working on " : "Projecto actual "}
          <a
            className="font-bold text-underline"
            href="https://trackeen.cl/"
            target="_blank"
            rel="noopener"
          >
            Trackeen
          </a>
        </h1>
        <p>
          {language === "En" ? (
            <span>
              Trackeen is a device designed to help you monitor your habits and
              track your personal growth through insightful data.
            </span>
          ) : (
            <span>
              Trackeen es un dispositivo diseñado para ayudarte a monitorear tus
              hábitos y seguir tu crecimiento personal a través de datos
              informativos. 
            </span>
          )}
          <br />
          <Link
            href="/projects"
            className="text-gray-300 font-bold text-underline "
          >
            {language === "En" ? "Learn more." : "Saber más."}
          </Link>
        </p>
        <h1 className="text-xl font-bold"> {language === "En" ? "Other projects:" : "Otros proyectos:"}</h1>

        <p>Project 2</p>
        <p>Project 3</p>
        <h1 className="text-xl font-bold"> {language === "En" ? "Blog:" : "Blog:"}</h1>
        <p>Blog post 1</p>
        <p>Blog post 2</p>
      </main>
      <Footer />
    </div>
  );
}
