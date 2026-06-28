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

                            {/* Newsletter signup & Blog Details */}
                            <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center border-2 border-primary-100">
                                <h3 className="text-2xl font-display font-bold mb-3">Subscribe to Our Newsletter</h3>
                                <p className="text-neutral-700 mb-6">
                                    Get the latest marriage planning tips, legal updates, and wedding planning guides delivered directly to your inbox.
                                </p>
                                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                                    <input type="email" required placeholder="Enter your email address" className="flex-grow px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white" />
                                    <button type="submit" className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors">
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Rich Contextual Content to support AdSense requirements */}
                            <div className="mt-12 prose prose-neutral max-w-none border-t border-neutral-200 pt-8 text-neutral-700">
                                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Indian Marriage & Wedding Planning Insights</h2>
                                <p className="mb-4">
                                    Welcome to the MATRIMONY4U wedding and marriage resources directory. Planning a wedding in India involves navigating a complex web of cultural traditions, legal requirements, and financial commitments. Our editorial team compiles detailed guides to simplify every stage of this journey for prospective couples and their families.
                                </p>
                                <p className="mb-4">
                                    Our content covers key areas of planning:
                                </p>
                                <ul className="list-disc pl-5 mb-4 space-y-2">
                                    <li><strong>Legal Eligibility & Registration:</strong> Detailed checklists for the Hindu Marriage Act, Special Marriage Act, and required registration forms across Indian states.</li>
                                    <li><strong>Budgeting and Financial Safety:</strong> Learn how to calculate expenses, split wedding budgets equitably, and save for your big day without getting into heavy debt.</li>
                                    <li><strong>Cultural Ceremonies:</strong> Guides exploring the scientific and historical significance of regional wedding rituals, Kundli matching, and traditional auspicious timelines.</li>
                                </ul>
                                <p className="mb-4">
                                    All of our checklists and calculators are developed in collaboration with relationship experts and legal advisors to ensure maximum accuracy and practical utility. Bookmark this page to stay updated on modern matchmaking guidelines and legal changes.
                                </p>
                                <p>
                                    As weddings evolve in the digital age, we strive to bring you a mix of traditional wisdom and modern utility. Whether you are checking your legal eligibility, trying to plan a budget that splits costs fairly between families, or trying to understand the nuances of a particular ceremony like the Oonjal or Kasi Yatra, our blog offers step-by-step guides written by experts.
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
