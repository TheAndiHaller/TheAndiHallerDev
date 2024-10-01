'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type LanguageContextType = {
  language: "En" | "Es";
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "En",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"En" | "Es">("En");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "En" ? "Es" : "En"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
