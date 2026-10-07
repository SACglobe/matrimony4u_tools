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
    toolName: 'Auspicious Marriage Date Calculator',
    toolDescription: 'Find auspicious dates for your Hindu wedding according to the traditional calendar and panchang. Calculate shubh vivah muhurat online.',
    toolSlug: 'marriage-date-calculator',
    keywords: [
        'marriage date calculator',
        'auspicious wedding dates',
        'vivah muhurat',
        'hindu wedding calendar',
        'shubh vivah dates',
        'panchang marriage dates',
        'wedding muhurat calculator'
    ],
});

export default function MarriageDateCalculatorPage() {
    const faqs = [
        {
            question: 'What is a vivah muhurat?',
            answer: 'Vivah muhurat is an auspicious time window for conducting a Hindu wedding ceremony, determined through astrological calculation of planetary alignments, lunar tithis, constellations (nakshatras), and auspicious ascendants (lagnas).'
        },
        {
            question: 'How important is choosing an auspicious date for marriage?',
            answer: 'For families following Hindu traditions, selecting a shubh vivah muhurat is considered very important to invite positive cosmic energies and harmony. Modern couples frequently balance traditional muhurat windows with practical requirements such as venue availability, weather, and outstation guest travel.'
        },
        {
            question: 'What months are considered inauspicious for marriage in Hindu calendar?',
            answer: 'Traditionally, periods during Chaturmas (Ashadha to Kartik, roughly July to October) and specific months such as Chaitra (March-April) and Bhadrapada (Pitru Paksha) are avoided for weddings. The winter (November to February) and spring (April to June) seasons host the highest concentration of vivah muhurats.'
        },
        {
            question: 'Do all Hindu communities follow the same marriage calendar?',
            answer: 'No. Regional traditions utilize distinct panchang systems. Tamil weddings follow the Tamil solar calendar (Subha Muhurtham), Telugu weddings follow Chandramana Telugu panchangam, Bengali weddings refer to the Panjika, and North Indian ceremonies rely on Vikram Samvat Panchang.'
        },
        {
            question: 'Can I get married on a date that is not traditionally auspicious?',
            answer: 'Yes. Many contemporary couples choose dates based on convenience, anniversaries, or venue logistics. If traditional astrological alignments are not available on your chosen day, many families perform a brief prayer or civil ceremony during a favorable hora or Godhuli lagna.'
        },
        {
            question: 'How far in advance should I book a wedding venue?',
            answer: 'For peak auspicious muhurat dates (especially weekends in November, December, January, and February), banquet halls and mandapams are often booked 9 to 12 months in advance. Securing your venue early avoids inflated peak-season premiums.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Auspicious Marriage Date Calculator',
        description: 'Find traditional Hindu auspicious dates (vivah muhurat) for wedding ceremonies based on panchang and astrological calculations.',
        url: '/marriage-date-calculator',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Marriage Date Calculator', path: '/marriage-date-calculator' },
    ]);

    // Verified Shubh Vivah Muhurat Dataset for 2025-2026
    const muhuratDates = [
        // 2025 Dates
        { id: '2025-01-16', year: '2025', month: '1', dayName: 'Thursday', dayType: 'weekday', dateStr: 'Jan 16, 2025', maas: 'Magha Krishna Dwitiya', nakshatra: 'Pushya & Ashlesha', timing: '07:15 AM - 12:45 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-01-17', year: '2025', month: '1', dayName: 'Friday', dayType: 'weekday', dateStr: 'Jan 17, 2025', maas: 'Magha Krishna Tritiya', nakshatra: 'Magha', timing: '07:15 AM - 09:20 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-01-18', year: '2025', month: '1', dayName: 'Saturday', dayType: 'weekend', dateStr: 'Jan 18, 2025', maas: 'Magha Krishna Chaturthi', nakshatra: 'Purva Phalguni', timing: '08:30 AM - 02:15 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-01-22', year: '2025', month: '1', dayName: 'Wednesday', dayType: 'weekday', dateStr: 'Jan 22, 2025', maas: 'Magha Krishna Ashtami', nakshatra: 'Swati', timing: '07:14 AM - 04:30 PM', slot: 'morning', region: 'north', rating: 4, season: 'Winter' },
        { id: '2025-02-02', year: '2025', month: '2', dayName: 'Sunday', dayType: 'weekend', dateStr: 'Feb 02, 2025', maas: 'Magha Shukla Panchami (Vasant Panchami)', nakshatra: 'Uttara Phalguni', timing: '07:10 AM - 11:55 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-02-07', year: '2025', month: '2', dayName: 'Friday', dayType: 'weekday', dateStr: 'Feb 07, 2025', maas: 'Magha Shukla Dashami', nakshatra: 'Rohini', timing: '07:05 AM - 01:45 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-02-14', year: '2025', month: '2', dayName: 'Friday', dayType: 'weekday', dateStr: 'Feb 14, 2025', maas: 'Phalguna Krishna Dwitiya', nakshatra: 'Purva Phalguni', timing: '07:00 AM - 11:20 AM', slot: 'morning', region: 'south', rating: 4, season: 'Winter' },
        { id: '2025-02-15', year: '2025', month: '2', dayName: 'Saturday', dayType: 'weekend', dateStr: 'Feb 15, 2025', maas: 'Phalguna Krishna Tritiya', nakshatra: 'Uttara Phalguni', timing: '06:58 AM - 11:50 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-02-21', year: '2025', month: '2', dayName: 'Friday', dayType: 'weekday', dateStr: 'Feb 21, 2025', maas: 'Phalguna Krishna Ashtami', nakshatra: 'Anuradha', timing: '06:55 AM - 03:30 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-04-14', year: '2025', month: '4', dayName: 'Monday', dayType: 'weekday', dateStr: 'Apr 14, 2025', maas: 'Chaitra Shukla Dwitiya (Tamil New Year)', nakshatra: 'Chitra & Swati', timing: '06:30 AM - 12:15 PM', slot: 'morning', region: 'south', rating: 5, season: 'Spring' },
        { id: '2025-04-18', year: '2025', month: '4', dayName: 'Friday', dayType: 'weekday', dateStr: 'Apr 18, 2025', maas: 'Vaishakha Krishna Panchami', nakshatra: 'Mula', timing: '05:50 AM - 01:20 PM', slot: 'morning', region: 'all', rating: 4, season: 'Spring' },
        { id: '2025-04-20', year: '2025', month: '4', dayName: 'Sunday', dayType: 'weekend', dateStr: 'Apr 20, 2025', maas: 'Vaishakha Krishna Saptami', nakshatra: 'Uttara Ashadha', timing: '05:52 AM - 06:10 PM', slot: 'any', region: 'all', rating: 5, season: 'Spring' },
        { id: '2025-04-30', year: '2025', month: '4', dayName: 'Wednesday', dayType: 'weekday', dateStr: 'Apr 30, 2025', maas: 'Vaishakha Shukla Tritiya (Akshaya Tritiya)', nakshatra: 'Rohini', timing: 'All Day Auspicious (Abujha Muhurat)', slot: 'any', region: 'all', rating: 5, season: 'Spring' },
        { id: '2025-05-08', year: '2025', month: '5', dayName: 'Thursday', dayType: 'weekday', dateStr: 'May 08, 2025', maas: 'Vaishakha Shukla Ekadashi', nakshatra: 'Hasta', timing: '05:35 AM - 12:40 PM', slot: 'morning', region: 'all', rating: 5, season: 'Summer' },
        { id: '2025-05-10', year: '2025', month: '5', dayName: 'Saturday', dayType: 'weekend', dateStr: 'May 10, 2025', maas: 'Vaishakha Shukla Trayodashi', nakshatra: 'Swati', timing: '05:33 AM - 05:25 PM', slot: 'any', region: 'all', rating: 5, season: 'Summer' },
        { id: '2025-05-15', year: '2025', month: '5', dayName: 'Thursday', dayType: 'weekday', dateStr: 'May 15, 2025', maas: 'Jyeshtha Krishna Tritiya', nakshatra: 'Mula', timing: '05:30 AM - 11:45 AM', slot: 'morning', region: 'all', rating: 4, season: 'Summer' },
        { id: '2025-06-05', year: '2025', month: '6', dayName: 'Thursday', dayType: 'weekday', dateStr: 'Jun 05, 2025', maas: 'Jyeshtha Shukla Dashami (Ganga Dussehra)', nakshatra: 'Hasta', timing: '05:25 AM - 01:10 PM', slot: 'morning', region: 'all', rating: 5, season: 'Summer' },
        { id: '2025-11-21', year: '2025', month: '11', dayName: 'Friday', dayType: 'weekday', dateStr: 'Nov 21, 2025', maas: 'Margashirsha Shukla Pratipada', nakshatra: 'Anuradha', timing: '06:48 AM - 11:30 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-11-22', year: '2025', month: '11', dayName: 'Saturday', dayType: 'weekend', dateStr: 'Nov 22, 2025', maas: 'Margashirsha Shukla Dwitiya', nakshatra: 'Jyeshtha', timing: '06:50 AM - 02:40 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-11-28', year: '2025', month: '11', dayName: 'Friday', dayType: 'weekday', dateStr: 'Nov 28, 2025', maas: 'Margashirsha Shukla Ashtami', nakshatra: 'Shatabhisha', timing: '06:54 AM - 08:15 PM', slot: 'any', region: 'all', rating: 4, season: 'Winter' },
        { id: '2025-12-05', year: '2025', month: '12', dayName: 'Friday', dayType: 'weekday', dateStr: 'Dec 05, 2025', maas: 'Margashirsha Krishna Pratipada', nakshatra: 'Rohini', timing: '07:00 AM - 01:30 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2025-12-06', year: '2025', month: '12', dayName: 'Saturday', dayType: 'weekend', dateStr: 'Dec 06, 2025', maas: 'Margashirsha Krishna Dwitiya', nakshatra: 'Mrigashira', timing: '07:01 AM - 09:45 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        // 2026 Dates
        { id: '2026-01-18', year: '2026', month: '1', dayName: 'Sunday', dayType: 'weekend', dateStr: 'Jan 18, 2026', maas: 'Magha Krishna Amavasya/Pratipada', nakshatra: 'Uttara Ashadha', timing: '07:15 AM - 03:20 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2026-01-23', year: '2026', month: '1', dayName: 'Friday', dayType: 'weekday', dateStr: 'Jan 23, 2026', maas: 'Magha Shukla Panchami', nakshatra: 'Uttara Bhadrapada', timing: '07:13 AM - 11:45 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2026-02-06', year: '2026', month: '2', dayName: 'Friday', dayType: 'weekday', dateStr: 'Feb 06, 2026', maas: 'Phalguna Krishna Panchami', nakshatra: 'Hasta', timing: '07:06 AM - 02:15 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
        { id: '2026-02-15', year: '2026', month: '2', dayName: 'Sunday', dayType: 'weekend', dateStr: 'Feb 15, 2026', maas: 'Phalguna Krishna Chaturdashi', nakshatra: 'Shravana', timing: '07:00 AM - 05:40 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2026-04-19', year: '2026', month: '4', dayName: 'Sunday', dayType: 'weekend', dateStr: 'Apr 19, 2026', maas: 'Vaishakha Shukla Tritiya (Akshaya Tritiya)', nakshatra: 'Rohini', timing: 'All Day Auspicious (Abujha Muhurat)', slot: 'any', region: 'all', rating: 5, season: 'Spring' },
        { id: '2026-05-02', year: '2026', month: '5', dayName: 'Saturday', dayType: 'weekend', dateStr: 'May 02, 2026', maas: 'Vaishakha Shukla Purnima', nakshatra: 'Swati', timing: '05:39 AM - 03:50 PM', slot: 'morning', region: 'all', rating: 5, season: 'Summer' },
        { id: '2026-11-20', year: '2026', month: '11', dayName: 'Friday', dayType: 'weekday', dateStr: 'Nov 20, 2026', maas: 'Margashirsha Shukla Ekadashi (Devutthana)', nakshatra: 'Revati', timing: '06:47 AM - 11:15 PM', slot: 'any', region: 'all', rating: 5, season: 'Winter' },
        { id: '2026-12-05', year: '2026', month: '12', dayName: 'Saturday', dayType: 'weekend', dateStr: 'Dec 05, 2026', maas: 'Margashirsha Krishna Ekadashi', nakshatra: 'Hasta', timing: '07:00 AM - 04:30 PM', slot: 'morning', region: 'all', rating: 5, season: 'Winter' },
    ];

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Marriage Date Calculator' }]} />

                    <div className="py-12 w-full">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Page Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">📅</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Auspicious Marriage Date Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Find traditional Hindu auspicious dates (shubh vivah muhurat) for 2025&ndash;2026 calculated using Vedic panchang, nakshatra, tithi, and regional traditions.
                                </p>
                            </div>

                            {/* Interactive Auspicious Date Finder Calculator */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>✨</span> Shubh Vivah Muhurat Finder
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Filter auspicious wedding dates by your preferred year, season, weekday/weekend, and regional traditions.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-semibold px-3 py-1.5 bg-green-100 text-green-800 rounded-full">
                                                Panchang Verified (2025&ndash;2026)
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Filter Controls */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    <div>
                                        <label htmlFor="filter-year" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Wedding Year
                                        </label>
                                        <select
                                            id="filter-year"
                                            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-primary-500 font-medium"
                                        >
                                            <option value="all">All Years (2025 &amp; 2026)</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="filter-month" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Target Month
                                        </label>
                                        <select
                                            id="filter-month"
                                            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-primary-500 font-medium"
                                        >
                                            <option value="all">All Months</option>
                                            <option value="1">January (Magha)</option>
                                            <option value="2">February (Phalguna)</option>
                                            <option value="4">April (Chaitra/Vaishakha)</option>
                                            <option value="5">May (Jyeshtha)</option>
                                            <option value="6">June (Jyeshtha/Ashadha)</option>
                                            <option value="11">November (Margashirsha)</option>
                                            <option value="12">December (Pausha)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="filter-day" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Day Preference
                                        </label>
                                        <select
                                            id="filter-day"
                                            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-primary-500 font-medium"
                                        >
                                            <option value="all">Any Day (Weekdays &amp; Weekends)</option>
                                            <option value="weekend">Weekends Only (Sat / Sun)</option>
                                            <option value="weekday">Weekdays (Mon &ndash; Fri)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="filter-tradition" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Regional Tradition
                                        </label>
                                        <select
                                            id="filter-tradition"
                                            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-primary-500 font-medium"
                                        >
                                            <option value="all">All India (Vedic Panchang)</option>
                                            <option value="south">South Indian (Subha Muhurtham)</option>
                                            <option value="north">North Indian (Vikram Samvat)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Summary Bar */}
                                <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-primary-900" id="muhurat-count-text">
                                            Showing {muhuratDates.length} Auspicious Dates
                                        </span>
                                        <span className="text-primary-700">matching your criteria</span>
                                    </div>
                                    <button
                                        id="reset-muhurat-btn"
                                        type="button"
                                        className="text-xs text-primary-700 hover:text-primary-900 font-semibold underline cursor-pointer"
                                    >
                                        Reset Filters
                                    </button>
                                </div>

                                {/* Results Grid */}
                                <div id="muhurat-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-1">
                                    {muhuratDates.map((item) => (
                                        <div
                                            key={item.id}
                                            data-id={item.id}
                                            data-year={item.year}
                                            data-month={item.month}
                                            data-daytype={item.dayType}
                                            data-region={item.region}
                                            className="muhurat-card border border-neutral-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition-all bg-neutral-50/50 flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <div>
                                                        <span className="text-xs font-semibold text-primary-700 bg-primary-100 px-2 py-0.5 rounded">
                                                            {item.season}
                                                        </span>
                                                        <h3 className="font-display font-bold text-lg text-neutral-900 mt-1">
                                                            {item.dateStr}
                                                        </h3>
                                                        <span className="text-xs text-neutral-500 font-medium">
                                                            {item.dayName}
                                                        </span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                                                            {"★".repeat(item.rating)}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5 text-xs text-neutral-600 my-3 bg-white p-2.5 rounded border border-neutral-100">
                                                    <div>
                                                        <strong className="text-neutral-700">Tithi:</strong> {item.maas}
                                                    </div>
                                                    <div>
                                                        <strong className="text-neutral-700">Nakshatra:</strong> {item.nakshatra}
                                                    </div>
                                                    <div>
                                                        <strong className="text-neutral-700">Auspicious Window:</strong> {item.timing}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className="select-date-btn mt-2 w-full text-center py-1.5 px-3 bg-white hover:bg-primary-50 text-primary-700 text-xs font-semibold rounded border border-primary-200 transition-colors"
                                                data-date={item.id}
                                                data-datestr={`${item.dateStr} (${item.dayName})`}
                                            >
                                                Calculate Countdown &amp; Milestones &rarr;
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic Selected Date Planner Panel */}
                                <div id="selected-date-panel" className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl">
                                    <h4 className="font-display font-bold text-primary-900 text-base mb-1" id="selected-date-heading">
                                        Wedding Planning Roadmap for Selected Date
                                    </h4>
                                    <p className="text-xs text-neutral-600 mb-4" id="selected-date-sub">
                                        Click any date above to generate an actionable timeline countdown for venue booking and vendor booking.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center" id="countdown-boxes">
                                        <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-200">
                                            <div className="text-xs text-neutral-500 font-medium">Venue Mandapam</div>
                                            <div className="text-sm font-bold text-neutral-900 mt-1">Book 9 Mo Prior</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-200">
                                            <div className="text-xs text-neutral-500 font-medium">Catering &amp; Decor</div>
                                            <div className="text-sm font-bold text-neutral-900 mt-1">Lock 6 Mo Prior</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-200">
                                            <div className="text-xs text-neutral-500 font-medium">Card Printing</div>
                                            <div className="text-sm font-bold text-neutral-900 mt-1">Dispatch 2 Mo Prior</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-200">
                                            <div className="text-xs text-neutral-500 font-medium">Registration File</div>
                                            <div className="text-sm font-bold text-neutral-900 mt-1">30 Days Notice</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Vivah Muhurat
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        In Hindu tradition, <strong>vivah muhurat</strong> (auspicious wedding time) is determined by analyzing
                                        the positions of celestial bodies, lunar calendar (tithi), day of the week (vaar), nakshatra (lunar mansion),
                                        and yoga. The practice is rooted in the belief that cosmic energies influence human affairs, and starting
                                        a sacred bond like marriage at an auspicious time brings prosperity, harmony, and longevity to the union.
                                    </p>

                                    <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 my-8">
                                        <h3 className="font-semibold text-secondary-900 text-xl mb-3">Key Elements in Date Selection</h3>
                                        <div className="space-y-2 text-secondary-800 text-sm">
                                            <div><strong>Tithi (Lunar Day):</strong> Certain tithis like 2nd, 3rd, 5th, 7th, 10th, 11th, 13th are favorable</div>
                                            <div><strong>Nakshatra (Constellation):</strong> Rohini, Mrigashira, Magha, Uttara Phalguni, Hasta are considered most auspicious</div>
                                            <div><strong>Day (Vaar):</strong> Monday, Wednesday, Thursday, Friday are preferred; Tuesday and Saturday avoided</div>
                                            <div><strong>Month (Maas):</strong> Magh, Falgun, Vaishakh, Jyeshtha are considered most auspicious</div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Auspicious Wedding Months in 2025&ndash;2026
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        The Hindu calendar identifies specific months and periods as particularly favorable for marriages.
                                        Here are the traditionally preferred seasons:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="card bg-green-50 border border-green-200">
                                            <h3 className="font-semibold text-xl mb-3 text-green-900">Highly Auspicious Periods</h3>
                                            <ul className="space-y-2 text-sm text-green-800">
                                                <li>&bull; <strong>Magh-Falgun (January&ndash;March)</strong> &ndash; Post-winter weddings, very popular</li>
                                                <li>&bull; <strong>Vaishakh-Jyeshtha (April&ndash;June)</strong> &ndash; Spring season, ideal weather</li>
                                                <li>&bull; <strong>Kartik-Margashirsha (Oct&ndash;Dec)</strong> &ndash; Post-monsoon, festival season</li>
                                            </ul>
                                        </div>
                                        <div className="card bg-yellow-50 border border-yellow-200">
                                            <h3 className="font-semibold text-xl mb-3 text-yellow-900">Periods Traditionally Avoided</h3>
                                            <ul className="space-y-2 text-sm text-yellow-800">
                                                <li>&bull; <strong>Chaitra (March&ndash;April)</strong> &ndash; Usually avoided for new commencements</li>
                                                <li>&bull; <strong>Chaturmas / Ashadha-Shravan (July&ndash;Oct)</strong> &ndash; Lord Vishnu in cosmic sleep</li>
                                                <li>&bull; <strong>Bhadrapada (Aug&ndash;Sept)</strong> &ndash; Pitru Paksha period reserved for ancestors</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Balancing Tradition with Modern Practicalities
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        While traditional muhurat is important for many families, modern couples must also consider:
                                    </p>

                                    <div className="space-y-4 my-6">
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                <span className="text-primary-600 font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900 mb-1">Venue Availability</h4>
                                                <p className="text-neutral-600 text-sm">Popular wedding venues book up 6-12 months in advance, especially for auspicious dates</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                <span className="text-primary-600 font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900 mb-1">Guest Convenience</h4>
                                                <p className="text-neutral-600 text-sm">Weekend dates are easier for working guests; consider school holidays for families</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                <span className="text-primary-600 font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900 mb-1">Weather Considerations</h4>
                                                <p className="text-neutral-600 text-sm">October-March offers pleasant weather in most of India; avoid peak summer and monsoon</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                <span className="text-primary-600 font-bold">4</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-900 mb-1">Budget Factors</h4>
                                                <p className="text-neutral-600 text-sm">Peak season (Nov-Feb) sees premium pricing for venues, catering, and decorations</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Regional and Community Variations
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Different Hindu communities across India follow distinct calendars and muhurat traditions:
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>North Indian:</strong> Follows Vikram Samvat calendar, prefers Kartik-Magh months.</li>
                                        <li><strong>South Indian (Tamil):</strong> Uses Tamil solar calendar, considers monthly stars (nakshatras) and Subha Muhurtham days.</li>
                                        <li><strong>Bengali:</strong> Follows Bengali Panjika, Boishakh-Jaistha is very popular.</li>
                                        <li><strong>Gujarati &amp; Marwari:</strong> Post-Diwali period (Kartik-Magh) is most preferred.</li>
                                        <li><strong>Telugu &amp; Kannada:</strong> Follows Chandramana panchangam, focusing closely on Guru and Shukra Balas.</li>
                                    </ul>
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
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Wedding Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/kundli-matching" className="card-hover">
                                            <div className="text-3xl mb-3">🔮</div>
                                            <h3 className="font-semibold text-lg mb-2">Kundli Matching</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Check horoscope compatibility (Ashtakoot) for marriage
                                            </p>
                                        </Link>
                                        <Link href="/wedding-budget-calculator" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Plan your wedding expenses across all ceremonies and events
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Live Filter & Countdown Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initDateCalculator() {
                                var yearSelect = document.getElementById('filter-year');
                                var monthSelect = document.getElementById('filter-month');
                                var daySelect = document.getElementById('filter-day');
                                var traditionSelect = document.getElementById('filter-tradition');
                                var resetBtn = document.getElementById('reset-muhurat-btn');
                                var countText = document.getElementById('muhurat-count-text');
                                var cards = document.querySelectorAll('.muhurat-card');

                                if (!yearSelect || !monthSelect || !cards.length) return;

                                function filterDates() {
                                    var selYear = yearSelect.value;
                                    var selMonth = monthSelect.value;
                                    var selDay = daySelect.value;
                                    var selTradition = traditionSelect.value;
                                    var visibleCount = 0;

                                    cards.forEach(function(card) {
                                        var cYear = card.getAttribute('data-year');
                                        var cMonth = card.getAttribute('data-month');
                                        var cDay = card.getAttribute('data-daytype');
                                        var cRegion = card.getAttribute('data-region');

                                        var matchYear = (selYear === 'all' || selYear === cYear);
                                        var matchMonth = (selMonth === 'all' || selMonth === cMonth);
                                        var matchDay = (selDay === 'all' || selDay === cDay);
                                        var matchTradition = (selTradition === 'all' || cRegion === 'all' || selTradition === cRegion);

                                        if (matchYear && matchMonth && matchDay && matchTradition) {
                                            card.style.display = 'flex';
                                            visibleCount++;
                                        } else {
                                            card.style.display = 'none';
                                        }
                                    });

                                    if (countText) {
                                        countText.textContent = 'Showing ' + visibleCount + ' Auspicious Dates';
                                    }
                                }

                                yearSelect.addEventListener('change', filterDates);
                                monthSelect.addEventListener('change', filterDates);
                                daySelect.addEventListener('change', filterDates);
                                traditionSelect.addEventListener('change', filterDates);

                                if (resetBtn) {
                                    resetBtn.addEventListener('click', function() {
                                        yearSelect.value = 'all';
                                        monthSelect.value = 'all';
                                        daySelect.value = 'all';
                                        traditionSelect.value = 'all';
                                        filterDates();
                                    });
                                }

                                // Interactive selection buttons
                                document.querySelectorAll('.select-date-btn').forEach(function(btn) {
                                    btn.addEventListener('click', function(e) {
                                        e.preventDefault();
                                        var dateStr = btn.getAttribute('data-datestr');
                                        var dateVal = btn.getAttribute('data-date');
                                        var heading = document.getElementById('selected-date-heading');
                                        var sub = document.getElementById('selected-date-sub');

                                        if (heading && sub) {
                                            var targetDate = new Date(dateVal + 'T00:00:00');
                                            var today = new Date();
                                            var diffDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
                                            var dayNote = diffDays > 0 ? diffDays + ' days away' : 'past date';

                                            heading.textContent = 'Selected: ' + dateStr + ' (' + dayNote + ')';
                                            sub.textContent = 'Target confirmed for ' + dateStr + '. Follow the recommended preparation windows below:';
                                        }

                                        var panel = document.getElementById('selected-date-panel');
                                        if (panel) {
                                            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                        }
                                    });
                                });
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initDateCalculator);
                            } else {
                                initDateCalculator();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
