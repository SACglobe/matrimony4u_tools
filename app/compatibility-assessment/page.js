import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { generatePageMetadata, generateFAQSchema, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
    title: 'Compatibility Assessment Tools for Indian Marriages',
    description: 'Modern and traditional compatibility assessment tools - age difference calculator, Kundli matching guide, personality compatibility analysis for Indian couples.',
    canonicalPath: '/compatibility-assessment/',
    keywords: ['marriage compatibility india', 'kundli matching', 'age difference marriage', 'couple compatibility assessment', 'ashtakoot matching'],
});

export default function CompatibilityAssessmentPage() {
    const faqs = [
        {
            question: 'Is Kund li matching scientifically accurate?',
            answer: 'No, there is no scientific evidence that planetary positions at birth determine marital compatibility. Kundli matching is a cultural/religious tradition that many families value, but modern relationship success depends on communication, shared values, emotional intelligence, and compatibility in lifestyle/goals.'
        },
        {
            question: 'What factors actually predict marriage success?',
            answer: 'Research shows: communication skills, conflict resolution ability, shared life goals and values, emotional maturity, financial compatibility, mutual respect, family support, similar education/career aspirations, and commitment to growth together. These matter far more than astrological charts.'
        },
        {
            question: 'How much does age difference matter in Indian marriages?',
            answer: 'Small to moderate age gaps (1-7 years) are common and generally unproblematic. Large gaps (10+ years) can work with maturity and shared expectations but may face social stigma. More important than age: similar life stages, compatible energy levels, aligned family planning timelines.'
        },
        {
            question: 'Should I marry if we have low Kundli match (under 18 Gunas)?',
            answer: 'Low Gun Milan alone should not be a dealbreaker. Many successful marriages have low scores; many failed marriages had 30+ Gunas. If you have good real-world compatibility, strong communication, and family support, proceed. Consult astrologer for Dosha remedies if family insists, but trust your judgment on actual compatibility.'
        },
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Compatibility Assessment', path: '/compatibility-assessment/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Compatibility Assessment' }]} />

                    <div className="py-12 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="text-5xl mb-4">💑</div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                Compatibility Assessment for Marriages
                            </h1>
                            <p className="text-xl text-neutral-600">
                                Understanding traditional and modern approaches to evaluating marriage compatibility
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    What Is Compatibility in Indian Marriages?
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    In arranged marriages, where couples often meet few times before wedding, assessing compatibility becomes critical. Indian families historically relied on astrological matching (Kundli), caste compatibility, and family background checks. Modern couples additionally evaluate personality, education, career goals, and lifestyle preferences.
                                </p>

                                <p className="text-neutral-700 leading-relaxed mb-6">
                                    True compatibility is multi-dimensional. No single system - whether Kundli matching or personality tests - can fully predict marital success. The best approach combines traditional family wisdom with modern psychological insights and, most importantly, direct communication between prospective partners.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">Dimensions of Compatibility</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                                        <h4 className="font-semibold text-primary-900 mb-2">🧠 Intellectual Compatibility</h4>
                                        <ul className="text-sm text-primary-800 space-y-1">
                                            <li>• Similar education levels</li>
                                            <li>• Conversation ease</li>
                                            <li>• Shared interests in books, news, culture</li>
                                            <li>• Respect for each other's intelligence</li>
                                        </ul>
                                    </div>

                                    <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                                        <h4 className="font-semibold text-pink-900 mb-2">❤️ Emotional Compatibility</h4>
                                        <ul className="text-sm text-pink-800 space-y-1">
                                            <li>• Emotional expression styles match</li>
                                            <li>• Empathy and understanding</li>
                                            <li>• Conflict resolution approaches</li>
                                            <li>• Support during stress</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                                        <h4 className="font-semibold text-green-900 mb-2">💰 Financial Compatibility</h4>
                                        <ul className="text-sm text-green-800 space-y-1">
                                            <li>• Spending vs saving philosophy</li>
                                            <li>• Career ambitions alignment</li>
                                            <li>• Financial transparency</li>
                                            <li>• Goals: home ownership, children's education</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                                        <h4 className="font-semibold text-blue-900 mb-2">🏠 Lifestyle Compatibility</h4>
                                        <ul className="text-sm text-blue-800 space-y-1">
                                            <li>• City vs town preferences</li>
                                            <li>• Social life (introverted vs extroverted)</li>
                                            <li>• Hobbies and weekend plans</li>
                                            <li>• Cleanliness and routine standards</li>
                                        </ul>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                                        <h4 className="font-semibold text-purple-900 mb-2">👨‍👩‍👧 Family Compatibility</h4>
                                        <ul className="text-sm text-purple-800 space-y-1">
                                            <li>• Joint vs nuclear family preferences</li>
                                            <li>• In-law relationships approach</li>
                                            <li>• Family event participation</li>
                                            <li>• Parenting philosophies</li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                                        <h4 className="font-semibold text-orange-900 mb-2">🕉️ Values & Spirituality</h4>
                                        <ul className="text-sm text-orange-800 space-y-1">
                                            <li>• Religious observance levels</li>
                                            <li>• Moral and ethical alignment</li>
                                            <li>• Political views</li>
                                            <li>• Life purpose and meaning</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Traditional Kundli Matching Explained
                                </h2>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                                    <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important Context</h4>
                                    <p className="text-sm text-yellow-800">
                                        Kundli matching is a cultural/religious practice with no scientific basis. We explain it for
                                        educational purposes and cultural understanding, not as a recommendation for decision-making.
                                        Use alongside modern compatibility assessment, not as replacement.
                                    </p>
                                </div>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    <strong>Kundli matching</strong> (also called Gun Milan or Ashtakoot matching) evaluates compatibility based on   birth charts (Kundli/horoscope) derived from exact birth time, date, and location. The system assigns points
                                    (Gunas) across 8 dimensions (Kootas), totaling 36 maximum.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">The 8 Kootas (Ashtakoot)</h3>
                                <div className="space-y-4 bg-neutral-50 p-6 rounded-lg">
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">1. Varna - Spiritual Compatibility</h5>
                                            <p className="text-sm text-neutral-600">Ego levels and spiritual inclination</p>
                                        </div>
                                        <span className="font-bold text-primary-600">1 pt</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">2. Vashya - Mutual Attraction</h5>
                                            <p className="text-sm text-neutral-600">Attraction and control dynamics</p>
                                        </div>
                                        <span className="font-bold text-primary-600">2 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">3. Tara - Health & Longevity</h5>
                                            <p className="text-sm text-neutral-600">Birth star compatibility</p>
                                        </div>
                                        <span className="font-bold text-primary-600">3 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">4. Yoni - Physical Compatibility</h5>
                                            <p className="text-sm text-neutral-600">Biological and intimate match</p>
                                        </div>
                                        <span className="font-bold text-primary-600">4 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">5. Graha Maitri - Intellectual Bond</h5>
                                            <p className="text-sm text-neutral-600">Mental affinity and communication</p>
                                        </div>
                                        <span className="font-bold text-primary-600">5 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">6. Gana - Temperament</h5>
                                            <p className="text-sm text-neutral-600">Behavior patterns and nature</p>
                                        </div>
                                        <span className="font-bold text-primary-600">6 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
                                        <div>
                                            <h5 className="font-semibold">7. Bhakoot - Love & Affection</h5>
                                            <p className="text-sm text-neutral-600">Emotional and financial prosperity</p>
                                        </div>
                                        <span className="font-bold text-primary-600">7 pts</span>
                                    </div>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h5 className="font-semibold">8. Nadi - Progeny Health</h5>
                                            <p className="text-sm text-neutral-600">Genetic compatibility for children</p>
                                        </div>
                                        <span className="font-bold text-primary-600">8 pts</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid md:grid-cols-3 gap-4">
                                    <div className="bg-green-100 rounded-lg p-4 text-center">
                                        <p className="text-sm text-green-700 mb-1">Excellent Match</p>
                                        <p className="text-2xl font-bold text-green-800">28-36 Gunas</p>
                                    </div>
                                    <div className="bg-blue-100 rounded-lg p-4 text-center">
                                        <p className="text-sm text-blue-700 mb-1">Good Match</p>
                                        <p className="text-2xl font-bold text-blue-800">18-27 Gunas</p>
                                    </div>
                                    <div className="bg-red-100 rounded-lg p-4 text-center">
                                        <p className="text-sm text-red-700 mb-1">Below Average</p>
                                        <p className="text-2xl font-bold text-red-800">Below 18</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                                    <h5 className="font-semibold text-blue-900 mb-2">💡 Reality Check on Kundli Scores</h5>
                                    <p className="text-sm text-blue-800">
                                        Traditional guidelines say 18+ Gunas are acceptable, but astrologers often approve lower scores
                                        if other planetary factors look favorable. More importantly, countless successful marriages have
                                        low Guna scores, and high-scored matches have failed. Use Kundli matching as ONE input, not the
                                        final decision criterion.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Modern Compatibility Factors That Matter
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-6">
                                    Research on successful marriages globally shows these factors predict long-term happiness:
                                </p>

                                <div className="space-y-4">
                                    <div className="card">
                                        <h4 className="font-semibold mb-2">1. Communication Skills</h4>
                                        <p className="text-sm text-neutral-600">
                                            Ability to express needs, listen actively, discuss difficult topics respectfully. Successful couples
                                            "check in" regularly, share daily experiences, resolve conflicts through dialogue not stonewalling.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">2. Shared Life Vision</h4>
                                        <p className="text-sm text-neutral-600">
                                            Agreement on: where to live, children (how many, when), career priorities, retirement plans, major
                                            purchases, family involvement. Misalignment here causes 70% of major marital conflicts.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">3. Conflict Resolution Style</h4>
                                        <p className="text-sm text-neutral-600">
                                            Do you both fight fair? Avoid personal attacks? Willing to compromise? Apologize when wrong?
                                            Couples who resolve conflicts constructively stay together; those with contempt/criticism patterns divorce.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">4. Emotional Intelligence</h4>
                                        <p className="text-sm text-neutral-600">
                                            Self-awareness, emotional regulation, empathy, social skills. Partners with high EQ navigate stresses
                                            (job loss, health issues, parenting) without blaming each other.
                                        </p>
                                    </div>

                                    <div className="card">
                                        <h4 className="font-semibold mb-2">5. Mutual Respect & Equality</h4>
                                        <p className="text-sm text-neutral-600">
                                            Seeing partner as equal, valuing their opinions, sharing domestic duties, supporting career goals.
                                            Traditional patriarchal dynamics increasingly incompatible with modern educated women's expectations.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
                                    <h5 className="font-semibold text-green-900 mb-2">✅ Questions to Ask Before Marriage</h5>
                                    <ul className="text-sm text-green-800 space-y-1">
                                        <li>• How do you handle anger/stress?</li>
                                        <li>• What are your financial goals for next 5/10 years?</li>
                                        <li>• Do you want children? How many? When?</li>
                                        <li>• How involved will in-laws be in our life?</li>
                                        <li>• What's your expectation for domestic work division?</li>
                                        <li>• How important is your career vs partner career?</li>
                                        <li>• What are your dealbreakers?</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">
                                    Age Difference in Indian Marriages
                                </h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Traditional Indian society preferred the groom to be 3-7 years older than the bride. Modern couples
                                    exhibit wider age gap patterns, including bride-older marriages.
                                </p>

                                <div className="grid md:grid-cols-4 gap-4 my-6">
                                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                                        <h5 className="font-semibold text-green-900 mb-1">0-3 Years</h5>
                                        <p className="text-xs text-green-700">Same generation, peer dynamic, most common, least social stigma</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                                        <h5 className="font-semibold text-blue-900 mb-1">4-7 Years</h5>
                                        <p className="text-xs text-blue-700">Traditional preference, generally smooth, elder provides stability</p>
                                    </div>
                                    <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                                        <h5 className="font-semibold text-yellow-900 mb-1">8-15 Years</h5>
                                        <p className="text-xs text-yellow-700">Significant but manageable, may face family questions, different life stages</p>
                                    </div>
                                    <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                                        <h5 className="font-semibold text-orange-900 mb-1">15+ Years</h5>
                                        <p className="text-xs text-orange-700">Large gap, requires emotional maturity, social scrutiny, health outlook differences</p>
                                    </div>
                                </div>

                                <p className="text-neutral-700 leading-relaxed">
                                    Use our <Link href="/age-difference-calculator/" className="text-primary-600 hover:underline">Age Difference Calculator</Link> to understand your specific age gap and social context.
                                </p>
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

                            <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl p-8 text-center">
                                <h3 className="text-2xl font-display font-bold mb-4">Assess Your Compatibility</h3>
                                <p className="mb-6 text-white/90">
                                    Use our tools to evaluate age difference and understand Kundli matching traditions
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/age-difference-calculator/" className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                                        Age Difference Tool
                                    </Link>
                                    <Link href="/kundli-matching/" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30">
                                        Kundli Matching Guide
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
