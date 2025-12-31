import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'About Us',
    description: `Learn about ${SITE_CONFIG.name}, our mission to provide free matrimonial planning tools and guidance for Indian couples and families.`,
    canonicalPath: '/about/',
});

export default function AboutPage() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'About Us' }]} />

                    <article className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
                            About {SITE_CONFIG.name}
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Who We Are</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    {SITE_CONFIG.name} is India's premier platform for matrimonial planning tools and guidance.
                                    We are a team of legal experts, cultural advisors, and technology professionals dedicated
                                    to simplifying the complex journey of marriage planning in India.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    Founded with the vision of empowering couples and families with accurate, accessible information,
                                    we provide free tools that combine traditional wisdom with modern technology. Our platform serves
                                    thousands of users every month, helping them make informed decisions about one of life's most
                                    important milestones.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Our Mission</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    To be the most trusted source of matrimonial planning tools and guidance for Indian couples and
                                    families, providing free, accurate, and culturally-sensitive resources that honor tradition while
                                    embracing modern needs.
                                </p>
                                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-6">
                                    <p className="font-semibold text-primary-900 mb-2">Our Core Values</p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                        <li><strong>Accuracy:</strong> All information is verified by legal and cultural experts</li>
                                        <li><strong>Accessibility:</strong> 100% free tools with no hidden charges or subscriptions</li>
                                        <li><strong>Privacy:</strong> We respect your privacy and don't collect personal data</li>
                                        <li><strong>Cultural Sensitivity:</strong> We honor diverse Indian traditions and customs</li>
                                        <li><strong>Educational Focus:</strong> We inform and empower, never judge or prescribe</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">What We Offer</h2>
                                <div className="grid md:grid-cols-2 gap-6 my-6">
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">⚖️ Legal Guidance Tools</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Verify marriage age eligibility, understand registration requirements, and access
                                            state-specific legal documentation checklists.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">💰 Financial Planning Tools</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Budget your Indian wedding across multiple ceremonies, plan savings, split expenses,
                                            and manage vendor costs effectively.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">📅 Cultural Tools</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Find auspicious marriage dates, understand traditional compatibility factors,
                                            and navigate cultural customs with confidence.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">📝 Planning Resources</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Organize guest lists, manage timelines, track expenses, and ensure no detail
                                            is overlooked in your wedding planning journey.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">What We Are NOT</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    It's important to clarify what {SITE_CONFIG.name} is <strong>not</strong>:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li><strong>Not a Matchmaking Service:</strong> We do not provide matrimonial profiles or matchmaking services. We are a tools and guidance platform only.</li>
                                    <li><strong>Not Legal Advisors:</strong> While we provide accurate legal information, we are not a substitute for qualified legal counsel. Always consult a lawyer for specific legal advice.</li>
                                    <li><strong>Not Astrologers:</strong> Our cultural tools are educational and based on traditional practices. They should not replace consultation with qualified astrologers or priests.</li>
                                    <li><strong>Not Wedding Planners:</strong> We provide planning tools, but we don't organize weddings or coordinate vendors.</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">How We Maintain Quality</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Every tool and piece of content on {SITE_CONFIG.name} undergoes rigorous review:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <span className="text-primary-600 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Legal Verification</h3>
                                            <p className="text-neutral-600 text-sm">All legal information is cross-referenced with government sources and verified by legal professionals.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <span className="text-primary-600 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Cultural Accuracy</h3>
                                            <p className="text-neutral-600 text-sm">Traditional and cultural content is reviewed by cultural experts and community leaders.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <span className="text-primary-600 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Regular Updates</h3>
                                            <p className="text-neutral-600 text-sm">We monitor changes in marriage laws, regulations, and cultural practices to keep our content current.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                            <span className="text-primary-600 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">User Feedback</h3>
                                            <p className="text-neutral-600 text-sm">We actively incorporate user feedback to improve accuracy and usability.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Our Commitment to Privacy</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We believe that accessing marriage planning information should not require sharing personal
                                    data. That's why:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>All tools are available without registration or login</li>
                                    <li>We don't store calculator inputs or personal information</li>
                                    <li>We use minimal cookies only for essential website functionality</li>
                                    <li>We will never sell, rent, or share your information with third parties</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed mt-4">
                                    For complete details, please read our <a href="/privacy-policy/" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-semibold mb-4">Contact Us</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We value your feedback, questions, and suggestions. Whether you've found an error, want to
                                    suggest a new tool, or just want to share your experience, we'd love to hear from you.
                                </p>
                                <div className="bg-neutral-50 rounded-lg p-6">
                                    <p className="mb-2">
                                        <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:text-primary-700">{SITE_CONFIG.email}</a>
                                    </p>
                                    <p className="mb-4">
                                        <strong>Contact Form:</strong> <a href="/contact/" className="text-primary-600 hover:text-primary-700 underline">Visit our Contact page</a>
                                    </p>
                                    <p className="text-sm text-neutral-600">
                                        We typically respond within 24-48 hours during business days.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
}
