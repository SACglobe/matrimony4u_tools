import { BLOG_POSTS } from '@/lib/blog';
import { regionalGuides } from '@/lib/data/regionalGuides';

export const revalidate = 604800; // 7 days (weekly revalidation)

export default async function sitemap() {
    const baseUrl = 'https://matrimony4u.com';

    // Static pages (8)
    const staticPages = [
        { url: '', changeFrequency: 'weekly', priority: 1.0 },
        { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/contact', changeFrequency: 'monthly', priority: 0.8 },
        { url: '/privacy-policy', changeFrequency: 'monthly', priority: 0.5 },
        { url: '/terms-of-service', changeFrequency: 'monthly', priority: 0.5 },
        { url: '/disclaimer', changeFrequency: 'monthly', priority: 0.5 },
        { url: '/tools', changeFrequency: 'weekly', priority: 0.9 },
        { url: '/blog', changeFrequency: 'weekly', priority: 0.9 },
    ];

    // Tool pages (10)
    const tools = [
        { url: '/legal-marriage-age-india', priority: 0.9 },
        { url: '/wedding-budget-calculator', priority: 0.9 },
        { url: '/age-difference-calculator', priority: 0.9 },
        { url: '/marriage-registration-documents', priority: 0.9 },
        { url: '/kundli-matching', priority: 0.9 },
        { url: '/marriage-eligibility-checker', priority: 0.9 },
        { url: '/wedding-savings-calculator', priority: 0.9 },
        { url: '/wedding-expense-split-calculator', priority: 0.9 },
        { url: '/marriage-date-calculator', priority: 0.9 },
        { url: '/wedding-guest-list-planner', priority: 0.9 },
        { url: '/wedding-timeline-planner', priority: 0.9 },
    ];

    // Category pages (5)
    const categories = [
        { url: '/legal-eligibility', priority: 0.8 },
        { url: '/wedding-planning', priority: 0.8 },
        { url: '/financial-planning', priority: 0.8 },
        { url: '/cultural-traditions', priority: 0.8 },
        { url: '/compatibility-assessment', priority: 0.8 },
    ];

    // Regional guides (3)
    const regionalPages = regionalGuides.map((guide) => ({
        url: `${baseUrl}/registration/${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Blog posts (20)
    const blogPageEntries = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishDate ? new Date(post.publishDate) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Combine all 46 URLs
    const allPages = [
        ...staticPages.map((page) => ({
            url: `${baseUrl}${page.url}`,
            lastModified: new Date(),
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        })),
        ...tools.map((tool) => ({
            url: `${baseUrl}${tool.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: tool.priority,
        })),
        ...categories.map((cat) => ({
            url: `${baseUrl}${cat.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: cat.priority,
        })),
        ...regionalPages,
        ...blogPageEntries,
    ];

    return allPages;
}
