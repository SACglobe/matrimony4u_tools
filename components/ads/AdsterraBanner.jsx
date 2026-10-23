'use client';

import React, { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

const FORMAT_MAP = {
  '160x300': {
    width: 160,
    height: 300,
    defaultKey: ADSTERRA_CONFIG.units.banner_160x300.key,
  },
  '160x600': {
    width: 160,
    height: 600,
    defaultKey: ADSTERRA_CONFIG.units.banner_160x600.key,
  },
  '300x250': {
    width: 300,
    height: 250,
    defaultKey: ADSTERRA_CONFIG.units.banner_300x250.key,
  },
  '320x50': {
    width: 320,
    height: 50,
    defaultKey: ADSTERRA_CONFIG.units.mobile_320x50.key,
  },
  '468x60': {
    width: 468,
    height: 60,
    defaultKey: ADSTERRA_CONFIG.units.banner_468x60.key,
  },
  '728x90': {
    width: 728,
    height: 90,
    defaultKey: ADSTERRA_CONFIG.units.leaderboard_728x90.key,
  },
};

export default function AdsterraBanner({
  format = '300x250',
  adKey,
  className = '',
}) {
  const containerRef = useRef(null);
  const info = FORMAT_MAP[format] || FORMAT_MAP['300x250'];
  const activeKey = adKey || info.defaultKey;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeKey || activeKey.startsWith('default_')) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Clear any previous ad script or elements
    container.innerHTML = '';

    // Create an iframe to safely isolate Adsterra globals (atOptions) and avoid collisions
    const iframe = document.createElement('iframe');
    iframe.width = String(info.width);
    iframe.height = String(info.height);
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = 'Advertisement';

    container.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; background: transparent; }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key' : '${activeKey}',
                'format' : 'iframe',
                'height' : ${info.height},
                'width' : ${info.width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="https://bauval.org/22/${activeKey}"></script>
          </body>
        </html>
      `);
      doc.close();
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [activeKey, info.width, info.height]);

  if (!ADSTERRA_CONFIG.enabled) return null;

  return (
    <div className={`my-6 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div 
        ref={containerRef} 
        style={{ width: `${info.width}px`, minHeight: `${info.height}px` }} 
        className="flex items-center justify-center bg-neutral-50/50 rounded-lg border border-neutral-100/80 shadow-2xs"
      />
      <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Advertisement</span>
    </div>
  );
}
