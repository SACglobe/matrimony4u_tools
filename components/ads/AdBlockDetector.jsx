'use client';

import { useState, useEffect } from 'react';

/**
 * AdBlockDetector Component
 * Detects active ad blockers (e.g., uBlock Origin, AdBlock Plus, Brave Shield)
 * by verifying script loadability and DOM bait elements.
 * Displays a polite non-dismissible or dismissible overlay urging users to whitelist matrimony4u.com
 * to support 100% free matrimonial tools.
 */
export default function AdBlockDetector() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if ads are intentionally disabled in development
    if (process.env.NEXT_PUBLIC_DISABLE_ADS === 'true') {
      setChecking(false);
      return;
    }

    let detected = false;

    // Test 1: Bait element technique (Ad blockers hide elements with known ad classes)
    const bait = document.createElement('div');
    bait.className = 'ad-banner adsbox ad-placement pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads';
    bait.style.position = 'absolute';
    bait.style.top = '-9999px';
    bait.style.left = '-9999px';
    bait.style.width = '1px';
    bait.style.height = '1px';
    bait.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bait);

    const checkBait = () => {
      const isHidden = (
        bait.offsetParent === null ||
        bait.offsetHeight === 0 ||
        bait.offsetLeft === 0 ||
        bait.offsetTop === 0 ||
        bait.offsetWidth === 0 ||
        bait.clientHeight === 0 ||
        bait.clientWidth === 0 ||
        window.getComputedStyle(bait).getPropertyValue('display') === 'none' ||
        window.getComputedStyle(bait).getPropertyValue('visibility') === 'hidden'
      );
      if (isHidden) {
        detected = true;
      }
    };

    // Test 2: Network probe to a common ad script URL
    const checkNetwork = async () => {
      try {
        const testUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        const res = await fetch(new Request(testUrl, { method: 'HEAD', mode: 'no-cors' }));
      } catch (err) {
        // If request to known ad network fails, ad blocker is actively intercepting network requests
        detected = true;
      }
    };

    const runChecks = async () => {
      checkBait();
      await checkNetwork();
      if (document.body.contains(bait)) {
        document.body.removeChild(bait);
      }
      setIsBlocked(detected);
      setChecking(false);
    };

    const timer = setTimeout(runChecks, 1200);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(bait)) {
        document.body.removeChild(bait);
      }
    };
  }, []);

  if (checking || !isBlocked) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-center border-2 border-primary-100 animate-fade-in">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-xs">
          🛡️
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 mb-3">
          Ad Blocker Detected
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
          We provide all 11+ matrimonial calculators, legal guides, and wedding planning tools <strong>100% free</strong> without any subscription fees or sign-ups.
        </p>

        <div className="bg-neutral-50 rounded-xl p-4 text-left border border-neutral-200 mb-6 space-y-2 text-xs sm:text-sm text-neutral-700">
          <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
            <span>✨</span> How to continue using MATRIMONY4U:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Click your ad blocker extension icon in your browser toolbar</li>
            <li>Select <strong>&quot;Pause on this site&quot;</strong> or <strong>&quot;Disable for matrimony4u.com&quot;</strong></li>
            <li>Refresh the page to unlock full access</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
          >
            I Have Disabled AdBlock — Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
