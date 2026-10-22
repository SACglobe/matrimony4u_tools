import fs from 'fs';
import path from 'path';

// Static base categories
export const BLOG_CATEGORIES = {
    legal: { name: 'Legal & Compliance', slug: 'legal', color: 'primary' },
    planning: { name: 'Wedding Planning', slug: 'planning', color: 'secondary' },
    finance: { name: 'Financial Planning', slug: 'finance', color: 'accent' },
    culture: { name: 'Cultural Traditions', slug: 'culture', color: 'purple' },
    relationships: { name: 'Relationships', slug: 'relationships', color: 'pink' },
};

export const HARDCODED_BLOG_POSTS = [
    {
        slug: 'legal-marriage-age-india-explained',
        title: 'Legal Marriage Age in India: Complete Guide for 2025',
        excerpt: 'Everything you need to know about minimum marriage age laws in India, state variations, penalties for underage marriage, and recent legal changes.',
        category: 'legal',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-01',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'indian-wedding-budget-breakdown',
        title: 'Indian Wedding Budget Breakdown: Complete Cost Guide',
        excerpt: 'Detailed breakdown of wedding costs in India by ceremony, city-wise comparisons, cost-saving tips, and realistic budget allocation strategies.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-02',
        readTime: '10 min read',
        image: null,
    },
    {
        slug: 'marriage-registration-process-guide',
        title: 'Marriage Registration in India: Step-by-Step Complete Guide',
        excerpt: 'Complete guide to registering your marriage in India. Documents required, online vs offline process, fees, and state-wise portal links.',
        category: 'legal',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-03',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'age-difference-marriage-significance',
        title: 'Age Difference in Marriage: What Does Research & Indian Culture Say?',
        excerpt: 'Explore the psychological, social, and cultural aspects of age gaps in Indian marriages. What science says and how modern couples navigate it.',
        category: 'relationships',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-04',
        readTime: '7 min read',
        image: null,
    },
    {
        slug: 'kundli-matching-modern-perspective',
        title: 'Kundli Matching for Marriage: Modern Perspective & 36 Guna Guide',
        excerpt: 'Understanding Ashta Koota matching, Manglik dosha myths and realities, and balancing traditional astrology with modern relationship compatibility.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-05',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'hindu-wedding-rituals-complete-guide',
        title: 'Hindu Wedding Rituals: Meaning, Significance & Complete Guide',
        excerpt: 'Deep dive into sacred Hindu marriage rituals from Kanyadaan to Saptapadi. Understand the Vedic meaning behind each ceremony.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-06',
        readTime: '11 min read',
        image: null,
    },
    {
        slug: 'regional-wedding-customs-comparison',
        title: 'Regional Wedding Customs Across India: North vs South vs East vs West',
        excerpt: 'Explore the rich diversity of Indian weddings across regions. Compare traditions, attire, ceremonies, and feast cultures across Indian states.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-07',
        readTime: '10 min read',
        image: null,
    },
    {
        slug: 'wedding-budget-city-wise-breakdown',
        title: 'Wedding Budget by City: Delhi vs Mumbai vs Bangalore vs Chennai',
        excerpt: 'Compare wedding costs across major Indian metros. Venue rentals, catering rates, vendor costs, and city-specific budgeting strategies.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-08',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'pre-wedding-ceremonies-explained',
        title: 'Pre-Wedding Ceremonies: Roka, Sagai, Mehendi, Haldi & Sangeet Guide',
        excerpt: 'Complete timeline and planning guide for Indian pre-wedding ceremonies. Traditions, modern trends, budgeting, and coordination tips.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-09',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'wedding-venue-selection-guide',
        title: 'How to Choose the Perfect Wedding Venue: 15-Point Checklist',
        excerpt: 'Essential checklist for selecting a wedding venue in India. Capacity, catering rules, hidden costs, parking, and questions to ask before booking.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-10',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'indian-wedding-photography-guide',
        title: 'Indian Wedding Photography: Styles, Packages & Hiring Guide',
        excerpt: 'Traditional vs candid photography, cinematography, drone shots, pre-wedding shoots. How to choose the right photographer within your budget.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-11',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'bridal-trousseau-essential-guide',
        title: 'Bridal Trousseau Planning: Complete Checklist for Indian Brides',
        excerpt: 'From sarees and lehengas to jewelry, makeup, and footwear — a comprehensive packing checklist for every bride planning her wedding trousseau.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-12',
        readTime: '7 min read',
        image: null,
    },
    {
        slug: 'destination-wedding-planning-india',
        title: 'Destination Wedding in India: Top Locations, Budget & Planning Guide',
        excerpt: 'Udaipur, Goa, Jaipur, Kerala, or Jim Corbett? Discover top destination wedding locations in India, realistic costs, and logistics management tips.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-13',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'wedding-entertainment-music-guide',
        title: 'Wedding Entertainment: DJ, Live Music, Dhol & Sangeet Performances',
        excerpt: 'How to curate the perfect entertainment line-up for your wedding celebrations. Sangeet choreography, DJ vs live band, and sound permissions.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-14',
        readTime: '7 min read',
        image: null,
    },
    {
        slug: 'post-wedding-rituals-traditions',
        title: 'Post-Wedding Rituals in India: Vidaai, Griha Pravesh & Pag Phera',
        excerpt: 'The emotional and cultural significance of post-wedding ceremonies across Indian communities. Vidaai customs, welcoming the bride, and early days.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-15',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'tamil-6-month-marriage-planning-guide',
        title: 'தமிழ் திருமண திட்டமிடல்: 6 மாத கால அட்டவணை மற்றும் முழுமையான வழிகாட்டி',
        excerpt: 'தமிழ் முறைப்படி திருமணம் செய்ய திட்டமிடுகிறீர்களா? மண்டபம் முன்பதிவு முதல் முகூர்த்தப் புடவை எடுப்பது வரை 6 மாதங்களுக்கான முழுமையான வழிகாட்டி.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-20',
        readTime: '15 min read',
        image: null,
    },
    {
        slug: 'tamil-traditional-marriage-rituals-kasi-yatra',
        title: 'தமிழ் திருமண சடங்குகள்: காசி யாத்திரை முதல் ஊஞ்சல் வரை அர்த்தமும் முக்கியத்துவமும்',
        excerpt: 'தமிழ் பாரம்பரிய திருமணத்தில் செய்யப்படும் ஒவ்வொரு சடங்கிற்குப் பின்னாலும் இருக்கும் ஆன்மீக மற்றும் உளவியல் உண்மைகள்.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-21',
        readTime: '14 min read',
        image: null,
    },
    {
        slug: 'tamil-subha-muhurtham-selection-panchangam',
        title: 'சுப முகூர்த்த நாட்கள் தேர்ந்தெடுப்பது எப்படி? வாக்கிய பஞ்சாங்க அடிப்படை விதிகள்',
        excerpt: 'திருமணத்திற்கான சுப முகூர்த்தம், லக்னம், மற்றும் வளர்பிறை முகூர்த்தங்களை வாக்கிய பஞ்சாங்கத்தின் அடிப்படையில் தேர்ந்தெடுக்கும் முறை.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-22',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'tamil-wedding-budget-planning-tips',
        title: 'திருமணத்திற்கான பட்ஜெட் திட்டமிடல்: தேவையற்ற செலவுகளை குறைப்பதற்கான வழிகள்',
        excerpt: 'திருமணச் செலவுகளை எப்படி சரியாக திட்டமிடுவது, பட்ஜெட்டை மீறாமல் எப்படி நிர்வகிப்பது என்பதற்கான நடைமுறை ஆலோசனைகள்.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-23',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'tamil-marriage-porutham-importance',
        title: 'பொருத்தம் பார்த்தல்: திருமணத்திற்கான பத்து பொருத்தங்களின் முக்கியத்துவமும் அறிவியல் பார்வையும்',
        excerpt: 'தினப் பொருத்தம் முதல் நாடிப் பொருத்தம் வரையிலான 10 பொருத்தங்கள் ஏன் பார்க்கப்படுகின்றன? அவற்றின் உண்மையான நோக்கம் என்ன?',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-24',
        readTime: '13 min read',
        image: null,
    },
];

