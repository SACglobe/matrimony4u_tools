'use client';

import { useState, useEffect } from 'react';

const KEY = 'm4u_adblock_notice_dismissed';

/**
 * Soft, dismissible notice. It never blocks the page: a false positive (Brave, DNS blockers,
 * a flaky request) must not lock a visitor out of a free tool.
 */
export default function AdBlockDetector() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DISABLE_ADS === 'true') return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {
      // storage unavailable: still run the check
    }

    const timer = setTimeout(() => {
      // Bait element with common ad classes that cosmetic filters hide
      const bait = document.createElement('div');
      bait.className = 'adsbox ad-placement pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
      bait.setAttribute('aria-hidden', 'true');
      bait.style.cssText = 'position:absolute!important;top:-9999px!important;left:-9999px!important;width:1px!important;height:1px!important;';
      document.body.appendChild(bait);

      window.setTimeout(() => {
        const style = window.getComputedStyle(bait);
        const hidden = bait.offsetHeight === 0 || bait.clientHeight === 0 || style.display === 'none' || style.visibility === 'hidden';
        bait.remove();
        setBlocked(hidden);
      }, 150);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // ignore
    }
    setBlocked(false);
  };

  if (!blocked) return null;

  return (
    <div
      role="status"
      className="fixed left-3 right-3 bottom-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-white rounded-2xl shadow-xl border border-neutral-200 p-4"
    >
      <p className="text-sm text-neutral-700 leading-relaxed">
        Matrimony4U&apos;s tools are <strong>free</strong>. Small ads keep them that way. If you can, please pause your ad blocker for this site. Thank you!
      </p>
      <button
        onClick={dismiss}
        className="mt-3 w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}
