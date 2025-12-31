import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Disclaimer',
    description: `${SITE_CONFIG.name} Disclaimer. Important information about the limitations of our tools and content.`,
    canonicalPath: '/disclaimer/',
});

export default function DisclaimerPage() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Disclaimer' }]} />

                    <article className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
                            Disclaimer
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
                                <p className="font-semibold text-yellow-900 text-lg mb-3">⚠️ Important Notice</p>
                                <p className="text-yellow-800">
                                    <strong>Please read this disclaimer carefully before using any tools or information on {SITE_CONFIG.name}.</strong> By using this website, you acknowledge and agree to the limitations outlined below.
                                </p>
                            </div>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">General Disclaimer</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    The information and tools provided on {SITE_CONFIG.name} are for <strong>general educational
                                        and informational purposes only</strong>. They are not intended to be, and should not be construed
                                    as, professional advice of any kind.
                                </p>
                                <p className="text-neutral-700 leading-relaxed">
                                    While we strive to provide accurate and up-to-date information, we make no representations or
                                    warranties of any kind, express or implied, about the completeness, accuracy, reliability,
                                    suitability, or availability of the information, tools, or services contained on the website.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Not Legal Advice</h2>
                                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                                    <p className="font-semibold text-red-900 mb-3">Legal Disclaimer</p>
                                    <p className="text-red-800 mb-3">
                                        <strong>The legal information provided on this website is NOT legal advice and does NOT create
                                            an attorney-client relationship.</strong>
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-red-800 text-sm">
                                        <li>Marriage laws in India vary by state, religion, and personal circumstances</li>
                                        <li>Our tools provide general information only and cannot account for your specific situation</li>
                                        <li>Legal requirements and procedures change frequently</li>
                                        <li>For legal advice specific to your circumstances, consult a qualified family law attorney in your state</li>
                                    </ul>
                                </div>
                                <p className="text-neutral-700 leading-relaxed">
                                    {SITE_CONFIG.name} and its contributors are not law firms and do not provide legal services or
                                    representation. We are an educational platform providing general information about marriage laws
                                    and procedures in India.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Not Astrological/Religious Advice</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Any tools or content related to astrology, kundli matching, auspicious dates, or other cultural/
                                    religious practices are provided for <strong>educational and cultural understanding only</strong>.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>They should NOT replace consultation with qualified astrologers, priests, or religious scholars</li>
                                    <li>Results are based on traditional formulas and general principles, not personalized analysis</li>
                                    <li>We respect all belief systems but cannot guarantee spiritual or religious accuracy</li>
                                    <li>Marriage decisions should be based on mutual understanding, compatibility, and personal choice</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Not Professional Financial Advice</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Wedding budget calculators and financial planning tools are for <strong>estimation purposes only</strong>.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>Actual wedding costs vary widely based on location, vendors, season, and personal choices</li>
                                    <li>Our estimates are based on average data and may not reflect current market prices</li>
                                    <li>For personalized financial planning, consult a certified financial advisor</li>
                                    <li>Always obtain multiple vendor quotes and compare before making financial commitments</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Accuracy of Information</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    While we make every effort to ensure accuracy:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                    <li>Laws, regulations, and procedures change frequently</li>
                                    <li>Information may become outdated between updates</li>
                                    <li>Human error is possible despite our review processes</li>
                                    <li>State-specific requirements may differ from general information provided</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed">
                                    <strong>Always verify critical information</strong> with official government sources, legal professionals,
                                    or other qualified experts before making important decisions.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Calculator Limitations</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Our calculators are tools designed to provide general estimates and guidance. They have limitations:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li><strong>Simplified Models:</strong> They use simplified formulas that may not account for all variables</li>
                                    <li><strong>User Input Dependent:</strong> Accuracy depends on the accuracy of information you provide</li>
                                    <li><strong>General Assumptions:</strong> They may make assumptions that don't apply to your specific situation</li>
                                    <li><strong>No Personalization:</strong> They cannot provide personalized recommendations</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">No Warranty or Guarantee</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    {SITE_CONFIG.name} does NOT warrant or guarantee:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>The accuracy, reliability, or completeness of any information or tools</li>
                                    <li>That the website will be available at all times without interruption</li>
                                    <li>That errors will be corrected or that the website is free of bugs or viruses</li>
                                    <li>Any specific outcomes or results from using our tools</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Third-Party Links</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    Our website may contain links to third-party websites for your convenience and information. We do
                                    not endorse, control, or take responsibility for the content, privacy policies, or practices of
                                    any third-party sites. Accessing third-party links is at your own risk.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Limitation of Liability</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    <strong>{SITE_CONFIG.name} and its contributors shall not be liable for:</strong>
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>Any decision made or action taken in reliance on information from this website</li>
                                    <li>Any errors or omissions in content</li>
                                    <li>Any loss or damage of any kind arising from use of this website</li>
                                    <li>Any consequences from using our calculators or tools</li>
                                </ul>
                                <p className="text-neutral-700 leading-relaxed mt-4">
                                    Use of this website and all information, tools, and services is entirely at your own risk.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-display font-semibold mb-4">Use at Your Own Risk</h2>
                                <p className="text-neutral-700 leading-relaxed">
                                    By using {SITE_CONFIG.name}, you acknowledge that:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                                    <li>You understand the limitations of our tools and content</li>
                                    <li>You will verify important information with qualified professionals</li>
                                    <li>You will not rely solely on our website for critical decisions</li>
                                    <li>You accept full responsibility for your marriage planning decisions</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-semibold mb-4">Questions or Corrections</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    If you believe you have found an error or have questions about our disclaimer, please contact us:
                                </p>
                                <div className="bg-neutral-50 rounded-lg p-6">
                                    <p className="mb-2">
                                        <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">{SITE_CONFIG.email}</a>
                                    </p>
                                    <p className="text-sm text-neutral-600 mt-4">
                                        We appreciate feedback that helps us improve accuracy and usefulness.
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
