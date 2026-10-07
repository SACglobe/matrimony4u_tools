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

export const revalidate = 604800;
export const dynamic = 'force-static';

export const metadata = generateToolMetadata({
    toolName: 'Wedding Savings Calculator & Target Planner',
    toolDescription: 'Calculate required monthly savings for your Indian wedding budget. Factor in current savings, family contributions, time horizon, and interest returns.',
    toolSlug: 'wedding-savings-calculator',
    keywords: [
        'wedding savings calculator',
        'monthly savings for marriage',
        'wedding budget planner india',
        'how much to save for wedding',
        'wedding fund investment vehicles',
        'fd vs mutual fund for wedding',
        'wedding inflation india'
    ],
});

export default function WeddingSavingsCalculatorPage() {
    const faqs = [
        {
            question: 'How much should an Indian couple save each month for their wedding?',
            answer: 'Financial planners recommend saving 30% to 50% of your disposable monthly income toward your wedding fund once an engagement is finalized. For a wedding planned 12 months away with a personal target of ₹6 lakhs, saving ₹50,000 monthly in a recurring deposit or liquid fund fulfills the goal without expensive personal loans.'
        },
        {
            question: 'What is the safest financial instrument for wedding savings under 1 year?',
            answer: 'For timelines under 12 months, safety and liquidity must take precedence over aggressive returns. High-yield Bank Recurring Deposits (RDs), Fixed Deposits (FDs), and Liquid Debt Mutual Funds yielding 6.5% to 7.5% per annum are ideal because they protect your principal capital from equity market volatility.'
        },
        {
            question: 'How does inflation affect Indian wedding costs?',
            answer: 'Wedding-specific inflation in India typically runs between 8% and 12% annually, outpacing standard consumer price inflation. Major cost drivers include escalating banquet hall rentals during peak muhurat months, fluctuating gold prices, and rising catering food commodity costs. Locking vendor contracts 6 to 9 months in advance shields you from price hikes.'
        },
        {
            question: 'Should couples take personal loans or credit cards to fund a wedding?',
            answer: 'Financial experts strongly advise against unsecured personal loans or high-interest credit card debt for weddings. Personal loans carry steep interest rates (11% to 18%), burdening newly married couples with substantial EMIs during their crucial wealth-building years. It is far better to trim guest counts or non-essential decor than to start married life in debt.'
        },
        {
            question: 'How should parents and couples split wedding savings contributions?',
            answer: 'Contemporary urban couples frequently fund 30% to 50% of their wedding expenses from personal savings, while parents cover traditional venue, gold, and family hospitality costs. Having transparent conversations early enables both generations to coordinate monthly savings goals without financial stress.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Savings Calculator & Target Planner',
        description: 'Interactive savings calculator for estimating required monthly contributions, interest gains, and timelines for Indian weddings.',
        url: '/wedding-savings-calculator',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Savings Calculator', path: '/wedding-savings-calculator' },
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

                    <div className="py-12 w-full">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Page Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">🏦</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Wedding Savings Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Calculate your exact monthly savings target to fund your dream Indian wedding debt-free. Account for current savings, parental support, and investment returns.
                                </p>
                            </div>

                            {/* Interactive Savings Target Planner */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>💰</span> Interactive Savings Target Planner
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Input your target wedding budget, available savings, and timeline to calculate your required monthly investment.
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1.5 bg-green-100 text-green-800 rounded-full">
                                            Debt-Free Wedding Engine
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Inputs Column */}
                                    <div className="lg:col-span-6 space-y-5">
                                        {/* Target Wedding Budget */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="input-target-budget" className="text-sm font-bold text-neutral-800">
                                                    Target Total Wedding Budget:
                                                </label>
                                                <span className="text-base font-extrabold text-primary-600" id="disp-target-budget">
                                                    ₹15,00,000
                                                </span>
                                            </div>
                                            <input
                                                id="input-target-budget"
                                                type="range"
                                                min="300000"
                                                max="6000000"
                                                step="50000"
                                                defaultValue="1500000"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                                <span>₹3 Lakhs</span>
                                                <span>₹30 Lakhs</span>
                                                <span>₹60 Lakhs</span>
                                            </div>
                                        </div>

                                        {/* Current Available Savings */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="input-curr-savings" className="text-sm font-bold text-neutral-800">
                                                    Current Savings Allocated:
                                                </label>
                                                <span className="text-sm font-bold text-neutral-700" id="disp-curr-savings">
                                                    ₹3,00,000
                                                </span>
                                            </div>
                                            <input
                                                id="input-curr-savings"
                                                type="range"
                                                min="0"
                                                max="3000000"
                                                step="25000"
                                                defaultValue="300000"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                        </div>

                                        {/* Family Contribution */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="input-family-contrib" className="text-sm font-bold text-neutral-800">
                                                    Expected Family Contribution:
                                                </label>
                                                <span className="text-sm font-bold text-neutral-700" id="disp-family-contrib">
                                                    ₹4,00,000
                                                </span>
                                            </div>
                                            <input
                                                id="input-family-contrib"
                                                type="range"
                                                min="0"
                                                max="3000000"
                                                step="25000"
                                                defaultValue="400000"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                        </div>

                                        {/* Months Left */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="input-months-left" className="text-sm font-bold text-neutral-800">
                                                    Timeline Until Wedding:
                                                </label>
                                                <span className="text-sm font-bold text-neutral-700" id="disp-months-left">
                                                    12 Months
                                                </span>
                                            </div>
                                            <input
                                                id="input-months-left"
                                                type="range"
                                                min="3"
                                                max="36"
                                                step="1"
                                                defaultValue="12"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                                <span>3 Months (Urgent)</span>
                                                <span>12 Months (Standard)</span>
                                                <span>36 Months (Long-Term)</span>
                                            </div>
                                        </div>

                                        {/* Savings Vehicle */}
                                        <div>
                                            <label htmlFor="select-savings-vehicle" className="block text-sm font-bold text-neutral-800 mb-1">
                                                Savings Instrument / Annual Return:
                                            </label>
                                            <select
                                                id="select-savings-vehicle"
                                                className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium focus:ring-2 focus:ring-primary-500"
                                                defaultValue="7.0"
                                            >
                                                <option value="0.0">Standard Savings / Cash (0% Yield)</option>
                                                <option value="3.5">High-Yield Savings Account (3.5% p.a.)</option>
                                                <option value="7.0">Fixed Deposit / Recurring Deposit (7.0% p.a.)</option>
                                                <option value="7.5">Liquid / Arbitrage Mutual Fund (7.5% p.a.)</option>
                                                <option value="9.0">Conservative Hybrid Fund (9.0% p.a.)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Results Column */}
                                    <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-display font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                                                Savings Roadmap Analysis
                                            </h3>

                                            {/* Key Output Card */}
                                            <div className="bg-primary-600 text-white p-5 rounded-xl shadow-md mb-5 text-center">
                                                <span className="text-xs uppercase tracking-wider text-primary-100 font-semibold block">
                                                    Required Monthly Savings
                                                </span>
                                                <div className="text-3xl md:text-4xl font-extrabold mt-1" id="res-monthly-savings">
                                                    ₹64,367 / mo
                                                </div>
                                                <p className="text-xs text-primary-200 mt-1" id="res-monthly-sub">
                                                    Invested monthly over 12 months
                                                </p>
                                            </div>

                                            {/* Breakdown Metrics */}
                                            <div className="grid grid-cols-2 gap-3 mb-5">
                                                <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-sm">
                                                    <span className="text-xs text-neutral-500 font-medium block">Net Savings Gap</span>
                                                    <span className="text-lg font-bold text-neutral-900 block mt-1" id="res-net-gap">
                                                        ₹8,00,000
                                                    </span>
                                                    <span className="text-xs text-neutral-500 mt-0.5 block">Budget minus upfront funds</span>
                                                </div>

                                                <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-sm">
                                                    <span className="text-xs text-neutral-500 font-medium block">Interest Earned</span>
                                                    <span className="text-lg font-bold text-green-700 block mt-1" id="res-interest-earned">
                                                        +₹27,596
                                                    </span>
                                                    <span className="text-xs text-neutral-500 mt-0.5 block">Compound growth benefit</span>
                                                </div>
                                            </div>

                                            {/* Feasibility Indicator */}
                                            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm" id="box-feasibility">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                                                    Feasibility Assessment
                                                </h4>
                                                <p className="text-xs text-neutral-700 leading-relaxed" id="res-feasibility-note">
                                                    This monthly target represents a healthy, achievable allocation for working professionals or joint household contributions. Set up automated salary standing instructions on payday.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                                            <span>Buffer Recommendation:</span>
                                            <strong className="text-neutral-700">Add 10% emergency buffer</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comprehensive Educational Content (>650 words) */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Financial Planning for Your Indian Wedding
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        An Indian wedding is often the single most significant family financial event of a decade, frequently rivaling or exceeding the cost of higher education or a home down payment. While weddings are deeply sentimental cultural milestones, conducting them without disciplined financial planning risks saddling the newlyweds and their parents with high-interest personal loans, depleted retirement corpuses, or credit card debt.
                                    </p>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Modern couples across India are taking control of their financial destinies by establishing dedicated matrimonial savings portfolios. By calculating your exact monthly savings requirements well in advance and understanding the impact of compounding interest, you can celebrate your wedding with elegance, dignity, and absolute peace of mind.
                                    </p>

                                    <div className="bg-primary-50 p-8 rounded-2xl my-8 border border-primary-200">
                                        <h3 className="font-bold text-primary-900 border-none m-0 mb-4 text-xl">
                                            The Strategic 3-Step Wedding Savings Framework
                                        </h3>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold text-lg">01.</span>
                                                <span className="text-primary-800 text-sm leading-relaxed">
                                                    <strong>Calculate the Net Funding Deficit:</strong> Start with your realistic total budget (e.g. ₹20 lakhs). Subtract existing liquid savings allocated for the wedding and confirmed family contributions. The remaining amount is your true savings target.
                                                </span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold text-lg">02.</span>
                                                <span className="text-primary-800 text-sm leading-relaxed">
                                                    <strong>Automate Systematic Monthly Contributions:</strong> Divide your net target across the available months. Never rely on leftover money at the end of the month; instead, automate a monthly recurring deposit or mutual fund SIP scheduled on salary day.
                                                </span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-primary-600 font-bold text-lg">03.</span>
                                                <span className="text-primary-800 text-sm leading-relaxed">
                                                    <strong>Provision an Inviolable 10&ndash;15% Contingency Buffer:</strong> Indian weddings invariably incur last-minute guest additions, bridal alterations, transportation logistics, and gratuities. A dedicated buffer fund prevents stressful budget overruns.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Indian Wedding Savings Benchmarks Across Cities
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Wedding expenses vary significantly by geographical tier and cultural expectations across India. Understanding typical benchmarks helps you set realistic savings horizons:
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full bg-white border border-neutral-200 rounded-lg text-sm">
                                            <thead>
                                                <tr className="bg-neutral-100 text-neutral-800 border-b">
                                                    <th className="py-3 px-4 text-left font-bold">Location Tier</th>
                                                    <th className="py-3 px-4 text-left font-bold">Average Budget</th>
                                                    <th className="py-3 px-4 text-left font-bold">Typical Guest Count</th>
                                                    <th className="py-3 px-4 text-left font-bold">Recommended Savings Horizon</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-neutral-200 text-neutral-700">
                                                <tr>
                                                    <td className="py-3 px-4 font-semibold">Tier-1 Metros (Mumbai, Delhi, Bengaluru)</td>
                                                    <td className="py-3 px-4">₹20 Lakhs &ndash; ₹50 Lakhs+</td>
                                                    <td className="py-3 px-4">250 &ndash; 500 Guests</td>
                                                    <td className="py-3 px-4">18 &ndash; 24 Months</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 font-semibold">Tier-2 Cities (Jaipur, Lucknow, Coimbatore, Pune)</td>
                                                    <td className="py-3 px-4">₹10 Lakhs &ndash; ₹25 Lakhs</td>
                                                    <td className="py-3 px-4">400 &ndash; 800 Guests</td>
                                                    <td className="py-3 px-4">12 &ndash; 18 Months</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 font-semibold">Tier-3 &amp; Rural Communities</td>
                                                    <td className="py-3 px-4">₹5 Lakhs &ndash; ₹12 Lakhs</td>
                                                    <td className="py-3 px-4">500 &ndash; 1,200+ Guests</td>
                                                    <td className="py-3 px-4">12 &ndash; 24 Months</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Wedding Inflation in India
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        A common trap for planning couples is failing to factor in <strong>wedding-specific inflation</strong>. While headline consumer inflation (CPI) in India often hovers between 4% and 6%, hospitality and matrimonial service costs consistently inflate at <strong>8% to 12% annually</strong>.
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Hospitality &amp; Venue Tariffs:</strong> Premium banquet halls and heritage properties increase rental tariffs each autumn before the peak winter muhurat rush.</li>
                                        <li><strong>Food &amp; Catering Commodities:</strong> Spices, dairy, cooking oils, and seasonal fresh produce experience volatile price spikes during festival quarters.</li>
                                        <li><strong>Precious Metals &amp; Jewelry:</strong> Gold bullion and making charges rise unpredictably; purchasing gold incrementally over 12&ndash;18 months shields you from buying at sudden market peaks.</li>
                                        <li><strong>Photography &amp; Decor Production:</strong> High-end cinematic videography, LED screens, and exotic floral imports command premium pricing during high-demand dates.</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Comparing Savings &amp; Investment Vehicles
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Choosing where to store your wedding funds depends strictly on your remaining time horizon. When your wedding is within 1 to 2 years, capital preservation is vastly more important than speculative returns:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-6">
                                        <div className="card bg-white border border-neutral-200">
                                            <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                                Bank Recurring Deposits (RD) &amp; FDs
                                            </h4>
                                            <p className="text-xs font-semibold text-green-700 mb-2">Ideal for: 6 to 18 Months Horizon (Low Risk)</p>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                Guaranteed returns (6.8% to 7.5% p.a.) backed by DICGC insurance. Zero risk of principal loss. Perfect for strict monthly disciplined deductions directly from your salary account.
                                            </p>
                                        </div>

                                        <div className="card bg-white border border-neutral-200">
                                            <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                                Liquid &amp; Ultra-Short Debt Mutual Funds
                                            </h4>
                                            <p className="text-xs font-semibold text-blue-700 mb-2">Ideal for: 3 to 12 Months Horizon (Very Low Risk)</p>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                Invests in government treasury bills and commercial paper yielding 6.5% to 7.2%. No lock-in penalties and fast T+1 redemption make them superior to savings accounts for parking advance vendor deposits.
                                            </p>
                                        </div>

                                        <div className="card bg-white border border-neutral-200">
                                            <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                                Arbitrage &amp; Conservative Hybrid Funds
                                            </h4>
                                            <p className="text-xs font-semibold text-purple-700 mb-2">Ideal for: 18 to 36 Months Horizon (Moderate Risk)</p>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                Generates 7.5% to 8.5% returns by hedging cash-futures spreads without taking directional stock market risks. Benefits from favorable equity capital gains taxation for timelines exceeding 12 months.
                                            </p>
                                        </div>

                                        <div className="card bg-white border border-neutral-200">
                                            <h4 className="font-bold text-lg text-neutral-900 mb-2">
                                                Pure Equity SIPs (High Volatility Warning)
                                            </h4>
                                            <p className="text-xs font-semibold text-red-700 mb-2">Not Recommended for Timelines Under 3 Years</p>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                While equity index funds deliver 12%+ over long periods, short-term stock market corrections can erase 15&ndash;25% of your wedding savings right when vendor final payments are due.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        5-Step Actionable Savings Roadmap
                                    </h2>

                                    <div className="space-y-4 my-6">
                                        <div className="flex items-start space-x-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-sm mb-1">Set a Hard Budget Cap with 15% Contingency</h4>
                                                <p className="text-xs text-neutral-600 leading-relaxed">
                                                    Agree with your partner and families on a non-negotiable ceiling. Treat 85% of the total as your operational budget and reserve 15% strictly for emergency unforeseen expenses.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-sm mb-1">Open a Dedicated Matrimonial Savings Account</h4>
                                                <p className="text-xs text-neutral-600 leading-relaxed">
                                                    Do not mingle wedding funds with your day-to-day checking account. A separate dedicated bank account or liquid fund provides clear visibility and prevents impulse lifestyle spending.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-sm mb-1">Automate Payday Deductions</h4>
                                                <p className="text-xs text-neutral-600 leading-relaxed">
                                                    Schedule your monthly wedding contribution standing instruction for the 1st or 2nd of each month, right after salary credits. Treat wedding savings as an essential fixed bill.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-sm mb-1">Stagger Vendor Advance Payments</h4>
                                                <p className="text-xs text-neutral-600 leading-relaxed">
                                                    Negotiate payment milestones: 25% on booking, 50% one week prior to the event, and 25% upon final delivery of albums and services. Never disburse 100% upfront.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm">
                                                5
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-sm mb-1">Audit and Rebalance Every 90 Days</h4>
                                                <p className="text-xs text-neutral-600 leading-relaxed">
                                                    Review actual vendor contracts against your original estimates quarterly. If venue or clothing costs come in lower, preserve the surplus rather than immediately upgrading luxury items.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* FAQs */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="card bg-white border border-neutral-200">
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
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Financial Planning Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/wedding-budget-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Itemize expenses across catering, venue, jewelry, photography, and clothing
                                            </p>
                                        </Link>
                                        <Link href="/wedding-expense-split-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💸</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Expense Split Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Structure equitable cost-sharing agreements between groom and bride families
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Savings Calculator Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initSavingsCalculator() {
                                var budgetSlider = document.getElementById('input-target-budget');
                                var savingsSlider = document.getElementById('input-curr-savings');
                                var familySlider = document.getElementById('input-family-contrib');
                                var monthsSlider = document.getElementById('input-months-left');
                                var vehicleSelect = document.getElementById('select-savings-vehicle');

                                var dispBudget = document.getElementById('disp-target-budget');
                                var dispSavings = document.getElementById('disp-curr-savings');
                                var dispFamily = document.getElementById('disp-family-contrib');
                                var dispMonths = document.getElementById('disp-months-left');

                                var resMonthly = document.getElementById('res-monthly-savings');
                                var resMonthlySub = document.getElementById('res-monthly-sub');
                                var resNetGap = document.getElementById('res-net-gap');
                                var resInterest = document.getElementById('res-interest-earned');
                                var resFeasibility = document.getElementById('res-feasibility-note');

                                if (!budgetSlider || !savingsSlider || !familySlider || !monthsSlider) return;

                                function calculateSavings() {
                                    var budget = parseInt(budgetSlider.value, 10) || 1500000;
                                    var savings = parseInt(savingsSlider.value, 10) || 300000;
                                    var family = parseInt(familySlider.value, 10) || 400000;
                                    var months = parseInt(monthsSlider.value, 10) || 12;
                                    var annualRate = parseFloat(vehicleSelect ? vehicleSelect.value : 7.0) / 100 || 0.07;

                                    if (dispBudget) dispBudget.textContent = '₹' + budget.toLocaleString('en-IN');
                                    if (dispSavings) dispSavings.textContent = '₹' + savings.toLocaleString('en-IN');
                                    if (dispFamily) dispFamily.textContent = '₹' + family.toLocaleString('en-IN');
                                    if (dispMonths) dispMonths.textContent = months + ' Months';

                                    var netGap = budget - (savings + family);
                                    if (netGap < 0) netGap = 0;

                                    if (resNetGap) resNetGap.textContent = '₹' + netGap.toLocaleString('en-IN');

                                    if (netGap === 0) {
                                        if (resMonthly) resMonthly.textContent = '₹0 / mo (Goal Met!)';
                                        if (resMonthlySub) resMonthlySub.textContent = 'Existing funds and family contributions cover the entire budget.';
                                        if (resInterest) resInterest.textContent = '₹0';
                                        if (resFeasibility) resFeasibility.textContent = 'Congratulations! Your target budget is fully funded. Maintain your funds in a liquid debt fund or short FD until vendor disbursements.';
                                        return;
                                    }

                                    var monthlyRate = annualRate / 12;
                                    var requiredMonthly = 0;
                                    var totalPrincipal = 0;
                                    var interestEarned = 0;

                                    if (monthlyRate > 0) {
                                        // Future Value of ordinary annuity: FV = PMT * [((1 + r)^n - 1) / r] * (1 + r)
                                        // Solving for PMT:
                                        var factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
                                        requiredMonthly = Math.round(netGap / factor);
                                        totalPrincipal = requiredMonthly * months;
                                        interestEarned = netGap - totalPrincipal;
                                        if (interestEarned < 0) interestEarned = 0;
                                    } else {
                                        requiredMonthly = Math.round(netGap / months);
                                        interestEarned = 0;
                                    }

                                    if (resMonthly) resMonthly.textContent = '₹' + requiredMonthly.toLocaleString('en-IN') + ' / mo';
                                    if (resMonthlySub) resMonthlySub.textContent = 'Invested monthly over ' + months + ' months';
                                    if (resInterest) resInterest.textContent = '+₹' + Math.round(interestEarned).toLocaleString('en-IN');

                                    var note = '';
                                    if (requiredMonthly <= 35000) {
                                        note = '✅ Highly Achievable: This monthly target is well within standard urban savings capacity. Set up an automated recurring deposit on payday to lock in this plan effortlessly.';
                                    } else if (requiredMonthly <= 75000) {
                                        note = '⚡ Moderate Commitment: Allocate 35% to 45% of joint disposable household income toward this goal. Minimize discretionary leisure travel until after the wedding.';
                                    } else {
                                        note = '⚠️ High Intensity: Monthly requirement is substantial. Consider extending your wedding timeline by 6 months or rationalizing non-essential decor and courtesy guest list tiers.';
                                    }
                                    if (resFeasibility) resFeasibility.textContent = note;
                                }

                                budgetSlider.addEventListener('input', calculateSavings);
                                savingsSlider.addEventListener('input', calculateSavings);
                                familySlider.addEventListener('input', calculateSavings);
                                monthsSlider.addEventListener('input', calculateSavings);
                                if (vehicleSelect) vehicleSelect.addEventListener('change', calculateSavings);

                                calculateSavings();
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initSavingsCalculator);
                            } else {
                                initSavingsCalculator();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
