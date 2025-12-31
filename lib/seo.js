/**
 * SEO Utilities for MATRIMONY4U
 * Metadata generation, structured data, and canonical URLs
 */

import { SITE_CONFIG } from './config';

/**
 * Generate metadata for a page
 */
export function generatePageMetadata({
    title,
    description,
    keywords = [],
    canonicalPath = '',
    ogImage = '/og-image.jpg',
    noindex = false,
}) {
    const fullTitle = title === SITE_CONFIG.name
        ? `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`
        : `${title} | ${SITE_CONFIG.name}`;

    const canonical = `${SITE_CONFIG.url}${canonicalPath}`;

    return {
        title: fullTitle,
        description: description || SITE_CONFIG.description,
        keywords: [...SITE_CONFIG.keywords, ...keywords],

        // Open Graph
        openGraph: {
            title: fullTitle,
            description: description || SITE_CONFIG.description,
            url: canonical,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: `${SITE_CONFIG.url}${ogImage}`,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },

        // Twitter
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: description || SITE_CONFIG.description,
            images: [`${SITE_CONFIG.url}${ogImage}`],
            creator: SITE_CONFIG.twitter,
        },

        // Canonical
        alternates: {
            canonical,
        },

        // Robots
        ...(noindex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

/**
 * Generate metadata for a tool page
 */
export function generateToolMetadata({
    toolName,
    toolDescription,
    toolSlug,
    keywords = [],
    ogImage,
}) {
    return generatePageMetadata({
        title: toolName,
        description: toolDescription,
        keywords,
        canonicalPath: `/${toolSlug}/`,
        ogImage: ogImage || `/tools/${toolSlug}-og.jpg`,
    });
}

/**
 * Generate WebSite structured data
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/**
 * Generate WebApplication structured data for a tool
 */
export function generateToolSchema({
    name,
    description,
    url,
    applicationCategory = 'UtilityApplication',
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name,
        description,
        url: `${SITE_CONFIG.url}${url}`,
        applicationCategory,
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
        provider: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
        },
    };
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(breadcrumbs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: index === breadcrumbs.length - 1
                ? undefined
                : `${SITE_CONFIG.url}${crumb.path}`,
        })),
    };
}

/**
 * Generate Article/BlogPosting structured data
 */
export function generateArticleSchema({
    headline,
    description,
    url,
    datePublished,
    dateModified,
    authorName = `${SITE_CONFIG.name} Editorial Team`,
    image,
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        url: `${SITE_CONFIG.url}${url}`,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}/logo.png`,
            },
        },
        ...(image && {
            image: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}${image}`,
            },
        }),
    };
}

/**
 * Render JSON-LD script tag
 */
export function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
