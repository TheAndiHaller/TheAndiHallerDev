'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
      const GA_MEASUREMENT_ID = 'G-LFJ79NDF82';

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);

      // Load the gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  return null;
} 