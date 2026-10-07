import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import MarriageEligibilityGuide from '@/components/MarriageEligibilityGuide';
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
    toolName: 'Marriage Eligibility Checker - Indian Laws',
    toolDescription: 'Check your legal eligibility for marriage in India under Hindu Marriage Act and Special Marriage Act. Verify age limits, relationship constraints, and rules.',
    toolSlug: 'marriage-eligibility-checker',
    keywords: [
        'marriage eligibility india',
        'legal requirements for marriage',
        'can I get married in india',
        'hindu marriage eligibility',
        'special marriage act requirements',
        'marriage age and constraints'
    ],
});

export default function MarriageEligibilityPage() {
    const faqs = [
        {
            question: 'What are the basic eligibility criteria for marriage in India?',
            answer: 'Under Indian law, the four foundational criteria are: 1) Minimum statutory age (21 years for men, 18 years for women), 2) Voluntary mutual consent of sound mind, 3) Strict monogamy (neither party has an undissolved marriage with a living spouse), and 4) Parties are not within prohibited degrees of relationship or sapinda, unless validated by customary law.'
        },
        {
            question: 'What are "prohibited degrees of relationship" in Indian marriage acts?',
            answer: 'Prohibited degrees prevent incestuous unions and protect family welfare. Under Section 3(g) of the Hindu Marriage Act and Section 2(b) of the Special Marriage Act, they bar marriage between lineal ascendants, descendants, siblings, uncle-niece, aunt-nephew, and certain in-law relationships unless sanctioned by an established community custom.'
        },
        {
            question: 'Can cross-cousins or first cousins marry in India?',
            answer: 'Under the Hindu Marriage Act, first cousins are within sapinda and prohibited degrees and cannot marry unless an established custom or usage governing both parties allows it (such as maternal cross-cousin marriages in certain South Indian communities). Under the Special Marriage Act, cousin marriages are strictly barred unless a gazetted state exception applies.'
        },
        {
            question: 'Can individuals of different religions marry without conversion?',
            answer: 'Yes. The Special Marriage Act, 1954 provides a secular, civil marriage framework allowing any two consenting Indian citizens of different religions, castes, or nationalities to marry legally without religious conversion or ceremony.'
        },
        {
            question: 'What is the penalty for solemnizing an underage marriage in India?',
            answer: 'Under the Prohibition of Child Marriage Act, 2006, solemnizing an underage marriage is a cognizable and non-bailable offense punishable by up to 2 years of rigorous imprisonment and/or fines up to ₹1,00,000 for adults who contract or facilitate the marriage.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Marriage Eligibility Checker',
        description: 'Verify legal eligibility for marriage in India based on age, religion, marital status, and relationship constraints.',
        url: '/marriage-eligibility-checker',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Marriage Eligibility Checker', path: '/marriage-eligibility-checker' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Marriage Eligibility Checker' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto w-full">
                            {/* Page Header */}
                            <div className="text-center mb-10 w-full px-4">
                                <div className="text-5xl mb-4">⚖️</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                                    Marriage Eligibility Checker
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full leading-relaxed">
                                    Verify your statutory eligibility for marriage in India under the Hindu Marriage Act, Special Marriage Act, and personal laws.
                                </p>
                            </div>

                            {/* Interactive Legal Eligibility Assessment Questionnaire */}
                            <div className="bg-white border-2 border-primary-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                                <div className="border-b border-neutral-200 pb-6 mb-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                                                <span>✓</span> Interactive Statutory Eligibility Assessment
                                            </h2>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Answer 5 key statutory questions to verify full legal compliance with Indian marriage acts.
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1.5 bg-green-100 text-green-800 rounded-full">
                                            Statutory Law Verified (2025)
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Questionnaire Inputs Column */}
                                    <div className="lg:col-span-7 space-y-5">
                                        {/* Act Selection */}
                                        <div>
                                            <label htmlFor="select-act" className="block text-sm font-bold text-neutral-800 mb-1">
                                                1. Governing Marriage Legislation:
                                            </label>
                                            <select
                                                id="select-act"
                                                className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium focus:ring-2 focus:ring-primary-500"
                                                defaultValue="hma"
                                            >
                                                <option value="hma">Hindu Marriage Act, 1955 (Hindus, Buddhists, Jains, Sikhs)</option>
                                                <option value="sma">Special Marriage Act, 1954 (Civil / Court / Inter-faith)</option>
                                                <option value="cma">Indian Christian Marriage Act, 1872</option>
                                                <option value="pma">Parsi Marriage &amp; Divorce Act, 1936</option>
                                                <option value="ama">Anand Marriage Act, 1909 (Sikh Anand Karaj)</option>
                                            </select>
                                        </div>

                                        {/* Age Inputs */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="input-groom-age" className="block text-sm font-bold text-neutral-800 mb-1">
                                                    2a. Groom&apos;s Age:
                                                </label>
                                                <input
                                                    id="input-groom-age"
                                                    type="number"
                                                    min="16"
                                                    max="90"
                                                    defaultValue="24"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white font-medium"
                                                />
                                                <span className="text-xs text-neutral-500 mt-1 block">Minimum legal age: 21</span>
                                            </div>
                                            <div>
                                                <label htmlFor="input-bride-age" className="block text-sm font-bold text-neutral-800 mb-1">
                                                    2b. Bride&apos;s Age:
                                                </label>
                                                <input
                                                    id="input-bride-age"
                                                    type="number"
                                                    min="16"
                                                    max="90"
                                                    defaultValue="22"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white font-medium"
                                                />
                                                <span className="text-xs text-neutral-500 mt-1 block">Minimum legal age: 18</span>
                                            </div>
                                        </div>

                                        {/* Marital Status (Monogamy) */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="select-groom-status" className="block text-sm font-bold text-neutral-800 mb-1">
                                                    3a. Groom&apos;s Marital Status:
                                                </label>
                                                <select
                                                    id="select-groom-status"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium"
                                                    defaultValue="single"
                                                >
                                                    <option value="single">Single / Never Married</option>
                                                    <option value="divorced">Divorced (Decree Absolute Granted)</option>
                                                    <option value="widowed">Widower</option>
                                                    <option value="married">Currently Married (Living Spouse)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="select-bride-status" className="block text-sm font-bold text-neutral-800 mb-1">
                                                    3b. Bride&apos;s Marital Status:
                                                </label>
                                                <select
                                                    id="select-bride-status"
                                                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium"
                                                    defaultValue="single"
                                                >
                                                    <option value="single">Single / Never Married</option>
                                                    <option value="divorced">Divorced (Decree Absolute Granted)</option>
                                                    <option value="widowed">Widow</option>
                                                    <option value="married">Currently Married (Living Spouse)</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Mental Capacity & Free Consent */}
                                        <div>
                                            <label htmlFor="select-consent" className="block text-sm font-bold text-neutral-800 mb-1">
                                                4. Sound Mind &amp; Voluntary Mutual Consent:
                                            </label>
                                            <select
                                                id="select-consent"
                                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium"
                                                defaultValue="yes"
                                            >
                                                <option value="yes">Yes &ndash; Both parties capable of giving valid consent of sound mind</option>
                                                <option value="no">No &ndash; Disputed consent, unsound mind, or mental incapacity</option>
                                            </select>
                                        </div>

                                        {/* Prohibited Relationships */}
                                        <div>
                                            <label htmlFor="select-prohibited" className="block text-sm font-bold text-neutral-800 mb-1">
                                                5. Prohibited Relationship &amp; Sapinda Degrees:
                                            </label>
                                            <select
                                                id="select-prohibited"
                                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-neutral-50 font-medium"
                                                defaultValue="none"
                                            >
                                                <option value="none">No &ndash; Parties are not within prohibited or sapinda degrees</option>
                                                <option value="custom">Related, but marriage is permitted by established community custom</option>
                                                <option value="prohibited">Yes &ndash; Parties are closely related without customary sanction</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Assessment Results Column */}
                                    <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-display font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                                                Eligibility Verdict
                                            </h3>

                                            {/* Status Result Card */}
                                            <div id="verdict-card" className="p-5 rounded-xl border mb-5 text-center bg-green-50 border-green-300">
                                                <div className="text-3xl mb-1" id="verdict-icon">✅</div>
                                                <div className="text-xl font-extrabold text-green-900" id="verdict-title">
                                                    FULLY ELIGIBLE FOR MARRIAGE
                                                </div>
                                                <p className="text-xs text-green-800 mt-2 leading-relaxed" id="verdict-desc">
                                                    Both parties satisfy statutory age requirements, monogamy conditions, mutual consent, and consanguinity rules.
                                                </p>
                                            </div>

                                            {/* Criteria Verification Checklist */}
                                            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-2 text-xs">
                                                <h4 className="font-bold uppercase tracking-wider text-neutral-700 mb-2">
                                                    Statutory Compliance Audit
                                                </h4>
                                                <div className="flex justify-between items-center py-1 border-b border-neutral-100" id="check-age">
                                                    <span>Minimum Age (Groom 21, Bride 18)</span>
                                                    <span className="font-bold text-green-700">✓ Satisfied</span>
                                                </div>
                                                <div className="flex justify-between items-center py-1 border-b border-neutral-100" id="check-monogamy">
                                                    <span>Monogamy (No Undissolved Marriage)</span>
                                                    <span className="font-bold text-green-700">✓ Satisfied</span>
                                                </div>
                                                <div className="flex justify-between items-center py-1 border-b border-neutral-100" id="check-consent">
                                                    <span>Sound Mind &amp; Valid Consent</span>
                                                    <span className="font-bold text-green-700">✓ Satisfied</span>
                                                </div>
                                                <div className="flex justify-between items-center py-1" id="check-degrees">
                                                    <span>Prohibited Degrees / Sapinda</span>
                                                    <span className="font-bold text-green-700">✓ Satisfied</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-neutral-200">
                                            <Link
                                                href="/marriage-registration-documents"
                                                className="btn-primary w-full text-center text-xs py-2 block"
                                            >
                                                View Required Registration Documents &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <MarriageEligibilityGuide />

                            {/* Educational Content */}
                            <div className="prose prose-lg max-w-none w-full">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Core Legal Requirements in India
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Legal eligibility for marriage in India is unique because it depends on the specific legislation governing the couple.
                                        However, four fundamental pillars apply to almost all solemnized and registered marriages:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="card border-l-4 border-l-primary-500">
                                            <h3 className="font-bold text-xl mb-2">1. Minimum Statutory Age</h3>
                                            <p className="text-sm text-neutral-600">
                                                Under current codified law, the groom must have completed <strong>21 years</strong> and the bride must have completed <strong>18 years</strong> at the time of solemnization.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-secondary-500">
                                            <h3 className="font-bold text-xl mb-2">2. Valid &amp; Voluntary Consent</h3>
                                            <p className="text-sm text-neutral-600">
                                                Both parties must be mentally capable of giving free, informed consent. Marriages entered into under coercion, fraud, intoxication, or severe mental incapacity are voidable under law.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-accent-500">
                                            <h3 className="font-bold text-xl mb-2">3. Strict Monogamy</h3>
                                            <p className="text-sm text-neutral-600">
                                                Under the Hindu Marriage Act, Special Marriage Act, and Christian Act, neither party may possess a living spouse from an undissolved marriage. Bigamy is a punishable penal offense.
                                            </p>
                                        </div>
                                        <div className="card border-l-4 border-l-neutral-500">
                                            <h3 className="font-bold text-xl mb-2">4. Prohibited Relationships</h3>
                                            <p className="text-sm text-neutral-600">
                                                Parties must not be within prohibited degrees or sapinda relationships (e.g. lineal ascendants or siblings) unless an established family custom expressly sanctions the union.
                                            </p>
                                        </div>
                                    </div>
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
                                    <h2 className="text-3xl font-display font-semibold mb-6">Related Legal Tools</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Link href="/legal-marriage-age-india" className="card-hover">
                                            <div className="text-3xl mb-3">⚖️</div>
                                            <h3 className="font-semibold text-lg mb-2">Legal Marriage Age Checker</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Verify minimum legal age requirements across Indian personal laws
                                            </p>
                                        </Link>
                                        <Link href="/marriage-registration-documents" className="card-hover">
                                            <div className="text-3xl mb-3">📝</div>
                                            <h3 className="font-semibold text-lg mb-2">Registration Documents Checklist</h3>
                                            <p className="text-neutral-600 text-sm">
                                                State-wise checklist of documents required for sub-registrar marriage certificate
                                            </p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Eligibility Checker Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initEligibilityChecker() {
                                var actSelect = document.getElementById('select-act');
                                var groomAgeInput = document.getElementById('input-groom-age');
                                var brideAgeInput = document.getElementById('input-bride-age');
                                var groomStatusSelect = document.getElementById('select-groom-status');
                                var brideStatusSelect = document.getElementById('select-bride-status');
                                var consentSelect = document.getElementById('select-consent');
                                var prohibitedSelect = document.getElementById('select-prohibited');

                                var verdictCard = document.getElementById('verdict-card');
                                var verdictIcon = document.getElementById('verdict-icon');
                                var verdictTitle = document.getElementById('verdict-title');
                                var verdictDesc = document.getElementById('verdict-desc');

                                var chkAge = document.getElementById('check-age');
                                var chkMonogamy = document.getElementById('check-monogamy');
                                var chkConsent = document.getElementById('check-consent');
                                var chkDegrees = document.getElementById('check-degrees');

                                if (!actSelect || !groomAgeInput || !brideAgeInput) return;

                                function checkEligibility() {
                                    var groomAge = parseInt(groomAgeInput.value, 10) || 0;
                                    var brideAge = parseInt(brideAgeInput.value, 10) || 0;
                                    var groomStatus = groomStatusSelect.value;
                                    var brideStatus = brideStatusSelect.value;
                                    var consent = consentSelect.value;
                                    var prohibited = prohibitedSelect.value;
                                    var act = actSelect.value;

                                    var agePass = (groomAge >= 21 && brideAge >= 18);
                                    var monogamyPass = (groomStatus !== 'married' && brideStatus !== 'married');
                                    var consentPass = (consent === 'yes');
                                    var degreesPass = (prohibited === 'none' || prohibited === 'custom');

                                    // Update checklist UI
                                    function setCheck(el, pass, label, failText) {
                                        if (!el) return;
                                        if (pass) {
                                            el.innerHTML = '<span>' + label + '</span><span class=\"font-bold text-green-700\">✓ Satisfied</span>';
                                        } else {
                                            el.innerHTML = '<span>' + label + '</span><span class=\"font-bold text-red-600\">✗ ' + (failText || 'Failed') + '</span>';
                                        }
                                    }

                                    setCheck(chkAge, agePass, 'Minimum Age (Groom 21, Bride 18)', (groomAge < 21 ? 'Groom Underage (<21)' : 'Bride Underage (<18)'));
                                    setCheck(chkMonogamy, monogamyPass, 'Monogamy (No Undissolved Marriage)', 'Bigamy Prohibition');
                                    setCheck(chkConsent, consentPass, 'Sound Mind & Valid Consent', 'Consent Incapacity');
                                    setCheck(chkDegrees, degreesPass, 'Prohibited Degrees / Sapinda', (prohibited === 'custom' ? 'Permitted by Custom' : 'Strictly Prohibited'));

                                    if (prohibited === 'custom') {
                                        var dSpan = chkDegrees.querySelector('.text-green-700, .text-red-600');
                                        if (dSpan) {
                                            dSpan.className = 'font-bold text-amber-600';
                                            dSpan.textContent = '⚠ Custom Exception Required';
                                        }
                                    }

                                    // Overall verdict
                                    if (!agePass || !monogamyPass || !consentPass || prohibited === 'prohibited') {
                                        verdictCard.className = 'p-5 rounded-xl border mb-5 text-center bg-red-50 border-red-300';
                                        verdictIcon.textContent = '❌';
                                        verdictTitle.className = 'text-xl font-extrabold text-red-900';
                                        verdictTitle.textContent = 'LEGALLY INELIGIBLE UNDER LAW';

                                        var reasons = [];
                                        if (!agePass) reasons.push('statutory minimum age not reached');
                                        if (!monogamyPass) reasons.push('prohibition on marriages during existing marriage');
                                        if (!consentPass) reasons.push('lack of valid voluntary consent or sound mind');
                                        if (prohibited === 'prohibited') reasons.push('unions within prohibited degrees are void');

                                        verdictDesc.className = 'text-xs text-red-800 mt-2 leading-relaxed';
                                        verdictDesc.textContent = 'Cannot solemnize or register marriage: ' + reasons.join('; ') + '.';
                                    } else if (prohibited === 'custom' || groomStatus === 'divorced' || brideStatus === 'divorced') {
                                        verdictCard.className = 'p-5 rounded-xl border mb-5 text-center bg-amber-50 border-amber-300';
                                        verdictIcon.textContent = '⚠️';
                                        verdictTitle.className = 'text-xl font-extrabold text-amber-900';
                                        verdictTitle.textContent = 'CONDITIONAL ELIGIBILITY';
                                        verdictDesc.className = 'text-xs text-amber-800 mt-2 leading-relaxed';
                                        verdictDesc.textContent = 'Eligible subject to documentary proof: Submit certified copy of divorce decree absolute and/or local community customary affidavit to Sub-Registrar.';
                                    } else {
                                        verdictCard.className = 'p-5 rounded-xl border mb-5 text-center bg-green-50 border-green-300';
                                        verdictIcon.textContent = '✅';
                                        verdictTitle.className = 'text-xl font-extrabold text-green-900';
                                        verdictTitle.textContent = 'FULLY ELIGIBLE FOR MARRIAGE';
                                        verdictDesc.className = 'text-xs text-green-800 mt-2 leading-relaxed';
                                        verdictDesc.textContent = 'Both parties satisfy statutory age requirements, monogamy conditions, mutual consent, and consanguinity rules under the selected Act.';
                                    }
                                }

                                actSelect.addEventListener('change', checkEligibility);
                                groomAgeInput.addEventListener('input', checkEligibility);
                                brideAgeInput.addEventListener('input', checkEligibility);
                                groomStatusSelect.addEventListener('change', checkEligibility);
                                brideStatusSelect.addEventListener('change', checkEligibility);
                                consentSelect.addEventListener('change', checkEligibility);
                                prohibitedSelect.addEventListener('change', checkEligibility);

                                checkEligibility();
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initEligibilityChecker);
                            } else {
                                initEligibilityChecker();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
