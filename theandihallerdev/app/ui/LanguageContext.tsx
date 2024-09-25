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




/*
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

//type LanguageContextType = "En" | "Es";
//const LanguageContext = createContext<LanguageContextType>("En");

type LanguageContextType = {
    language: string;
    setLanguage: (language: string) => void;
  };
  
  const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode; }) {
    const [language, setLanguage] = useState('En');
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'En' ? 'Es' : 'En'));
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

*/



/*
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('En');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;

};
*/