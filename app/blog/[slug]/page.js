import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { notFound } from 'next/navigation';
import { getCombinedBlogPosts, getBlogPost, getRelatedPosts, BLOG_CATEGORIES } from '@/lib/blog';
import { generatePageMetadata, JsonLd } from '@/lib/seo';

// Hardcoded legacy components
import LegalMarriageAgePost from '@/components/blog/LegalMarriageAgePost';
import WeddingBudgetPost from '@/components/blog/WeddingBudgetPost';
import MarriageRegistrationPost from '@/components/blog/MarriageRegistrationPost';
import AgeDifferencePost from '@/components/blog/AgeDifferencePost';
import KundliMatchingPost from '@/components/blog/KundliMatchingPost';
import HinduWeddingRitualsPost from '@/components/blog/HinduWeddingRitualsPost';
import RegionalWeddingCustomsPost from '@/components/blog/RegionalWeddingCustomsPost';
import WeddingBudgetCityWisePost from '@/components/blog/WeddingBudgetCityWisePost';
import PreWeddingCeremoniesPost from '@/components/blog/PreWeddingCeremoniesPost';
import WeddingVenueSelectionPost from '@/components/blog/WeddingVenueSelectionPost';
import IndianWeddingPhotographyPost from '@/components/blog/IndianWeddingPhotographyPost';
import BridalTrousseauPost from '@/components/blog/BridalTrousseauPost';
import DestinationWeddingPlanningPost from '@/components/blog/DestinationWeddingPlanningPost';
import WeddingEntertainmentMusicPost from '@/components/blog/WeddingEntertainmentMusicPost';
import PostWeddingRitualsPost from '@/components/blog/PostWeddingRitualsPost';
import TamilMarriagePlanningPost from '@/components/blog/TamilMarriagePlanningPost';
import TamilTraditionalRitualsPost from '@/components/blog/TamilTraditionalRitualsPost';
import TamilMuhurthamSelectionPost from '@/components/blog/TamilMuhurthamSelectionPost';
import TamilWeddingBudgetPost from '@/components/blog/TamilWeddingBudgetPost';
import TamilPoruthamImportancePost from '@/components/blog/TamilPoruthamImportancePost';

const POST_COMPONENTS = {
    'legal-marriage-age-india-explained': LegalMarriageAgePost,
    'indian-wedding-budget-breakdown': WeddingBudgetPost,
    'marriage-registration-process-guide': MarriageRegistrationPost,
    'age-difference-marriage-significance': AgeDifferencePost,
    'kundli-matching-modern-perspective': KundliMatchingPost,
    'hindu-wedding-rituals-complete-guide': HinduWeddingRitualsPost,
    'regional-wedding-customs-comparison': RegionalWeddingCustomsPost,
    'wedding-budget-city-wise-breakdown': WeddingBudgetCityWisePost,
    'pre-wedding-ceremonies-explained': PreWeddingCeremoniesPost,
    'wedding-venue-selection-guide': WeddingVenueSelectionPost,
    'indian-wedding-photography-guide': IndianWeddingPhotographyPost,
    'bridal-trousseau-essential-guide': BridalTrousseauPost,
    'destination-wedding-planning-india': DestinationWeddingPlanningPost,
    'wedding-entertainment-music-guide': WeddingEntertainmentMusicPost,
    'post-wedding-rituals-traditions': PostWeddingRitualsPost,
    'tamil-6-month-marriage-planning-guide': TamilMarriagePlanningPost,
    'tamil-traditional-marriage-rituals-kasi-yatra': TamilTraditionalRitualsPost,
    'tamil-subha-muhurtham-selection-panchangam': TamilMuhurthamSelectionPost,
    'tamil-wedding-budget-planning-tips': TamilWeddingBudgetPost,
    'tamil-marriage-porutham-importance': TamilPoruthamImportancePost,
};

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 604800;

