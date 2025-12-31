import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog';
import { generatePageMetadata, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Marriage & Wedding Planning Blog - Expert Guides & Tips',
    description: 'Expert articles on Indian marriage laws, wedding planning, budgeting, cultural traditions, and relationship advice from MATRIMONY4U.',
    canonicalPath: '/blog/',
    keywords: ['indian wedding blog', 'marriage advice india', 'wedding planning tips', 'marriage laws india'],
});

export default function BlogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog/' },
    ]);

    const getCategoryColor = (category) => {
        const colors = {
            primary: 'bg-primary-100 text-primary-700',
            secondary: 'bg-secondary-100 text-secondary-700',
            accent: 'bg-accent-100 text-accent-700',
            purple: 'bg-purple-100 text-purple-700',
            pink: 'bg-pink-100 text-pink-700',
        };
        return colors[BLOG_CATEGORIES[category]?.color] || 'bg-neutral-100 text-neutral-700';
    };

    return (
        <>
            <Header />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Blog' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Marriage & Wedding Blog
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                                    Expert guides, legal insights, and practical tips for Indian marriages and weddings
                                </p>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-3 justify-center mb-12">
                                <Link
                                    href="/blog/"
                                    className="px-4 py-2 rounded-full bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors"
                                >
                                    All Posts
                                </Link>
                                {Object.values(BLOG_CATEGORIES).map(category => (
                                    <Link
                                        key={category.slug}
                                        href={`/blog/?category=${category.slug}`}
                                        className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-neutral-200 transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Blog Posts Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {BLOG_POSTS.map(post => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}/`}
                                        className="group bg-white rounded-xl border-2 border-neutral-100 hover:border-primary-300 transition-all hover:shadow-lg overflow-hidden"
                                    >
                                        {/* Image placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                                            <span className="text-6xl">📰</span>
                                        </div>

                                        <div className="p-6">
                                            {/* Category & Meta */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                                                    {BLOG_CATEGORIES[post.category]?.name}
                                                </span>
                                                <span className="text-xs text-neutral-500">{post.readTime}</span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                                <span className="text-xs text-neutral-500">
                                                    {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                <span className="text-primary-600 text-sm font-semibold group-hover:gap-2 inline-flex items-center transition-all">
                                                    Read More
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Newsletter Placeholder */}
                            <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center border-2 border-primary-100">
                                <h3 className="text-2xl font-display font-bold mb-3">Stay Updated</h3>
                                <p className="text-neutral-700 mb-4">
                                    Get the latest marriage planning tips and legal updates
                                </p>
                                <p className="text-sm text-neutral-600">
                                    Newsletter coming soon! Bookmark this page for regular updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
