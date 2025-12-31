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
    toolName: 'Wedding Savings Calculator - Plan Your Dream Budget',
    toolDescription: 'Calculate how much you need to save monthly to reach your wedding budget goal. Plan your savings timeline and understand your financial reaching.',
    toolSlug: 'wedding-savings-calculator',
    keywords: [
        'wedding savings calculator',
        'marriage fund planner',
        'monthly savings for wedding',
        'how to save for indian wedding',
        'wedding finance planner',
        'saving for marriage'
    ],
});

export default function WeddingSavingsPage() {
    const faqs = [
        {
            question: 'How much should I save for my wedding?',
            answer: 'A good rule of thumb is to save 10-20% of your monthly income for your wedding fund once you are engaged. However, your total goal depends on your planned wedding budget (e.g., ₹15 lakhs) and your timeline (e.g., 18 months).'
        },
        {
            question: 'Should I take a loan for my wedding?',
            answer: 'Financial experts generally advise against taking high-interest personal loans for weddings. It is better to scale down the celebration or extend the engagement period to save more. If you must take a loan, ensure the EMIs are manageable (less than 15-20% of your income).'
        },
        {
            question: 'Where should I keep my wedding savings?',
            answer: 'Since you will need the money in a short time (usually 6-24 months), look for low-risk options like High-Yield Savings Accounts, Liquid Mutual Funds, or Short-term Fixed Deposits (FDs). Avoid volatile equity markets for money you need within 2 years.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Savings Calculator',
        description: 'Plan your monthly savings to reach your matrimonial financial goals.',
        url: '/wedding-savings-calculator/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Savings Calculator', path: '/wedding-savings-calculator/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Wedding Savings Calculator' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full">
                                <div className="text-5xl mb-4">🏦</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Wedding Savings Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Plan your journey to a debt-free dream wedding by calculating your monthly savings needs.
                                </p>
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="card bg-secondary-50 border-2 border-secondary-200 mb-12">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">💰</div>
                                    <h2 className="text-2xl font-bold text-secondary-900 mb-3">
                                        Interactive Savings Planner Coming Soon
                                    </h2>
                                    <p className="text-secondary-800 mb-4">
                                        We are building a tool that accounts for inflation, interest rates, and your current savings.
                                        Until then, use the guide below to structure your matrimonial finances.
                                    </p>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Financial Planning for Your Wedding
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        An Indian wedding is often the single most expensive event in a family\'s life, second only to buying a home.
                                        Strategic financial planning ensures that you begin your new life together on a solid foundation, not under a mountain of debt.
                                    </p>

                                    <div className="bg-primary-50 p-8 rounded-2xl my-8">
                                        <h3 className="font-bold text-primary-900 border-none m-0 mb-4">The "Rule of 3" for Wedding Savings</h3>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold">01.</span>
                                                <span className="text-primary-800 text-sm"><strong>Initial Goal:</strong> Determine your total budget (e.g. ₹20 lakhs). Subtract what parents are contributing. This is your personal target.</span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold">02.</span>
                                                <span className="text-primary-800 text-sm"><strong>Monthly Target:</strong> Divide your personal target by the number of months until the wedding. (e.g. ₹10 lakhs / 10 months = ₹1 lakh / month).</span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold">03.</span>
                                                <span className="text-primary-800 text-sm"><strong>Buffer:</strong> Always save an extra 10% on top of your monthly target for "hidden" wedding costs like tips, travel, and last-minute accessories.</span>
                                            </li>
                                        </ul>
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
