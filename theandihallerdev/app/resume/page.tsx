"use client";

import MarkdownRenderer from "@/app/ui/MarkdownRenderer";
import { useLanguage } from "@/app/LanguageContext";

export default function Page() {
  const { language } = useLanguage();

  return (
    <main>
      {language === "En" ? (
        <div>
          <h1 className="text-xl font-bold">My resume</h1>
          <a href="/files/resume_en.pdf" download>
            Download PDF
          </a>
          <MarkdownRenderer filePath={0} />
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold">Mi CV</h1>
          <a href="/files/resume_es.pdf" download>
            Descargar PDF
          </a>
          <MarkdownRenderer filePath={1} />
        </div>
      )}
    </main>
  );
}
