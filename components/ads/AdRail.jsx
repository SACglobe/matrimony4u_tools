'use client';

import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { RailContext } from '@/components/ads/AdRailContext';

/**
 * Calm ad layout: on screens >= 1280px a dedicated right-hand column holds one sticky 300x250 ad.
 * Nothing overlays content and the slot has a fixed size, so there is no layout shift.
 * Below 1280px the column does not exist and the in-content banners behave as before.
 */
export default function AdRailShell({ children }) {
  return (
    <RailContext.Provider value>
      <div className="mx-auto w-full xl:grid xl:max-w-[1360px] xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-4 xl:px-4">
        <div className="min-w-0">{children}</div>
        <aside aria-label="Advertisement" className="hidden xl:block">
          <div className="sticky top-24 pt-6">
            <AdsterraBanner format="300x250" rail className="!my-0" />
          </div>
        </aside>
      </div>
    </RailContext.Provider>
  );
}
