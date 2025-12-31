export default async function sitemap() {
    const baseUrl = 'https://matrimony4u.com'; // Update with actual domain when deployed

    // Static pages
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

    // Tool pages
    const tools = [
        { url: '/legal-marriage-age-india', priority: 0.9 },
        { url: '/wedding-budget-calculator', priority: 0.9 },
        { url: '/age-difference-calculator', priority: 0.9 },
        { url: '/marriage-registration-documents', priority: 0.9 },
        { url: '/kundli-matching', priority: 0.9 },
    ];

    // Category pages
    const categories = [
        { url: '/legal-eligibility', priority: 0.8 },
        { url: '/wedding-planning', priority: 0.8 },
        { url: '/financial-planning', priority: 0.8 },
        { url: '/cultural-traditions', priority: 0.8 },
        { url: '/compatibility-assessment', priority: 0.8 },
    ];

    // Blog posts
    const blogPosts = [
        { url: '/blog/legal-marriage-age-india-explained', date: '2025-01-01' },
        { url: '/blog/indian-wedding-budget-breakdown', date: '2025-01-02' },
        { url: '/blog/marriage-registration-process-guide', date: '2025-01-03' },
        { url: '/blog/age-difference-marriage-significance', date: '2025-01-04' },
        { url: '/blog/kundli-matching-modern-perspective', date: '2025-01-05' },
    ];

    // Combine all URLs
    const allPages = [
        ...staticPages.map(page => ({
            url: `${baseUrl}${page.url}`,
            lastModified: new Date(),
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        })),
        ...tools.map(tool => ({
            url: `${baseUrl}${tool.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: tool.priority,
        })),
        ...categories.map(cat => ({
            url: `${baseUrl}${cat.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: cat.priority,
        })),
        ...blogPosts.map(post => ({
            url: `${baseUrl}${post.url}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly',
            priority: 0.7,
        })),
    ];

    return allPages;
}
