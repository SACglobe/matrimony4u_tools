'use client';

import { useEffect } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

export default function AdsterraPopunder({ scriptUrl }) {
  const activeUrl = scriptUrl || ADSTERRA_CONFIG.units.popunderScriptUrl;
  const isEnabled = ADSTERRA_CONFIG.enabled && (
    process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_POPUNDER === 'true' ||
    Boolean(ADSTERRA_CONFIG.enablePopunder)
  );

  useEffect(() => {
    if (!isEnabled || !activeUrl) {
      return;
    }

    // Check if script already injected to avoid duplicates
    const existingScript = document.querySelector(`script[src="${activeUrl}"]`);
    if (existingScript) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = activeUrl;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.dataset.adsterra = 'popunder';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isEnabled, activeUrl]);

  return null;
}
