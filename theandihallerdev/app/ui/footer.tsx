"use client";
import { useLanguage } from "@/app/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="mt-auto text-center">
      <p className="text-xs mb-8">
        {language === "En"
          ? "© 2024 Andreas Haller. All Rights Reserved."
          : "© 2024 Andreas Haller. Todos los derechos reservados. "}
      </p>
    </footer>
  );
}