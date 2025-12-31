import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LegalAgeCalculator from '@/components/tools/LegalAgeCalculator';
import { SITE_CONFIG } from '@/lib/config';
import {
    generateToolMetadata,
    generateToolSchema,
    generateFAQSchema,
    generateBreadcrumbSchema,
    JsonLd
} from '@/lib/seo';

export const metadata = generateToolMetadata({
    toolName: 'Legal Marriage Age Checker for India',
    toolDescription: 'Free tool to verify if you meet the legal minimum age requirement to get married in India. Check compliance with Prohibition of Child Marriage Act, 2006 and Hindu Marriage Act, 1955.',
    toolSlug: 'legal-marriage-age-india',
    keywords: [
        'legal marriage age india',
        'minimum age for marriage',
        'marriage age calculator',
        'child marriage act',
        'legal age to marry',
        'hindu marriage act age',
        'marriage eligibility india'
    ],
});

export default function LegalMarriageAgePage() {
    // FAQs for schema
    const faqs = [
        {
            question: 'What is the legal minimum age for marriage in India?',
            answer: 'Under the Prohibition of Child Marriage Act, 2006, the minimum legal age for marriage in India is 21 years for men and 18 years for women. This applies across all religions and states in India.'
        },
        {
            question: 'Can I get married before turning 18 (for women) or 21 (for men)?',
            answer: 'No. Marrying below the legal minimum age is a criminal offense under the Prohibition of Child Marriage Act, 2006. The marriage can be declared void, and those who solemnize, promote, or permit child marriages can face imprisonment and fines.'
        },
        {
            question: 'Do different marriage laws in India have different age requirements?',
            answer: 'The Prohibition of Child Marriage Act, 2006 sets a uniform minimum age (21 for men, 18 for women) that supersedes all personal marriage laws including the Hindu Marriage Act, Special Marriage Act, and others. All marriages in India must comply with this minimum age.'
        },
        {
            question: 'What happens if I get married below the legal age?',
            answer: 'Child marriages are voidable at the option of the minor party and can be annulled. The person who performs the marriage ceremony, parents/guardians who permit it, and anyone who promotes child marriage can face up to 2 years imprisonment and/or a fine of up to ₹1 lakh.'
        },
        {
            question: 'Is there any exception to the minimum marriage age in India?',
            answer: 'No. There are no exceptions. The law applies uniformly across all religions, castes, and communities. Customs or traditions allowing child marriage have no legal validity and are punishable offenses.'
        },
        {
            question: 'Has the legal marriage age changed recently?',
            answer: 'As of 2024, the minimum age remains 21 for men and 18 for women. However, there have been proposals to make the minimum age 21 for both genders. Always check current laws before planning your marriage.'
        },
    ];

    // Schemas
    const toolSchema = generateToolSchema({
        name: 'Legal Marriage Age Checker - India',
        description: 'Check if you meet the legal minimum age requirement for marriage in India under current Indian law.',
        url: '/legal-marriage-age-india/',
        applicationCategory: 'UtilityApplication',
    });

    const faqSchema = generateFAQSchema(faqs);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Legal Marriage Age Checker', path: '/legal-marriage-age-india/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Legal Marriage Age Checker' }]} />

                    <div className="py-12 w-full">
                        {/* Page Header */}
                        <div className="max-w-4xl mx-auto mb-12 w-full">
                            <div className="text-center mb-8 w-full px-4">
                                <div className="text-5xl mb-4">⚖️</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Legal Marriage Age Checker for India
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                    Verify if you meet the minimum legal age requirement to get married under Indian law
                                </p>
                            </div>

                            {/* Calculator */}
                            <LegalAgeCalculator />
                        </div>

                        {/* Educational Content */}
                        <div className="max-w-4xl mx-auto prose prose-lg w-full">
                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">Understanding Legal Marriage Age in India</h2>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    The <strong>Prohibition of Child Marriage Act, 2006</strong> is the primary law governing minimum
                                    marriage age in India. This Act replaced the earlier Child Marriage Restraint Act, 1929 (Sarda Act)
                                    and applies uniformly across all Indian citizens, regardless of religion, caste, or state of residence.
                                </p>

                                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-6">
                                    <h3 className="font-semibold text-primary-900 text-xl mb-3">Current Legal Requirements</h3>
                                    <ul className="space-y-2 text-primary-800">
                                        <li><strong>Men:</strong> Must be at least 21 years old</li>
                                        <li><strong>Women:</strong> Must be at least 18 years old</li>
                                        <li><strong>Applies to:</strong> All religions and communities in India</li>
                                        <li><strong>Exceptions:</strong> None - the law is absolute</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold mt-8 mb-4">Why Does India Have Minimum Marriage Age Laws?</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    India's marriage age laws exist to protect children from the harmful physical, psychological, and
                                    social consequences of early marriage. Child marriage has been linked to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                    <li><strong>Health Risks:</strong> Early pregnancy and childbirth complications for young mothers</li>
                                    <li><strong>Educational Loss:</strong> Termination of schooling, especially for girls</li>
                                    <li><strong>Economic Impacts:</strong> Limited career opportunities and financial dependence</li>
                                    <li><strong>Social Issues:</strong> Domestic violence, exploitation, and lack of agency</li>
                                    <li><strong>Psychological Harm:</strong> Trauma, mental health issues,and loss of childhood</li>
                                </ul>

                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    By setting 18 and 21 as minimum ages, the law aims to ensure that individuals enter marriage with
                                    sufficient physical maturity, education, and decision-making capacity.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">Legal Framework: Key Acts and Provisions</h2>

                                <h3 className="text-2xl font-semibold mb-4">1. Prohibition of Child Marriage Act, 2006</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    This is the <strong>primary law</strong> that defines child marriage and prescribes penalties.
                                </p>
                                <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                                    <h4 className="font-semibold mb-3">Key Provisions:</h4>
                                    <ul className="space-y-2 text-sm text-neutral-700">
                                        <li><strong>Section 2(a):</strong> Defines "child" as a person who, if male, has not completed 21 years, and if female, has not completed 18 years</li>
                                        <li><strong>Section 3:</strong> Child marriages are voidable at the option of the contracting party who was a child</li>
                                        <li><strong>Section 9:</strong> Penalties for male adult marrying a child (up to 2 years imprisonment)</li>
                                        <li><strong>Section 10:</strong> Penalties for solemnizing child marriage (up to 2 years + fine up to ₹1 lakh)</li>
                                        <li><strong>Section 11:</strong> Penalties for promoting or permitting child marriage</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">2. Hindu Marriage Act, 1955</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Applies to Hindus, Buddhists, Jains, and Sikhs. Section 5(iii) states that at the time of marriage,
                                    the bridegroom must have completed 21 years and the bride must have completed 18 years. While this Act
                                    predates the 2006 Act, both work in conjunction.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">3. Special Marriage Act, 1954</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    This secular law (for inter-faith or civil marriages) also requires the same minimum ages: 21 for men
                                    and 18 for women (Section 4(c)).
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">4. Other Personal Laws</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Muslim personal law, Christian marriage laws (Indian Christian Marriage Act, 1872), and Parsi Marriage
                                    and Divorce Act, 1936 all must comply with the minimum ages set by the Prohibition of Child Marriage Act, 2006.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">Consequences of Violating Marriage Age Laws</h2>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                                    <h3 className="font-semibold text-red-900 text-xl mb-3">⚠️ Legal Penalties</h3>
                                    <p className="text-red-800 mb-3">
                                        Child marriage is a <strong>punishable offense</strong> under Indian law. The following can face
                                        legal consequences:
                                    </p>
                                    <ul className="space-y-2 text-red-800">
                                        <li><strong>Male adult contracting party:</strong> Up to 2 years rigorous imprisonment + fine</li>
                                        <li><strong>Person performing/conducting/directing the ceremony:</strong> Up to 2 years + fine up to ₹1 lakh</li>
                                        <li><strong>Parents/guardians promoting the marriage:</strong> Up to 2 years + fine up to ₹1 lakh</li>
                                        <li><strong>Those abetting child marriage:</strong> Imprisonment and fines</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold mb-4">Marriage Status</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    A child marriage is not automatically void (null), but it is <strong>voidable</strong>. This means:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                    <li>The marriage exists until annulled by a court</li>
                                    <li>The party who was a child at marriage can file a petition to declare it void</li>
                                    <li>The petition can be filed up to 2 years after attaining majority (i.e., by age 20 for women, 23 for men)</li>
                                    <li>If forced into marriage, the petition can be filed anytime</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-4">Social and Personal Consequences</h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Beyond legal penalties, child marriage leads to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                                    <li>Disruption of education and career prospects</li>
                                    <li>Health complications from early pregnancy</li>
                                    <li>Higher risk of domestic violence and exploitation</li>
                                    <li>Social stigma and legal complications</li>
                                    <li>Limited decision-making autonomy</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">How to Use This Calculator</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    Our Legal Marriage Age Checker is designed to help you quickly verify legal eligibility:
                                </p>
                                <ol className="list-decimal list-inside space-y-3 text-neutral-700 mb-6">
                                    <li><strong>Enter your date of birth:</strong> Use the date picker to select your birth date</li>
                                    <li><strong>Select your gender:</strong> Choose Male or Female (legal requirements differ)</li>
                                    <li><strong>Click "Check Eligibility":</strong> Instantly see if you meet the legal age requirement</li>
                                </ol>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                                    <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Important Disclaimer</h3>
                                    <p className="text-sm text-yellow-800">
                                        This calculator is for <strong>informational purposes only</strong>. While we ensure accuracy,
                                        marriage laws can change. Always verify your eligibility with local marriage registration authorities
                                        or consult a family law attorney before proceeding with marriage plans.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-display font-semibold mb-6">After Confirming Legal Age: Next Steps</h2>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    If you've confirmed you meet the legal age requirement, here are your next steps:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 my-8">
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">1. Choose Marriage Act</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Decide whether to register under Hindu Marriage Act, Special Marriage Act, or your community's
                                            personal law based on your religion and preferences.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">2. Gather Documents</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Collect age proof (birth certificate, school certificate), identity proof, address proof, and
                                            photographs. Requirements vary by state.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">3. State Registration</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Marriage registration is mandatory in most states. Check your state's specific requirements,
                                            fees (usually ₹100-₹500), and process timeline.
                                        </p>
                                    </div>
                                    <div className="card">
                                        <h3 className="font-semibold text-xl mb-3">4. Plan Your Wedding</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Use our budget calculator, guest list planner, and auspicious date finder to plan your perfect
                                            Indian wedding celebration.
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
                                    <div className="card-hover">
                                        <div className="text-3xl mb-3">📝</div>
                                        <h3 className="font-semibold text-lg mb-2">Marriage Registration Documents</h3>
                                        <p className="text-neutral-600 text-sm">
                                            State-wise checklist of documents required for marriage registration
                                        </p>
                                    </div>
                                    <div className="card-hover">
                                        <div className="text-3xl mb-3">💑</div>
                                        <h3 className="font-semibold text-lg mb-2">Age Difference Calculator</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Calculate age gap between partners and understand social norms
                                        </p>
                                    </div>
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