// Helper to discover and read generated AI articles from data/articles/
function getGeneratedArticles() {
    try {
        const articlesDir = path.join(process.cwd(), 'data', 'articles');
        if (!fs.existsSync(articlesDir)) {
            return [];
        }
        const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
        return files.map(file => {
            try {
                const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
                return JSON.parse(raw);
            } catch (err) {
                console.error(`Error loading generated article ${file}:`, err);
                return null;
            }
        }).filter(Boolean);
    } catch {
        return [];
    }
}

// Combined blog posts list (AI articles + Hardcoded posts)
export function getCombinedBlogPosts() {
    const generated = getGeneratedArticles();
    const hardcodedSlugs = new Set(HARDCODED_BLOG_POSTS.map(p => p.slug));
    const uniqueGenerated = generated.filter(p => !hardcodedSlugs.has(p.slug));
    return [...HARDCODED_BLOG_POSTS, ...uniqueGenerated];
}

export const BLOG_POSTS = getCombinedBlogPosts();

// Get blog post by slug (supports both hardcoded and generated JSON)
export function getBlogPost(slug) {
    // Check hardcoded first
    const hardcoded = HARDCODED_BLOG_POSTS.find(post => post.slug === slug);
    if (hardcoded) return hardcoded;

    // Check data/articles/
    try {
        const filePath = path.join(process.cwd(), 'data', 'articles', `${slug}.json`);
        if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(raw);
        }
    } catch (e) {
        console.error(`Error reading article file for slug ${slug}:`, e);
    }

    return null;
}

// Get all blog posts (optionally filtered by category)
export function getAllBlogPosts(category = null) {
    const posts = getCombinedBlogPosts();
    if (category) {
        return posts.filter(post => post.category === category);
    }
    return posts;
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug, limit = 3) {
    const currentPost = getBlogPost(currentSlug);
    if (!currentPost) return [];

    const posts = getCombinedBlogPosts();
    return posts
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}

// Get category info
export function getCategoryInfo(slug) {
    return Object.values(BLOG_CATEGORIES).find(cat => cat.slug === slug);
}
