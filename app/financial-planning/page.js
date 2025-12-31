import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { generatePageMetadata, generateFAQSchema, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Financial Planning for Marriage & Weddings in India',
    description: 'Expert guide to marriage financial planning - wedding budgets, savings strategies, post-marriage finances, and long-term wealth building for couples.',
    canonicalPath: '/financial-planning/',
    keywords: ['wedding financial planning', 'marriage budget india', 'wedding savings', 'couple financial planning', 'marriage expenses'],
});

export default function FinancialPlanningPage() {
    const faqs = [
        {
            question: 'How much should I save for my wedding?',
            answer: 'A good rule is to save 50-60% of your total wedding budget before booking vendors. For a ₹20 lakh wedding, aim to save ₹10-12 lakhs upfront. This prevents debt and gives negotiating power with vendors.'
        },
        {
            question: 'Should families split wedding costs 50-50?',
            answer: 'Traditional splits vary (bride family handles wedding, groom handles reception), but modern couples increasingly share costs equally or based on financial capacity. Open communication between families is key.'
        },
        {
            question: 'Is taking a loan for a wedding a good idea?',
            answer: 'Generally not recommended. Personal loans for weddings carry 10-16% interest rates. Consider scaling down the celebration rather than starting married life in debt. If unavoidable, limit loans to 20-30% of budget maximum.'
        },
        {
            question: 'When should we start financial planning as a married couple?',
            answer: 'Immediately after engagement. Discuss salary transparency, debt status, savings goals, expense-sharing, and long-term plans (home, children, retirement) before marriage to avoid conflicts later.'
        },
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Financial Planning', path: '/financial-planning/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Financial Planning' }]} />

                    <div className="py-12 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="text-5xl mb-4">💰</div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                Financial Planning for Marriage
                            </h1>
                            <p className="text-xl text-neutral-600">
                                Smart money management for wedding expenses and married life
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Wedding Financial Planning: A Complete Guide
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Indian weddings are significant financial events, often representing years of family savings or
                                    requiring substantial loans. Smart financial planning ensures you celebrate without drowning in debt
                                    or compromising your future financial security.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">Understanding Indian Wedding Costs</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Wedding costs in India vary dramatically based on location, guest count, and cultural expectations:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 my-6">
                                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                                        <h4 className="font-semibold text-green-900 mb-2">Budget Weddings</h4>
                                        <p className="text-2xl font-bold text-green-700 mb-2">₹3-8 Lakhs</p>
                                        <p className="text-sm text-green-800">100-150 guests, community halls, minimal events</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                                        <h4 className="font-semibold text-blue-900 mb-2">Mid-Range Weddings</h4>
                                        <p className="text-2xl font-bold text-blue-700 mb-2">₹15-40 Lakhs</p>
                                        <p className="text-sm text-blue-800">250-400 guests, 3-star hotels, 3-4 events</p>
                                    </div>
                                    <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                                        <h4 className="font-semibold text-purple-900 mb-2">Luxury Weddings</h4>
                                        <p className="text-2xl font-bold text-purple-700 mb-2">₹50L-2Cr+</p>
                                        <p className="text-sm text-purple-800">500+ guests, 5-star venues, destination</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold mb-4 mt-8">Creating Your Wedding Budget</h3>
                                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-6">
                                    <h4 className="font-semibold text-primary-900 mb-3">Step 1: Calculate Available Funds</h4>
                                    <ul className="text-sm text-primary-800 space-y-2">
                                        <li>• Current savings (yours + partner's)</li>
                                        <li>• Expected family contributions (both sides)</li>
                                        <li>• Savings capacity over next 12-18 months</li>
                                        <li>• Gifts/cash received at engagement</li>
                                        <li>• Emergency fund to maintain (don't touch this!)</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                                    <h4 className="font-semibold text-blue-900 mb-3">Step 2: Prioritize Expenses</h4>
                                    <p className="text-sm text-blue-800 mb-3">Classify expenses as Must-Have, Nice-to-Have, or Optional:</p>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                        <li>✓ <strong>Must-Have:</strong> Venue, food, photographer, wedding outfits</li>
                                        <li>~ <strong>Nice-to-Have:</strong> Decorator, mehendi artist, band, pre-wedding shoot</li>
                                        <li>○ <strong>Optional:</strong> Destination wedding, celebrity performers, fireworks</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                                    <h4 className="font-semibold text-green-900 mb-3">Step 3: Build 15-20% Contingency</h4>
                                    <p className="text-sm text-green-800">
                                        Wedding costs ALWAYS exceed initial estimates. Guest count increases, vendors raise prices,
                                        last-minute additions happen. Budget an extra 15-20% for unforeseen expenses.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Smart Ways to Save Money on Weddings
                                </h2>

                                <div className="space-y-4">
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🗓️ Choose Off-Season Dates</h4>
                                        <p className="text-sm text-neutral-600">
                                            Avoid peak wedding season (October-February). March-September weddings get 20-30% discounts
                                            on venues and vendors.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">⏰ Morning/Afternoon Ceremonies</h4>
                                        <p className="text-sm text-neutral-600">
                                            Evening venues cost 30-40% more. Morning weddings (7am-12pm) or afternoon (3-6pm) save
                                            significantly on venue and catering.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">📅 Weekday Weddings</h4>
                                        <p className="text-sm text-neutral-600">
                                            Tuesday/Wednesday weddings save 15-25% on venue costs compared to weekends. Works well if
                                            most guests are local.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🤝 Package Deals</h4>
                                        <p className="text-sm text-neutral-600">
                                            Negotiate hotel packages covering venue, rooms, catering together for better rates. Same
                                            with decorator + caterer combos.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">👥 Guest List Discipline</h4>
                                        <p className="text-sm text-neutral-600">
                                            Every 10 guests cut saves ₹15,000-30,000 (food + gifts + seating). Ruthlessly trim acquaintances,
                                            distant relatives rarely see.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🎨 DIY Decor Elements</h4>
                                        <p className="text-sm text-neutral-600">
                                            DIY photo booth props, welcome boards, table centerpieces for pre-wedding events. Saves
                                            ₹50,000-1 lakh on professional decorators.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Post-Wedding Financial Planning
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-6">
                                    Marriage brings new financial responsibilities and opportunities. Here's how to start your
                                    married life on solid financial footing:
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">First 3 Months: Financial Foundation</h3>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                    <li>Open joint bank account (keep individual accounts too)</li>
                                    <li>Update nominees on all investments, insurance, PF, bank accounts</li>
                                    <li>Discuss and agree on expense-sharing model (50-50, proportional, pooled)</li>
                                    <li>Create joint emergency fund (6 months expenses)</li>
                                    <li>Review and optimize insurance (health, life, term)</li>
                                    <li>Consolidate duplicate subscriptions</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-4">Year 1: Building Together</h3>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                    <li>Set 1-year, 5-year, 10-year financial goals</li>
                                    <li>Start house down-payment fund (if planning to buy property)</li>
                                    <li>Begin retirement planning (even in your 20s!)</li>
                                    <li>Optimize tax-saving under Section 80C, 80D</li>
                                    <li>Review credit scores, clear any bad debt</li>
                                    <li>Consider joint investments (mutual funds, stocks)</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-4">Common Financial Mistakes Newlyweds Make</h3>
                                <div className="space-y-3">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                        <p className="text-sm text-red-800"><strong>Mistake:</strong> Not discussing money openly</p>
                                        <p className="text-sm text-red-700"><strong>Fix:</strong> Schedule monthly "money dates" to review finances together</p>
                                    </div>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                        <p className="text-sm text-red-800"><strong>Mistake:</strong> Ignoring debt (especially wedding loans)</p>
                                        <p className="text-sm text-red-700"><strong>Fix:</strong> Aggressive debt repayment plan, target 18-24 months clearance</p>
                                    </div>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                        <p className="text-sm text-red-800"><strong>Mistake:</strong> Lifestyle inflation post-marriage</p>
                                        <p className="text-sm text-red-700"><strong>Fix:</strong> Maintain pre-marriage savings rate, avoid "keeping up" mindset</p>
                                    </div>
                                </div>
                            </section>

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

                            <section className="bg-primary-50 rounded-xl p-8 text-center">
                                <h3 className="text-2xl font-display font-bold mb-4">Plan Your Wedding Budget Today</h3>
                                <p className="text-neutral-700 mb-6">
                                    Use our free budget calculator to plan expenses and avoid overspending
                                </p>
                                <Link href="/wedding-budget-calculator/" className="btn-primary">
                                    Calculate Wedding Budget
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
