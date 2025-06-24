'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    hj: any;
    _hjSettings: any;
  }
}

export default function Hotjar() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const siteId = 6443751;
      const hotjarVersion = 6;

      // Initialize Hotjar
      (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
        h.hj = h.hj || function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
        h._hjSettings = { hjid: siteId, hjsv: hotjarVersion };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }, []);

  return null;
} 