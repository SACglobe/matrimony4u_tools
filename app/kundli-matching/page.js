import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KundliMatchingCalculator from '@/components/tools/KundliMatchingCalculator';
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
    toolName: 'Kundli Matching Calculator - Gun Milan for Marriage',
    toolDescription: 'Educational tool demonstrating the traditional Ashtakoot Kundli matching system used in Hindu marriages. Learn about Gun Milan, compatibility factors, and cultural significance.',
    toolSlug: 'kundli-matching',
    keywords: [
        'kundli matching',
        'gun milan calculator',
        'ashtakoot matching',
        'horoscope matching marriage',
        'kundli milan online',
        'guna matching',
        'birth star compatibility'
    ],
});

export default function KundliMatchingPage() {
    const faqs = [
        {
            question: 'What is Kundli matching and why is it important in Hindu marriages?',
            answer: 'Kundli matching (also called Gun Milan or Ashtakoot Milan) is a traditional Vedic astrology practice used in Hindu arranged marriages to assess compatibility between bride and groom based on their birth charts. It evaluates 8 compatibility factors (Asht = 8, Koot = factors) totaling 36 points (Gunas). Families traditionally consider it important as it is believed to predict marital harmony, though modern couples increasingly view it as cultural tradition rather than deterministic.'
        },
        {
            question: 'How many Gunas are required for a good match?',
            answer: 'Traditional guidelines: 18-24 Gunas = Acceptable match, 25-32 Gunas = Good match, 33-36 Gunas = Excellent match. Below 18 is traditionally considered inauspicious. However, astrologers may approve matches with lower scores if other planetary positions are favorable. Many modern families use it as one factor among many, not an absolute requirement.'
        },
        {
            question: 'What are the 8 Kootas in Ashtakoot matching?',
            answer: 'The 8 Kootas are: 1) Varna (spiritual compatibility), 2) Vashya (mutual attraction), 3) Tara (health/longevity), 4) Yoni (physical/mental compatibility), 5) Graha Maitri (intellectual bond), 6) Gana (temperament), 7) Bhakoot (love/affection based on moon signs), and 8) Nadi (health/progeny). Each is assigned different maximum points totaling 36.'
        },
        {
            question: 'Can I marry if Kundli doesn\'t match?',
            answer: 'Yes, absolutely. Kundli matching is a cultural and religious tradition, not a legal requirement. Many successful marriages have low Guna scores or bypass matching entirely. Modern Hindu families increasingly prioritize compatibility factors like education, values, personality, and career over astrological matching. Love marriages often don\'t involve Kundli matching at all.'
        },
        {
            question: 'What is Mangal Dosha and how does it affect marriage?',
            answer: 'Mangal Dosha (Manglik) occurs when Mars is positioned in certain houses in the birth chart. Traditionally believed to cause marital discord or health issues, it was considered inauspicious. However, about 40% of people have some level of Mangal Dosha, and most marry without issues. Modern astrologers recognize it\'s often canceled by other planetary positions. Many families no longer consider it a dealbreaker.'
        },
        {
            question: 'Do Sikhs, Jains, and Buddhists practice Kundli matching?',
            answer: 'Yes, many Sikh, Jain, and Buddhist families in India practice Kundli matching as it is part of broader Indian cultural tradition beyond Hinduism alone. However, Sikhism officially does not mandate astrological practices, and many Sikh families skip it. Jain and Buddhist families vary in practice based on regional and family traditions.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Kundli Matching Calculator',
        description: 'Educational tool demonstrating traditional Ashtakoot Kundli matching system for understanding Hindu marriage compatibility traditions.',
        url: '/kundli-matching/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Kundli Matching', path: '/kundli-matching/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Kundli Matching' }]} />

                    <div className="py-12 w-full">
                        <div className="max-w-4xl mx-auto w-full">
                            {/* Header */}
                            <div className="text-center mb-12 w-full px-4">
                                <div className="text-5xl mb-4">🔮</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Kundli Matching Calculator
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Educational tool to understand the traditional Ashtakoot Gun Milan system in Hindu marriages
                                </p>
                            </div>

                            {/* Calculator */}
                            <KundliMatchingCalculator />

                            {/* Educational Content */}
                            <div className="mt-16 prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Kundli Matching Tradition
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        <strong>Kundli matching</strong> (also known as Gun Milan, Guna Milap, or Ashtakoot Milan) is an ancient
                                        Vedic astrology practice deeply embedded in Indian Hindu marriage traditions. For centuries, families have
                                        used this system to assess compatibility between prospective bride and groom before finalizing arranged marriages.
                                    </p>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        The practice involves comparing the birth charts (Kundlis/Horoscopes) of both individuals, specifically focusing
                                        on their <strong>Nakshatra (birth star)</strong> and <strong>Rashi (moon sign)</strong>. The Ashtakoot system
                                        evaluates compatibility across <strong>8 different dimensions</strong>, assigning points (Gunas) for each,
                                        totaling a maximum of <strong>36 Gunas</strong>.
                                    </p>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                                        <h3 className="font-semibold text-yellow-900 text-xl mb-3">⚠️ Important Context</h3>
                                        <p className="text-sm text-yellow-800 mb-3">
                                            This tool is <strong>educational</strong> and demonstrates the traditional scoring system for cultural
                                            understanding. It uses simplified calculations for demonstration purposes only.
                                        </p>
                                        <p className="text-sm text-yellow-800">
                                            <strong>For accurate astrological matching</strong>, consult a qualified Vedic astrologer with complete
                                            birth details (date, time, place). This calculator cannot replace professional astrological consultation.
                                        </p>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">The Cultural Significance</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        In traditional Hindu society, marriage is considered a sacred union that extends beyond two individuals to
                                        unite two families. Kundli matching emerged as a way to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Reduce uncertainty in arranged marriages where couples have limited prior interaction</li>
                                        <li>Provide objective criteria for family decision-making</li>
                                        <li>Predict compatibility across physical, emotional, mental, and spiritual dimensions</li>
                                        <li>Identify potential challenges and remedies</li>
                                        <li>Ensure family harmony and marital longevity</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        The 8 Kootas Explained
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-6">
                                        Each of the 8 Kootas examines a different aspect of compatibility. Here's what they represent:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">1. Varna (Varna Koot) - 1 Point</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Spiritual compatibility and ego levels. Based on ancient Varna system
                                                (Brahmin, Kshatriya, Vaishya, Shudra), now understood as spiritual inclinations. Higher score indicates
                                                harmonious spiritual and intellectual wavelength.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">2. Vashya (Vashya Koot) - 2 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Mutual attraction and control dynamics. Evaluates attraction, influence, and
                                                dominance patterns. Good Vashya suggests natural magnetic attraction and healthy power balance in the
                                                relationship.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">3. Tara (Dina Koot) - 3 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Birth star compatibility affecting health and well-being. Based on 27 Nakshatras,
                                                it predicts health, longevity, and overall welfare. High Tara score indicates mutual good fortune and protection.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">4. Yoni (Yoni Koot) - 4 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Physical and sexual compatibility, and biological/animal nature. Each Nakshatra
                                                is associated with an animal (horse, elephant, cat, etc.). Matching Yonis indicate physical attraction and
                                                intimate compatibility.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">5. Graha Maitri (Graha Maitri Koot) - 5 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Intellectual compatibility and mental affinity. Based on the friendship between
                                                Moon sign lords. High Graha Maitri ensures mental harmony, similar thinking patterns, and effective communication.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">6. Gana (Gana Koot) - 6 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Temperament and behavior patterns. Three Ganas exist: Deva (divine/gentle), Manushya
                                                (human/balanced), Rakshasa (demon/aggressive). Matching Ganas ensure similar temperaments and conflict
                                                resolution styles.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">7. Bhakoot (Rashi Koot) - 7 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Love, affection, and emotional compatibility based on moon signs. Evaluates financial
                                                prosperity and family welfare. High Bhakoot score indicates emotional bonding and material success.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                                            <h3 className="text-xl font-semibold mb-3">8. Nadi (Nadi Koot) - 8 Points</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed">
                                                <strong>Meaning:</strong> Health and progeny (children). Three Nadis exist (Aadi, Madhya, Antya) representing
                                                Vata, Pitta, Kapha in Ayurveda. Different Nadis are essential for healthy children. Nadi Dosha (same Nadi) is
                                                considered serious by traditional astrologers.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Modern Perspective on Kundli Matching
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        While Kundli matching remains an integral part of many Hindu families' marriage decisions, its role and
                                        interpretation have evolved significantly:
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">Changing Attitudes</h3>
                                    <ul className="list-disc list-inside space-y-3 text-neutral-700 mb-6">
                                        <li>
                                            <strong>Urban vs Rural Divide:</strong> Metropolitan educated families are more flexible, often treating
                                            Kundli matching as a formality rather than a decisive factor.
                                        </li>
                                        <li>
                                            <strong>Love Marriages:</strong> In self-selected (love) marriages, Kundli matching is often skipped entirely
                                            or done post-facto to satisfy elders.
                                        </li>
                                        <li>
                                            <strong>Flexible Interpretations:</strong> Modern astrologers are more willing to approve lower-scoring matches
                                            if other factors (education, personality, financial stability) align well.
                                        </li>
                                        <li>
                                            <strong>Women's Agency:</strong> Educated women increasingly reject Kundli matching as the sole criterion,
                                            demanding say in choosing partners based on compatibility beyond astrology.
                                        </li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Scientific Perspective</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        There is <strong>no scientific evidence</strong> that planetary positions at birth determine marital compatibility.
                                        Modern psychology and relationship science emphasize factors like:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Communication skills and conflict resolution ability</li>
                                        <li>Shared values, life goals, and expectations</li>
                                        <li>Emotional intelligence and empathy</li>
                                        <li>Financial compatibility and lifestyle preferences</li>
                                        <li>Mutual respect, trust, and commitment</li>
                                        <li>Family support systems</li>
                                    </ul>

                                    <p className="text-neutral-700 leading-relaxed">
                                        <strong>Bottom line:</strong> While Kundli matching can serve as a conversation starter about compatibility in
                                        arranged marriages, it should not replace direct communication, getting to know each other, and evaluating
                                        real-world compatibility factors.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Beyond Gun Milan: Other Considerations
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Mangal Dosha (Manglik)</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Separate from Ashtakoot, astrologers also check for <strong>Mangal Dosha</strong> (Mars affliction). Traditionally
                                        considered highly inauspicious, it was believed to cause spouse harm or marital discord. However:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>~40% of people have some level of Mangal Dosha - it's extremely common</li>
                                        <li>If both partners are Manglik, it cancels out</li>
                                        <li>Many planetary combinations "cancel" Mangal Dosha</li>
                                        <li>Modern families increasingly ignore it or accept manageable levels</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Dasha Compatibility</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Advanced astrologers also examine Dasha (planetary period) compatibility to see if major life events align
                                        positively for both partners.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        How to Use This Calculator
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        To understand the traditional Ashtakoot system:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-3 text-neutral-700 mb-6">
                                        <li><strong>Know Your Nakshatra and Rashi:</strong> These are determined from your exact birth time and place.
                                            You can find them in your horoscope/Kundli.</li>
                                        <li><strong>Select From Dropdowns:</strong> Choose the bride's and groom's Nakshatra and Rashi from the lists provided.</li>
                                        <li><strong>View Results:</strong> See the total Gunas scored and breakdown across 8 Kootas.</li>
                                        <li><strong>Understand Context:</strong> Remember this is a simplified demonstration of the traditional system.</li>
                                    </ol>

                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                                        <h4 className="font-semibold text-red-900 mb-2">❗ Critical Disclaimer</h4>
                                        <p className="text-sm text-red-800">
                                            This calculator provides an <strong>educational demonstration</strong> of how the Ashtakoot system works.
                                            Real Kundli matching involves analyzing complete birth charts with precise birth time and place, considering
                                            planetary positions, houses, aspects, Dashas, and much more. <strong>Do not make marriage decisions based
                                                solely on this simplified calculator.</strong> Consult qualified astrologers and, more importantly, evaluate
                                            real compatibility factors.
                                        </p>
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
                                        <Link href="/age-difference-calculator/" className="card-hover">
                                            <div className="text-3xl mb-3">💑</div>
                                            <h3 className="font-semibold text-lg mb-2">Age Difference Calculator</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Calculate age gap and understand compatibility beyond astrology
                                            </p>
                                        </Link>
                                        <Link href="/marriage-registration-documents/" className="card-hover">
                                            <div className="text-3xl mb-3">📝</div>
                                            <h3 className="font-semibold text-lg mb-2">Marriage Documents Checklist</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Get state-wise list of documents for legal marriage registration
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
