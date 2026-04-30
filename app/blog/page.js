import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BlogListClient from '@/components/blog/BlogListClient';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog';
import { generatePageMetadata, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Marriage & Wedding Planning Blog - Expert Guides & Tips',
    description: 'Expert articles on Indian marriage laws, wedding planning, budgeting, cultural traditions, and relationship advice from MATRIMONY4U.',
    canonicalPath: '/blog',
    keywords: ['indian wedding blog', 'marriage advice india', 'wedding planning tips', 'marriage laws india'],
});

export default function BlogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog/' },
    ]);

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

                            {/* Client-side Filterable List */}
                            <BlogListClient 
                                posts={BLOG_POSTS} 
                                categories={BLOG_CATEGORIES} 
                            />

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
