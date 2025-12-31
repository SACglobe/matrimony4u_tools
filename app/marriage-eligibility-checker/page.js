import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import {
    generateToolMetadata,
    generateToolSchema,
    generateFAQSchema,
    generateBreadcrumbSchema,
    JsonLd
} from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateToolMetadata({
    toolName: 'Marriage Eligibility Checker - Indian Laws',
    toolDescription: 'Check your legal eligibility for marriage in India under Hindu Marriage Act, Special Marriage Act, and other personal laws. Verify age, relationship constraints, and more.',
    toolSlug: 'marriage-eligibility-checker',
    keywords: [
        'marriage eligibility india',
        'legal requirements for marriage',
        'can I get married in india',
        'hindu marriage eligibility',
        'special marriage act requirements',
        'marriage age and constraints'
    ],
});

export default function MarriageEligibilityPage() {
    const faqs = [
        {
            question: 'What are the basic eligibility criteria for marriage in India?',
            answer: 'The primary criteria are: 1) Minimum age (21 for men, currently 18 but proposed 21 for women), 2) Mutual consent, 3) Neither party having a living spouse (monogamy), and 4) Parties not being within prohibited degrees of relationship (unless custom allows).'
        },
        {
            question: 'What are "prohibited degrees of relationship"?',
            answer: 'These are relationships where marriage is forbidden by law to prevent genetic issues and maintain social order. It includes direct ancestors, descendants, siblings, and certain close relatives. The specifics vary slightly between Hindu and Special Marriage Acts.'
        },
        {
            question: 'Can first cousins get married in India?',
            answer: 'Under the Hindu Marriage Act, first cousins (sapindas) are generally prohibited from marrying unless a long-standing custom in their community allows it (common in some South Indian communities). Under the Special Marriage Act, it is generally prohibited.'
        },
        {
            question: 'What if one partner is a non-citizen?',
            answer: 'Foreigners can marry Indian citizens in India, typically under the Special Marriage Act. This requires a "No Objection Certificate" (NOC) from their respective embassy, valid passport, visa, and proof of address.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Marriage Eligibility Checker',
        description: 'Verify legal eligibility for marriage in India based on age, religion, and relationship constraints.',
        url: '/marriage-eligibility-checker/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Marriage Eligibility Checker', path: '/marriage-eligibility-checker/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Marriage Eligibility Checker' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full">
                                <div className="text-5xl mb-4">✓</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Marriage Eligibility Checker
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Verify your legal eligibility for marriage in India under various acts and personal laws.
                                </p>
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="card bg-primary-50 border-2 border-primary-200 mb-12">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">⚖️</div>
                                    <h2 className="text-2xl font-bold text-primary-900 mb-3">
                                        Interactive Eligibility Tool Coming Soon
                                    </h2>
                                    <p className="text-primary-800 mb-4">
                                        We are developing a step-by-step checker to verify your eligibility based on religion, age, and location.
                                        In the meantime, please review the critical legal requirements below.
                                    </p>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Core Legal Requirements in India
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Legal eligibility for marriage in India is complex because it depends on which law you marry under.
                                        However, four fundamental requirements apply to almost all legal marriages:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="card border-l-4 border-l-primary-500">
                                            <h3 className="font-bold text-xl mb-2">1. Minimum Age</h3>
                                            <p className="text-sm text-neutral-600">
                                                Currently, the groom must be at least <strong>21 years old</strong> and the bride at least <strong>18 years old</strong>.
                                                A bill is pending to increase the woman\'s age to 21 to match the man\'s.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-secondary-500">
                                            <h3 className="font-bold text-xl mb-2">2. Valid Consent</h3>
                                            <p className="text-sm text-neutral-600">
                                                Both parties must be capable of giving valid consent. They must be of sound mind and not
                                                under duress, coercion, or fraud. Forceful marriages are voidable.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-accent-500">
                                            <h3 className="font-bold text-xl mb-2">3. Monogamy</h3>
                                            <p className="text-sm text-neutral-600">
                                                Under most acts (Hindu, Special Marriage Act, Christian Act), neither party should have a living spouse
                                                at the time of marriage. Bigamy is a criminal offense in India.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-neutral-500">
                                            <h3 className="font-bold text-xl mb-2">4. Prohibited Relationships</h3>
                                            <p className="text-sm text-neutral-600">
                                                Parties should not be within "prohibited degrees of relationship" (like immediate family)
                                                unless the custom or usage governing each of them permits such a marriage.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Eligibility Under Different Acts
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Hindu Marriage Act, 1955</h3>
                                    <p className="text-neutral-700 mb-4">
                                        Applies to Hindus, Buddhists, Jains, and Sikhs. Specific conditions:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Must not be <strong>Sapindas</strong> (related through common ancestors) within 5 generations on father\'s side and 3 on mother\'s.</li>
                                        <li>If already married once, a valid divorce decree or death certificate of previous spouse is mandatory.</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Special Marriage Act, 1954</h3>
                                    <p className="text-neutral-700 mb-4">
                                        A secular law open to all Indians. It is often chosen for inter-faith marriages.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Requires a 30-day notice period to the Marriage Officer.</li>
                                        <li>During this period, any person can object to the marriage based on legal eligibility grounds.</li>
                                    </ul>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
