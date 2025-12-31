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
    toolName: 'Wedding Expense Split Calculator',
    toolDescription: 'Fairly calculate how to split wedding expenses between the bride\'s and groom\'s families. Navigate Indian wedding traditions and modern financial splits.',
    toolSlug: 'wedding-expense-split-calculator',
    keywords: [
        'wedding expense split',
        'who pays for wedding india',
        'cost sharing marriage',
        'splitting wedding bills',
        'modern indian wedding finance',
        'bridal vs groom side costs'
    ],
});

export default function WeddingExpenseSplitPage() {
    const faqs = [
        {
            question: 'Who traditionally pays for the wedding in India?',
            answer: 'Historically, the bride\'s family bore the majority of the costs. However, modern Indian weddings increasingly see a 50-50 split or splits based on individual guest counts. It is common for each side to pay for their own guests\' catering and shared costs (decor, venue) to be divided.'
        },
        {
            question: 'How do you bring up the "split" conversation with family?',
            answer: 'Start early. Have a direct, transparent meeting between the couple first, then involve parents with a prepared set of estimates. Focus on the total budget and what is fair given each family\'s financial capacity and guest list size.'
        },
        {
            question: 'What is the most common modern split for Indian weddings?',
            answer: 'The most popular modern split is "Shared Common Costs + Individual Guest Costs". Families split the venue, decor, and entertainment 50-50, but pay for catering and gifting based on their respective guest counts.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Expense Split Calculator',
        description: 'Navigate and calculate financial contributions from both families for a wedding.',
        url: '/wedding-expense-split-calculator/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Expense Split Calculator', path: '/wedding-expense-split-calculator/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Wedding Expense Split Calculator' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full">
                                <div className="text-5xl mb-4">💸</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Wedding Expense Split Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Navigating the complex and sensitive topic of splitting wedding costs between families with fairness and transparency.
                                </p>
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="card bg-accent-50 border-2 border-accent-200 mb-12">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🤝</div>
                                    <h2 className="text-2xl font-bold text-accent-900 mb-3">
                                        Interactive Split Calculator Coming Soon
                                    </h2>
                                    <p className="text-accent-800 mb-4">
                                        We are building a tool where you can input items and guest counts to generate a fair bill for both sides.
                                        Until then, follow our recommended splitting strategies below.
                                    </p>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Modern Ways to Split Wedding Costs
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Tradition is evolving. Today, many Indian couples are financial contributors themselves, and families are looking for more equitable ways to share the significant investment of a wedding.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3">The 50/50 Split</h4>
                                            <p className="text-sm text-neutral-600">Simplest method. All bills are added up and divided exactly in half. Works best when guest counts are similar.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3">The Per-Guest Split</h4>
                                            <p className="text-sm text-neutral-600">Each side pays for their own invited guests. Common costs (decor, music) are split 50/50. Most fair for unbalanced guest lists.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3">The Contributor Split</h4>
                                            <p className="text-sm text-neutral-600">The couple pays for things they care about (photography, outfits) while families handle traditional venue/food costs.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
