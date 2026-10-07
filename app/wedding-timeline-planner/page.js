import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
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
    toolName: 'Indian Wedding Timeline Planner & 12-Month Checklist',
    toolDescription: 'Plan your dream Indian wedding month by month with our interactive 12-month wedding timeline checklist, vendor booking milestones, and countdown planner.',
    toolSlug: 'wedding-timeline-planner',
    keywords: [
        'wedding timeline planner',
        'indian wedding checklist 12 months',
        'month by month wedding planning india',
        'wedding planning roadmap',
        'shaadi planning checklist',
        'wedding vendor booking timeline',
        'indian wedding countdown planner',
        'wedding task tracker'
    ],
});

export default function WeddingTimelinePlannerPage() {
    const faqs = [
        {
            question: 'When should we start planning an Indian wedding?',
            answer: 'Most Indian families recommend beginning preparations 9 to 12 months in advance. Premium banquet halls, renowned wedding photographers, and auspicious muhurat dates get reserved 8 to 10 months prior, particularly during the peak winter wedding season (November through February).'
        },
        {
            question: 'What should be booked first in an Indian wedding timeline?',
            answer: 'Your first three priorities are: 1) consulting family elders or an astrologer to finalize the auspicious wedding date (muhurat), 2) setting an overall realistic budget, and 3) booking the main ceremony and reception venues before popular banquet halls are fully committed.'
        },
        {
            question: 'When should bridal and groom attire be ordered?',
            answer: 'Bridal lehengas, sarees, and groom sherwanis should be ordered 6 to 8 months before the wedding. Hand-embroidered bridal couture typically takes 2 to 3 months for artisan crafting, followed by 3 to 4 weeks for custom fitting, alterations, and matching accessory selection.'
        },
        {
            question: 'When should wedding invitations be distributed in India?',
            answer: 'Save-the-date digital cards and WhatsApp announcements should be sent 4 to 6 months in advance so outstation and overseas relatives can book flights. Formal physical wedding cards and boxed invitations are traditionally hand-delivered or dispatched 6 to 8 weeks before the ceremonies.'
        },
        {
            question: 'How do you coordinate multiple wedding events without feeling overwhelmed?',
            answer: 'Organize your celebrations by delegating ceremony captains for distinct events (Mehendi, Sangeet, Haldi, Muhurtham, and Reception). Keep a centralized digital checklist, designate a trusted sibling or family member as the vendor point of contact, and finalize all contracts 3 weeks prior.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Indian Wedding Timeline Planner & 12-Month Checklist',
        description: 'Interactive month-by-month Indian wedding timeline checklist with task tracker, ceremony countdown, vendor booking deadlines, and cultural logistics.',
        url: '/wedding-timeline-planner',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Planning', path: '/wedding-planning' },
        { name: 'Timeline Planner', path: '/wedding-timeline-planner' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs
                        items={[
                            { name: 'Wedding Planning', href: '/wedding-planning' },
                            { name: 'Timeline Planner' }
                        ]}
                    />

                    <div className="py-12 w-full">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">📅</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Indian Wedding Timeline Planner &amp; 12-Month Checklist
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Stay organized and stress-free with our complete month-by-month wedding countdown. Track vendor bookings, cultural rituals, attire trials, and logistics from engagement to your big day.
                                </p>
                            </div>

                            {/* Interactive Timeline & Checklist Tool */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>📋</span> Interactive Milestone Tracker &amp; Countdown
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Enter your wedding date to calculate remaining days and filter tasks by planning phase.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-semibold px-3 py-1.5 bg-primary-100 text-primary-800 rounded-full">
                                                12-Month Roadmap
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Wedding Date Input & Countdown Summary */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bg-primary-50/50 rounded-xl border border-primary-100 mb-8">
                                    <div>
                                        <label htmlFor="input-wedding-date" className="block text-sm font-bold text-neutral-800 mb-1">
                                            Target Wedding Date:
                                        </label>
                                        <input
                                            id="input-wedding-date"
                                            type="date"
                                            className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white font-medium focus:ring-2 focus:ring-primary-500"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-neutral-500 font-semibold uppercase">Countdown to Muhurtham</span>
                                        <span id="display-countdown" className="text-2xl font-extrabold text-primary-700 mt-0.5">
                                            Select Date Above
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-neutral-500 font-semibold uppercase">Checklist Progress</span>
                                        <div className="flex items-center gap-3 mt-1">
                                            <div className="flex-1 bg-neutral-200 rounded-full h-3 overflow-hidden">
                                                <div id="progress-bar" className="bg-primary-600 h-full w-0 transition-all duration-300"></div>
                                            </div>
                                            <span id="display-progress" className="text-sm font-bold text-neutral-800 min-w-[45px]">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase Filter Tabs */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <button
                                        type="button"
                                        data-phase="all"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-primary-600 text-white transition-colors"
                                    >
                                        All Tasks (24)
                                    </button>
                                    <button
                                        type="button"
                                        data-phase="12-9"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                                    >
                                        12–9 Months (Foundation)
                                    </button>
                                    <button
                                        type="button"
                                        data-phase="8-6"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                                    >
                                        8–6 Months (Vendors &amp; Attire)
                                    </button>
                                    <button
                                        type="button"
                                        data-phase="5-3"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                                    >
                                        5–3 Months (Invites &amp; Decor)
                                    </button>
                                    <button
                                        type="button"
                                        data-phase="2-1"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                                    >
                                        2–1 Months (Trials &amp; Legal)
                                    </button>
                                    <button
                                        type="button"
                                        data-phase="0"
                                        className="timeline-filter-btn px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                                    >
                                        Final Week &amp; Day-of
                                    </button>
                                </div>

                                {/* Task Checklist Container */}
                                <div id="tasks-container" className="space-y-3">
                                    {/* Phase: 12-9 Months */}
                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="12-9">
                                        <input type="checkbox" id="task-1" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-1" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Consult astrologer / family priest to finalize auspicious Muhurat dates</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Cross-check groom and bride horoscopes to lock primary ceremony dates and backup dates.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="12-9">
                                        <input type="checkbox" id="task-2" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-2" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Establish overall wedding budget and family cost-sharing agreement</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Determine allocations across venues, catering, gold, couture, and emergency buffers.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="12-9">
                                        <input type="checkbox" id="task-3" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-3" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Shortlist and book primary marriage banquet halls / Kalyana Mandapam</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Ensure venue has sufficient parking, dining capacity, bridal changing suites, and generator backup.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="12-9">
                                        <input type="checkbox" id="task-4" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-4" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Create initial rough guest list with groom and bride family counts</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Logistics</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Group guests into VIPs, local relatives, outstation family, and office colleagues.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="12-9">
                                        <input type="checkbox" id="task-5" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-5" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Hire key vendors: Photographer, Cinematographer &amp; Wedding Planner</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Review portfolios for candid coverage, traditional ceremony familiarity, and drone capabilities.</p>
                                        </label>
                                    </div>

                                    {/* Phase: 8-6 Months */}
                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="8-6">
                                        <input type="checkbox" id="task-6" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-6" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Order bridal trousseau, Kanjeevaram / Banarasi silk sarees, and lehengas</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">Attire</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Account for 8 to 12 weeks of artisan hand-embroidery and initial blouse stitching.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="8-6">
                                        <input type="checkbox" id="task-7" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-7" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Order groom attire: Sherwani, Bandhgala, Kurta sets, and formal suit</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">Attire</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Match footwear (Mojaris), safa/turban fabrics, and stole accents to bridal color palette.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="8-6">
                                        <input type="checkbox" id="task-8" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-8" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Book master caterer and schedule comprehensive menu food tasting</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Test regional delicacies, live chaat stalls, sweet assortments, and separate vegetarian cooking stations.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="8-6">
                                        <input type="checkbox" id="task-9" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-9" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Lock bridal makeup artist (MUA) and professional Mehendi artist</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">Beauty</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Confirm availability for all key ceremonies (Mehendi, Sangeet, Muhurtham, and Reception).</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="8-6">
                                        <input type="checkbox" id="task-10" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-10" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Reserve hotel room blocks for outstation relatives &amp; VIP guests</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Hospitality</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Select hotels within 15-20 minutes travel time from the primary wedding venue.</p>
                                        </label>
                                    </div>

                                    {/* Phase: 5-3 Months */}
                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="5-3">
                                        <input type="checkbox" id="task-11" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-11" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Design and print formal wedding invitation cards and digital e-invites</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Stationery</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Include ceremony program inserts, venue QR code location maps, and RSVP contact points.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="5-3">
                                        <input type="checkbox" id="task-12" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-12" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Book floral decorator, mandap designer, and stage lighting specialists</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Decor</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Finalize color themes for Haldi (yellow/marigold), Sangeet (glam/neon), and Muhurtham (traditional floral).</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="5-3">
                                        <input type="checkbox" id="task-13" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-13" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Purchase gold jewelry, wedding rings, and certified precious stones</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Jewelry</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Obtain BIS hallmark certificates and keep purchase receipts securely stored.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="5-3">
                                        <input type="checkbox" id="task-14" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-14" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Begin Sangeet dance practice and hire a professional choreographer</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">Entertainment</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Organize weekend practice sessions for couple dance, family group performances, and cousins entry.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="5-3">
                                        <input type="checkbox" id="task-15" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-15" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Dispatch formal wedding invitation cards and online Save-the-Date notices</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Invites</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Personal visits to close elders and speed-post delivery for distant relatives.</p>
                                        </label>
                                    </div>

                                    {/* Phase: 2-1 Months */}
                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="2-1">
                                        <input type="checkbox" id="task-16" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-16" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Prepare marriage registration documentation and book Sub-Registrar appointment</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">Legal</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Collect Aadhaar cards, age proofs, address proofs, passport photos, and 3 witness ID copies.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="2-1">
                                        <input type="checkbox" id="task-17" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-17" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Attend bridal hair &amp; makeup trials with matching jewelry accessories</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">Beauty</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Test makeup longevity under warm ceremony lights and verify hair extensions and floral styling.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="2-1">
                                        <input type="checkbox" id="task-18" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-18" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Conduct final trousseau garment fittings with wedding footwear</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">Attire</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Walk in wedding shoes to ensure comfortable posture during long mandap rituals.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="2-1">
                                        <input type="checkbox" id="task-19" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-19" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Lock DJ playlist, baraat brass band / dhol players, and sound permits</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">Music</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Submit entry song tracks for bride and groom entries and verify local 10 PM sound curfew permits.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="2-1">
                                        <input type="checkbox" id="task-101" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-101" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Arrange airport / railway station guest pickup transportation &amp; rental cars</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Logistics</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Create travel roster with flight/train numbers and driver contacts for smooth arrivals.</p>
                                        </label>
                                    </div>

                                    {/* Phase: Final Week */}
                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="0">
                                        <input type="checkbox" id="task-20" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-20" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Reconfirm final headcount with caterer (plate count + 10% buffer)</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">Urgent</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Prevent food wastage and guarantee smooth buffet lines for reception attendees.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="0">
                                        <input type="checkbox" id="task-21" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-21" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Prepare labeled cash envelopes for pandit dakshina, tips &amp; vendor balances</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-full">Urgent</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Hand over labeled cash packets to a responsible trusted family treasurer.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="0">
                                        <input type="checkbox" id="task-22" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-22" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Pack bridal &amp; groom emergency touch-up kit</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">Essentials</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Safety pins, mints, stain remover pen, blister tape, hair pins, power banks, and pain relievers.</p>
                                        </label>
                                    </div>

                                    <div className="task-item flex items-start gap-3 p-3.5 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors bg-white" data-phase="0">
                                        <input type="checkbox" id="task-23" className="mt-1 w-4 h-4 text-primary-600 rounded cursor-pointer task-checkbox" />
                                        <label htmlFor="task-23" className="flex-1 cursor-pointer">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="font-semibold text-neutral-900 text-sm">Rest, hydrate, and enjoy your sacred wedding ceremonies!</span>
                                                <span className="text-[11px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Wellbeing</span>
                                            </div>
                                            <p className="text-xs text-neutral-600 mt-0.5">Trust your appointed family coordinators, soak in the blessings, and celebrate your union.</p>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap justify-between items-center gap-4">
                                    <div className="text-xs text-neutral-500">
                                        Checkboxes save your progress in browser storage automatically.
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            id="btn-reset-tasks"
                                            className="px-4 py-2 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors"
                                        >
                                            Reset Checklist
                                        </button>
                                        <button
                                            type="button"
                                            id="btn-print-timeline"
                                            className="btn-secondary text-xs md:text-sm py-2 px-4"
                                        >
                                            📄 Print Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* In-Depth Educational Planning Guide (>800 words for AdSense & SEO) */}
                            <div className="prose prose-lg max-w-none text-neutral-800">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        How to Plan an Indian Wedding: The 12-Month Master Strategy
                                    </h2>
                                    <p className="leading-relaxed mb-4">
                                        Planning an Indian wedding is a magnificent undertaking that unites traditions, two distinct family lineages, sacred Vedic or cultural ceremonies, and grand celebratory gatherings. Unlike conventional single-day ceremonies, an Indian matrimonial celebration typically spans three to five consecutive days of festivities—including the Ganesh Puja, Mehendi, Sangeet, Haldi, main wedding ritual (Muhurtham or Anand Karaj), and the grand evening Reception.
                                    </p>
                                    <p className="leading-relaxed mb-4">
                                        Without a structured month-by-month timeline, couples and their parents frequently encounter last-minute vendor price surges, banquet hall unavailability, fitting delays, and unnecessary logistical anxiety. By breaking down your wedding planning journey into five distinct quarterly phases, you ensure that every critical decision is made systematically, cost-effectively, and with peace of mind.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Phased Breakdown of Key Wedding Milestones
                                    </h2>

                                    <div className="space-y-6 not-prose">
                                        <div className="card bg-white border border-neutral-200 p-6 rounded-xl">
                                            <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                                <span>🏛️</span> Phase 1 (12 to 9 Months): Foundation &amp; Venue Locking
                                            </h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                                                The foundation phase is all about locking down the primary parameters: your wedding date, your overarching financial budget, and the primary ceremony venues.
                                            </p>
                                            <ul className="text-sm text-neutral-700 space-y-1.5 list-disc list-inside">
                                                <li><strong>Auspicious Date (Muhurat):</strong> Consult your family pandit or Vedic astrologer to calculate auspicious wedding dates based on the couple&apos;s birth stars (Nakshatra) and the Hindu Panchangam calendar.</li>
                                                <li><strong>Budget Alignment:</strong> Have an open, transparent family discussion between both sides to determine how wedding expenses will be split (traditional 50:50 or ceremony-wise responsibility).</li>
                                                <li><strong>Banquet Halls &amp; Mandapams:</strong> Premier heritage palaces, five-star hotel lawns, and spacious Kalyana Mandapams are booked 9 to 12 months in advance during the peak winter wedding season.</li>
                                                <li><strong>Pivotal Vendors:</strong> Candid photographers and top videography teams can only accept one wedding per day; book your favorite visual artists immediately after securing the venue.</li>
                                            </ul>
                                        </div>

                                        <div className="card bg-white border border-neutral-200 p-6 rounded-xl">
                                            <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                                <span>👗</span> Phase 2 (8 to 6 Months): Couture, Catering &amp; Guest Hospitality
                                            </h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                                                During this creative phase, the visual identity of your celebration comes to life through attire, gastronomic experiences, and guest comfort planning.
                                            </p>
                                            <ul className="text-sm text-neutral-700 space-y-1.5 list-disc list-inside">
                                                <li><strong>Bridal Couture &amp; Silk Saree Selection:</strong> Handcrafted bridal lehengas, pure Kanjeevaram pattu sarees, or designer Banarasi weaves require 60 to 90 days for weaving and artisanal zardozi embroidery.</li>
                                                <li><strong>Groom Attire &amp; Accessories:</strong> Coordinate sherwani fabrics with bridal shades. Custom tailoring for bespoke bandhgalas and tuxedos should be initiated early.</li>
                                                <li><strong>Catering Food Tastings:</strong> The culinary experience is the heart of an Indian wedding. Schedule live food tastings with caterers to curate menus spanning traditional satvik wedding feasts to contemporary global cuisine stations.</li>
                                                <li><strong>Accommodation Logistics:</strong> Block hotel rooms near the venue to secure bulk group booking discounts for visiting outstation family members.</li>
                                            </ul>
                                        </div>

                                        <div className="card bg-white border border-neutral-200 p-6 rounded-xl">
                                            <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                                <span>💌</span> Phase 3 (5 to 3 Months): Invitations, Decor &amp; Sangeet Prep
                                            </h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                                                With core vendors booked, shift your focus to invitation distribution, floral stage designs, and choreography.
                                            </p>
                                            <ul className="text-sm text-neutral-700 space-y-1.5 list-disc list-inside">
                                                <li><strong>Physical &amp; Digital Invitations:</strong> Print traditional physical wedding cards for elder relatives and craft animated digital WhatsApp invites with Google Maps location links.</li>
                                                <li><strong>Floral Mandap &amp; Stage Decor:</strong> Meet your stage decorator to finalize themes—marigold and lotus motifs for Haldi, floral canopies for Muhurtham, and fairy-light chandeliers for the Reception.</li>
                                                <li><strong>Jewelry Procurement:</strong> Finalize gold ornaments, diamond necklace sets, mangalsutra, and wedding bands with trusted hallmarked jewellers.</li>
                                                <li><strong>Sangeet Choreography:</strong> Start weekend dance rehearsals with friends and family to make the musical night memorable and seamless.</li>
                                            </ul>
                                        </div>

                                        <div className="card bg-white border border-neutral-200 p-6 rounded-xl">
                                            <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                                <span>⚖️</span> Phase 4 (2 to 1 Months): Legal Documents, Trials &amp; Technical Runs
                                            </h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                                                The home stretch requires rigorous attention to legal documentation, beauty trials, and sound permits.
                                            </p>
                                            <ul className="text-sm text-neutral-700 space-y-1.5 list-disc list-inside">
                                                <li><strong>Marriage Registration Document Compilation:</strong> Gather birth certificates, voter IDs, passport copies, joint affidavits, and witness identification for registration under the Hindu Marriage Act or Special Marriage Act.</li>
                                                <li><strong>Hair &amp; Makeup Trials:</strong> Perform a complete trial with your bridal makeup artist to check foundation shades, draping styles, and jewelry placement.</li>
                                                <li><strong>Garment Alterations:</strong> Conduct final garment trials with the exact wedding footwear you plan to wear during the ceremonies.</li>
                                                <li><strong>Sound Permits &amp; Curfews:</strong> Secure necessary police and municipal permissions for outdoor dhol processions and late-night DJ music.</li>
                                            </ul>
                                        </div>

                                        <div className="card bg-white border border-neutral-200 p-6 rounded-xl">
                                            <h3 className="text-xl font-display font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                                <span>✨</span> Phase 5 (Final Week): Delegation &amp; Celebration
                                            </h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                                                The final countdown is about delegation so the bride, groom, and immediate parents can relax and celebrate.
                                            </p>
                                            <ul className="text-sm text-neutral-700 space-y-1.5 list-disc list-inside">
                                                <li><strong>Appoint Ceremony Point-of-Contact:</strong> Assign a cousin or trusted sibling to act as the single point of contact for the decorator, DJ, and caterer.</li>
                                                <li><strong>Prepare Cash Dakshina Envelopes:</strong> Segregate vendor balances, pandit offerings, and driver tips into labeled envelopes.</li>
                                                <li><strong>Pack Emergency Touch-up Kits:</strong> Include safety pins, sewing kit, double-sided tape, paracetamol, blister band-aids, breath mints, and compact mirrors.</li>
                                                <li><strong>Embrace the Moment:</strong> Small deviations may happen, but remember that the love, laughter, and sacred blessings of your families are what make the celebration unforgettable.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Common Pitfalls to Avoid */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Top 4 Indian Wedding Timeline Mistakes to Avoid
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6 not-prose">
                                        <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                                            <h3 className="text-lg font-bold text-red-900 mb-2">1. Underestimating Muhurat Rush</h3>
                                            <p className="text-sm text-red-800 leading-relaxed">
                                                On peak auspicious dates (such as Devuthani Ekadashi or Akshaya Tritiya), tens of thousands of weddings occur simultaneously across major cities. Booking vendors less than 6 months out results in compromised quality and premium surge pricing.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                                            <h3 className="text-lg font-bold text-amber-900 mb-2">2. Deliberating Too Late on Legal Papers</h3>
                                            <p className="text-sm text-amber-800 leading-relaxed">
                                                Under the Special Marriage Act (civil marriage), a mandatory 30-day public notice period is required before solemnization. Delaying document compilation can disrupt international honeymoon travel or spousal visa filings.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                                            <h3 className="text-lg font-bold text-blue-900 mb-2">3. Not Allowing Enough Travel Buffer</h3>
                                            <p className="text-sm text-blue-800 leading-relaxed">
                                                Traffic congestion in metros like Mumbai, Bengaluru, and Delhi can turn a 20-minute venue commute into a 90-minute delay. Always schedule baraat assembly and photography sessions at least 2 hours before the muhurat timing.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                                            <h3 className="text-lg font-bold text-purple-900 mb-2">4. Micromanaging on the Wedding Day</h3>
                                            <p className="text-sm text-purple-800 leading-relaxed">
                                                Do not attempt to personally direct vendors on the ceremony morning. Hand over the printed master schedule, contact sheet, and cash packets to your appointed wedding coordinators at least 48 hours prior.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* FAQs Section */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-6 not-prose">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="card bg-white border border-neutral-200 p-6 rounded-xl">
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

                                {/* Related Planning Tools */}
                                <section className="not-prose">
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Wedding Planning Tools</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <Link href="/wedding-budget-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Plan and track expenses across all Indian wedding ceremonies and vendors.
                                            </p>
                                        </Link>
                                        <Link href="/wedding-guest-list-planner" className="card-hover">
                                            <div className="text-3xl mb-3">👥</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Guest List Planner</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Organize family invites, seating tables, and catering plates accurately.
                                            </p>
                                        </Link>
                                        <Link href="/marriage-registration-documents" className="card-hover">
                                            <div className="text-3xl mb-3">📝</div>
                                            <h3 className="font-semibold text-lg mb-2">Marriage Registration Checklist</h3>
                                            <p className="text-neutral-600 text-sm">
                                                State-wise document guide for legal marriage registration across India.
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Interactive Timeline Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initTimelineTool() {
                                var dateInput = document.getElementById('input-wedding-date');
                                var dispCountdown = document.getElementById('display-countdown');
                                var progressBar = document.getElementById('progress-bar');
                                var dispProgress = document.getElementById('display-progress');
                                var filterBtns = document.querySelectorAll('.timeline-filter-btn');
                                var checkboxes = document.querySelectorAll('.task-checkbox');
                                var resetBtn = document.getElementById('btn-reset-tasks');
                                var STORAGE_KEY = 'm4u_wedding_timeline_checks';

                                // Restore saved checks
                                try {
                                    var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
                                    checkboxes.forEach(function(cb) {
                                        if (saved[cb.id]) {
                                            cb.checked = true;
                                            var parent = cb.closest('.task-item');
                                            if (parent) parent.classList.add('opacity-60', 'line-through');
                                        }
                                    });
                                } catch(e) {}

                                function updateProgress() {
                                    var total = checkboxes.length;
                                    var checkedCount = 0;
                                    var state = {};
                                    checkboxes.forEach(function(cb) {
                                        if (cb.checked) {
                                            checkedCount++;
                                            state[cb.id] = true;
                                        }
                                    });
                                    var pct = Math.round((checkedCount / total) * 100);
                                    if (progressBar) progressBar.style.width = pct + '%';
                                    if (dispProgress) dispProgress.textContent = pct + '% (' + checkedCount + '/' + total + ')';
                                    try {
                                        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                                    } catch(e) {}
                                }

                                checkboxes.forEach(function(cb) {
                                    cb.addEventListener('change', function() {
                                        var parent = cb.closest('.task-item');
                                        if (cb.checked) {
                                            if (parent) parent.classList.add('opacity-60', 'line-through');
                                        } else {
                                            if (parent) parent.classList.remove('opacity-60', 'line-through');
                                        }
                                        updateProgress();
                                    });
                                });

                                if (resetBtn) {
                                    resetBtn.addEventListener('click', function() {
                                        if (confirm('Reset all completed tasks on this checklist?')) {
                                            checkboxes.forEach(function(cb) {
                                                cb.checked = false;
                                                var parent = cb.closest('.task-item');
                                                if (parent) parent.classList.remove('opacity-60', 'line-through');
                                            });
                                            try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
                                            updateProgress();
                                        }
                                    });
                                }

                                var printBtn = document.getElementById('btn-print-timeline');
                                if (printBtn) {
                                    printBtn.addEventListener('click', function() {
                                        window.print();
                                    });
                                }

                                // Countdown calculation
                                function calculateCountdown() {
                                    if (!dateInput || !dateInput.value) {
                                        if (dispCountdown) dispCountdown.textContent = 'Select Date Above';
                                        return;
                                    }
                                    var target = new Date(dateInput.value + 'T00:00:00');
                                    var now = new Date();
                                    now.setHours(0,0,0,0);
                                    var diffTime = target - now;
                                    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                                    if (isNaN(diffDays)) {
                                        dispCountdown.textContent = 'Invalid Date';
                                    } else if (diffDays < 0) {
                                        dispCountdown.textContent = 'Wedding Day Passed!';
                                    } else if (diffDays === 0) {
                                        dispCountdown.textContent = 'Today is the Wedding! 🎉';
                                    } else if (diffDays === 1) {
                                        dispCountdown.textContent = 'Tomorrow! (1 Day Left)';
                                    } else {
                                        var months = Math.floor(diffDays / 30.4);
                                        var remDays = Math.round(diffDays % 30.4);
                                        var str = diffDays + ' Days Left';
                                        if (months > 0) {
                                            str += ' (~' + months + ' mo ' + remDays + ' d)';
                                        }
                                        dispCountdown.textContent = str;
                                    }
                                }

                                if (dateInput) {
                                    dateInput.addEventListener('change', calculateCountdown);
                                }

                                // Phase filtering
                                filterBtns.forEach(function(btn) {
                                    btn.addEventListener('click', function() {
                                        filterBtns.forEach(function(b) {
                                            b.classList.remove('bg-primary-600', 'text-white');
                                            b.classList.add('bg-neutral-100', 'text-neutral-700');
                                        });
                                        btn.classList.remove('bg-neutral-100', 'text-neutral-700');
                                        btn.classList.add('bg-primary-600', 'text-white');

                                        var targetPhase = btn.getAttribute('data-phase');
                                        var allTasks = document.querySelectorAll('.task-item');
                                        allTasks.forEach(function(task) {
                                            if (targetPhase === 'all' || task.getAttribute('data-phase') === targetPhase) {
                                                task.style.display = 'flex';
                                            } else {
                                                task.style.display = 'none';
                                            }
                                        });
                                    });
                                });

                                updateProgress();
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initTimelineTool);
                            } else {
                                initTimelineTool();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