export async function generateStaticParams() {
    const posts = getCombinedBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {};
    }

    const category = post.category ? (BLOG_CATEGORIES[post.category] || BLOG_CATEGORIES.legal) : BLOG_CATEGORIES.legal;

    return generatePageMetadata({
        title: `${post.title} | MATRIMONY4U`,
        description: post.excerpt || `Read our detailed matrimonial guide on ${post.title}.`,
        path: `/blog/${post.slug}`,
        keywords: [
            post.title.toLowerCase(),
            category.name.toLowerCase(),
            'matrimony india',
            'wedding planning',
            'marriage guide'
        ],
    });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const PostContent = POST_COMPONENTS[slug];
    const relatedPosts = getRelatedPosts(slug, 3);
    const category = post.category ? (BLOG_CATEGORIES[post.category] || BLOG_CATEGORIES.legal) : BLOG_CATEGORIES.legal;

    // Rich schemas for SEO dominance
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title || 'MATRIMONY4U Blog',
        description: post.excerpt || '',
        datePublished: post.publishDate || new Date().toISOString(),
        dateModified: post.publishDate || new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://matrimony4u.com/blog/${post.slug}`,
        },
        author: {
            '@type': 'Person',
            name: post.author || 'Chithrai Selvan & Editorial Team',
            jobTitle: post.authorRole || 'Senior Matrimonial Researcher',
        },
        publisher: {
            '@type': 'Organization',
            name: 'MATRIMONY4U',
            url: 'https://matrimony4u.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://matrimony4u.com/icons/icon-512x512.png',
            },
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://matrimony4u.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://matrimony4u.com/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `https://matrimony4u.com/blog/${post.slug}`,
            },
        ],
    };

    const faqSchema = post.faq && post.faq.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    } : null;

    return (
        <>
            <Header />
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />
            {faqSchema && <JsonLd data={faqSchema} />}

            <main className="bg-neutral-50/50">
                <div className="container py-6">
                    <Breadcrumbs items={[
                        { name: 'Blog', href: '/blog' },
                        { name: post.title },
                    ]} />

                    <article className="py-6 md:py-10">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 md:p-12">
                            {/* Article Header */}
                            <header className="mb-10 pb-8 border-b border-neutral-100">
                                <Link
                                    href="/blog"
                                    className={`inline-flex items-center text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 transition-all shadow-xs ${
                                        category.color === 'secondary' ? 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200' :
                                        category.color === 'accent' ? 'bg-accent-100 text-accent-800 hover:bg-accent-200' :
                                        category.color === 'purple' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                                        category.color === 'pink' ? 'bg-pink-100 text-pink-800 hover:bg-pink-200' :
                                        'bg-primary-100 text-primary-800 hover:bg-primary-200'
                                    }`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                                    {category.name}
                                </Link>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight leading-[1.2] mb-6">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-rose-400 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                                            {post.author ? post.author.charAt(0) : 'M'}
                                        </div>
                                        <span className="font-medium text-neutral-800">{post.author}</span>
                                    </div>
                                    <span className="text-neutral-300">•</span>
                                    <time dateTime={post.publishDate} className="text-neutral-500">
                                        {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <span className="text-neutral-300">•</span>
                                    <span className="inline-flex items-center text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-md font-medium text-xs">
                                        ⏱️ {post.readTime}
                                    </span>
                                </div>
                            </header>

                            {/* Key Takeaways Box (if present) */}
                            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                                <div className="mb-10 bg-gradient-to-br from-primary-50/70 via-rose-50/40 to-amber-50/30 rounded-2xl p-6 sm:p-8 border border-primary-100/80 shadow-xs">
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-base shadow-xs">
                                            💡
                                        </div>
                                        <h2 className="text-xl font-display font-bold text-neutral-900">
                                            Executive Key Takeaways
                                        </h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {post.keyTakeaways.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-neutral-800 text-sm sm:text-base leading-relaxed">
                                                <span className="text-primary-600 font-bold text-lg leading-none mt-0.5">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Table of Contents */}
                            {post.tableOfContents && post.tableOfContents.length > 0 && (
                                <div className="mb-10 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                                    <p className="text-xs uppercase tracking-wider font-bold text-neutral-500 mb-3 flex items-center gap-2">
                                        <span>📑</span> TABLE OF CONTENTS
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {post.tableOfContents.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={`#${item.id}`}
                                                className="text-sm text-primary-700 hover:text-primary-900 hover:underline flex items-baseline gap-2 py-1"
                                            >
                                                <span className="text-neutral-400 text-xs">#</span>
                                                <span className="line-clamp-1">{item.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Render Post Content */}
                            <div className="prose prose-lg max-w-none text-neutral-800">
                                {PostContent ? (
                                    <PostContent />
                                ) : post.sections && post.sections.length > 0 ? (
                                    <div className="space-y-12">
                                        {post.sections.map((section, idx) => (
                                            <section key={idx} id={section.id} className="scroll-mt-24">
                                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-100">
                                                    {section.heading}
                                                </h2>
                                                <div
                                                    className="leading-relaxed text-neutral-700 space-y-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>table]:w-full [&>table]:border [&>table]:border-neutral-200 [&>table]:my-6 [&>table_th]:bg-neutral-100 [&>table_th]:p-3 [&>table_th]:text-left [&>table_th]:border [&>table_td]:p-3 [&>table_td]:border"
                                                    dangerouslySetInnerHTML={{ __html: section.contentHtml }}
                                                />
                                                {section.callout && (
                                                    <div className={`mt-6 p-5 rounded-xl border-l-4 shadow-2xs ${
                                                        section.callout.type === 'warning' ? 'bg-amber-50/80 border-amber-500 text-amber-900' :
                                                        section.callout.type === 'legal' ? 'bg-indigo-50/80 border-indigo-500 text-indigo-900' :
                                                        section.callout.type === 'tip' ? 'bg-emerald-50/80 border-emerald-500 text-emerald-900' :
                                                        'bg-sky-50/80 border-sky-500 text-sky-900'
                                                    }`}>
                                                        <div className="font-bold text-sm mb-1 flex items-center gap-2">
                                                            <span>{section.callout.type === 'warning' ? '⚠️' : section.callout.type === 'legal' ? '⚖️' : section.callout.type === 'tip' ? '💡' : 'ℹ️'}</span>
                                                            {section.callout.title}
                                                        </div>
                                                        <p className="text-sm leading-relaxed">{section.callout.text}</p>
                                                    </div>
                                                )}
                                            </section>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 text-center">
                                        <p className="text-neutral-700">{post.excerpt || 'Full guide content is provided above.'}</p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Section (if present) */}
                            {post.faq && post.faq.length > 0 && (
                                <section className="mt-14 pt-10 border-t border-neutral-200">
                                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-2">
                                        <span>❓</span> Frequently Asked Questions
                                    </h2>
                                    <div className="space-y-4">
                                        {post.faq.map((item, idx) => (
                                            <div key={idx} className="bg-neutral-50/80 rounded-xl p-5 border border-neutral-200/80">
                                                <h3 className="font-bold text-base sm:text-lg text-neutral-900 mb-2">
                                                    {item.question}
                                                </h3>
                                                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Strategic Adsterra Banner Placement */}
                            <div className="my-10">
                                <AdsterraBanner format="728x90" className="hidden md:flex justify-center" />
                                <AdsterraBanner format="300x250" className="flex md:hidden justify-center" />
                            </div>

                            {/* Interactive Tools Call to Action */}
                            <div className="mt-10 bg-gradient-to-r from-primary-600 to-rose-600 rounded-2xl p-8 text-center text-white shadow-md">
                                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-white">
                                    Plan Smarter with Our Free Interactive Tools
                                </h3>
                                <p className="text-primary-100 max-w-xl mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                                    Calculate exact marriage eligibility, forecast ceremony budgets, and manage your wedding timeline effortlessly.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {post.recommendedTools ? (
                                        post.recommendedTools.map((tool, idx) => (
                                            <Link
                                                key={idx}
                                                href={tool.href}
                                                className="bg-white text-primary-700 hover:bg-neutral-100 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-xs hover:shadow-sm"
                                            >
                                                {tool.name} →
                                            </Link>
                                        ))
                                    ) : (
                                        <Link
                                            href="/tools"
                                            className="bg-white text-primary-700 hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-xs"
                                        >
                                            Explore All 11 Free Tools →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    {relatedPosts.length > 0 && (
                        <section className="py-12 border-t border-neutral-200">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-display font-bold mb-8 text-center text-neutral-900">
                                    Related Articles & Guides
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedPosts.map(relatedPost => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="group bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:shadow-md hover:border-primary-300 transition-all flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="aspect-video bg-gradient-to-br from-primary-50 to-rose-50 rounded-lg mb-4 flex items-center justify-center text-3xl">
                                                    📜
                                                </div>
                                                <h3 className="font-bold text-base text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                                                <span>{relatedPost.readTime || '8 min read'}</span>
                                                <span className="text-primary-600 font-medium group-hover:translate-x-0.5 transition-transform">Read guide →</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
