'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type LanguageContextType = "En" | "Es";
const LanguageContext = createContext<LanguageContextType>("En");

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