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
    toolName: 'Wedding Guest List Planner & Calculator',
    toolDescription: 'Plan your Indian wedding guest list, estimate groom and bride attendance, calculate banquet seating tables, and budget catering costs accurately.',
    toolSlug: 'wedding-guest-list-planner',
    keywords: [
        'wedding guest list planner',
        'indian wedding guest calculator',
        'wedding guest count estimator',
        'wedding seating chart calculator',
        'catering cost per guest india',
        'groom bride guest split',
        'wedding rsvp tracker india'
    ],
});

export default function WeddingGuestListPlannerPage() {
    const faqs = [
        {
            question: 'What is the average number of guests at an Indian wedding?',
            answer: 'Traditional Indian weddings generally host between 300 and 800 guests. Intimate metro celebrations typically host 150 to 300 attendees, while tier-2 city and rural community celebrations frequently exceed 800 to 1,500 guests across multiple ceremonies.'
        },
        {
            question: 'How should the guest list be split between groom and bride families?',
            answer: 'A standard split is 50% for the groom\'s family and 50% for the bride\'s family if both sides share the primary venue. In cases where separate receptions are hosted in different hometowns, each hosting family manages 80-90% of their respective local guest list.'
        },
        {
            question: 'What percentage of invited guests actually attend an Indian wedding?',
            answer: 'Typically, 75% to 85% of invited guests attend. Local family and close friends attend at a 90%+ rate, whereas outstation or distant relatives attend at approximately 60% to 70%. When planning catering and seating, assume an 80% attendance rate to prevent food waste.'
        },
        {
            question: 'How many buffet counters are needed for 400+ guests?',
            answer: 'To prevent long lines and guest dissatisfaction, caterers recommend 1 double-sided buffet line for every 100 to 120 guests. For a 400-guest reception, install at least 4 active buffet counters with dedicated live stations.'
        },
        {
            question: 'How much square footage is required per guest at a wedding banquet?',
            answer: 'For formal seated dining with round tables, allocate 15 to 18 square feet per guest. For floating buffet receptions with theater-style stage seating, allocate 10 to 12 square feet per attendee.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Guest List Planner & Calculator',
        description: 'Interactive Indian wedding guest list calculator for groom and bride family allocation, VIP seating tables, catering expenses, and RSVP estimates.',
        url: '/wedding-guest-list-planner',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Guest List Planner', path: '/wedding-guest-list-planner' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Guest List Planner' }]} />

                    <div className="py-12 w-full">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Page Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">👥</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Wedding Guest List Planner &amp; Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Accurately calculate your Indian wedding attendance, divide invites fairly between groom and bride families, plan banquet tables, and estimate catering budgets.
                                </p>
                            </div>

                            {/* Interactive Guest List Planner Tool */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>📋</span> Interactive Guest List &amp; Seating Calculator
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Adjust your total expected guests, family allocation split, and catering cost to view real-time logistics.
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1.5 bg-primary-100 text-primary-800 rounded-full">
                                            Real-Time Logistics Engine
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Left Column: Inputs */}
                                    <div className="lg:col-span-6 space-y-6">
                                        {/* Target Guest Slider */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="input-total-guests" className="text-sm font-bold text-neutral-800">
                                                    Target Confirmed Attendees:
                                                </label>
                                                <span className="text-base font-extrabold text-primary-600" id="display-total-guests">
                                                    400 Guests
                                                </span>
                                            </div>
                                            <input
                                                id="input-total-guests"
                                                type="range"
                                                min="100"
                                                max="1500"
                                                step="25"
                                                defaultValue="400"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <div className="flex justify-between text-xs text-neutral-600 mt-1">
                                                <span>100 (Intimate)</span>
                                                <span>500 (Standard)</span>
                                                <span>1,500 (Grand)</span>
                                            </div>
                                        </div>

                                        {/* Family Split Allocation */}
                                        <div>
                                            <label htmlFor="select-split-model" className="block text-sm font-bold text-neutral-800 mb-2">
                                                Family Split Allocation Ratio:
                                            </label>
                                            <select
                                                id="select-split-model"
                                                className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium focus:ring-2 focus:ring-primary-500"
                                                defaultValue="50-50"
                                            >
                                                <option value="50-50">Equal Split (50% Groom Side / 50% Bride Side)</option>
                                                <option value="60-40">Groom Major (60% Groom Side / 40% Bride Side)</option>
                                                <option value="40-60">Bride Major (40% Groom Side / 60% Bride Side)</option>
                                                <option value="custom">Custom Proportions</option>
                                            </select>
                                        </div>

                                        {/* RSVP Acceptance Rate */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="input-rsvp-rate" className="text-sm font-bold text-neutral-800">
                                                    Expected RSVP Turnout Rate:
                                                </label>
                                                <span className="text-sm font-bold text-neutral-700" id="display-rsvp-rate">
                                                    80% Turnout
                                                </span>
                                            </div>
                                            <input
                                                id="input-rsvp-rate"
                                                type="range"
                                                min="65"
                                                max="95"
                                                step="5"
                                                defaultValue="80"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <p className="text-xs text-neutral-600 mt-1">
                                                In India, roughly 15&ndash;20% of invitees decline due to travel or work conflicts.
                                            </p>
                                        </div>

                                        {/* Catering Cost Per Plate */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="input-plate-cost" className="text-sm font-bold text-neutral-800">
                                                    Catering Cost Per Plate (₹):
                                                </label>
                                                <span className="text-sm font-bold text-neutral-700" id="display-plate-cost">
                                                    ₹1,500 / plate
                                                </span>
                                            </div>
                                            <input
                                                id="input-plate-cost"
                                                type="range"
                                                min="600"
                                                max="5000"
                                                step="100"
                                                defaultValue="1500"
                                                className="w-full accent-primary-600 cursor-pointer"
                                            />
                                            <div className="flex justify-between text-xs text-neutral-600 mt-1">
                                                <span>₹600 (Traditional)</span>
                                                <span>₹1,500 (Deluxe)</span>
                                                <span>₹5,000 (Luxury)</span>
                                            </div>
                                        </div>

                                        {/* VIP Seating Count */}
                                        <div>
                                            <label htmlFor="input-vip-count" className="block text-sm font-bold text-neutral-800 mb-1">
                                                VIP &amp; Elderly Seated Guests (Reserved Seats):
                                            </label>
                                            <input
                                                id="input-vip-count"
                                                type="number"
                                                min="10"
                                                max="200"
                                                defaultValue="40"
                                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-neutral-50"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column: Calculated Results */}
                                    <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-display font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                                                Calculated Planning Metrics
                                            </h3>

                                            {/* Key Metrics Cards */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                                                    <div className="text-xs text-neutral-500 font-semibold uppercase">Invites to Print</div>
                                                    <div className="text-2xl font-bold text-primary-600 mt-1" id="res-invites-needed">
                                                        500 Cards
                                                    </div>
                                                    <div className="text-xs text-neutral-600 mt-1">
                                                        To achieve 400 attendees
                                                    </div>
                                                </div>

                                                <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                                                    <div className="text-xs text-neutral-500 font-semibold uppercase">Food Budget Est.</div>
                                                    <div className="text-2xl font-bold text-secondary-600 mt-1" id="res-catering-budget">
                                                        ₹6,00,000
                                                    </div>
                                                    <div className="text-xs text-neutral-600 mt-1">
                                                        Based on ₹1,500/plate
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Family Split Breakdown */}
                                            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm mb-6">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                                                    Guest Distribution by Family
                                                </h4>
                                                <div className="space-y-3 text-sm">
                                                    <div className="flex justify-between items-center">
                                                        <span className="flex items-center gap-2">
                                                            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                                                            <span className="font-medium text-neutral-800">Groom&apos;s Family &amp; Friends</span>
                                                        </span>
                                                        <span className="font-bold text-neutral-900" id="res-groom-count">180 Guests (45%)</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="flex items-center gap-2">
                                                            <span className="w-3 h-3 bg-rose-500 rounded-full inline-block"></span>
                                                            <span className="font-medium text-neutral-800">Bride&apos;s Family &amp; Friends</span>
                                                        </span>
                                                        <span className="font-bold text-neutral-900" id="res-bride-count">180 Guests (45%)</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="flex items-center gap-2">
                                                            <span className="w-3 h-3 bg-amber-500 rounded-full inline-block"></span>
                                                            <span className="font-medium text-neutral-800">Mutual &amp; VIP Attendees</span>
                                                        </span>
                                                        <span className="font-bold text-neutral-900" id="res-mutual-count">40 Guests (10%)</span>
                                                    </div>
                                                </div>

                                                {/* Visual Distribution Bar */}
                                                <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden flex mt-4">
                                                    <div id="bar-groom" style={{ width: '45%' }} className="h-full bg-blue-500"></div>
                                                    <div id="bar-bride" style={{ width: '45%' }} className="h-full bg-rose-500"></div>
                                                    <div id="bar-mutual" style={{ width: '10%' }} className="h-full bg-amber-500"></div>
                                                </div>
                                            </div>

                                            {/* Hall & Banquet Logistics */}
                                            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                                                    Venue &amp; Seating Requirements
                                                </h4>
                                                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                                    <div className="p-2 bg-neutral-50 rounded border border-neutral-100">
                                                        <span className="text-neutral-500 block">Round Tables (8p)</span>
                                                        <strong className="text-base text-neutral-900 block mt-1" id="res-tables-count">45 Tables</strong>
                                                    </div>
                                                    <div className="p-2 bg-neutral-50 rounded border border-neutral-100">
                                                        <span className="text-neutral-500 block">Buffet Lines</span>
                                                        <strong className="text-base text-neutral-900 block mt-1" id="res-buffet-count">4 Counters</strong>
                                                    </div>
                                                    <div className="p-2 bg-neutral-50 rounded border border-neutral-100">
                                                        <span className="text-neutral-500 block">Min. Carpet Area</span>
                                                        <strong className="text-base text-neutral-900 block mt-1" id="res-area-count">5,200 sq.ft</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-neutral-600 mt-4 text-center">
                                            Tip: Finalize your caterer head count 10 days before wedding with an additional 10% plate buffer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        The Unique Dynamics of Indian Wedding Guest Lists
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Indian weddings are sacred community celebrations bringing together multi-generational families, professional circles, neighbors, and community elders. Unlike intimate Western gatherings of 50 to 100 guests, Indian celebrations routinely host between 300 and 1,000+ attendees across multiple rituals including the Mehendi, Sangeet, Muhurtham, and Reception.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 my-8">
                                        <div className="card bg-blue-50 border border-blue-200">
                                            <h3 className="font-semibold text-blue-900 mb-2">Extended Family Circles</h3>
                                            <p className="text-sm text-blue-800">
                                                Inviting maternal uncles, paternal relatives, and extended cousins is traditional. Joint family connections typically comprise 30&ndash;40% of the entire guest list.
                                            </p>
                                        </div>
                                        <div className="card bg-green-50 border border-green-200">
                                            <h3 className="font-semibold text-green-900 mb-2">Multi-Event Management</h3>
                                            <p className="text-sm text-green-800">
                                                Not every guest attends every ceremony. Mehendi and Haldi are often intimate (50&ndash;100 guests), whereas the Wedding Ceremony and Grand Reception host the full list.
                                            </p>
                                        </div>
                                        <div className="card bg-purple-50 border border-purple-200">
                                            <h3 className="font-semibold text-purple-900 mb-2">Parents&apos; Social Circles</h3>
                                            <p className="text-sm text-purple-800">
                                                Indian parents frequently invite professional colleagues, community leaders, and childhood friends who may not be personally familiar to the couple.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Practical Tiered Strategy for Managing Guest Lists
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        To prevent guest list inflation from overwhelming your venue capacity and catering budget, use the proven 3-Tier Categorization system:
                                    </p>

                                    <div className="space-y-4 my-6">
                                        <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <h4 className="font-bold text-neutral-900 text-base mb-1">
                                                Tier 1: Non-Negotiables (Attendance Rate: ~95%)
                                            </h4>
                                            <p className="text-sm text-neutral-600">
                                                Immediate family members, grandparents, first cousins, aunts, uncles, and inner-circle best friends. Invitations are extended across all ceremonies.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <h4 className="font-bold text-neutral-900 text-base mb-1">
                                                Tier 2: Important Connections (Attendance Rate: ~75%)
                                            </h4>
                                            <p className="text-sm text-neutral-600">
                                                Second cousins, close family friends, mentors, current work colleagues, and college friends. Typically invited to the Sangeet and Main Reception.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                                            <h4 className="font-bold text-neutral-900 text-base mb-1">
                                                Tier 3: Courtesy Invites (Attendance Rate: ~50%)
                                            </h4>
                                            <p className="text-sm text-neutral-600">
                                                Distant relatives residing abroad or in distant states, former colleagues, and acquaintances. Invited primarily to the wedding reception.
                                            </p>
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
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Planning Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/wedding-budget-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Plan catering, venue, decor, and outfit costs across all ceremonies
                                            </p>
                                        </Link>
                                        <Link href="/wedding-expense-split-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💸</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Expense Split Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Determine fair cost-sharing between groom and bride families
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Guest List Calculator Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initGuestPlanner() {
                                var totalSlider = document.getElementById('input-total-guests');
                                var splitSelect = document.getElementById('select-split-model');
                                var rsvpSlider = document.getElementById('input-rsvp-rate');
                                var plateSlider = document.getElementById('input-plate-cost');
                                var vipInput = document.getElementById('input-vip-count');

                                var dispTotal = document.getElementById('display-total-guests');
                                var dispRsvp = document.getElementById('display-rsvp-rate');
                                var dispPlate = document.getElementById('display-plate-cost');

                                var resInvites = document.getElementById('res-invites-needed');
                                var resCatering = document.getElementById('res-catering-budget');
                                var resGroom = document.getElementById('res-groom-count');
                                var resBride = document.getElementById('res-bride-count');
                                var resMutual = document.getElementById('res-mutual-count');

                                var barGroom = document.getElementById('bar-groom');
                                var barBride = document.getElementById('bar-bride');
                                var barMutual = document.getElementById('bar-mutual');

                                var resTables = document.getElementById('res-tables-count');
                                var resBuffet = document.getElementById('res-buffet-count');
                                var resArea = document.getElementById('res-area-count');

                                if (!totalSlider || !splitSelect || !rsvpSlider || !plateSlider) return;

                                function calculateGuestLogistics() {
                                    var totalGuests = parseInt(totalSlider.value, 10) || 400;
                                    var splitModel = splitSelect.value;
                                    var rsvpRate = parseInt(rsvpSlider.value, 10) / 100 || 0.8;
                                    var plateCost = parseInt(plateSlider.value, 10) || 1500;
                                    var vipCount = parseInt(vipInput ? vipInput.value : 40, 10) || 40;

                                    if (vipCount > totalGuests) vipCount = Math.floor(totalGuests * 0.2);

                                    if (dispTotal) dispTotal.textContent = totalGuests + ' Guests';
                                    if (dispRsvp) dispRsvp.textContent = Math.round(rsvpRate * 100) + '% Turnout';
                                    if (dispPlate) dispPlate.textContent = '₹' + plateCost.toLocaleString('en-IN') + ' / plate';

                                    var invitesNeeded = Math.ceil(totalGuests / rsvpRate);
                                    if (resInvites) resInvites.textContent = invitesNeeded.toLocaleString('en-IN') + ' Cards';

                                    var totalCatering = totalGuests * plateCost;
                                    if (resCatering) resCatering.textContent = '₹' + totalCatering.toLocaleString('en-IN');

                                    var remainingGuests = totalGuests - vipCount;
                                    var groomPercent = 0.5;
                                    var bridePercent = 0.5;

                                    if (splitModel === '60-40') {
                                        groomPercent = 0.6;
                                        bridePercent = 0.4;
                                    } else if (splitModel === '40-60') {
                                        groomPercent = 0.4;
                                        bridePercent = 0.6;
                                    }

                                    var groomCount = Math.round(remainingGuests * groomPercent);
                                    var brideCount = totalGuests - vipCount - groomCount;

                                    var gPct = Math.round((groomCount / totalGuests) * 100);
                                    var bPct = Math.round((brideCount / totalGuests) * 100);
                                    var vPct = 100 - gPct - bPct;

                                    if (resGroom) resGroom.textContent = groomCount + ' Guests (' + gPct + '%)';
                                    if (resBride) resBride.textContent = brideCount + ' Guests (' + bPct + '%)';
                                    if (resMutual) resMutual.textContent = vipCount + ' Guests (' + vPct + '%)';

                                    if (barGroom) barGroom.style.width = gPct + '%';
                                    if (barBride) barBride.style.width = bPct + '%';
                                    if (barMutual) barMutual.style.width = vPct + '%';

                                    var tablesNeeded = Math.ceil(totalGuests / 8);
                                    if (resTables) resTables.textContent = tablesNeeded + ' Tables';

                                    var buffetLines = Math.max(2, Math.ceil(totalGuests / 110));
                                    if (resBuffet) resBuffet.textContent = buffetLines + ' Counters';

                                    var carpetArea = Math.round(totalGuests * 13.5);
                                    if (resArea) resArea.textContent = carpetArea.toLocaleString('en-IN') + ' sq.ft';
                                }

                                totalSlider.addEventListener('input', calculateGuestLogistics);
                                splitSelect.addEventListener('change', calculateGuestLogistics);
                                rsvpSlider.addEventListener('input', calculateGuestLogistics);
                                plateSlider.addEventListener('input', calculateGuestLogistics);
                                if (vipInput) vipInput.addEventListener('input', calculateGuestLogistics);

                                calculateGuestLogistics();
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initGuestPlanner);
                            } else {
                                initGuestPlanner();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
