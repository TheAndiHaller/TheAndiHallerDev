'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    hj: ((...args: unknown[]) => void) & {
      q?: unknown[][];
    };
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

export default function Hotjar() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const siteId = 6443751;
      const hotjarVersion = 6;

      // Initialize Hotjar
      (function(h: Window, o: Document, t: string, j: string, a?: HTMLElement, r?: HTMLScriptElement) {
        h.hj = h.hj || function(...args: unknown[]) {
          (h.hj.q = h.hj.q || []).push(args);
        };
        h._hjSettings = { hjid: siteId, hjsv: hotjarVersion };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = true;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }, []);

  return null;
} 