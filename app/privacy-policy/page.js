import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Privacy Policy',
    description: `${SITE_CONFIG.name} Privacy Policy. Learn how we protect your privacy, handle data, and use cookies. GDPR compliant.`,
    canonicalPath: '/privacy-policy/',
    noindex: false,
});

export default function PrivacyPolicyPage() {
    const lastUpdated = "December 23, 2025";

    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Privacy Policy' }]} />

                    <article className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-neutral-600 mb-8">Last Updated: {lastUpdated}</p>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Introduction</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    At {SITE_CONFIG.name} ("{SITE_CONFIG.domain}"), we are committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                                    you visit our website and use our matrimonial planning tools.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    <strong>Please read this privacy policy carefully.</strong> If you do not agree with the terms of
                                    this privacy policy, please do not access the site.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Information We Collect</h2>

                                <h3 className="text-xl font-semibold mb-3">Personal Data We Do NOT Collect</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We want to be crystal clear: <strong>{SITE_CONFIG.name} does NOT collect, store, or process any
                                        personally identifiable information (PII)</strong> when you use our calculators and tools.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                    <li>We do NOT require account creation or registration</li>
                                    <li>We do NOT collect names, email addresses, or phone numbers (unless you voluntarily contact us)</li>
                                    <li>We do NOT store calculator inputs (dates, ages, budgets, etc.)</li>
                                    <li>We do NOT track individual user behavior across sessions</li>
                                    <li>We do NOT sell, rent, or share any user information with third parties</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    When you visit our website, our servers automatically collect certain technical information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring/exit pages</li>
                                    <li><strong>IP Address:</strong> Your Internet Protocol address (anonymized for analytics)</li>
                                    <li><strong>Cookies & Similar Technologies:</strong> See "Cookies" section below</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed">
                                    This information is collected solely for website analytics, performance optimization, and security purposes.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">How We Use Your Information</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We use the automatically collected technical information for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li><strong>Website Analytics:</strong> Understanding which tools are most popular and how to improve user experience</li>
                                    <li><strong>Performance Optimization:</strong> Improving website speed and functionality</li>
                                    <li><strong>Security:</strong> Protecting against malicious activity, spam, and abuse</li>
                                    <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and responding to legal requests</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Cookies and Tracking Technologies</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We use cookies and similar tracking technologies to enhance your experience on our website.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">What Are Cookies?</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Cookies are small text files placed on your device to store information. They help websites remember
                                    your preferences and improve functionality.
                                </p>

                                <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="border-l-4 border-primary-500 pl-4">
                                        <h4 className="font-semibold text-neutral-900">Essential Cookies (Required)</h4>
                                        <p className="text-neutral-600 text-sm">
                                            Necessary for basic website functionality. These cannot be disabled.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-neutral-300 pl-4">
                                        <h4 className="font-semibold text-neutral-900">Analytics Cookies (Optional)</h4>
                                        <p className="text-neutral-600 text-sm">
                                            Help us understand how visitors use our site (e.g., Google Analytics). These are anonymized.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-neutral-300 pl-4">
                                        <h4 className="font-semibold text-neutral-900">Advertising Cookies (Third-Party)</h4>
                                        <p className="text-neutral-600 text-sm">
                                            We may use Google AdSense to display ads. Google uses cookies to show relevant ads based on your interests.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-neutral-700 leading-relaxed">
                                    You can control cookies through your browser settings. However, disabling cookies may affect
                                    website functionality.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Third-Party Service Providers</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We may use third-party service providers to help operate our website:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li><strong>Google Analytics:</strong> For website analytics (data is anonymized)</li>
                                    <li><strong>Google AdSense:</strong> For displaying advertisements (Google's Privacy Policy applies)</li>
                                    <li><strong>Hosting Provider:</strong> For website hosting and infrastructure</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed mt-4">
                                    These third parties have their own privacy policies governing their use of your information.
                                    We encourage you to review:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-neutral-700 mt-2">
                                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Privacy Policy</a></li>
                                    <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google AdSense Privacy & Terms</a></li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Data Security</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We implement appropriate technical and organizational measures to protect the limited data we collect:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>HTTPS encryption for all pages</li>
                                    <li>Regular security updates and monitoring</li>
                                    <li>Limited data retention periods</li>
                                    <li>No storage of calculator inputs or personal data</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed mt-4">
                                    However, no method of internet transmission is 100% secure. While we strive to protect your
                                    information, we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Your Privacy Rights</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Depending on your location, you may have certain rights regarding your data:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li><strong>Right to Access:</strong> Request information about data we hold about you</li>
                                    <li><strong>Right to Deletion:</strong> Request deletion of your data (where applicable)</li>
                                    <li><strong>Right to Object:</strong> Object to certain processing of your data</li>
                                    <li><strong>Right to Opt-Out:</strong> Opt-out of cookies (except essential ones)</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed mt-4">
                                    Since we do not collect personal data through our tools, most data rights requests will not apply.
                                    However, if you have contacted us via email, you can request deletion of those communications.
                                </p>
                                <p className="text-neutral-700 leading-relaxed mt-2">
                                    To exercise any rights, please contact us at: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">{SITE_CONFIG.email}</a>
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Children's Privacy</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    Our website is not intended for children under the age of 18. We do not knowingly collect personal
                                    information from children. If you believe we have inadvertently collected information from a child,
                                    please contact us immediately.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">International Data Transfers</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    Our website is operated from India. If you access our site from outside India, please be aware that
                                    your information may be transferred to, stored, and processed in India or other countries where our
                                    service providers operate. By using our website, you consent to such transfers.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Changes to This Privacy Policy</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
                                    operational, or regulatory reasons. We will notify you of any material changes by:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li>Updating the "Last Updated" date at the top of this page</li>
                                    <li>Posting a notice on our homepage (for significant changes)</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed">
                                    We encourage you to review this Privacy Policy periodically. Your continued use of the website after
                                    changes indicates your acceptance of the updated policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-semibold mb-4">Contact Us</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    If you have questions or concerns about this Privacy Policy, please contact us:
                                </p>
                                <div className="bg-neutral-50 rounded-lg p-6">
                                    <p className="mb-2">
                                        <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">{SITE_CONFIG.email}</a>
                                    </p>
                                    <p className="mb-2">
                                        <strong>Website:</strong> <a href={SITE_CONFIG.url} className="text-primary-600 hover:underline">{SITE_CONFIG.domain}</a>
                                    </p>
                                    <p className="text-sm text-neutral-600 mt-4">
                                        We will respond to privacy-related inquiries within 30 days.
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
