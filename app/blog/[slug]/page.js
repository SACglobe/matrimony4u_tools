import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getRelatedPosts, BLOG_CATEGORIES } from '@/lib/blog';
import { generatePageMetadata, JsonLd } from '@/lib/seo';

// Blog post content components
import LegalMarriageAgePost from '@/components/blog/LegalMarriageAgePost';
import WeddingBudgetPost from '@/components/blog/WeddingBudgetPost';
import MarriageRegistrationPost from '@/components/blog/MarriageRegistrationPost';
import AgeDifferencePost from '@/components/blog/AgeDifferencePost';
import KundliMatchingPost from '@/components/blog/KundliMatchingPost';

const POST_COMPONENTS = {
    'legal-marriage-age-india-explained': LegalMarriageAgePost,
    'indian-wedding-budget-breakdown': WeddingBudgetPost,
    'marriage-registration-process-guide': MarriageRegistrationPost,
    'age-difference-marriage-significance': AgeDifferencePost,
    'kundli-matching-modern-perspective': KundliMatchingPost,
};

export async function generateStaticParams() {
    return [
        { slug: 'legal-marriage-age-india-explained' },
        { slug: 'indian-wedding-budget-breakdown' },
        { slug: 'marriage-registration-process-guide' },
        { slug: 'age-difference-marriage-significance' },
        { slug: 'kundli-matching-modern-perspective' },
    ];
}

export function generateMetadata({ params }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return {};
    }

    return generatePageMetadata({
        title: post.title,
        description: post.excerpt,
        canonicalPath: `/blog/${post.slug}/`,
        keywords: [],
    });
}

export default function BlogPostPage({ params }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    const PostContent = POST_COMPONENTS[params.slug];
    const relatedPosts = getRelatedPosts(params.slug);
    const category = BLOG_CATEGORIES[post.category];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        author: {
            '@type': 'Organization',
            name: post.author,
        },
    };

    return (
        <>
            <Header />
            <JsonLd data={articleSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[
                        { name: 'Blog', path: '/blog/' },
                        { name: post.title },
                    ]} />

                    <article className="py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="mb-8">
                                <Link
                                    href="/blog/"
                                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${category.color === 'primary' ? 'bg-primary-100 text-primary-700' :
                                            category.color === 'secondary' ? 'bg-secondary-100 text-secondary-700' :
                                                category.color === 'accent' ? 'bg-accent-100 text-accent-700' :
                                                    category.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                                                        'bg-pink-100 text-pink-700'
                                        }`}
                                >
                                    {category.name}
                                </Link>

                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    {post.title}
                                </h1>

                                <div className="flex items-center gap-4 text-sm text-neutral-600">
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <time dateTime={post.publishDate}>
                                        {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                {PostContent ? <PostContent /> : (
                                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 text-center">
                                        <p className="text-yellow-800">Blog post content coming soon!</p>
                                    </div>
                                )}
                            </div>

                            {/* Call to Action */}
                            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center border-2 border-primary-100">
                                <h3 className="text-2xl font-display font-bold mb-3">Use Our Free Tools</h3>
                                <p className="text-neutral-700 mb-6">
                                    Put this knowledge into practice with our interactive calculators and planners
                                </p>
                                <Link href="/tools/" className="btn-primary">
                                    Explore All Tools
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="py-12 border-t border-neutral-200">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-display font-bold mb-8 text-center">Related Articles</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedPosts.map(relatedPost => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}/`}
                                            className="card-hover group"
                                        >
                                            <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-4xl">📄</span>
                                            </div>
                                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-neutral-600 line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
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
