import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WeddingBudgetCalculator from '@/components/tools/WeddingBudgetCalculator';
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
    toolName: 'Indian Wedding Budget Calculator',
    toolDescription: 'Free wedding budget calculator for Indian weddings. Plan expenses across venue, catering, photography, decoration, clothing, jewelry, and more. Get per-guest costs and budget breakdowns.',
    toolSlug: 'wedding-budget-calculator',
    keywords: [
        'indian wedding budget calculator',
        'wedding cost india',
        'marriage budget planner',
        'wedding expenses calculator',
        'indian wedding cost breakdown',
        'wedding budget india',
        'marriage ceremony budget'
    ],
});

export default function WeddingBudgetPage() {
    const faqs = [
        {
            question: 'What is the average cost of an Indian wedding?',
            answer: 'The average Indian wedding costs between ₹5 lakhs to ₹2 crores, depending on location, guest count, and preferences. Metro cities like Delhi, Mumbai, and Bangalore typically see higher costs (₹15-50 lakhs average) compared to tier-2/3 cities (₹5-15 lakhs). Luxury weddings can exceed ₹5 crores.'
        },
        {
            question: 'How much should I budget per guest for an Indian wedding?',
            answer: 'Budget ₹2,000-₹5,000 per guest for a mid-range wedding, and ₹5,000-₹15,000+ per guest for a premium wedding. This includes food, venue, decor, and favors. Food alone typically costs ₹800-₹3,000 per guest depending on menu quality.'
        },
        {
            question: 'What are the biggest expenses in an Indian wedding?',
            answer: 'The top 5 expenses are: 1) Venue and catering (30-40% of budget), 2) Jewelry (15-25%), 3) Clothing and accessories (10-15%), 4) Photography and videography (8-12%), and 5) Decoration and flowers (8-12%). Together, these account for 70-80% of total costs.'
        },
        {
            question: 'How can I reduce my Indian wedding budget without compromising quality?',
            answer: 'Key strategies: 1) Choose off-season dates (July-September can save 20-30%), 2) Host on weekdays instead of weekends, 3) Consolidate ceremonies (combine engagement and sangeet), 4) Use seasonal flowers, 5) Negotiate vendor packages, 6) Opt for lunch instead of dinner (10-15% cheaper), and 7) Limit guest list thoughtfully.'
        },
        {
            question: 'Should I include a contingency in my wedding budget?',
            answer: 'Yes, absolutely. Add 10-15% contingency for unexpected expenses that always arise - last-minute guest additions, vendor price increases, additional decor, emergency purchases, or upgrades. Wedding costs frequently exceed initial estimates.'
        },
        {
            question: 'How do wedding costs differ between North and South India?',
            answer: 'North Indian weddings (especially Punjab, Delhi) tend to cost 15-30% more due to elaborate multi-day celebrations, higher guest counts (300-1000+), and premium expectations. South Indian weddings are often more modest (100-500 guests) with focus on traditional ceremonies. However, luxury weddings in metros like Bangalore and Chennai match or exceed North Indian costs.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Indian Wedding Budget Calculator',
        description: 'Calculate and plan your Indian wedding budget across all major expense categories including venue, catering, photography, jewelry, clothing, and more.',
        url: '/wedding-budget-calculator/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Budget Calculator', path: '/wedding-budget-calculator/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Wedding Budget Calculator' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="text-5xl mb-4">💰</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Indian Wedding Budget Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Plan your dream Indian wedding with confidence. Calculate costs across all ceremonies,
                                    get per-guest breakdowns, and stay within budget.
                                </p>
                            </div>

                            {/* Calculator */}
                            <WeddingBudgetCalculator />

                            {/* Educational Content */}
                            <div className="mt-16 prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Indian Wedding Budgets
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Indian weddings are renowned worldwide for their grandeur, multiple-day celebrations, and significant financial investment.
                                        Unlike Western weddings that typically focus on a single ceremony, Indian weddings often span 3-7 days with distinct
                                        events: engagement, mehendi, sangeet, haldi, wedding ceremony, and reception. Each event requires separate planning,
                                        venues, catering, and decor.
                                    </p>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        According to recent studies, Indians spend an estimated <strong>₹3.7 lakh crores annually on weddings</strong>,
                                        making it one of the largest consumer spending categories after real estate. The average middle-class Indian
                                        family spends <strong>₹10-25 lakhs</strong> on a wedding, often saving for years or taking loans to finance
                                        their child's marriage.
                                    </p>

                                    <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                                        <h3 className="font-semibold text-primary-900 text-xl mb-3">Wedding Budget by Tier</h3>
                                        <div className="space-y-3 text-primary-800">
                                            <div>
                                                <strong>Budget (₹5-10 lakhs):</strong> 100-200 guests, simple venue, home-cooked or modest catering,
                                                basic photography, minimal jewelry
                                            </div>
                                            <div>
                                                <strong>Mid-Range (₹10-30 lakhs):</strong> 200-400 guests, banquet hall, professional catering,
                                                quality photography/video, moderate jewelry and clothing
                                            </div>
                                            <div>
                                                <strong>Premium (₹30 lakhs-₹1 crore):</strong> 400-800 guests, luxury venues (5-star hotels, palaces),
                                                celebrity services, designer outfits, international travel
                                            </div>
                                            <div>
                                                <strong>Ultra-Luxury (₹1 crore+):</strong> 500-2000+ guests, destination weddings, celebrity performers,
                                                couture fashion, imported decor
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Breaking Down Wedding Expenses
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">1. Venue and Catering (30-40% of budget)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        This is typically your <strong>largest expense category</strong>. Venue costs vary dramatically:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Community halls:</strong> ₹20,000-₹1 lakh per event</li>
                                        <li><strong>Banquet halls:</strong> ₹1-5 lakhs per event</li>
                                        <li><strong>5-star hotels:</strong> ₹5-50 lakhs per event</li>
                                        <li><strong>Heritage venues/palaces:</strong> ₹10 lakhs-₹2 crores per event</li>
                                        <li><strong>Destination weddings:</strong> ₹20 lakhs-₹5 crores total</li>
                                    </ul>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        <strong>Catering costs per person:</strong> Budget ₹800-₹1,500 for vegetarian meals, ₹1,500-₹3,000 for
                                        non-vegetarian, and ₹3,000-₹10,000+ for premium/international cuisine. Remember to multiply by guest count
                                        for EACH event.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">2. Jewelry (15-25% of budget)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Indian weddings place immense importance on jewelry, especially for the bride. Gold purchases also serve as
                                        investment and tradition.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Basic gold set:</strong> ₹2-5 lakhs (mangalsutra, earrings, bangles)</li>
                                        <li><strong>Traditional bridal set:</strong> ₹5-15 lakhs (necklace, maang tikka, earrings, bangles, rings)</li>
                                        <li><strong>Premium/Diamond jewelry:</strong> ₹15 lakhs-₹1 crore+</li>
                                        <li><strong>Groom's jewelry:</strong> ₹50,000-₹3 lakhs (chain, ring, groom's sarpech)</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">3. Clothing and Accessories (10-15% of budget)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Bride and groom need multiple outfits for different ceremonies:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Bride's trousseau:</strong> ₹2-20 lakhs (mehendi, sangeet, wedding, reception outfits)</li>
                                        <li><strong>Designer lehengas:</strong> ₹1-15 lakhs per piece</li>
                                        <li><strong>Groom's outfits:</strong> ₹50,000-₹5 lakhs (sherwani, suit, indo-western)</li>
                                        <li><strong>Family outfits:</strong> ₹1-10 lakhs (immediate family coordination)</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">4. Photography & Videography (8-12% of budget)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Professional documentation is non-negotiable for most families:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Basic package:</strong> ₹50,000-₹1.5 lakhs (1-2 photographers, basic video)</li>
                                        <li><strong>Mid-range:</strong> ₹1.5-5 lakhs (team coverage, cinematic video, albums)</li>
                                        <li><strong>Premium:</strong> ₹5-25 lakhs (celebrity photographers, drones, same-day edits)</li>
                                        <li><strong>International photographers:</strong> ₹25 lakhs-₹1 crore+</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">5. Decoration & Flowers (8-12% of budget)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Transforming venues requires significant investment:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Basic decor:</strong> ₹50,000-₹2 lakhs per event</li>
                                        <li><strong>Mid-range:</strong> ₹2-8 lakhs per event (themed decor, floral arrangements)</li>
                                        <li><strong>Premium:</strong> ₹8-50 lakhs per event (elaborate themes, imported flowers, LED/lighting)</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">6. Other Significant Expenses</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4">
                                        <li><strong>Entertainment (DJ, band, performers):</strong> ₹50,000-₹10 lakhs+</li>
                                        <li><strong>Invitations & printing:</strong> ₹20,000-₹5 lakhs</li>
                                        <li><strong>Transportation (baraat, guests):</strong> ₹30,000-₹5 lakhs</li>
                                        <li><strong>Guest accommodation:</strong> ₹1-20 lakhs</li>
                                        <li><strong>Makeup & grooming:</strong> ₹25,000-₹3 lakhs</li>
                                        <li><strong>Wedding planner:</strong> ₹1-25 lakhs (10-15% of total budget)</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Smart Budgeting Strategies for Indian Weddings
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">1. Prioritize Your Non-Negotiables</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Identify 2-3 aspects that matter most to you. If photography is your priority, allocate more there and
                                        save on decor. If guest experience matters most, invest in food quality and cut elsewhere.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">2. Timing Matters</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Off-season weddings (July-September):</strong> Monsoon season offers 20-30% discounts on venues and vendors</li>
                                        <li><strong>Weekday weddings:</strong> Save 15-25% compared to Friday-Sunday</li>
                                        <li><strong>Lunch vs. Dinner:</strong> Lunch events cost 10-15% less and allow better venue availability</li>
                                        <li><strong>Morning ceremonies:</strong> Traditional Hindu weddings in morning hours can reduce overall costs</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">3. Guest List Management</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Your guest count is the <strong>biggest budget multiplier</strong>. Reducing from 500 to 300 guests
                                        can save ₹5-15 lakhs across catering, venue size, invitations, and favors. Be strategic about invitations.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">4. Consolidate Ceremonies</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Combining events (engagement + sangeet, or mehendi + sangeet) can halve venue and catering costs for
                                        those ceremonies while maintaining tradition.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">5. Negotiate and Compare</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Get quotes from at least 3 vendors per category</li>
                                        <li>Book vendors 6-12 months in advance for better rates</li>
                                        <li>Negotiate package deals (e.g., venue + catering bundles save 10-20%)</li>
                                        <li>Pay cash for additional 3-5% discounts from some vendors</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">6. DIY Where Possible</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Invitations, welcome bags, small decor elements, and favors can be done in-house or by talented friends/family
                                        for significant savings without compromising quality.
                                    </p>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                                        <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Budget Traps to Avoid</h3>
                                        <ul className="text-sm text-yellow-800 space-y-2">
                                            <li><strong>Emotional overspending:</strong> "It's once in a lifetime" leads to regret. Set firm limits.</li>
                                            <li><strong>Last-minute additions:</strong> These cost 20-50% more. Plan thoroughly in advance.</li>
                                            <li><strong>Vendor hidden charges:</strong> Ask for itemized quotes with all taxes and charges included.</li>
                                            <li><strong>Guest expectation pressure:</strong> Your financial health matters more than impressing relatives.</li>
                                            <li><strong>Ignoring contingency:</strong> Unexpected costs WILL arise. Budget 10-15% extra.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        How to Use This Wedding Budget Calculator
                                    </h2>

                                    <ol className="list-decimal list-inside space-y-3 text-neutral-700 mb-6">
                                        <li><strong>Start with your guest count:</strong> This drives many other costs. Be realistic.</li>
                                        <li><strong>Enter estimated costs for each category:</strong> Use our guidance above or vendor quotes you've received.</li>
                                        <li><strong>Review the breakdown:</strong> See which categories consume the most budget.</li>
                                        <li><strong>Adjust and optimize:</strong> Reallocate funds between categories based on your priorities.</li>
                                        <li><strong>Track actual spending:</strong> Come back and update with real costs as you book vendors.</li>
                                    </ol>

                                    <p className="text-neutral-700 leading-relaxed">
                                        <strong>Pro Tip:</strong> Create three budget versions – ideal, realistic, and minimum viable. This helps
                                        you make informed decisions when reality demands compromises.
                                    </p>
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

                                {/* Related Tools */}
                                <section>
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Planning Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/wedding-guest-list-planner/" className="card-hover">
                                            <div className="text-3xl mb-3">👥</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Guest List Planner</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Organize your guest list by categories and manage RSVPs efficiently
                                            </p>
                                        </Link>
                                        <Link href="/wedding-savings-calculator/" className="card-hover">
                                            <div className="text-3xl mb-3">🏦</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Savings Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Calculate monthly savings needed to reach your wedding budget goal
                                            </p>
                                        </Link>
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
