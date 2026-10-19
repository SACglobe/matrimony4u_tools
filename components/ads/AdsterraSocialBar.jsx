'use client';

import { useEffect } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

export default function AdsterraSocialBar({ scriptUrl }) {
  const activeUrl = scriptUrl || ADSTERRA_CONFIG.units.socialBarScriptUrl;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeUrl) {
      return;
    }

    // Check if script already injected to avoid duplicates
    const existingScript = document.querySelector(`script[src="${activeUrl}"]`);
    if (existingScript) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = activeUrl;
    script.async = true;
    script.dataset.adsterra = 'social-bar';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [activeUrl]);

  return null;
}
