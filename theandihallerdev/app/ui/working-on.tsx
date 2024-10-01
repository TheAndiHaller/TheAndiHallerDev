'use client';

import { useLanguage } from "@/app/LanguageContext";
import Link from "next/link";

export default function WorkingOn() {
  const { language } = useLanguage();

  return (
    <div>
      <h1 className="text-xl font-bold pb-4">
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
    </div>
  );
}
