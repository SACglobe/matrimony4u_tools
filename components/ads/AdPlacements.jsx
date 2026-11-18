'use client';

import AdsterraBanner from '@/components/ads/AdsterraBanner';

/**
 * Standard in-content placements (fixed slots, labelled, lazy-loaded):
 * - ResultAd: directly under a tool. 728x90 on desktop, 300x250 on small screens.
 * - WideBanner: at the end of the page content, below the related-tools section. 728x90 on tablets/desktop,
 *   320x50 on phones.
 * The unused size is display:none, so it never loads.
 */
export function ResultAd({ className = '' }) {
  return (
    <div className={className}>
      <div className="hidden lg:flex justify-center">
        <AdsterraBanner format="728x90" />
      </div>
      <div className="flex lg:hidden justify-center">
        <AdsterraBanner format="300x250" />
      </div>
    </div>
  );
}

export function WideBanner({ className = '' }) {
  return (
    <div className={`container ${className}`}>
      <div className="hidden md:flex justify-center">
        <AdsterraBanner format="728x90" />
      </div>
      <div className="flex md:hidden justify-center">
        <AdsterraBanner format="320x50" />
      </div>
    </div>
  );
}
