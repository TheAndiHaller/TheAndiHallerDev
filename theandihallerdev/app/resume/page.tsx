"use client";

import MarkdownRenderer from "@/app/ui/MarkdownRenderer";
import { useLanguage } from "@/app/LanguageContext";

export default function Page() {
  const { language } = useLanguage();

  return (
    <main className="sm:px-0 px-4">
      {language === "En" ? (
        <div>
          <h1 className="text-xl font-bold">
            <a href="/files/Andreas Haller Full Stack Web Developer resume.pdf" download>
              Download PDF
            </a>
          </h1>
          <MarkdownRenderer filePath={0} />
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold">
            <a href="/files/Andreas Haller Full Stack Web Developer CV.pdf" download>
              Descargar PDF
            </a>
          </h1>
          <MarkdownRenderer filePath={1} />
        </div>
      )}
    </main>
  );
}
