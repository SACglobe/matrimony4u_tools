import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { generatePageMetadata, generateFAQSchema, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Cultural Traditions & Customs in Indian Marriages',
    description: 'Complete guide to Hindu, Muslim, Christian, Sikh marriage traditions, rituals, regional customs, and modern adaptations in Indian weddings.',
    canonicalPath: '/cultural-traditions/',
    keywords: ['indian wedding traditions', 'hindu marriage rituals', 'wedding customs india', 'marriage ceremonies', 'indian wedding culture'],
});

export default function CulturalTraditionsPage() {
    const faqs = [
        {
            question: 'What are the main ceremonies in a traditional Hindu wedding?',
            answer: 'Key ceremonies include: Engagement (Sagai), Mehendi (henna application), Sangeet (musical night), Haldi (turmeric ceremony), Baraat (groom procession), Kanyadaan (giving away bride), Saptapadi (seven vows around fire), and Vidaai (bride farewell). Each has deep symbolic meaning.'
        },
        {
            question: 'Are all Indian weddings multi-day affairs?',
            answer: 'Traditionally yes, but modern couples increasingly opt for 1-2 day celebrations combining multiple ceremonies. Orthodox families in North India typically have 3-5 day weddings. South Indian weddings are often more compact, completed in 1-2 days.'
        },
        {
            question: 'Can we skip certain traditional rituals?',
            answer: 'Yes, modern couples customize ceremonies based on preferences, time, and budget. Common to skip: lengthy pre-wedding rituals, certain regional customs not relevant to both families. Discuss with elders respectfully.'
        },
        {
            question: 'What is the significance of the Mangalsutra?',
            answer: 'Mangalsutra is a sacred necklace the groom ties around bride neck during marriage ceremony. It symbolizes marital bond, similar to wedding rings in Western culture. Design varies by region (gold beads in North, black beads in South).'
        },
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Cultural Traditions', path: '/cultural-traditions/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Cultural Traditions' }]} />

                    <div className="py-12 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="text-5xl mb-4">🕉️</div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                Cultural Traditions in Indian Marriages
                            </h1>
                            <p className="text-xl text-neutral-600">
                                Understanding the rich tapestry of Indian wedding customs and rituals
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    The Significance of Indian Wedding Traditions
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Indian weddings are not merely social contracts but sacred ceremonies steeped in thousands of years
                                    of tradition. Every ritual, from the smallest gesture to grand ceremonies, carries symbolic meaning
                                    representing blessings, prosperity, fertility, and the union of two souls.
                                </p>

                                <p className="text-neutral-700 leading-relaxed mb-6">
                                    While customs vary dramatically across religions (Hindu, Muslim, Christian, Sikh, Parsi) and regions
                                    (North vs South, state-specific variations), certain themes remain universal: seeking divine blessings,
                                    honoring ancestors, celebrating with community, and marking the transition to a new life phase.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">Hindu Wedding Traditions</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Hindu weddings are the most complex and varied, with differences between North Indian, South Indian,
                                    Bengali, Marathi, and Gujarati traditions. Here are the core ceremonies common across regions:
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                                        <h4 className="font-semibold text-lg text-primary-900 mb-2">🙏 Roka/Thaka - Engagement</h4>
                                        <p className="text-sm text-primary-800 mb-2">
                                            <strong>When:</strong> 6-12 months before wedding
                                        </p>
                                        <p className="text-sm text-primary-800">
                                            Informal ceremony where families meet, exchange gifts, and "book" the bride/groom. Considered
                                            official commitment in modern times. Involves roka tilak (vermillion mark) and shagun (gift exchange).
                                        </p>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                                        <h4 className="font-semibold text-lg text-green-900 mb-2">🎨 Mehendi - Henna Ceremony</h4>
                                        <p className="text-sm text-green-800 mb-2">
                                            <strong>When:</strong> 1-2 days before wedding
                                        </p>
                                        <p className="text-sm text-green-800">
                                            Intricate henna designs applied to bride's hands and feet. Darker the color, stronger the love
                                            (and better the mother-in-law!). Now evolved into elaborate ladies' function with music and dance.
                                        </p>
                                    </div>

                                    <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                                        <h4 className="font-semibold text-lg text-yellow-900 mb-2">🎵 Sangeet - Musical Night</h4>
                                        <p className="text-sm text-yellow-800 mb-2">
                                            <strong>When:</strong> 1-2 days before wedding
                                        </p>
                                        <p className="text-sm text-yellow-800">
                                            Modern addition (influenced by Bollywood!) where families perform choreographed dances, sing songs.
                                            Most fun event, often combined with cocktail party in urban weddings.
                                        </p>
                                    </div>

                                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                                        <h4 className="font-semibold text-lg text-orange-900 mb-2">💛 Haldi - Turmeric Ceremony</h4>
                                        <p className="text-sm text-orange-800 mb-2">
                                            <strong>When:</strong> Morning of wedding day
                                        </p>
                                        <p className="text-sm text-orange-800">
                                            Turmeric paste (haldi) applied to bride and groom separately by family members. Believed to purify,
                                            bring glow, and ward off evil. Traditional ritual with ancient Ayurvedic roots for healthy skin.
                                        </p>
                                    </div>

                                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                                        <h4 className="font-semibold text-lg text-red-900 mb-2">🐴 Baraat - Groom's Procession</h4>
                                        <p className="text-sm text-red-800 mb-2">
                                            <strong>When:</strong> Wedding day, before ceremony
                                        </p>
                                        <p className="text-sm text-red-800">
                                            Groom arrives on decorated horse/car with dancing family and band. Bride's family welcomes with
                                            aarti, garlands. Most energetic, visible part of Indian weddings - hours of street dancing!
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                                        <h4 className="font-semibold text-lg text-purple-900 mb-2">💍 Main Ceremony - Saptapadi</h4>
                                        <p className="text-sm text-purple-800 mb-2">
                                            <strong>When:</strong> Wedding day (muhurat time)
                                        </p>
                                        <p className="text-sm text-purple-800 mb-3">
                                            Core rituals include:
                                        </p>
                                        <ul className="text-sm text-purple-800 space-y-1 ml-4">
                                            <li>• <strong>Kanyadaan:</strong> Father gives away daughter</li>
                                            <li>• <strong>Hasta Milap:</strong> Hands tied with cloth, symbolizing union</li>
                                            <li>• <strong>Saptapadi:</strong> Seven steps around sacred fire, taking seven vows</li>
                                            <li>• <strong>Sindoor:</strong> Groom applies vermillion to bride's hair partition</li>
                                            <li>• <strong>Mangalsutra:</strong> Sacred necklace tied around bride's neck</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                                        <h4 className="font-semibold text-lg text-blue-900 mb-2">👋 Vidaai - Bride's Farewell</h4>
                                        <p className="text-sm text-blue-800 mb-2">
                                            <strong>When:</strong> After wedding ceremony
                                        </p>
                                        <p className="text-sm text-blue-800">
                                            Emotional departure where bride throws rice backwards over shoulder (prosperity for parents),
                                            leaves parental home for new life. Traditionally very tearful, though modern couples often return
                                            same evening!
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Regional Variations in Indian Weddings
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🌾 North Indian Weddings</h4>
                                        <p className="text-sm text-neutral-600 mb-2">
                                            <strong>States:</strong> Punjab, UP, Delhi, Haryana, Rajasthan
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            Grand, lavish celebrations with loud music, street processions, 7-day festivities common.
                                            Emphasis on dancing (bhangra), alcohol consumption, gifting. Very visible, public celebrations.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🥥 South Indian Weddings</h4>
                                        <p className="text-sm text-neutral-600 mb-2">
                                            <strong>States:</strong> Tamil Nadu, Kerala, Karnataka, Andhra
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            Simple, traditional, early morning ceremonies. Focus on religious rituals over entertainment.
                                            Tamil weddings: Mangalsutra called Thali. Kerala: Pure white/gold sarees, often single-day affair.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🐟 Bengali Weddings</h4>
                                        <p className="text-sm text-neutral-600 mb-2">
                                            <strong>Unique Feature:</strong> Fish symbolism, white-red sarees
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            Unique rituals: Gaye Holud (turmeric), Shubho Drishti (first look), Mala Badal (garland exchange), Sindur Daan.
                                            Bride wears white with red border, conch shell bangles.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🎭 Marathi Weddings</h4>
                                        <p className="text-sm text-neutral-600 mb-2">
                                            <strong>Unique Feature:</strong> Antarpaat curtain
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            Bride and groom kept separated by curtain (Antarpaat) during initial ceremony. Mangalashtak songs,
                                            Kanyadaan with coconut, bride wears green Paithani saree with pearls (Mundavalya).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Other Religious Wedding Traditions
                                </h2>

                                <div className="space-y-6">
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">☪️ Muslim Nikah</h4>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            Simple, solemn ceremony conducted by Qazi. Key elements:
                                        </p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Mehr (bride's mandatory gift from groom, specified in contract)</li>
                                            <li>• Ijab-e-Qabul (proposal and acceptance in front of witnesses)</li>
                                            <li>• Nikahnama signing (marriage contract)</li>
                                            <li>• No elaborate rituals - focus on legal/religious contract</li>
                                            <li>• Walima (reception) held after, hosted by groom's family</li>
                                        </ul>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">✝️ Christian Weddings</h4>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            Church ceremony with Western influence but Indian flavor:
                                        </p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Church ceremony with priest, readings, hymns, exchange of vows</li>
                                            <li>• Bride walks down aisle with father</li>
                                            <li>• Exchange of rings, signing of marriage register</li>
                                            <li>• Indian twist: Bride wears white gown or Indian saree, live band, lavish reception</li>
                                        </ul>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">🗡️ Sikh Anand Karaj</h4>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            Gurudwara ceremony centered on Guru Granth Sahib:
                                        </p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Ardaas (prayer), Kirtan (hymns)</li>
                                            <li>• Laavan (four rounds around Guru Granth Sahib)</li>
                                            <li>• Concept of equality - bride and groom both prostrate together</li>
                                            <li>• Langar (community meal) integral part</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Modern Adaptations & Changing Traditions
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Indian wedding traditions are evolving rapidly with urbanization, education, and globalization:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <h5 className="font-semibold text-green-900 mb-2">✓ What's Increasing</h5>
                                        <ul className="text-sm text-green-800 space-y-1">
                                            <li>• Destination weddings</li>
                                            <li>• Pre-wedding photoshoots</li>
                                            <li>• Themed weddings (vintage, rustic)</li>
                                            <li>• Cocktail/sangeet combinations</li>
                                            <li>• Equal role for bride's family</li>
                                            <li>• Personalized vows</li>
                                            <li>• Eco-friendly weddings</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-4">
                                        <h5 className="font-semibold text-red-900 mb-2">↓ What's Declining</h5>
                                        <ul className="text-sm text-red-800 space-y-1">
                                            <li>• Dowry (illegal but still exists)</li>
                                            <li>• Week-long celebrations</li>
                                            <li>• Obscure regional rituals</li>
                                            <li>• Arranged meetings with no choice</li>
                                            <li>• Caste-based restrictions</li>
                                            <li>• Excessive gold jewelry display</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                                    <h5 className="font-semibold text-blue-900 mb-2">💡 Balancing Tradition & Modernity</h5>
                                    <p className="text-sm text-blue-800">
                                        Most couples today selectively retain meaningful traditions while discarding outdated practices.
                                        Open communication with families, explaining reasoning, and offering alternatives helps maintain harmony.
                                        Example: Keep Saptapadi core ceremony, skip lengthy pre-wedding rituals if time/budget-constrained.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="card">
                                            <h3 className="font-semibold text-lg text-neutral-900 mb-2">{faq.question}</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-xl p-8 text-center">
                                <h3 className="text-2xl font-display font-bold mb-4">Explore Marriage Traditions Through Our Tools</h3>
                                <p className="mb-6 text-white/90">
                                    Find auspicious dates, understand customs, and plan your culturally appropriate celebration
                                </p>
                                <Link href="/tools/" className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                                    Browse All Tools
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
