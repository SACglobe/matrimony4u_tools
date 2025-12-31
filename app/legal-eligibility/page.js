import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import {
    generatePageMetadata,
    generateFAQSchema,
    generateBreadcrumbSchema,
    JsonLd
} from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata({
    title: 'Legal & Eligibility Requirements for Marriage in India',
    description: 'Complete guide to legal marriage requirements, age eligibility, documentation, and compliance with Indian marriage laws across all states.',
    canonicalPath: '/legal-eligibility/',
    keywords: [
        'legal marriage age india',
        'marriage eligibility india',
        'marriage legal requirements',
        'hindu marriage act requirements',
        'special marriage act eligibility'
    ],
});

export default function LegalEligibilityPage() {
    const faqs = [
        {
            question: 'What is the minimum legal age for marriage in India?',
            answer: 'Under the Prohibition of Child Marriage Act, 2006, the minimum legal age is 21 years for men and 18 years for women across all of India, regardless of religion or state.'
        },
        {
            question: 'Is marriage registration mandatory in India?',
            answer: 'Yes, marriage registration is mandatory in most Indian states. Even where not strictly mandatory by law, it is highly recommended for legal protection, documentation purposes, and to avoid future complications.'
        },
        {
            question: 'What documents are required for marriage registration?',
            answer: 'Common documents include: proof of age (birth certificate, school certificate), proof of address (Aadhar, passport, voter ID), photographs, marriage invitation card (if already married), witness ID proofs, and affidavit declaring marital status. Requirements vary by state and marriage act.'
        },
        {
            question: 'Can I marry someone from a different religion in India?',
            answer: 'Yes, inter-faith marriages are legal in India under the Special Marriage Act, 1954. This is a secular law that allows marriage between people of any religion without requiring conversion. It requires a 30-day notice period.'
        },
    ];

    const tools = [
        {
            name: 'Legal Marriage Age Checker',
            slug: 'legal-marriage-age-india',
            description: 'Verify if you meet the minimum legal age requirement for marriage',
            icon: '⚖️'
        },
        {
            name: 'Marriage Registration Documents',
            slug: 'marriage-registration-documents',
            description: 'State-wise checklist of required documents for registration',
            icon: '📝'
        },
        {
            name: 'Marriage Eligibility Checker',
            slug: 'marriage-eligibility-checker',
            description: 'Check comprehensive eligibility under different marriage acts',
            icon: '✓'
        },
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Legal & Eligibility', path: '/legal-eligibility/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Legal & Eligibility' }]} />

                    <div className="py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="text-5xl mb-4">⚖️</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Legal & Eligibility Requirements for Marriage in India
                                </h1>
                                <p className="text-xl text-neutral-600">
                                    Understanding Indian marriage laws, age requirements, and legal compliance across all states
                                </p>
                            </div>

                            {/* Tools in This Category */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-display font-semibold mb-6">Tools in This Category</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {tools.map(tool => (
                                        <Link key={tool.slug} href={`/${tool.slug}/`} className="card-hover group">
                                            <div className="text-4xl mb-3">{tool.icon}</div>
                                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                                                {tool.name}
                                            </h3>
                                            <p className="text-sm text-neutral-600">{tool.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Marriage Laws in India
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Marriage in India is governed by a complex framework of personal laws and secular statutes. Unlike
                                        many countries with a single unified marriage code, India maintains separate legal systems based on
                                        religion while also providing a secular alternative. Understanding these laws is crucial before
                                        planning your marriage.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">The Five Primary Marriage Laws</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                                            <h4 className="font-semibold text-lg text-primary-900 mb-2">1. Hindu Marriage Act, 1955</h4>
                                            <p className="text-sm text-primary-800 mb-2">
                                                <strong>Applies to:</strong> Hindus, Buddhists, Jains, and Sikhs
                                            </p>
                                            <p className="text-sm text-primary-800">
                                                This is the most widely applicable marriage law in India. It sets conditions for valid Hindu
                                                marriages, including minimum age (21 for men, 18 for women), mental soundness, and prohibited
                                                relationships. Registration can be done before or after the wedding ceremony.
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                                            <h4 className="font-semibold text-lg text-blue-900 mb-2">2. Special Marriage Act, 1954</h4>
                                            <p className="text-sm text-blue-800 mb-2">
                                                <strong>Applies to:</strong> All Indian citizens regardless of religion (secular law)
                                            </p>
                                            <p className="text-sm text-blue-800">
                                                This civil marriage law is used for inter-faith marriages or those who prefer secular registration.
                                                It requires a 30-day notice period, allows objections from the public, and provides equal rights
                                                to both partners without religious conversion.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                                            <h4 className="font-semibold text-lg text-green-900 mb-2">3. Muslim Personal Law</h4>
                                            <p className="text-sm text-green-800 mb-2">
                                                <strong>Applies to:</strong> Muslims
                                            </p>
                                            <p className="text-sm text-green-800">
                                                Governed by Shariat law, Muslim marriages require a Nikahnama (marriage contract). While the  minimum age requirement (21/18) from the Prohibition of Child Marriage Act applies, other provisions
                                                follow Islamic jurisprudence. Registration varies by state but is increasingly encouraged.
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                                            <h4 className="font-semibold text-lg text-yellow-900 mb-2">4. Indian Christian Marriage Act, 1872</h4>
                                            <p className="text-sm text-yellow-800 mb-2">
                                                <strong>Applies to:</strong> Christians
                                            </p>
                                            <p className="text-sm text-yellow-800">
                                                Requires marriage in a church or before a Marriage Registrar. Notice must be published for Sunday for three consecutive weeks. Minimum age is 21 for men and 18 for women, with parental consent required if under 21.
                                            </p>
                                        </div>

                                        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                                            <h4 className="font-semibold text-lg text-purple-900 mb-2">5. Parsi Marriage and Divorce Act, 1936</h4>
                                            <p className="text-sm text-purple-800 mb-2">
                                                <strong>Applies to:</strong> Parsis (Zoroastrians)
                                            </p>
                                            <p className="text-sm text-purple-800">
                                                Specific to the Parsi community. Requires Ashirvad (blessing) ceremony and registration with
                                                Parsi trustees. Both parties must be Parsi by religion.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Universal Legal Requirements
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Despite having separate personal laws, certain requirements apply across all marriages in India:
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">1. Minimum Age Requirement</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        The <strong>Prohibition of Child Marriage Act, 2006</strong> sets an absolute minimum age:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Men:</strong> Must have completed 21 years of age</li>
                                        <li><strong>Women:</strong> Must have completed 18 years of age</li>
                                        <li>These requirements supersede all personal laws</li>
                                        <li>Violations are punishable with imprisonment (up to 2 years) and fines</li>
                                        <li>The marriage can be declared voidable if contracted as a child</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">2. Mental Capacity</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Both parties must:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Be capable of giving valid consent</li>
                                        <li>Understand the nature of marriage</li>
                                        <li>Not be suffering from mental disorder that makes them unfit for marriage</li>
                                        <li>Not experience recurrent insanity attacks</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">3. Marital Status</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        For all religions except Muslim personal law (which allows polygamy for men):
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Neither party should have a living spouse at the time of marriage</li>
                                        <li>Bigamy is a criminal offense under Section 494 IPC (imprisonment up to 7 years)</li>
                                        <li>If previously married, must provide divorce decree or death certificate of former spouse</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">4. Prohibited Relationships</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-6">
                                        Marriages within certain degrees of prohibited relationships (e.g., siblings, parent-child,
                                        aunt-nephew) are void across all laws, though specific prohibited degrees vary by religion.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Marriage Registration: State-Wise Variations
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        While marriage laws are central (national), <strong>registration procedures are state subjects</strong>.
                                        This creates significant variations:
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">Mandatory vs Optional Registration</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Mandatory States:</strong> Maharashtra, Karnataka, Kerala, Himachal Pradesh, Andhra Pradesh have made registration compulsory within prescribed timeframes</li>
                                        <li><strong>Encouraged States:</strong> Delhi, UP, Haryana strongly encourage registration but may not impose strict penalties for non-registration</li>
                                        <li><strong>Varying Deadlines:</strong> Some states require registration within 30 days, others within 60 days, some have no time limit</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Registration Fees and Timelines</h3>
                                    <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-neutral-200">
                                                    <th className="text-left py-2">State</th>
                                                    <th className="text-left py-2">Fee</th>
                                                    <th className="text-left py-2">Timeline</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-neutral-700">
                                                <tr className="border-b border-neutral-100">
                                                    <td className="py-2">Delhi</td>
                                                    <td>₹100-200</td>
                                                    <td>Within 60 days recommended</td>
                                                </tr>
                                                <tr className="border-b border-neutral-100">
                                                    <td className="py-2">Maharashtra</td>
                                                    <td>₹500 (₹1000 fast-track)</td>
                                                    <td>Compulsory, penalties for delay</td>
                                                </tr>
                                                <tr className="border-b border-neutral-100">
                                                    <td className="py-2">Karnataka</td>
                                                    <td>₹200-500</td>
                                                    <td>Within 30 days mandatory</td>
                                                </tr>
                                                <tr className="border-b border-neutral-100">
                                                    <td className="py-2">Tamil Nadu</td>
                                                    <td>₹200</td>
                                                    <td>No strict deadline</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2">Uttar Pradesh</td>
                                                    <td>₹100-300</td>
                                                    <td>Encouraged, no penalty</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Common Legal Issues and How to Avoid Them
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                                            <h4 className="font-semibold text-red-900 mb-2">Issue: Underage Marriage</h4>
                                            <p className="text-sm text-red-800 mb-2"><strong>Problem:</strong> Marrying below legal age leads to criminal liability</p>
                                            <p className="text-sm text-red-800"><strong>Solution:</strong> Always verify age with official documents (birth certificate, school records) before proceeding</p>
                                        </div>

                                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                                            <h4 className="font-semibold text-red-900 mb-2">Issue: Incomplete Documentation</h4>
                                            <p className="text-sm text-red-800 mb-2"><strong>Problem:</strong> Missing documents delay registration or cause rejection</p>
                                            <p className="text-sm text-red-800"><strong>Solution:</strong> Use our state-wise documents checklist tool to ensure you have everything</p>
                                        </div>

                                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                                            <h4 className="font-semibold text-red-900 mb-2">Issue: Wrong Marriage Act Selection</h4>
                                            <p className="text-sm text-red-800 mb-2"><strong>Problem:</strong> Choosing the wrong act for inter-faith marriages</p>
                                            <p className="text-sm text-red-800"><strong>Solution:</strong> For inter-faith marriages, use Special Marriage Act, 1954. Consult legal advisor if unsure</p>
                                        </div>
                                    </div>
                                </section>

                                {/* FAQs */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="card">
                                                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                                                    {faq.question}
                                                </h3>
                                                <p className="text-neutral-700 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* CTA */}
                                <section className="bg-primary-50 rounded-xl p-8 text-center">
                                    <h3 className="text-2xl font-display font-bold mb-4">Need Help with Legal Compliance?</h3>
                                    <p className="text-neutral-700 mb-6">
                                        Use our free tools to check your eligibility and prepare the right documents
                                    </p>
                                    <Link href="/tools/" className="btn-primary">
                                        Explore All Legal Tools
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
