import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Contact Us',
    description: `Get in touch with ${SITE_CONFIG.name}. Share feedback, report errors, or suggest new tools. We respond within 24-48 hours.`,
    canonicalPath: '/contact/',
});

export default function ContactPage() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Contact Us' }]} />

                    <div className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
                            Contact Us
                        </h1>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold mb-6">Get In Touch</h2>
                                <p className="text-neutral-700 mb-8">
                                    We'd love to hear from you! Whether you have a question, found an error, or want to
                                    suggest a new tool, please reach out.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                                            <a
                                                href={`mailto:${SITE_CONFIG.email}`}
                                                className="text-primary-600 hover:text-primary-700 transition-colors"
                                            >
                                                {SITE_CONFIG.email}
                                            </a>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                We respond within 24-48 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                                            <p className="text-neutral-600">
                                                India
                                            </p>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Serving users worldwide
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                                    <h3 className="font-semibold text-neutral-900 mb-3">What You Can Contact Us About</h3>
                                    <ul className="space-y-2 text-sm text-neutral-700">
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2">✓</span>
                                            <span>Report errors or inaccuracies in tools or content</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2">✓</span>
                                            <span>Suggest new tools or features</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2">✓</span>
                                            <span>Request clarification on legal or cultural information</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2">✓</span>
                                            <span>Partnership or collaboration inquiries</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2">✓</span>
                                            <span>General feedback and suggestions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Form Placeholder */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold mb-6">Send a Message</h2>
                                <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
                                    <p className="text-neutral-600 mb-6">
                                        For immediate assistance, please email us directly at{' '}
                                        <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                                            {SITE_CONFIG.email}
                                        </a>
                                    </p>

                                    <div className="text-center py-8 bg-neutral-50 rounded-lg">
                                        <p className="text-neutral-500 mb-4">Contact form coming soon</p>
                                        <a
                                            href={`mailto:${SITE_CONFIG.email}`}
                                            className="btn-primary"
                                        >
                                            Email Us Directly
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-primary-50 border-l-4 border-primary-500 rounded">
                                    <h3 className="font-semibold text-primary-900 mb-2">Important Note</h3>
                                    <p className="text-sm text-primary-800">
                                        We are a tools and information platform. We <strong>do not</strong> provide:
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm text-primary-800">
                                        <li>• Matchmaking or matrimonial profile services</li>
                                        <li>• Personalized legal advice (consult a lawyer)</li>
                                        <li>• Astrological consultations (consult an astrologer)</li>
                                        <li>• Wedding planning or vendor coordination services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="card">
                                    <h3 className="font-semibold text-neutral-900 mb-2">How quickly will you respond?</h3>
                                    <p className="text-neutral-600 text-sm">
                                        We typically respond to all inquiries within 24-48 hours during business days (Monday-Friday).
                                        For urgent matters, please mention "URGENT" in your email subject line.
                                    </p>
                                </div>

                                <div className="card">
                                    <h3 className="font-semibold text-neutral-900 mb-2">Can you help me find a life partner?</h3>
                                    <p className="text-neutral-600 text-sm">
                                        No. MATRIMONY4U is a tools and guidance platform, not a matchmaking service. We provide calculators,
                                        legal information, and planning resources, but we do not offer matrimonial profiles or matchmaking services.
                                    </p>
                                </div>

                                <div className="card">
                                    <h3 className="font-semibold text-neutral-900 mb-2">Can you provide legal advice for my situation?</h3>
                                    <p className="text-neutral-600 text-sm">
                                        No. While we provide accurate legal information, we are not a substitute for qualified legal counsel.
                                        For specific legal advice regarding your marriage, please consult a licensed family law attorney in your state.
                                    </p>
                                </div>

                                <div className="card">
                                    <h3 className="font-semibold text-neutral-900 mb-2">How can I suggest a new tool?</h3>
                                    <p className="text-neutral-600 text-sm">
                                        We'd love to hear your suggestions! Email us at {SITE_CONFIG.email} with your tool idea,
                                        explaining what problem it would solve and how it would help users. We review all suggestions
                                        and prioritize based on user demand and feasibility.
                                    </p>
                                </div>

                                <div className="card">
                                    <h3 className="font-semibold text-neutral-900 mb-2">I found an error on your website. How do I report it?</h3>
                                    <p className="text-neutral-600 text-sm">
                                        Thank you for helping us maintain accuracy! Please email us with: (1) The page URL where you found the error,
                                        (2) A description of the error, and (3) If possible, the correct information with a source. We'll review and
                                        update as quickly as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
