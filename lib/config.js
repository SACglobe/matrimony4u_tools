/**
 * MATRIMONY4U - Site Configuration
 * Central configuration for domain, branding, and environment settings
 */

const isProd = process.env.NODE_ENV === 'production';

export const SITE_CONFIG = {
    // Domain Configuration (Dynamic - ready for .com or .in)
    domain: process.env.NEXT_PUBLIC_DOMAIN || 'matrimony4u.in',
    url: isProd
        ? `https://${process.env.NEXT_PUBLIC_DOMAIN || 'matrimony4u.in'}`
        : 'http://localhost:3000',

    // Branding
    name: 'MATRIMONY4U',
    tagline: 'Your Trusted Matrimonial Planning Companion',
    description: 'India\'s premier platform for marriage planning tools and guidance. Free calculators, legal guides, and wedding planning resources for couples and families.',

    // SEO
    keywords: [
        'indian marriage tools',
        'wedding planning calculator',
        'marriage registration india',
        'legal marriage age india',
        'wedding budget calculator',
        'matrimonial planning',
        'marriage eligibility checker'
    ],

    // Social
    twitter: '@matrimony4u',

    // Contact
    email: 'contact@matrimony4u.in',

    // AdSense
    adsenseId: process.env.NEXT_PUBLIC_ADSENSE_ID || '',

    // Analytics
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
};

// Tool Categories
export const TOOL_CATEGORIES = [
    {
        id: 'legal-eligibility',
        name: 'Legal & Eligibility',
        description: 'Verify legal requirements, age eligibility, and documentation for marriage in India.',
        icon: '⚖️',
        slug: 'legal-eligibility',
    },
    {
        id: 'wedding-planning',
        name: 'Wedding Planning',
        description: 'Budget calculators, guest list planners, and timeline tools for your perfect wedding.',
        icon: '💍',
        slug: 'wedding-planning',
    },
    {
        id: 'financial-planning',
        name: 'Financial Planning',
        description: 'Wedding savings calculators, expense splitting tools, and vendor budgeting.',
        icon: '💰',
        slug: 'financial-planning',
    },
    {
        id: 'date-timing',
        name: 'Date & Timing',
        description: 'Auspicious date calculators and wedding timeline planners.',
        icon: '📅',
        slug: 'date-timing',
    },
    {
        id: 'compatibility',
        name: 'Age & Compatibility',
        description: 'Age difference calculators and compatibility analysis tools.',
        icon: '💑',
        slug: 'compatibility',
    },
    {
        id: 'cultural-traditional',
        name: 'Cultural & Traditional',
        description: 'Kundli matching, nakshatra compatibility, and traditional marriage tools.',
        icon: '🕉️',
        slug: 'cultural-traditional',
    },
];

// Top Tools (for homepage feature)
export const FEATURED_TOOLS = [
    'legal-marriage-age-india',
    'wedding-budget-calculator',
    'marriage-registration-documents',
    'age-difference-calculator',
    'marriage-date-calculator',
    'wedding-guest-list-planner',
];

// Country Configuration (Phase 2+)
export const COUNTRIES = {
    IN: {
        code: 'IN',
        name: 'India',
        currency: 'INR',
        currencySymbol: '₹',
        locale: 'en-IN',
        path: '/in',
    },
    US: {
        code: 'US',
        name: 'United States',
        currency: 'USD',
        currencySymbol: '$',
        locale: 'en-US',
        path: '/us',
    },
    UK: {
        code: 'UK',
        name: 'United Kingdom',
        currency: 'GBP',
        currencySymbol: '£',
        locale: 'en-GB',
        path: '/uk',
    },
    CA: {
        code: 'CA',
        name: 'Canada',
        currency: 'CAD',
        currencySymbol: '$',
        locale: 'en-CA',
        path: '/ca',
    },
    AU: {
        code: 'AU',
        name: 'Australia',
        currency: 'AUD',
        currencySymbol: '$',
        locale: 'en-AU',
        path: '/au',
    },
};

// Default country
export const DEFAULT_COUNTRY = 'IN';
