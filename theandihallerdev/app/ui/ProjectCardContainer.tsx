"use client";

import { useLanguage } from "@/app/LanguageContext";

export default function ProjectCardContainer({ children, }: { children: React.ReactNode; }) {
  const { language } = useLanguage();

  return (
    <div className="">
      <h1 className="text-xl font-bold">
        {language === "En" ? "Other projects:" : "Otros proyectos:"}
      </h1>
      {children}
    </div>
  );
}
