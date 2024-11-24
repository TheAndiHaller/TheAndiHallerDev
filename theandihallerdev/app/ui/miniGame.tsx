'use client';

import { useLanguage } from "@/app/LanguageContext";

export default function Minigame() {
  const { language } = useLanguage();

  return (
    <div className="pb-10">
      <p>Start</p>
    </div>
  );
}