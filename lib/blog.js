// Blog post data structure and management
export const BLOG_CATEGORIES = {
    legal: { name: 'Legal & Compliance', slug: 'legal', color: 'primary' },
    planning: { name: 'Wedding Planning', slug: 'planning', color: 'secondary' },
    finance: { name: 'Financial Planning', slug: 'finance', color: 'accent' },
    culture: { name: 'Cultural Traditions', slug: 'culture', color: 'purple' },
    relationships: { name: 'Relationships', slug: 'relationships', color: 'pink' },
};

export const BLOG_POSTS = [
    {
        slug: 'legal-marriage-age-india-explained',
        title: 'Legal Marriage Age in India: Complete Guide for 2025',
        excerpt: 'Everything you need to know about minimum marriage age laws in India, state variations, penalties for underage marriage, and recent legal changes.',
        category: 'legal',
        author: 'MATRIMONY4U Editorial Team',
        publishDate: '2025-01-01',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'indian-wedding-budget-breakdown',
        title: 'Indian Wedding Budget Breakdown: Complete Cost Guide',
        excerpt: 'Detailed breakdown of wedding costs in India by ceremony, city-wise comparisons, cost-saving tips, and realistic budget allocation strategies.',
        category: 'finance',
        author: 'MATRIMONY4U Editorial Team',
        publishDate: '2025-01-02',
        readTime: '10 min read',
        image: null,
    },
    {
        slug: 'marriage-registration-process-guide',
        title: 'Marriage Registration in India: Step-by-Step Process',
        excerpt: 'Complete guide to marriage registration across Indian states, required documents, timelines, fees, and common mistakes to avoid.',
        category: 'legal',
        author: 'MATRIMONY4U Editorial Team',
        publishDate: '2025-01-03',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'age-difference-marriage-significance',
        title: 'Age Difference in Marriage: What Research Says',
        excerpt: 'Scientific research on age gaps in marriages, cultural perspectives in India, and practical considerations for different age differences.',
        category: 'relationships',
        author: 'MATRIMONY4U Editorial Team',
        publishDate: '2025-01-04',
        readTime: '7 min read',
        image: null,
    },
    {
        slug: 'kundli-matching-modern-perspective',
        title: 'Kundli Matching: Balancing Tradition and Modern Thinking',
        excerpt: 'Understanding Ashtakoot Kundli matching system, its cultural significance, scientific perspective, and how modern couples approach it.',
        category: 'culture',
        author: 'MATRIMONY4U Editorial Team',
        publishDate: '2025-01-05',
        readTime: '9 min read',
        image: null,
    },
];

// Get blog post by slug
export function getBlogPost(slug) {
    return BLOG_POSTS.find(post => post.slug === slug);
}

// Get all blog posts (optionally filtered by category)
export function getAllBlogPosts(category = null) {
    if (category) {
        return BLOG_POSTS.filter(post => post.category === category);
    }
    return BLOG_POSTS;
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug, limit = 3) {
    const currentPost = getBlogPost(currentSlug);
    if (!currentPost) return [];

    return BLOG_POSTS
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}

// Get category info
export function getCategoryInfo(slug) {
    return Object.values(BLOG_CATEGORIES).find(cat => cat.slug === slug);
}
