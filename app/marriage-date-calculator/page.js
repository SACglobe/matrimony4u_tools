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
    toolName: 'Auspicious Marriage Date Calculator',
    toolDescription: 'Find auspicious dates for your Hindu wedding according to the traditional calendar, panchang, and muhurat. Calculate shubh vivah muhurat for your marriage ceremony.',
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
            answer: 'Vivah muhurat is an auspicious time period for conducting a Hindu wedding ceremony, calculated based on planetary positions, panchang (Hindu calendar), and astrological considerations. It ensures the marriage begins at a spiritually favorable time.'
        },
        {
            question: 'How important is choosing an auspicious date for marriage?',
            answer: 'For families following Hindu traditions, selecting a shubh vivah muhurat is considered very important. However, modern couples should balance traditional preferences with practical considerations like venue availability, guest convenience, and work schedules. Many couples consult astrologers while also considering logistical factors.'
        },
        {
            question: 'What months are considered inauspicious for marriage in Hindu calendar?',
            answer: 'Traditionally, the months of Chaitra (March-April), Ashadha (June-July), Bhadrapada (August-September), and Pausha (December-January) are avoided for weddings. The monsoon months may also be avoided for practical reasons. However, specific auspicious dates can still be found in these months based on individual horoscopes.'
        },
        {
            question: 'Do all Hindu communities follow the same marriage calendar?',
            answer: 'No, there are regional variations. Tamil, Telugu, Marwari, Bengali, and other communities may have different preferences based on their local calendars and traditions. It is best to consult with family elders and community-specific astrologers.'
        },
        {
            question: 'Can I get married on a date that is not traditionally auspicious?',
            answer: 'Absolutely. Many modern couples, especially in love marriages or inter-faith marriages, choose dates based on convenience rather than astrological considerations. What matters most is the commitment and compatibility of the couple, not the wedding date.'
        },
        {
            question: 'How far in advance should I book a wedding venue?',
            answer: 'For popular wedding dates (weekends, festival seasons, winter months), book venues 6-12 months in advance. For traditional auspicious dates that fall on specific days, competition can be high, so earlier booking is recommended.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Auspicious Marriage Date Calculator',
        description: 'Find traditional Hindu auspicious dates (vivah muhurat) for wedding ceremonies based on panchang and astrological calculations.',
        url: '/marriage-date-calculator/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Marriage Date Calculator', path: '/marriage-date-calculator/' },
    ]);

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
                        <div className="max-w-4xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full px-4">
                                <div className="text-5xl mb-4">📅</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Auspicious Marriage Date Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Find traditional Hindu auspicious dates (vivah muhurat) for your wedding ceremony
                                </p>
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="card bg-primary-50 border-2 border-primary-200 mb-12">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🔮</div>
                                    <h2 className="text-2xl font-bold text-primary-900 mb-3">
                                        Interactive Calculator Coming Soon
                                    </h2>
                                    <p className="text-primary-800 mb-4">
                                        We're building an advanced marriage date calculator based on Hindu panchang and astrological principles.
                                        In the meantime, the information below will help you understand auspicious wedding dates.
                                    </p>
                                    <div className="text-sm text-primary-700">
                                        For immediate assistance, please consult with a qualified astrologer or pandit.
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
                                            <div><strong>Nakshatra (Constellation):</strong> Rohini, Mrigashira, Magha, Uttara, Hasta are considered auspicious</div>
                                            <div><strong>Day (Vaar):</strong> Monday, Wednesday, Thursday, Friday are preferred; Tuesday and Saturday avoided</div>
                                            <div><strong>Month (Maas):</strong> Magh, Falgun, Vaishakh, Jyeshtha are considered most auspicious</div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Auspicious Wedding Months in 2024-2025
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        The Hindu calendar identifies specific months and periods as particularly favorable for marriages.
                                        Here are the traditionally preferred seasons:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="card bg-green-50">
                                            <h3 className="font-semibold text-xl mb-3 text-green-900">Highly Auspicious Periods</h3>
                                            <ul className="space-y-2 text-sm text-green-800">
                                                <li>✓ <strong>Magh-Falgun (January-March)</strong> - Post-winter weddings, very popular</li>
                                                <li>✓ <strong>Vaishakh-Jyeshtha (April-June)</strong> - Spring season, ideal weather</li>
                                                <li>✓ <strong>Kartik (Oct-Nov)</strong> - Post-monsoon, festival season</li>
                                            </ul>
                                        </div>
                                        <div className="card bg-yellow-50">
                                            <h3 className="font-semibold text-xl mb-3 text-yellow-900">Periods Traditionally Avoided</h3>
                                            <ul className="space-y-2 text-sm text-yellow-800">
                                                <li>⚠ <strong>Chaitra (March-April)</strong> - Inauspicious period</li>
                                                <li>⚠ <strong>Ashadha-Shravan (June-August)</strong> - Monsoon, difficult for travel</li>
                                                <li>⚠ <strong>Bhadrapada (Aug-Sept)</strong> - Pitru Paksha period</li>
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

                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                                        <h4 className="font-semibold text-blue-900 mb-2">Practical Approach</h4>
                                        <p className="text-sm text-blue-800">
                                            Many families select 2-3 preferred months based on practical constraints (weather, budget, guest availability),
                                            then consult an astrologer to find the most auspicious dates within those months. This balances tradition with logistics.
                                        </p>
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
                                        <li><strong>North Indian</strong> - Follows Vikram Samvat calendar, prefers Kartik-Magh months</li>
                                        <li><strong>South Indian (Tamil)</strong> - Uses Tamil calendar, considers monthly stars (nakshatras)</li>
                                        <li><strong>Bengali</strong> - Follows Bengali calendar, Boishakh-Jaistha very popular despite heat</li>
                                        <li><strong>Gujarati/Marwari</strong> - Post-Diwali period (Kartik-Magh) is most preferred</li>
                                        <li><strong>Punjabi</strong> - Flexible with dates, less strict adherence to muhurat than other communities</li>
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

                                {/* Related Tools */}
                                <section>
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/kundli-matching/" className="card-hover">
                                            <div className="text-3xl mb-3">🔮</div>
                                            <h3 className="font-semibold text-lg mb-2">Kundli Matching</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Check horoscope compatibility (Ashtakoot) for marriage
                                            </p>
                                        </Link>
                                        <Link href="/wedding-budget-calculator/" className="card-hover">
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

            <Footer />
        </>
    );
}
