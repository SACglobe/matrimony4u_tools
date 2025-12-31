import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AgeDifferenceCalculator from '@/components/tools/AgeDifferenceCalculator';
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
    toolName: 'Marriage Age Difference Calculator',
    toolDescription: 'Calculate age gap between partners and understand social context for age differences in Indian marriages. Get insights on compatibility and cultural acceptance.',
    toolSlug: 'age-difference-calculator',
    keywords: [
        'age difference calculator marriage',
        'age gap calculator',
        'marriage compatibility age',
        'age difference in indian marriages',
        'partner age calculator',
        'marriage age gap norms india'
    ],
});

export default function AgeDifferencePage() {
    const faqs = [
        {
            question: 'What is the ideal age difference between husband and wife in India?',
            answer: 'There is no single "ideal" age difference. Studies show that couples with 1-5 years age gap report highest satisfaction rates in India. Traditionally, husbands are 3-7 years older, but modern couples increasingly have smaller gaps or even age-equal partnerships. What matters most is compatibility, not a specific number.'
        },
        {
            question: 'Is a 10-year age gap too much for marriage?',
            answer: 'A 10-year gap is not uncommon in India and can work well if both partners are mature adults with aligned life goals. However, it may bring different challenges - life stage mismatches, health considerations, and generational differences in values. Success depends on mutual understanding, communication, and family support.'
        },
        {
            question: 'Does age difference affect marriage success?',
            answer: 'Research shows age difference is less important than factors like emotional maturity, shared values, communication quality, and conflict resolution skills. Small to moderate age gaps (1-7 years) have slightly higher reported satisfaction in Indian context, but many couples with larger gaps thrive. The relationship quality matters more than the number.'
        },
        {
            question: 'What if the wife is older than the husband?',
            answer: 'While less common in traditional Indian society, woman-older marriages are increasingly accepted, especially in urban areas and love marriages. These relationships can be very successful. They may face some social questions initially, but most families eventually accept if the couple is happy and compatible.'
        },
        {
            question: 'How does age difference impact having children?',
            answer: 'Large age gaps can affect family planning timelines and parenting energy levels. Women\'s fertility declines after 35, while men can father children later. Couples with significant age gaps should discuss family planning early. While important to consider, many couples successfully navigate this with medical support and planning.'
        },
        {
            question: 'Do arranged marriages have larger age gaps than love marriages?',
            answer: 'Yes, statistically. Arranged marriages in India average 4-7 years age difference (man older), while love marriages average 1-3 years. This reflects traditional expectations in arranged setups versus self-selection based on compatibility in love marriages. Both models can be equally successful.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Marriage Age Difference Calculator',
        description: 'Calculate the exact age difference between marriage partners and understand social and cultural context for age gaps in Indian marriages.',
        url: '/age-difference-calculator/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Age Difference Calculator', path: '/age-difference-calculator/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Age Difference Calculator' }]} />

                    <div className="py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="text-5xl mb-4">💑</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Marriage Age Difference Calculator
                                </h1>
                                <p className="text-xl text-neutral-600">
                                    Calculate the age gap between partners and understand social context for age differences in Indian marriages
                                </p>
                            </div>

                            {/* Calculator */}
                            <AgeDifferenceCalculator />

                            {/* Educational Content */}
                            <div className="mt-16 prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Age Differences in Indian Marriages
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Age difference between spouses has been a topic of discussion in Indian matrimony for generations.
                                        Traditional norms often favored the husband being 3-7 years older than the wife, rooted in patriarchal
                                        expectations of male maturity, financial stability, and authority. However, modern Indian society is
                                        witnessing a significant shift in these dynamics.
                                    </p>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        According to recent data from the National Family Health Survey (NFHS), the average age difference
                                        in Indian marriages is <strong>4.6 years</strong> (husband older), down from 5.8 years two decades ago.
                                        Urban educated couples show even smaller gaps, averaging <strong>2-3 years</strong>. This trend reflects
                                        changing social attitudes, higher female education, and the rise of love marriages over arranged unions.
                                    </p>

                                    <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                                        <h3 className="font-semibold text-primary-900 text-xl mb-3">Age Gap Distribution in India</h3>
                                        <div className="space-y-2 text-primary-800 text-sm">
                                            <div><strong>Same age (0-1 years):</strong> 18% of marriages (mostly love marriages)</div>
                                            <div><strong>Small gap (2-4 years):</strong> 35% of marriages (most common)</div>
                                            <div><strong>Moderate gap (5-7 years):</strong> 28% of marriages (traditional preference)</div>
                                            <div><strong>Significant gap (8-15 years):</strong> 14% of marriages</div>
                                            <div><strong>Large gap (15+ years):</strong> 5% of marriages (often second marriages)</div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Research on Age Differences and Marriage Success
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">What Studies Tell Us</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Multiple studies have examined the relationship between spousal age gaps and marital satisfaction:
                                    </p>

                                    <ul className="list-disc list-inside space-y-3 text-neutral-700 mb-6">
                                        <li>
                                            <strong>Emory University study (2014):</strong> Found that couples with 1-5 years age difference
                                            had the lowest divorce rates, while gaps of 10+ years showed higher separation rates. However,
                                            correlation does not equal causation.
                                        </li>
                                        <li>
                                            <strong>Journal of Population Economics (2017):</strong> Analysis of Australian couples showed
                                            that 1-year age gaps had 3% divorce probability within 5 years, while 20-year gaps had 95% probability.
                                            But personality compatibility and communication were stronger predictors than age alone.
                                        </li>
                                        <li>
                                            <strong>Indian Council of Social Science Research:</strong> Study of 5,000 Indian couples found
                                            that age difference mattered less than economic stability, educational compatibility, and family support
                                            in determining marriage success.
                                        </li>
                                    </ul>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                                        <h4 className="font-semibold text-yellow-900 mb-2">Important Context</h4>
                                        <p className="text-sm text-yellow-800">
                                            While statistics are useful, they don't determine individual outcomes. Many couples with large age gaps
                                            have thriving marriages, while some with small gaps struggle. Age is just one factor among many - shared
                                            values, emotional intelligence, and mutual respect matter far more.
                                        </p>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Cultural Perspectives on Age Differences
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Traditional Indian Norms</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Traditional Indian society preferred the husband being older based on several cultural beliefs:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Financial stability:</strong> Older men were seen as more established financially</li>
                                        <li><strong>Life experience:</strong> Age gap presumed greater wisdom and decision-making ability</li>
                                        <li><strong>Patriarchal structure:</strong> Older husband maintained traditional authority dynamics</li>
                                        <li><strong>Fertility timeline:</strong> Younger wives aligned with longer childbearing window</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Modern Changing Attitudes</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Contemporary India is witnessing a paradigm shift:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Education parity:</strong> Women now pursue higher education and careers, reducing age gap justifications</li>
                                        <li><strong>Love marriages:</strong> Self-selection based on compatibility, not age-based criteria</li>
                                        <li><strong>Woman-older relationships:</strong> Increasing acceptance, especially in metros like Mumbai, Delhi, Bangalore</li>
                                        <li><strong>Second marriages:</strong> More acceptance of diverse age combinations in remarriages</li>
                                        <li><strong>Delayed marriages:</strong> Both genders marrying later (average age 27-28), reducing age gap significance</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Practical Considerations for Different Age Gaps
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Small Gap (0-3 years)</h3>
                                    <div className="bg-green-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-semibold text-green-900 mb-3">Advantages:</h4>
                                        <ul className="space-y-1 text-sm text-green-800">
                                            <li>✓ Shared generational references and cultural touchstones</li>
                                            <li>✓ Similar life stages and energy levels</li>
                                            <li>✓ Parallel career trajectories and retirement planning</li>
                                            <li>✓ Minimal social scrutiny or family concerns</li>
                                        </ul>
                                        <h4 className="font-semibold text-green-900 mt-4 mb-3">Challenges:</h4>
                                        <ul className="space-y-1 text-sm text-green-800">
                                            <li>• Both may be equally inexperienced in life matters</li>
                                            <li>• Career competition or comparison might arise</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">Moderate Gap (4-7 years)</h3>
                                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-semibold text-blue-900 mb-3">Advantages:</h4>
                                        <ul className="space-y-1 text-sm text-blue-800">
                                            <li>✓ Often brings balance of experience and fresh perspective</li>
                                            <li>✓ Older partner may be more financially established</li>
                                            <li>✓ Widely accepted in Indian society across communities</li>
                                            <li>✓ Minimal age-related health discrepancy</li>
                                        </ul>
                                        <h4 className="font-semibold text-blue-900 mt-4 mb-3">Challenges:</h4>
                                        <ul className="space-y-1 text-sm text-blue-800">
                                            <li>• Slight differences in pop culture references</li>
                                            <li>• May have different friendship circles initially</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">Significant Gap (8-15 years)</h3>
                                    <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-semibold text-yellow-900 mb-3">Advantages:</h4>
                                        <ul className="space-y-1 text-sm text-yellow-800">
                                            <li>✓ Clear mentorship and guidance dynamic if desired</li>
                                            <li>✓ Older partner likely well-established professionally</li>
                                            <li>✓ Different perspectives can enrich relationship</li>
                                        </ul>
                                        <h4 className="font-semibold text-yellow-900 mt-4 mb-3">Challenges:</h4>
                                        <ul className="space-y-1 text-sm text-yellow-800">
                                            <li>• Generational value differences may require navigation</li>
                                            <li>• Different social circles and interest areas</li>
                                            <li>• Family planning timeline considerations</li>
                                            <li>• May face social questions from extended family</li>
                                            <li>• Health and aging considerations become relevant earlier</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">Large Gap (15+ years)</h3>
                                    <div className="bg-orange-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-semibold text-orange-900 mb-3">Important Considerations:</h4>
                                        <ul className="space-y-2 text-sm text-orange-800">
                                            <li><strong>Clear communication essential:</strong> Discuss life goals, retirement, health, children openly</li>
                                            <li><strong>Social acceptance:</strong> Prepare for questions and potential resistance from family/society</li>
                                            <li><strong>Life stage alignment:</strong> Ensure you're seeking similar things (career, family, lifestyle)</li>
                                            <li><strong>Long-term planning:</strong> Consider health, caregiving, and financial implications</li>
                                            <li><strong>Family planning:</strong> Critical to align on children, timing, and fertility realities</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Making Age Differences Work
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Regardless of age gap size, successful marriages share common traits:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">1. Open Communication</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Discuss expectations, life goals, concerns, and values honestly. Don't assume compatibility - verify it.
                                            </p>
                                        </div>
                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">2. Mutual Respect</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Value each other's perspectives regardless of age. Neither age nor experience guarantees wisdom.
                                            </p>
                                        </div>
                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">3. Shared Values</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Align on core issues: family priorities, financial approach, career ambitions, and lifestyle preferences.
                                            </p>
                                        </div>
                                        <div className="card">
                                            <h3 className="font-semibold text-xl mb-3">4. Family Support</h3>
                                            <p className="text-neutral-600 text-sm">
                                                In Indian context, family acceptance matters. Involve families early, address concerns patiently.
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
                                        <Link href="/legal-marriage-age-india/" className="card-hover">
                                            <div className="text-3xl mb-3">⚖️</div>
                                            <h3 className="font-semibold text-lg mb-2">Legal Marriage Age Checker</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Verify if you meet the legal minimum age for marriage in India
                                            </p>
                                        </Link>
                                        <Link href="/marriage-eligibility-checker/" className="card-hover">
                                            <div className="text-3xl mb-3">✓</div>
                                            <h3 className="font-semibold text-lg mb-2">Marriage Eligibility Checker</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Check comprehensive marriage eligibility under different Indian laws
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
