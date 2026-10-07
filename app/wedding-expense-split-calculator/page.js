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
    toolName: 'Wedding Expense Split Calculator',
    toolDescription: 'Calculate fair wedding expense splits between groom and bride families. Compare 50:50, proportional income splits, and category allocations.',
    toolSlug: 'wedding-expense-split-calculator',
    keywords: [
        'wedding expense split calculator',
        'who pays for indian wedding',
        'splitting wedding costs between families',
        'proportional wedding budget split',
        'groom bride wedding expenses india',
        'how to split wedding costs fairly'
    ],
});

export default function WeddingExpenseSplitCalculatorPage() {
    const faqs = [
        {
            question: 'Who traditionally pays for a Hindu wedding in India?',
            answer: 'Historically in many Indian communities, the bride\'s family bore the majority of wedding ceremony expenses, while the groom\'s family hosted the reception. In modern India, this convention has evolved significantly: the vast majority of urban couples and families now share expenses equally (50:50) or split costs proportionately based on guest counts and household incomes.'
        },
        {
            question: 'What is the fairest method to split wedding costs when guest lists are unbalanced?',
            answer: 'When one family invites significantly more guests (e.g. 500 guests vs 200 guests), the Per-Guest Split method is considered the most equitable. Shared fixed costs (mandap decor, DJ, photography) are divided equally (50:50), while variable catering and plate costs are paid by each family according to their respective guest counts.'
        },
        {
            question: 'How should couples manage expenses if one partner earns significantly more?',
            answer: 'A proportional income split divides joint expenses based on relative earnings (e.g., if one partner earns 60% of joint income and the other earns 40%, wedding contributions follow that exact 60:40 ratio). This prevents the lower-earning partner from depleting their emergency reserves while keeping contributions proportional.'
        },
        {
            question: 'Which ceremonies are typically hosted separately by each family?',
            answer: 'In North and Central Indian traditions, the Mehendi and Haldi are commonly hosted by the bride\'s family, the Sangeet is jointly organized or co-sponsored, the Wedding Mandap ceremony is traditionally hosted by the bride\'s family, and the Post-Wedding Reception is hosted by the groom\'s family.'
        },
        {
            question: 'How can families discuss wedding budgets without awkwardness or conflict?',
            answer: 'The couple should first align privately on their personal savings and boundaries before involving parents. Avoid open-ended discussions; instead, bring structured estimates with transparent line items. Framing choices around logistical realities rather than obligations keeps conversations constructive.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Expense Split Calculator',
        description: 'Interactive calculator for dividing Indian wedding expenses between groom and bride families using 50:50, proportional, or category-based models.',
        url: '/wedding-expense-split-calculator',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Expense Split Calculator', path: '/wedding-expense-split-calculator' },
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

                    <div className="py-12 w-full">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Page Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">💸</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Wedding Expense Split Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Navigate the sensitive topic of matrimonial finances with complete clarity, mathematical fairness, and mutual respect between both families.
                                </p>
                            </div>

                            {/* Interactive Expense Split Calculator */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>🤝</span> Interactive Family Expense Split Calculator
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Compare equal 50:50 sharing, proportional income splitting, or customized ceremony category allocation.
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1.5 bg-primary-100 text-primary-800 rounded-full">
                                            Equitable Finance Engine
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Inputs Column */}
                                    <div className="lg:col-span-6 space-y-5">
                                        {/* Total Wedding Budget */}
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <label htmlFor="input-split-budget" className="text-sm font-bold text-neutral-800">
                                                    Total Wedding Budget:
                                                </label>
                                                <span className="text-base font-extrabold text-primary-600" id="disp-split-budget">
                                                    ₹20,00,000
                                                </span>
                                            </div>
                                            <input
                                                id="input-split-budget"
                                                type="range"
                                                min="500000"
                                                max="6000000"
                                                step="50000"
                                                defaultValue="2000000"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                                <span>₹5 Lakhs</span>
                                                <span>₹30 Lakhs</span>
                                                <span>₹60 Lakhs</span>
                                            </div>
                                        </div>

                                        {/* Split Model Selector */}
                                        <div>
                                            <label htmlFor="select-split-strategy" className="block text-sm font-bold text-neutral-800 mb-1">
                                                Expense Splitting Strategy:
                                            </label>
                                            <select
                                                id="select-split-strategy"
                                                className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium focus:ring-2 focus:ring-primary-500"
                                                defaultValue="50-50"
                                            >
                                                <option value="50-50">50:50 Equal Split (Both sides contribute equally)</option>
                                                <option value="income">Proportional to Annual Income (Fair earnings ratio)</option>
                                                <option value="category">Traditional Ceremony &amp; Category Allocation</option>
                                                <option value="4way">Four-Way Split (Groom + Bride + Both Parents)</option>
                                            </select>
                                        </div>

                                        {/* Income Comparison (Conditional for proportional model) */}
                                        <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                                            <div>
                                                <label htmlFor="input-groom-income" className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                                                    Groom Annual Income
                                                </label>
                                                <input
                                                    id="input-groom-income"
                                                    type="number"
                                                    step="50000"
                                                    defaultValue="1200000"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white font-medium"
                                                />
                                                <span className="text-[11px] text-neutral-500 mt-0.5 block">e.g. ₹12,00,000/yr</span>
                                            </div>
                                            <div>
                                                <label htmlFor="input-bride-income" className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                                                    Bride Annual Income
                                                </label>
                                                <input
                                                    id="input-bride-income"
                                                    type="number"
                                                    step="50000"
                                                    defaultValue="800000"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white font-medium"
                                                />
                                                <span className="text-[11px] text-neutral-500 mt-0.5 block">e.g. ₹8,00,000/yr</span>
                                            </div>
                                        </div>

                                        <p className="text-xs text-neutral-600 leading-relaxed">
                                            Note: For the Category Allocation model, catering and venue are split equally, while the Groom covers the Reception and honeymoon, and the Bride covers the Mehendi, Sangeet decor, and bridal jewelry.
                                        </p>
                                    </div>

                                    {/* Outputs Column */}
                                    <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-display font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                                                Financial Contribution Summary
                                            </h3>

                                            {/* Side by Side Comparison Cards */}
                                            <div className="grid grid-cols-2 gap-4 mb-5">
                                                <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                                                        <span className="text-xs text-neutral-600 font-bold uppercase">Groom&apos;s Side Share</span>
                                                    </div>
                                                    <div className="text-2xl font-extrabold text-blue-700" id="res-groom-share">
                                                        ₹10,00,000
                                                    </div>
                                                    <div className="text-xs text-neutral-500 mt-0.5" id="res-groom-pct">
                                                        50.0% of total budget
                                                    </div>
                                                </div>

                                                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="w-3 h-3 bg-rose-500 rounded-full inline-block"></span>
                                                        <span className="text-xs text-neutral-600 font-bold uppercase">Bride&apos;s Side Share</span>
                                                    </div>
                                                    <div className="text-2xl font-extrabold text-rose-700" id="res-bride-share">
                                                        ₹10,00,000
                                                    </div>
                                                    <div className="text-xs text-neutral-500 mt-0.5" id="res-bride-pct">
                                                        50.0% of total budget
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Visual Comparison Bar */}
                                            <div className="mb-5 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                                                <div className="flex justify-between text-xs font-bold text-neutral-700 mb-2">
                                                    <span id="label-groom-bar">Groom: 50%</span>
                                                    <span id="label-bride-bar">Bride: 50%</span>
                                                </div>
                                                <div className="w-full h-4 bg-neutral-200 rounded-full overflow-hidden flex">
                                                    <div id="bar-groom-split" style={{ width: '50%' }} className="h-full bg-blue-500 transition-all"></div>
                                                    <div id="bar-bride-split" style={{ width: '50%' }} className="h-full bg-rose-500 transition-all"></div>
                                                </div>
                                            </div>

                                            {/* Category Itemization Table */}
                                            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                                                    Category Itemization Breakdown
                                                </h4>
                                                <div className="space-y-2 text-xs">
                                                    <div className="flex justify-between py-1 border-b border-neutral-100">
                                                        <span className="text-neutral-600">Venue &amp; Mandapam (30%)</span>
                                                        <span className="font-semibold text-neutral-800" id="cat-venue">Groom: ₹3.0L | Bride: ₹3.0L</span>
                                                    </div>
                                                    <div className="flex justify-between py-1 border-b border-neutral-100">
                                                        <span className="text-neutral-600">Food &amp; Catering (30%)</span>
                                                        <span className="font-semibold text-neutral-800" id="cat-food">Groom: ₹3.0L | Bride: ₹3.0L</span>
                                                    </div>
                                                    <div className="flex justify-between py-1 border-b border-neutral-100">
                                                        <span className="text-neutral-600">Jewelry &amp; Trousseau (25%)</span>
                                                        <span className="font-semibold text-neutral-800" id="cat-jewelry">Groom: ₹2.5L | Bride: ₹2.5L</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span className="text-neutral-600">Photo &amp; Entertainment (15%)</span>
                                                        <span className="font-semibold text-neutral-800" id="cat-photo">Groom: ₹1.5L | Bride: ₹1.5L</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-neutral-600 mt-4 text-center">
                                            Principle: Use clear, itemized vendor contracts to avoid overlapping payments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Modern Ways to Split Indian Wedding Costs
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Tradition is evolving across India. Today, both partners are frequently working professionals who actively contribute their own earnings alongside parental support. Families are embracing more equitable, transparent ways to share the significant investment of a multi-day wedding celebration.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3 text-lg">The 50/50 Split</h4>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                The cleanest and simplest method. All verified vendor bills are pooled and divided exactly in half. This functions best when guest lists are comparable in size.
                                            </p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3 text-lg">The Per-Guest Split</h4>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                Each family pays directly for their own invitees, while common fixed costs (decorations, sound system, photography) are divided 50/50. Ideal when guest counts differ by more than 30%.
                                            </p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                            <h4 className="font-bold text-neutral-900 mb-3 text-lg">The Four-Way Split</h4>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                The couple covers personal aspects they care deeply about (luxury photography, DJ, designer apparel), while both sets of parents split venue and dining expenses.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h3 className="text-2xl font-display font-semibold mb-4">
                                        How to Have the &ldquo;Money Talk&rdquo; Without Tension
                                    </h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Discussing financial expectations between future in-laws can feel culturally delicate in India. Historically, families avoided direct discussions, which unfortunately led to unspoken resentments or severe financial strain. Modern couples act as the empathetic bridge between both families.
                                    </p>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        First, the couple should meet privately to assess their combined personal savings. Determine what you can comfortably fund without touching emergency funds. Next, each partner speaks individually with their respective parents to understand their comfort levels. Only after both partners possess a clear picture should a joint planning session occur.
                                    </p>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        During the joint meeting, frame the discussion around concrete logistics rather than emotional expectations. Use this calculator to make the figures objective and collaborative. Remember, the true goal is a joyful wedding and a strong, supportive foundation for your new family.
                                    </p>
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
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Planning Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/wedding-budget-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Calculate ceremony-wise expenses for Mehendi, Sangeet, and Reception
                                            </p>
                                        </Link>
                                        <Link href="/wedding-savings-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">🏦</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Savings Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Determine required monthly investments to achieve your target budget debt-free
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Split Calculator Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initSplitCalculator() {
                                var budgetSlider = document.getElementById('input-split-budget');
                                var strategySelect = document.getElementById('select-split-strategy');
                                var groomIncomeInput = document.getElementById('input-groom-income');
                                var brideIncomeInput = document.getElementById('input-bride-income');

                                var dispBudget = document.getElementById('disp-split-budget');
                                var resGroomShare = document.getElementById('res-groom-share');
                                var resGroomPct = document.getElementById('res-groom-pct');
                                var resBrideShare = document.getElementById('res-bride-share');
                                var resBridePct = document.getElementById('res-bride-pct');

                                var barGroom = document.getElementById('bar-groom-split');
                                var barBride = document.getElementById('bar-bride-split');
                                var lblGroomBar = document.getElementById('label-groom-bar');
                                var lblBrideBar = document.getElementById('label-bride-bar');

                                var catVenue = document.getElementById('cat-venue');
                                var catFood = document.getElementById('cat-food');
                                var catJewelry = document.getElementById('cat-jewelry');
                                var catPhoto = document.getElementById('cat-photo');

                                if (!budgetSlider || !strategySelect) return;

                                function calculateSplit() {
                                    var totalBudget = parseInt(budgetSlider.value, 10) || 2000000;
                                    var strategy = strategySelect.value;
                                    var groomIncome = parseInt(groomIncomeInput ? groomIncomeInput.value : 1200000, 10) || 1200000;
                                    var brideIncome = parseInt(brideIncomeInput ? brideIncomeInput.value : 800000, 10) || 800000;

                                    if (dispBudget) dispBudget.textContent = '₹' + totalBudget.toLocaleString('en-IN');

                                    var groomFraction = 0.5;
                                    var brideFraction = 0.5;

                                    if (strategy === '50-50') {
                                        groomFraction = 0.5;
                                        brideFraction = 0.5;
                                    } else if (strategy === 'income') {
                                        var jointIncome = groomIncome + brideIncome;
                                        if (jointIncome > 0) {
                                            groomFraction = groomIncome / jointIncome;
                                            brideFraction = brideIncome / jointIncome;
                                        }
                                    } else if (strategy === 'category') {
                                        // Groom handles 45% (reception/groom outfits), Bride handles 55% (mehendi, rituals, mandap)
                                        groomFraction = 0.45;
                                        brideFraction = 0.55;
                                    } else if (strategy === '4way') {
                                        groomFraction = 0.50; // Groom side 50% (Groom 25%, Parents 25%)
                                        brideFraction = 0.50; // Bride side 50% (Bride 25%, Parents 25%)
                                    }

                                    var groomAmount = Math.round(totalBudget * groomFraction);
                                    var brideAmount = totalBudget - groomAmount;

                                    var gPct = ((groomAmount / totalBudget) * 100).toFixed(1);
                                    var bPct = ((brideAmount / totalBudget) * 100).toFixed(1);

                                    if (resGroomShare) resGroomShare.textContent = '₹' + groomAmount.toLocaleString('en-IN');
                                    if (resGroomPct) resGroomPct.textContent = gPct + '% of total budget';

                                    if (resBrideShare) resBrideShare.textContent = '₹' + brideAmount.toLocaleString('en-IN');
                                    if (resBridePct) resBridePct.textContent = bPct + '% of total budget';

                                    if (barGroom) barGroom.style.width = gPct + '%';
                                    if (barBride) barBride.style.width = bPct + '%';
                                    if (lblGroomBar) lblGroomBar.textContent = 'Groom: ' + gPct + '%';
                                    if (lblBrideBar) lblBrideBar.textContent = 'Bride: ' + bPct + '%';

                                    // Category breakdowns
                                    var venueTotal = totalBudget * 0.30;
                                    var foodTotal = totalBudget * 0.30;
                                    var jewelryTotal = totalBudget * 0.25;
                                    var photoTotal = totalBudget * 0.15;

                                    function fmtLakh(val) {
                                        return '₹' + (val / 100000).toFixed(2) + 'L';
                                    }

                                    if (catVenue) catVenue.textContent = 'Groom: ' + fmtLakh(venueTotal * groomFraction) + ' | Bride: ' + fmtLakh(venueTotal * brideFraction);
                                    if (catFood) catFood.textContent = 'Groom: ' + fmtLakh(foodTotal * groomFraction) + ' | Bride: ' + fmtLakh(foodTotal * brideFraction);
                                    if (catJewelry) catJewelry.textContent = 'Groom: ' + fmtLakh(jewelryTotal * groomFraction) + ' | Bride: ' + fmtLakh(jewelryTotal * brideFraction);
                                    if (catPhoto) catPhoto.textContent = 'Groom: ' + fmtLakh(photoTotal * groomFraction) + ' | Bride: ' + fmtLakh(photoTotal * brideFraction);
                                }

                                budgetSlider.addEventListener('input', calculateSplit);
                                strategySelect.addEventListener('change', calculateSplit);
                                if (groomIncomeInput) groomIncomeInput.addEventListener('input', calculateSplit);
                                if (brideIncomeInput) brideIncomeInput.addEventListener('input', calculateSplit);

                                calculateSplit();
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initSplitCalculator);
                            } else {
                                initSplitCalculator();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
