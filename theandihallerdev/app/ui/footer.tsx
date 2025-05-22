'use client';

import { usePathname } from "next/navigation";

export default function Footer() {
  const asPath = usePathname();

  const isSpanish = asPath.startsWith('/es');

  return (
    <footer className="mt-auto text-center">
      <p className="text-xs mb-8">
        {isSpanish
          ? "© 2024 Andreas Haller. Todos los derechos reservados. "
          : "© 2024 Andreas Haller. All Rights Reserved."}
      </p>
    </footer>
  );
}