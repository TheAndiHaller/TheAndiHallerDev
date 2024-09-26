'use client';

import { useLanguage } from '@/app/ui/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();

    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
         <p className='text-xs'> {language === "En" ? "© 2024 Andreas Haller. All Rights Reserved." : "© 2024 Andreas Haller. Todos los derechos reservados. "}</p>
        </footer>
    );
};