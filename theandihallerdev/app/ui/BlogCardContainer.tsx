
"use client";

import { useLanguage } from "@/app/LanguageContext";

export default function BlogCardContainer({ children, }: { children: React.ReactNode; }) {
  const { language } = useLanguage();

  return (
    <div className="">
      <h1 className="text-xl font-bold">
        {language === "En" ? "Blog:" : "Blog:"}
      </h1>
      {children}
    </div>
  );
}
