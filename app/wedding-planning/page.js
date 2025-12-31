import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import {
    generatePageMetadata,
    generateFAQSchema,
    generateBreadcrumbSchema,
    JsonLd
} from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata({
    title: 'Wedding Planning Tools & Resources for Indian Weddings',
    description: 'Comprehensive Indian wedding planning guide with budget calculators, guest list planners, timeline management, and vendor coordination tools.',
    canonicalPath: '/wedding-planning/',
    keywords: [
        'indian wedding planning',
        'wedding budget calculator',
        'wedding guest list planner',
        'indian wedding timeline',
        'wedding planning checklist'
    ],
});

export default function WeddingPlanningPage() {
    const faqs = [
        {
            question: 'How far in advance should I start planning an Indian wedding?',
            answer: '12-18 months for traditional multi-day weddings, 6-9 months minimum for simpler celebrations. Indian weddings involve multiple ceremonies, vendor bookings, outfit selection, and family coordination that require substantial lead time.'
        },
        {
            question: 'What is the average cost of an Indian wedding?',
            answer: 'Indian weddings range from ₹5 lakhs for intimate gatherings to ₹2+ crores for luxury celebrations. The national average is ₹15-25 lakhs. Costs vary significantly by city, guest count, venue choice, and number of ceremonies.'
        },
        {
            question: 'How many events are typically in an Indian wedding?',
            answer: 'Traditional North Indian weddings have 5-7 main events: Roka, Engagement, Mehendi, Sangeet, Haldi, Wedding Ceremony, and Reception. South Indian weddings may have fewer but equally significant rituals. Families often combine or skip events based on preferences.'
        },
        {
            question: 'Do I need a wedding planner for an Indian wedding?',
            answer: 'While not mandatory, wedding planners are increasingly popular for weddings with 200+ guests or multiple events. They handle vendor coordination, timeline management, and day-of logistics. For smaller weddings, family coordination with our planning tools can suffice.'
        },
    ];

    const tools = [
        {
            name: 'Wedding Budget Calculator',
            slug: 'wedding-budget-calculator',
            description: 'Calculate costs across all Indian wedding ceremonies and vendors',
            icon: '💰'
        },
        {
            name: 'Wedding Guest List Planner',
            slug: 'wedding-guest-list-planner',
            description: 'Organize guests by family, track RSVPs, manage seating',
            icon: '👥'
        },
        {
            name: 'Wedding Timeline Planner',
            slug: 'wedding-timeline-planner',
            description: 'Month-by-month planning checklist for stress-free preparation',
            icon: '📅'
        },
        {
            name: 'Auspicious Marriage Date',
            slug: 'marriage-date-calculator',
            description: 'Find muhurat dates according to Hindu calendar',
            icon: '🗓️'
        },
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Planning', path: '/wedding-planning/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Wedding Planning' }]} />

                    <div className="py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="text-5xl mb-4">💒</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Indian Wedding Planning Made Simple
                                </h1>
                                <p className="text-xl text-neutral-600">
                                    Expert tools and guides to plan your dream Indian wedding stress-free
                                </p>
                            </div>

                            {/* Tools */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-display font-semibold mb-6">Planning Tools</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {tools.map(tool => (
                                        <Link key={tool.slug} href={`/${tool.slug}/`} className="card-hover group">
                                            <div className="text-4xl mb-3">{tool.icon}</div>
                                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                                                {tool.name}
                                            </h3>
                                            <p className="text-sm text-neutral-600">{tool.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        The Complete Indian Wedding Planning Timeline
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-6">
                                        Indian weddings are grand celebrations that often span multiple days and involve numerous ceremonies,
                                        hundreds of guests, and intricate cultural traditions. Proper planning is essential to ensure everything
                                        runs smoothly while staying within budget and honoring family expectations.
                                    </p>

                                    <div className="space-y-8">
                                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">12-18 Months Before</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Set overall wedding budget with families</li>
                                                <li>✓ Decide on wedding size (intimate vs grand)</li>
                                                <li>✓ Choose wedding dates (consult pandit for muhurat)</li>
                                                <li>✓ Book primary venue (marriage hall, banquet, hotel)</li>
                                                <li>✓ Book photographer and videographer</li>
                                                <li>✓ Start guest list compilation</li>
                                                <li>✓ Research and shortlist wedding planners (if using)</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">9-12 Months Before</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Book caterers and finalize menu (veg/Jain/non-veg options)</li>
                                                <li>✓ Book mehendi artist, makeup artist, hairstylist</li>
                                                <li>✓ Start shopping for wedding outfits (lehenga, sherwani)</li>
                                                <li>✓ Book DJ/music band for sangeet</li>
                                                <li>✓ Book decorator/florist</li>
                                                <li>✓ Finalize guest list numbers</li>
                                                <li>✓ Book accommodation for out-of-town guests</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">6-9 Months Before</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Send save-the-date notices</li>
                                                <li>✓ Shop for jewelry (gold, diamond, polki)</li>
                                                <li>✓ Book transportation (vintage cars, decorated vehicles)</li>
                                                <li>✓ Finalize ceremony details with priest</li>
                                                <li>✓ Shop for gifts for family and guests</li>
                                                <li>✓ Arrange pre-wedding photoshoot locations</li>
                                                <li>✓ Start wedding website/group for updates</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">3-6 Months Before</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Print and send wedding invitations</li>
                                                <li>✓ Finalize decoration themes for each event</li>
                                                <li>✓ Book entertainment (dancers, performers for sangeet)</li>
                                                <li>✓ Plan honeymoon and book travel</li>
                                                <li>✓ Schedule outfit fittings and alterations</li>
                                                <li>✓ Confirm all vendor bookings</li>
                                                <li>✓ Apply for marriage registration appointment</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">1-3 Months Before</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Finalize event timeline (mehendi at 2pm, sangeet at 7pm, etc.)</li>
                                                <li>✓ Arrange welcome kits for out-of-town guests</li>
                                                <li>✓ Plan seating arrangements</li>
                                                <li>✓ Schedule makeup and hair trials</li>
                                                <li>✓ Confirm final guest count with caterer</li>
                                                <li>✓ Buy wedding accessories (kalire, joota, etc.)</li>
                                                <li>✓ Prepare wedding day emergency kit</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                                            <h3 className="text-2xl font-semibold mb-3">Final Month</h3>
                                            <ul className="space-y-2 text-neutral-700">
                                                <li>✓ Reconfirm all vendors (calls/site visits)</li>
                                                <li>✓ Do final outfit fittings</li>
                                                <li>✓ Start beauty treatments (facials, manicures)</li>
                                                <li>✓ Create detailed day-of timeline for all events</li>
                                                <li>✓ Assign tasks to family members/friends</li>
                                                <li>✓ Pack for honeymoon</li>
                                                <li>✓ Enjoy your wedding! 🎉</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Budget Allocation Guide for Indian Weddings
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-6">
                                        A well-planned budget prevents overspending and family stress. Here's how to allocate your wedding
                                        budget across major categories:
                                    </p>

                                    <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-semibold mb-4">Recommended Budget Distribution (%)</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-neutral-700">Venue & Catering</span>
                                                <span className="font-semibold text-primary-600">35-40%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Photography & Videography</span>
                                                <span className="font-semibold text-primary-600">10-15%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Outfits & Jewelry</span>
                                                <span className="font-semibold text-primary-600">15-20%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-accent-500 h-2 rounded-full" style={{ width: '17%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Decoration & Flowers</span>
                                                <span className="font-semibold text-primary-600">10-12%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '11%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Music & Entertainment</span>
                                                <span className="font-semibold text-primary-600">5-8%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '6%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Invitations & Print</span>
                                                <span className="font-semibold text-primary-600">2-3%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '2.5%' }}></div>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-neutral-700">Miscellaneous & Contingency</span>
                                                <span className="font-semibold text-primary-600">10-15%</span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                                        <h4 className="font-semibold text-yellow-900 mb-2">💡 Budget-Saving Tips</h4>
                                        <ul className="text-sm text-yellow-800 space-y-1">
                                            <li>• Choose wedding season wisely (avoid peak Dec-Feb for discounts)</li>
                                            <li>• Combine multiple pre-wedding events (mehendi + sangeet same day)</li>
                                            <li>• Opt for morning ceremonies (lower venue costs)</li>
                                            <li>• Negotiate package deals with vendors</li>
                                            <li>• Use family connections for vendor recommendations</li>
                                            <li>• DIY decorations for intimate events like roka</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Key Indian Wedding Vendors & What They Do
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">🍽️ Caterer</h4>
                                            <p className="text-sm text-neutral-600">Plans menu, arranges food stations, manages service staff. Essential for multi-cuisine requirements.</p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">📸 Photographer/Videographer</h4>
                                            <p className="text-sm text-neutral-600">Captures all ceremonies, candid moments, creates highlight videos. Book teams experienced in Indian weddings.</p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">🎨 Decorator</h4>
                                            <p className="text-sm text-neutral-600">Designs mandap, stage, entrance gates, floral arrangements. Theme coordination across events.</p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">💄 Makeup Artist</h4>
                                            <p className="text-sm text-neutral-600">Bridal makeup, hair styling, saree draping. Often handles bride's family members too.</p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">🎵 DJ/Band</h4>
                                            <p className="text-sm text-neutral-600">Music for sangeet, cocktail, reception. Coordinates with choreographers for performances.</p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-2">🕉️ Priest/Pandit</h4>
                                            <p className="text-sm text-neutral-600">Conducts religious ceremonies, explains rituals, suggests auspicious timings.</p>
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

                                <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-8 text-center">
                                    <h3 className="text-2xl font-display font-bold mb-4">Start Planning Your Dream Wedding</h3>
                                    <p className="mb-6 text-white/90">
                                        Use our expert tools to calculate budgets, manage guests, and stay organized
                                    </p>
                                    <Link href="/wedding-budget-calculator/" className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                                        Calculate Wedding Budget
                                    </Link>
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
