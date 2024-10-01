'use client';

import { useLanguage } from "@/app/LanguageContext";

export default function Bio() {
  const { language } = useLanguage();

  return (
    <div>
      <h1 className=" text-xl font-bold pb-4">
        {language === "En" ? "Hi! I'm Andi" : "¡Hola! Soy Andi"}
      </h1>
      {language === "En" ? (
        <div>
          <p>
            I&apos;m a <strong> programmer, maker, and designer </strong> with
            over six years of experience building projects, both for myself and
            as a freelancer. I thrive on learning and experimenting across
            various fields—embracing the idea of being a &quot;Jack of all
            trades, master of none.&quot;
          </p>
          <p>
            Currently, I&apos;m on a journey to make programming my full-time
            career, seeking to carve out my place in the tech world.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Soy un <strong>programador, maker y diseñador</strong> con más de
            seis años de experiencia construyendo proyectos, tanto para mí mismo
            como freelancer. Disfruto aprender y experimentar en diversos
            campos, siendo un &quot;aprendiz de mucho, maestro de nada.&quot;
          </p>
          <p>
            En este momento, estoy en un camino para convertir la programación
            en mi carrera a tiempo completo, buscando forjar mi lugar en el
            mundo de la tecnología.
          </p>
        </div>
      )}
    </div>
  );
}