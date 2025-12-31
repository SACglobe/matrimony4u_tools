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
    toolName: 'Wedding Guest List Planner',
    toolDescription: 'Organize your Indian wedding guest list, manage RSVPs, categorize guests by family/friends/colleagues, and plan seating arrangements for all ceremonies.',
    toolSlug: 'wedding-guest-list-planner',
    keywords: [
        'wedding guest list planner',
        'indian wedding guest list',
        'wedding RSVP tracker',
        'guest list organizer',
        'wedding guest categories',
        'seating arrangement planner',
        'wedding guest count calculator'
    ],
});

export default function WeddingGuestListPlannerPage() {
    const faqs = [
        {
            question: 'What is the average guest count for Indian weddings?',
            answer: 'Indian weddings typically range from 200-500 guests, with significant variation by region, community, and family size. Urban nuclear families may host 150-300 guests, while traditional joint families in smaller towns often invite 400-800+ guests. Destination weddings are usually smaller (100-200), while hometown celebrations are larger.'
        },
        {
            question: 'How should I categorize guests for an Indian wedding?',
            answer: 'Common categories include: Bride\'s Family, Groom\'s Family, Bride\'s Friends, Groom\'s Friends, Colleagues, Extended Family, Family Friends, Parents\' Network, and VIP Guests (close relatives, special invitees). This helps with invitation design, seating, and gift tracking. Multi-day events may have different guest lists for each ceremony.'
        },
        {
            question: 'Do I need separate guest lists for different wedding events?',
            answer: 'Yes, typically. Sangeet/Mehendi might have 100-200 close friends and family, Haldi ceremonies are intimate (50-100), Engagement/Cocktails 200-300, and the Wedding Reception has the full guest list. Create separate lists for each event to manage invitations and catering efficiently.'
        },
        {
            question: 'How do I handle the bride\'s and groom\'s family wanting different guest counts?',
            answer: 'This is common. The traditional approach is 50-50 split, but modern couples negotiate based on: who is paying what percentage, which family has more relatives, and whose hometown the wedding is in. Document the agreed split early (e.g., 250 each side) to avoid conflicts. Many couples now do 60-40 or other splits based on circumstances.'
        },
        {
            question: 'What percentage of invited guests typically attend Indian weddings?',
            answer: 'Acceptance rates vary: Local hometown weddings see 85-95% attendance, destination/city weddings 70-80%, and faraway destinations 50-60%. Multi-day events see drop-offs - if 500 attend the reception, maybe 300 attend the mehendi. Plan catering with 10-15% buffer for unexpected attendees.'
        },
        {
            question: 'How early should I finalize my guest list?',
            answer: 'Start the initial list 8-10 months before. Finalize the main list 4-6 months before the wedding to order invitations. Update it 2 months before based on RSVPs for final catering numbers. Keep tracking RSVPs until 2 weeks before to adjust seating and catering.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Wedding Guest List Planner',
        description: 'Comprehensive guest list management tool for Indian weddings. Organize guests by categories, track RSVPs, and manage multi-ceremony attendance.',
        url: '/wedding-guest-list-planner/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Wedding Guest List Planner', path: '/wedding-guest-list-planner/' },
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
                        <div className="max-w-4xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full px-4">
                                <div className="text-5xl mb-4">👥</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Wedding Guest List Planner
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Organize your Indian wedding guest list, track RSVPs, and manage multi-ceremony attendance
                                </p>
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="card bg-primary-50 border-2 border-primary-200 mb-12">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📋</div>
                                    <h2 className="text-2xl font-bold text-primary-900 mb-3">
                                        Interactive Planner Coming Soon
                                    </h2>
                                    <p className="text-primary-800 mb-4">
                                        We're building a comprehensive guest list management tool with RSVP tracking,
                                        category organization, and seating chart integration. In the meantime, use the
                                        guidelines below to plan your guest list effectively.
                                    </p>
                                    <div className="text-sm text-primary-700">
                                        For now, create your list in Excel/Google Sheets using the structure outlined below.
                                    </div>
                                </div>
                            </div>

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        The Unique Nature of Indian Wedding Guest Lists
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Indian weddings are <strong>community celebrations</strong>, not just intimate gatherings.
                                        Unlike Western weddings with 50-150 guests, Indian celebrations routinely host 200-800+ attendees,
                                        spanning multiple generations, distant relatives, parents' professional networks, and community members.
                                        The guest list planning must account for:
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 my-8">
                                        <div className="card bg-blue-50">
                                            <h3 className="font-semibold text-blue-900 mb-2">Extended Family</h3>
                                            <p className="text-sm text-blue-800">
                                                Inviting 3rd cousins, distant relatives, and entire family branches is normal.
                                                Joint families may have 100+ close relatives alone.
                                            </p>
                                        </div>
                                        <div className="card bg-green-50">
                                            <h3 className="font-semibold text-green-900 mb-2">Multiple Events</h3>
                                            <p className="text-sm text-green-800">
                                                Mehendi, Sangeet, Haldi, Wedding, Reception - each may have different guest lists.
                                                Not everyone attends all events.
                                            </p>
                                        </div>
                                        <div className="card bg-purple-50">
                                            <h3 className="font-semibold text-purple-900 mb-2">Social Obligations</h3>
                                            <p className="text-sm text-purple-800">
                                                Parents' colleagues, business partners, and social circles. Reciprocity from
                                                weddings you've attended.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Step-by-Step Guest List Creation
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Phase 1: Brainstorming (6-8 months before)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Start with a master "wish list" without restrictions. Have each family create independent lists:
                                    </p>

                                    <div className="bg-neutral-100 rounded-lg p-6 my-6">
                                        <h4 className="font-semibold mb-3">Initial Categories to Consider:</h4>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <strong>Bride's Side:</strong>
                                                <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                                                    <li>Immediate family (parents, siblings)</li>
                                                    <li>Extended family (aunts, uncles, cousins)</li>
                                                    <li>Close friends (school, college, work)</li>
                                                    <li>Neighbors & family friends</li>
                                                    <li>Mother's social network</li>
                                                    <li>Father's professional contacts</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong>Groom's Side:</strong>
                                                <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                                                    <li>Immediate family (parents, siblings)</li>
                                                    <li>Extended family (aunts, uncles, cousins)</li>
                                                    <li>Close friends (school, college, work)</li>
                                                    <li>Neighbors & family friends</li>
                                                    <li>Mother's social network</li>
                                                    <li>Father's professional contacts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4 mt-8">Phase 2: Negotiation & Trimming (4-6 months before)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Reality check: Budget and venue capacity constraints require cuts. Common negotiation points:
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Equal split:</strong> 50-50 allocation between bride's and groom's families</li>
                                        <li><strong>Proportional to contribution:</strong> If one family pays 70%, they get 70% of guests</li>
                                        <li><strong>Hometown advantage:</strong> Family hosting locally may invite more relatives</li>
                                        <li><strong>VIP vs. general:</strong> Identify must-invite guests (close family, honor-bound invitees) vs. optional</li>
                                    </ul>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                                        <h4 className="font-semibold text-yellow-900 mb-2">Difficult Conversations</h4>
                                        <p className="text-sm text-yellow-800">
                                            Groom's mother wants 200 guests, but budget allows 150 total? Bride's friend list is 80,
                                            but venue cap is 250? These negotiations can be emotional. Keep discussions respectful,
                                            document agreements, and involve both sets of parents in decisions early to avoid conflicts later.
                                        </p>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4 mt-8">Phase 3: Finalization & RSVP Tracking (2-3 months before)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Send invitations, track responses, and update counts for caterer:
                                    </p>

                                    <div className="card">
                                        <h4 className="font-semibold mb-3">Recommended Spreadsheet Columns:</h4>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                                            <li>✓ Name (Head of Family + Members)</li>
                                            <li>✓ Relationship</li>
                                            <li>✓ Category (Family/Friend/Colleague)</li>
                                            <li>✓ Side (Bride/Groom/Common)</li>
                                            <li>✓ Address & Contact</li>
                                            <li>✓ Events Invited To (M/S/H/W/R)</li>
                                            <li>✓ Invitation Sent (Date)</li>
                                            <li>✓ RSVP Status (Yes/No/Pending)</li>
                                            <li>✓ Guest Count Confirmed</li>
                                            <li>✓ Dietary Restrictions</li>
                                            <li>✓ Seating Table Assignment</li>
                                            <li>✓ Gift Received</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Managing Multi-Event Guest Lists
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Indian weddings span 3-5 days. Different events have different intimacy levels:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="card border-l-4 border-purple-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">Mehendi (Ladies Night)</h3>
                                                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Intimate</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                <strong>Typical Size:</strong> 50-150 guests (women + close male family)
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                Close female relatives, bride & groom's female friends, immediate family males. Sometimes combined with Sangeet.
                                            </p>
                                        </div>

                                        <div className="card border-l-4 border-pink-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">Sangeet (Music Night)</h3>
                                                <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded">Semi-Open</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                <strong>Typical Size:</strong> 100-250 guests
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                Extended family, close friends, and young relatives. High-energy night performances require appropriate crowd.
                                            </p>
                                        </div>

                                        <div className="card border-l-4 border-orange-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">Haldi Ceremony</h3>
                                                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Very Intimate</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                <strong>Typical Size:</strong> 30-80 guests
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                Only very close family and friends. Messy turmeric ritual requires intimacy and comfort.
                                            </p>
                                        </div>

                                        <div className="card border-l-4 border-red-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">Wedding Ceremony</h3>
                                                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">Open / Large</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                <strong>Typical Size:</strong> 200-500+ guests
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                The main event - all relatives, extended family, parents' network, religious community members.
                                            </p>
                                        </div>

                                        <div className="card border-l-4 border-blue-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-lg">Reception Dinner</h3>
                                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Maximum</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                <strong>Typical Size:</strong> 300-800+ guests
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                Largest event - everyone invited, including professional contacts, distant relatives, community VIPs, often more relaxed atmosphere.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Common Guest List Challenges & Solutions
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">Challenge: "Plus-One" Expectations</h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                                                <strong>Issue:</strong> Friends expect to bring dates; unmarried cousins want plus-ones; colleagues ask about spouses.
                                            </p>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                <strong>Solution:</strong> Set clear policy: Married couples always together. Engaged/serious partners by name.
                                                Casual dating - case-by-case. Communicate this early when sending invitations.
                                            </p>
                                        </div>

                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">Challenge: Children at Weddings</h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                                                <strong>Issue:</strong> Should you allow kids? If yes, how many? If no, how to communicate?
                                            </p>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                <strong>Solution:</strong> Most Indian weddings welcome children. If you want adults-only, specify on invitation
                                                ("Adult reception") and have family members communicate personally to avoid offense. Consider kids' zone to manage.
                                            </p>
                                        </div>

                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">Challenge: Unexpected Additions</h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                                                <strong>Issue:</strong> Relatives bring uninvited family members; friends show up with surprise guests.
                                            </p>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                <strong>Solution:</strong> Build 10-15% buffer in catering. Indian culture prioritizes hospitality over strict counts.
                                                Vendors expect this - buffet style accommodates better than plated meals.
                                            </p>
                                        </div>

                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">Challenge: B-List Controversies</h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                                                <strong>Issue:</strong> Some Western couples keep "B-lists" (invite after A-list declines). Is this acceptable?
                                            </p>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                <strong>Solution:</strong> Generally not recommended for Indian weddings. Community is tight-knit; people talk.
                                                Send all invitations at once to avoid perception of being second-choice. If you must, ensure 4-6 week gap between waves.
                                            </p>
                                        </div>
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

                                {/* Related Tools */}
                                <section>
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/wedding-budget-calculator/" className="card-hover">
                                            <div className="text-3xl mb-3">💰</div>
                                            <h3 className="font-semibold text-lg mb-2">Wedding Budget Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Plan comprehensive wedding budgets for all ceremonies and events
                                            </p>
                                        </Link>
                                        <Link href="/marriage-date-calculator/" className="card-hover">
                                            <div className="text-3xl mb-3">📅</div>
                                            <h3 className="font-semibold text-lg mb-2">Marriage Date Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Find auspicious Hindu wedding dates (vivah muhurat)
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
