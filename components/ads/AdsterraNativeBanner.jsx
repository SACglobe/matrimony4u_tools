'use client';

import React, { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

export default function AdsterraNativeBanner({ className = '' }) {
  const containerRef = useRef(null);
  const scriptUrl = ADSTERRA_CONFIG.units.nativeBannerScriptUrl;
  const containerId = ADSTERRA_CONFIG.units.nativeBannerContainerId;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !scriptUrl) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Create the container element expected by Adsterra
    container.innerHTML = `<div id="${containerId}"></div>`;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [scriptUrl, containerId]);

  if (!ADSTERRA_CONFIG.enabled) return null;

  return (
    <div className={`my-8 flex flex-col items-center justify-center w-full ${className}`}>
      <div ref={containerRef} className="w-full min-h-[100px] flex justify-center" />
      <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Sponsored Content</span>
    </div>
  );
}
