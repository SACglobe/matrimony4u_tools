import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Terms of Service',
    description: `${SITE_CONFIG.name} Terms of Service. Read our terms and conditions for using our free matrimonial planning tools.`,
    canonicalPath: '/terms-of-service/',
});

export default function TermsOfServicePage() {
    const lastUpdated = "December 23, 2025";

    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Terms of Service' }]} />

                    <article className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-neutral-600 mb-8">Last Updated: {lastUpdated}</p>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Agreement to Terms</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    These Terms of Service ("Terms") govern your use of {SITE_CONFIG.name} ("{SITE_CONFIG.domain}")
                                    and all related services, tools, and content (collectively, the "Service").
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    <strong>By accessing or using our Service, you agree to be bound by these Terms.</strong> If you
                                    do not agree to these Terms, please do not use our Service.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Description of Service</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    {SITE_CONFIG.name} provides:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li><strong>Free Online Tools:</strong> Calculators and planners for matrimonial planning</li>
                                    <li><strong>Educational Content:</strong> Articles, guides, and information about Indian marriages</li>
                                    <li><strong>Legal Information:</strong> General information about marriage laws in India</li>
                                    <li><strong>Cultural Guidance:</strong> Information about traditional marriage customs</li>
                                </ul>
                                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-6">
                                    <p className="font-semibold text-primary-900 mb-2">What We Are NOT:</p>
                                    <ul className="list-disc list-inside space-y-1 text-primary-800 text-sm">
                                        <li>We are NOT a matchmaking or matrimonial profile service</li>
                                        <li>We do NOT provide personalized legal advice</li>
                                        <li>We do NOT provide astrological consultations</li>
                                        <li>We do NOT organize weddings or coordinate vendors</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Acceptable Use</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>Use the Service in any way that violates applicable laws or regulations</li>
                                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                                    <li>Interfere with or disrupt the Service or servers</li>
                                    <li>Use automated systems (bots, scrapers) without permission</li>
                                    <li>Misrepresent your affiliation with any person or entity</li>
                                    <li>Upload malicious code, viruses, or harmful content</li>
                                    <li>Harass, abuse, or harm other users</li>
                                    <li>Use the Service for commercial purposes without authorization</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Intellectual Property Rights</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    The Service and its original content, features, and functionality are owned by {SITE_CONFIG.name}
                                    and are protected by international copyright, trademark, patent, trade secret, and other intellectual
                                    property laws.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    You may view, download, and print pages from the website for your personal, non-commercial use,
                                    subject to the restrictions set out below. You must NOT:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                                    <li>Republish material from this website without attribution</li>
                                    <li>Sell, rent, or sub-license material from  the website</li>
                                    <li>Reproduce, duplicate, or copy material for commercial purposes</li>
                                    <li>Redistribute content from this website (except as allowed by social sharing features)</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Disclaimer of Warranties</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    <strong>USE OF THE SERVICE IS AT YOUR OWN RISK.</strong> The Service is provided on an "AS IS"
                                    and "AS AVAILABLE" basis without any warranties of any kind, either express or implied.
                                </p>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We do not warrant that:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                                    <li>The results obtained from using the Service will be accurate or reliable</li>
                                    <li>Any errors in the Service will be corrected</li>
                                    <li>The Service will meet your specific requirements</li>
                                </ul>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                                    <p className="font-semibold text-yellow-900 mb-2">Important Legal Notice:</p>
                                    <p className="text-yellow-800 text-sm">
                                        The legal information and calculators provided on this website are for general educational
                                        purposes only. They do NOT constitute legal advice and should NOT be relied upon as a substitute
                                        for consultation with a qualified attorney. Marriage laws vary by state and personal circumstances.
                                        Always consult a licensed lawyer for legal advice specific to your situation.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Limitation of Liability</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {SITE_CONFIG.name.toUpperCase()},
                                    ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                                    <li>Any loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
                                    <li>Any damages resulting from your use or inability to use the Service</li>
                                    <li>Any reliance on content or information obtained through the Service</li>
                                    <li>Any errors or omissions in content or for any loss or damage incurred as a result of using content</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed">
                                    This limitation applies whether the alleged liability is based on contract, tort, negligence,
                                    strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Indemnification</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    You agree to defend, indemnify, and hold harmless {SITE_CONFIG.name} and its licensees and
                                    licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs,
                                    expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
                                    violation of these Terms or your use of the Service.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Third-Party Links and Content</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Our Service may contain links to third-party websites or services that are not owned or controlled
                                    by {SITE_CONFIG.name}. We have no control over, and assume no responsibility for, the content,
                                    privacy policies, or practices of any third-party websites or services.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    We strongly advise you to read the terms and conditions and privacy policies of any third-party
                                    websites or services that you visit.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Advertising</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We may display third-party advertisements on our website through Google AdSense or other advertising
                                    networks. These advertisers may use cookies and other technologies to collect information about your
                                    browsing activity.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    We are not responsible for the content or practices of third-party advertisers. Your interactions
                                    with advertisements are solely between you and the advertiser.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Termination</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    We may terminate or suspend your access to our Service immediately, without prior notice or liability,
                                    for any reason, including without limitation if you breach these Terms. Upon termination, your right
                                    to use the Service will immediately cease.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Governing Law</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of India, without regard
                                    to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall
                                    be subject to the exclusive jurisdiction of the courts located in India.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Changes to Terms</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                                    revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    By continuing to access or use our Service after revisions become effective, you agree to be bound
                                    by the revised terms.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Severability</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                                    changed and interpreted to accomplish the objectives of such provision to the greatest extent
                                    possible under applicable law, and the remaining provisions will continue in full force and effect.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-semibold mb-4">Contact Us</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    If you have any questions about these Terms, please contact us:
                                </p>
                                <div className="bg-neutral-50 rounded-lg p-6">
                                    <p className="mb-2">
                                        <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">{SITE_CONFIG.email}</a>
                                    </p>
                                    <p>
                                        <strong>Website:</strong> <a href={SITE_CONFIG.url} className="text-primary-600 hover:underline">{SITE_CONFIG.domain}</a>
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
