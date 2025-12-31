import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import DocumentsChecklist from '@/components/tools/DocumentsChecklist';
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
    toolName: 'Marriage Registration Documents Checklist - State Wise India',
    toolDescription: 'Complete checklist of documents required for marriage registration in India. State-wise requirements for Hindu Marriage Act, Special Marriage Act, Muslim and Christian marriages.',
    toolSlug: 'marriage-registration-documents',
    keywords: [
        'marriage registration documents india',
        'documents for marriage registration',
        'marriage certificate documents',
        'hindu marriage registration documents',
        'special marriage act documents',
        'marriage registration checklist',
        'state wise marriage documents'
    ],
});

export default function MarriageDocumentsPage() {
    const faqs = [
        {
            question: 'Is marriage registration mandatory in India?',
            answer: 'Yes, marriage registration is mandatory in most Indian states under various state-specific laws. Even if not legally mandatory everywhere, registration provides legal proof of marriage, enables easier documentation for visas, property rights, and other legal matters. It is highly recommended regardless of state requirements.'
        },
        {
            question: 'What is the difference between Hindu Marriage Act and Special Marriage Act?',
            answer: 'Hindu Marriage Act applies to Hindus, Buddhists, Jains, and Sikhs. Special Marriage Act is a secular law for inter-faith marriages or those who prefer civil registration. Special Marriage Act requires 30-day notice period and allows objections, while Hindu Marriage Act has simpler procedures. Both provide equal legal validity.'
        },
        {
            question: 'How long does marriage registration take in India?',
            answer: 'Timeline varies by state and act. Under Hindu Marriage Act, if all documents are in order, registration can be completed in 1-15 days. Special Marriage Act takes minimum 30 days due to mandatory notice period, plus processing time (total 45-60 days). Some states offer same-day registration for Hindu marriages.'
        },
        {
            question: 'Can I register my marriage after the wedding ceremony?',
            answer: 'Yes, absolutely. Most marriages are registered after the ceremony. Different states have different time limits (ranging from 30 days to no time limit). However, it\'s best to register within 60 days of marriage. Late registration is usually possible but may require additional affidavits explaining the delay.'
        },
        {
            question: 'What if I lost my marriage certificate?',
            answer: 'You can apply for a duplicate marriage certificate from the same registration office that issued the original. You\'ll need an application, FIR copy (if applicable), affidavit stating loss, identity proofs, and prescribed fee (₹50-200). Process takes 7-30 days depending on state.'
        },
        {
            question: 'Do both partners need to be present for registration?',
            answer: 'Yes, physical presence of both bride and groom is mandatory for marriage registration in India. Both must sign the marriage register in presence of the registrar and witnesses. No proxy or representative is allowed. This is a legal requirement to prevent fraudulent registrations.'
        },
    ];

    const toolSchema = generateToolSchema({
        name: 'Marriage Registration Documents Checklist',
        description: 'Generate state-wise checklist of documents required for marriage registration in India under different marriage acts.',
        url: '/marriage-registration-documents/',
    });

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Marriage Registration Documents', path: '/marriage-registration-documents/' },
    ]);

    return (
        <>
            <Header />
            <JsonLd data={toolSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Marriage Registration Documents' }]} />

                    <div className="py-12">
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <div className="text-5xl mb-4">📝</div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    Marriage Registration Documents Checklist
                                </h1>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Complete state-wise guide to documents required for marriage registration in India under different marriage acts
                                </p>
                            </div>

                            {/* Tool */}
                            <DocumentsChecklist />

                            {/* Educational Content */}
                            <div className="mt-16 prose prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Understanding Marriage Registration in India
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Marriage registration in India is governed by multiple laws depending on the religion and preference of the
                                        couple. Unlike many countries with a single unified marriage law, India maintains separate personal laws for
                                        different religious communities while also offering a secular option.
                                    </p>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        <strong>Marriage registration provides legal proof</strong> of the matrimonial relationship and is essential for:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Adding spouse name in passport, bank accounts, and official documents</li>
                                        <li>Claiming marital benefits like PF nominee, insurance, property rights</li>
                                        <li>Obtaining spousal visa for international travel</li>
                                        <li>Legal protection for the spouse (especially women) in property and inheritance matters</li>
                                        <li>Proof of marital status for adoption, surrogacy, or IVF procedures</li>
                                        <li>Legal recourse in case of abandonment or disputes</li>
                                    </ul>

                                    <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                                        <h3 className="font-semibold text-primary-900 text-xl mb-3">Key Marriage Laws in India</h3>
                                        <div className="space-y-3 text-primary-800 text-sm">
                                            <div>
                                                <strong>Hindu Marriage Act, 1955:</strong> Applies to Hindus, Buddhists, Jains, and Sikhs. Registration
                                                can be done before or after marriage. Relatively simpler process.
                                            </div>
                                            <div>
                                                <strong>Special Marriage Act, 1954:</strong> Secular law for inter-faith marriages or those preferring
                                                civil registration. Requires 30-day notice period. Open to all Indian citizens regardless of religion.
                                            </div>
                                            <div>
                                                <strong>Muslim Personal Law:</strong> Based on Sharia law. Nikahnama (marriage contract) is the primary
                                                document. Registration varies by state but recommended for legal protection.
                                            </div>
                                            <div>
                                                <strong>Indian Christian Marriage Act, 1872:</strong> Governs Christian marriages. Requires church
                                                ceremony or license from district registrar. Notice published in church.
                                            </div>
                                            <div>
                                                <strong>Parsi Marriage and Divorce Act, 1936:</strong> Specific to Parsi community members.
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        State-Wise Marriage Registration: Key Differences
                                    </h2>

                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        While the overarching marriage acts apply nationwide, <strong>states have their own registration procedures,
                                            fees, and timelines</strong>. Here's what varies by state:
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">Registration Timelines</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Maharashtra:</strong> Compulsory within prescribed time, penalties for delay</li>
                                        <li><strong>Karnataka, Kerala:</strong> Mandatory within 30 days of marriage</li>
                                        <li><strong>Delhi, Haryana:</strong> Registration encouraged within 60 days but no strict deadline</li>
                                        <li><strong>Tamil Nadu, Telangana:</strong> Can register anytime, no time limit</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Registration Fees</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Fees vary significantly:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Most states:</strong> ₹100-₹500 for normal registration</li>
                                        <li><strong>Maharashtra:</strong> ₹500 normal, ₹1000 fast-track (within 24 hours)</li>
                                        <li><strong>Delhi:</strong> ₹100-₹200</li>
                                        <li><strong>Karnataka:</strong> ₹200-₹500 depending on urgency</li>
                                        <li><strong>Late registration:</strong> Additional penalties of ₹500-₹2000 in some states</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Online vs Offline Registration</h3>
                                    <div className="grid md:grid-cols-2 gap-6 my-6">
                                        <div className="card">
                                            <h4 className="font-semibold mb-3">States with Online Systems</h4>
                                            <p className="text-sm text-neutral-700">
                                                Delhi, Maharashtra, Karnataka, Tamil Nadu, Telangana, West Bengal, Haryana have online booking and
                                                application systems. You can book appointments, upload documents, and track status online.
                                            </p>
                                        </div>
                                        <div className="card">
                                            <h4 className="font-semibold mb-3">Offline-Only States</h4>
                                            <p className="text-sm text-neutral-700">
                                                Bihar, Jharkhand, some northeastern states still require physical application at sub-registrar or
                                                district marriage registration office.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Complete Step-by-Step Registration Process
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">For Hindu Marriage Act</h3>
                                    <ol className="list-decimal list-inside space-y-3 text-neutral-700 mb-8">
                                        <li><strong>Collect Required Documents:</strong> Use our checklist above based on your state</li>
                                        <li><strong>Visit Registration Office:</strong> Go to Sub-Registrar office or Marriage Registration Office in your jurisdiction (based on bride/groom residence)</li>
                                        <li><strong>Fill Application Form:</strong> Available at office or downloadable online in some states</li>
                                        <li><strong>Submit Documents:</strong> Original + photocopies of all documents, both parties present</li>
                                        <li><strong>Witnesses Present ID:</strong> 2 witnesses (18+ years) with original ID proofs</li>
                                        <li><strong>Sign Registration:</strong> Bride, groom, and witnesses sign in front of registrar</li>
                                        <li><strong>Pay Fee:</strong> Registration fee (₹100-₹500 typically)</li>
                                        <li><strong>Collect Certificate:</strong> Same day or within 7-15 days depending on state</li>
                                    </ol>

                                    <h3 className="text-2xl font-semibold mb-4">For Special Marriage Act</h3>
                                    <ol className="list-decimal list-inside space-y-3 text-neutral-700 mb-8">
                                        <li><strong>Give Notice:</strong> Both parties submit Notice of Intended Marriage at district marriage office (jurisdiction where either party has resided for 30+ days)</li>
                                        <li><strong>30-Day Notice Period:</strong> Notice displayed publicly for 30 days, allowing objections</li>
                                        <li><strong>Address Objections (if any):</strong> Registrar investigates objections, resolves before proceeding</li>
                                        <li><strong>Marriage Solemnization:</strong> After 30 days, marriage performed before Marriage Officer and 3 witnesses</li>
                                        <li><strong>Sign Marriage Register:</strong> Both parties and witnesses sign</li>
                                        <li><strong>Certificate Issued:</strong> Marriage certificate provided immediately or within 3-7 days</li>
                                    </ol>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                                        <h4 className="font-semibold text-yellow-900 mb-2">⏰ Important Timing Note</h4>
                                        <p className="text-sm text-yellow-800">
                                            <strong>Hindu Marriage Act:</strong> Can register before wedding (by filing declaration of intention) or after
                                            wedding. Most people register after. <strong>Special Marriage Act:</strong> 30-day notice is mandatory BEFORE
                                            solemnization. Plan accordingly for destination or time-sensitive weddings.
                                        </p>
                                    </div>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Common Document Requirements Explained
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">Age Proof Documents</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-3">
                                        Acceptable age proofs (in order of preference):
                                    </p>
                                    <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Birth Certificate:</strong> Most preferred, issued by municipal corporation</li>
                                        <li><strong>School Leaving Certificate (SSLC/10th marksheet):</strong> Widely accepted</li>
                                        <li><strong>Passport:</strong> Valid government-issued ID with date of birth</li>
                                        <li><strong>PAN Card:</strong> Contains date of birth, accepted in most states</li>
                                        <li><strong>Transfer Certificate from school:</strong> If recent and official</li>
                                    </ol>

                                    <h3 className="text-2xl font-semibold mb-4">Address Proof Documents</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-3">
                                        Accepted address proofs:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li><strong>Aadhar Card:</strong> Most commonly used, contains photo + address</li>
                                        <li><strong>Voter ID:</strong> Government-issued, strong proof</li>
                                        <li><strong>Passport:</strong> Shows current address</li>
                                        <li><strong>Driving License:</strong> Valid proof with photo</li>
                                        <li><strong>Ration Card:</strong> Accepted in many states</li>
                                        <li><strong>Utility Bills:</strong> Electricity/water bill in your name (not always accepted)</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">Photographs</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Standard requirement: <strong>3-4 passport-size colored photographs</strong> of bride and groom together
                                        (if already married) or individual photos. Some states require recent photos (taken within 3 months).
                                        Ensure formal attire, plain background.
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">Affidavit Requirements</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Affidavit on stamp paper (₹10-₹100 depending on state) declaring:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Current marital status (unmarried, divorced, or widowed)</li>
                                        <li>Date and place of marriage</li>
                                        <li>That marriage was solemnized as per religious customs</li>
                                        <li>Confirmation that both parties are above legal marriage age</li>
                                        <li>Nationality and religion</li>
                                        <li>That marriage is voluntary and consensual</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Special Cases & Additional Requirements
                                    </h2>

                                    <h3 className="text-2xl font-semibold mb-4">For Divorcees</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Divorce decree (final order) from family court - certified copy</li>
                                        <li>Affidavit declaring divorced status</li>
                                        <li>Some states require proof that divorce is final and not under appeal</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">For Widows/Widowers</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Death certificate of previous spouse - certified copy</li>
                                        <li>Affidavit declaring widowed status</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">For NRIs (Non-Resident Indians)</h3>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                                        <li>Valid passport with current visa details</li>
                                        <li>Address proof from country of residence (embassy-attested if required)</li>
                                        <li>No Objection Certificate in some states</li>
                                        <li>If one party is NRI, valid Indian address for correspondence</li>
                                    </ul>

                                    <h3 className="text-2xl font-semibold mb-4">For Inter-Faith Marriages</h3>
                                    <p className="text-neutral-700 leading-relaxed mb-4">
                                        Must register under <strong>Special Marriage Act</strong>. In some conservative states, may face additional
                                        scrutiny. Recent "anti-conversion" laws in UP, Haryana, MP require prior permission notification in some cases.
                                        Legal advice recommended.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-semibold mb-6">
                                        Common Mistakes to Avoid
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                            <h4 className="font-semibold text-red-900 mb-2">❌ Wrong Jurisdiction</h4>
                                            <p className="text-sm text-red-800">
                                                Registering in wrong district. Must register where either bride or groom resides, not wedding venue location.
                                            </p>
                                        </div>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                            <h4 className="font-semibold text-red-900 mb-2">❌ Incomplete Documents</h4>
                                            <p className="text-sm text-red-800">
                                                Missing photocopies, non-attested copies, or expired IDs lead to rejection.
                                            </p>
                                        </div>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                            <h4 className="font-semibold text-red-900 mb-2">❌ Witness Issues</h4>
                                            <p className="text-sm text-red-800">
                                                Minors as witnesses, or witnesses without valid ID proof. Ensure witnesses are 18+ with original IDs.
                                            </p>
                                        </div>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                            <h4 className="font-semibold text-red-900 mb-2">❌ Spelling Errors</h4>
                                            <p className="text-sm text-red-800">
                                                Name spelling mismatch across documents. Ensure consistency. Use legal names, not nicknames.
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
                                                Verify if you meet the minimum legal age for marriage in India
                                            </p>
                                        </Link>
                                        <Link href="/marriage-eligibility-checker/" className="card-hover">
                                            <div className="text-3xl mb-3">✓</div>
                                            <h3 className="font-semibold text-lg mb-2">Marriage Eligibility Checker</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Complete eligibility verification for marriage under different acts
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
