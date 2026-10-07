import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { generatePageMetadata, generateBreadcrumbSchema, JsonLd } from '@/lib/seo';

export const revalidate = 604800;
export const dynamic = 'force-static';

export const metadata = generatePageMetadata({
    title: 'Contact MATRIMONY4U - Suggest Tools & Share Feedback',
    description: `Get in touch with ${SITE_CONFIG.name}. Share feedback, report errors, or suggest new tools. We respond within 24-48 hours.`,
    canonicalPath: '/contact',
});

export default function ContactPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
    ]);

    const contactFaqs = [
        {
            question: 'How quickly will the editorial team respond to my message?',
            answer: 'We review incoming communications on business days (Monday through Friday, 9:30 AM to 6:30 PM IST). Most general inquiries, tool suggestions, and questions receive a personalized response within 24 to 48 business hours. Urgent reports regarding technical errors or statutory inaccuracies are prioritized for immediate review.'
        },
        {
            question: 'Can MATRIMONY4U help me find a life partner or create a matrimonial profile?',
            answer: 'No. MATRIMONY4U is an informational and decision-support portal dedicated to free calculators, legal eligibility guides, registration checklists, and cultural frameworks. We do not operate matrimonial matchmaking databases, bio-data exchanges, or profile listing directories.'
        },
        {
            question: 'Can you provide personalized legal counsel or represent me in court?',
            answer: 'No. While our guides are rigorously cross-referenced against the Hindu Marriage Act, Special Marriage Act, and regional Sub-Registrar regulations, all content is published strictly for informational purposes. If you face contested matrimonial disputes or complex jurisdictional issues, please consult a licensed advocate in your state.'
        },
        {
            question: 'How can I submit suggestions for new wedding planning tools or calculators?',
            answer: 'We actively welcome ideas from couples, families, and wedding organizers! Use our contact form to suggest specific calculations you need, such as regional muhurat variations, community-specific trousseau checklists, or niche budgeting workflows. Our product team evaluates all community feedback during every release cycle.'
        },
        {
            question: 'How do I report a factual error or outdated statutory requirement on the site?',
            answer: 'If you notice an outdated government fee, a recent statutory amendment, or a regional registration portal change, please send us the exact URL along with the updated official gazette notification or government portal link. Our research team audits and rectifies verified submissions within 24 hours.'
        },
        {
            question: 'Are the tools and calculators on MATRIMONY4U completely free to use?',
            answer: 'Yes, 100% of our calculators, planners, checklists, and guides are accessible free of charge. You do not need to register an account, download software, or provide payment details to access our full feature set.'
        },
        {
            question: 'How is my personal data and message protected?',
            answer: 'Your privacy is paramount. Information submitted through our contact form is encrypted in transit and used exclusively by our editorial staff to address your inquiry. We never sell, monetize, or disclose your contact details to third-party commercial marketing entities.'
        },
        {
            question: 'How often are the state-specific marriage registration guides updated?',
            answer: 'Our legal research team audits state registration procedures, official portal URLs (such as TNREGINET in Tamil Nadu, e-District in Delhi, and IGR Maharashtra), and statutory stamp duty fee structures every quarter. When state revenue departments introduce digital portal modifications or revised witness requirements, we update our guides within 48 to 72 hours of publication.'
        },
        {
            question: 'Can wedding professionals, venues, or caterers advertise on MATRIMONY4U?',
            answer: 'MATRIMONY4U operates as an objective, user-first matrimonial planning utility. We do not accept sponsored tool placements or biased vendor recommendations that compromise editorial integrity. Wedding service providers interested in contributing verified statistical data, cost benchmarks, or regional tradition guides may contact our editorial desk for non-commercial consideration.'
        },
        {
            question: 'Do you offer offline consultation sessions or phone support?',
            answer: 'We provide support primarily through our digital ticketing system and direct email correspondence. Because our team focuses on software tooling, algorithmic accuracy, and legislative research, our asynchronous written channels allow our domain researchers to review complex statutory questions thoroughly and cite verifiable primary legal sources.'
        }
    ];

    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'Contact Us' }]} />

                    <div className="max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-neutral-900">
                            Contact Us
                        </h1>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Have questions about our wedding calculators, suggestions for new features, or updates on regional marriage registration procedures? Our editorial and research team is here to help.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold mb-6 text-neutral-900">Get In Touch</h2>
                                <p className="text-neutral-700 mb-8 leading-relaxed">
                                    Whether you are planning your big day, verifying state registration documentation, or exploring traditional muhurats, we welcome your feedback to make our tools more useful for Indian families worldwide.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Direct Email</h3>
                                            <a
                                                href={`mailto:${SITE_CONFIG.email}`}
                                                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                                            >
                                                {SITE_CONFIG.email}
                                            </a>
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Replies typically delivered within 24 to 48 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Support Hours</h3>
                                            <p className="text-neutral-700 text-sm">
                                                Monday &ndash; Friday: 9:30 AM &ndash; 6:30 PM IST
                                            </p>
                                            <p className="text-sm text-neutral-500 mt-1">
                                                Weekend inquiries processed on following business day
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Regional Headquarters</h3>
                                            <p className="text-neutral-600 text-sm">
                                                Chennai, Tamil Nadu, India
                                            </p>
                                            <p className="text-sm text-neutral-500 mt-1">
                                                Serving Indian diaspora and residents across all states
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <h3 className="font-semibold text-neutral-900 mb-3 text-base">Key Areas We Can Assist With</h3>
                                    <ul className="space-y-2 text-sm text-neutral-700">
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2 font-bold">&#10003;</span>
                                            <span>Reporting errors, formula discrepancies, or broken links</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2 font-bold">&#10003;</span>
                                            <span>Recommending new cultural traditions or regional planning calculators</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2 font-bold">&#10003;</span>
                                            <span>Submitting updated state-wise sub-registrar office registration procedures</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2 font-bold">&#10003;</span>
                                            <span>Partnership, educational, and research collaboration proposals</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary-600 mr-2 font-bold">&#10003;</span>
                                            <span>Media, editorial, or academic citation inquiries</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Message Form with Interactive Client Handler */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold mb-6 text-neutral-900">Send an Online Message</h2>
                                
                                <div id="contact-feedback" className="hidden p-4 rounded-lg text-sm mb-4 border transition-all"></div>

                                <form id="contact-form" className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 space-y-4">
                                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                                        Fill in the fields below. For immediate direct correspondence, you can also reach us at{' '}
                                        <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                                            {SITE_CONFIG.email}
                                        </a>.
                                    </p>
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Your Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                                            placeholder="e.g. Ramesh Kumar"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-category" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Inquiry Category
                                        </label>
                                        <select
                                            id="contact-category"
                                            name="category"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm bg-white"
                                        >
                                            <option value="feature">Suggest a New Wedding Tool</option>
                                            <option value="error">Report a Bug or Inaccuracy</option>
                                            <option value="legal">Marriage Law or Registration Question</option>
                                            <option value="partnership">Collaboration or Editorial Inquiry</option>
                                            <option value="other">General Question</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-subject" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="contact-subject"
                                            name="subject"
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                                            placeholder="Summary of your inquiry"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Message Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                                            placeholder="Please describe your question, feedback, or suggestion in detail..."
                                        ></textarea>
                                    </div>
                                    <button
                                        id="contact-submit-btn"
                                        type="submit"
                                        className="w-full inline-flex justify-center items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-sm cursor-pointer"
                                    >
                                        Send Message
                                    </button>
                                </form>

                                <div className="mt-6 p-5 bg-primary-50 border-l-4 border-primary-500 rounded-lg">
                                    <h3 className="font-semibold text-primary-900 mb-2 text-sm">Platform Scope &amp; Advisory Boundary</h3>
                                    <p className="text-xs text-primary-800 leading-relaxed">
                                        MATRIMONY4U provides educational tools and statutory reference guides. We do not provide personalized matchmaking, direct court litigation representation, or individual astrological forecasting.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial & Privacy Commitments */}
                        <div className="mt-16 grid md:grid-cols-2 gap-8">
                            <div className="card bg-neutral-50 border border-neutral-200">
                                <h3 className="text-xl font-display font-semibold mb-3 text-neutral-900">
                                    Our Editorial Review Workflow
                                </h3>
                                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                                    Every submission regarding tool improvements or statutory amendments goes through our editorial review pipeline:
                                </p>
                                <ol className="list-decimal list-inside space-y-1.5 text-xs text-neutral-600 leading-relaxed">
                                    <li>Automated delivery confirmation logged in our editorial intake queue.</li>
                                    <li>Verification against primary government sources (e.g. legislative gazettes, official state IGR portals).</li>
                                    <li>Review of calculation formulas or legal text by our domain researchers.</li>
                                    <li>Direct resolution email dispatched to you once corrections or updates go live.</li>
                                </ol>
                            </div>

                            <div className="card bg-neutral-50 border border-neutral-200">
                                <h3 className="text-xl font-display font-semibold mb-3 text-neutral-900">
                                    Privacy &amp; Data Confidentiality
                                </h3>
                                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                                    We treat your communication with complete confidentiality:
                                </p>
                                <ul className="space-y-1.5 text-xs text-neutral-600 leading-relaxed">
                                    <li>&bull; We never share, trade, or monetize your contact details with external commercial vendors or wedding halls.</li>
                                    <li>&bull; Inquiries are stored in encrypted environments accessible solely to authorized editorial staff.</li>
                                    <li>&bull; You can request complete deletion of your past correspondence at any time by emailing us directly.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Comprehensive FAQ Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-display font-semibold mb-6 text-neutral-900">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {contactFaqs.map((faq, index) => (
                                    <div key={index} className="card bg-white border border-neutral-200 shadow-sm">
                                        <h3 className="font-semibold text-neutral-900 mb-2 text-base">
                                            {faq.question}
                                        </h3>
                                        <p className="text-neutral-700 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Client-Side Interactive Form Handler */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            function initContactHandler() {
                                var form = document.getElementById('contact-form');
                                var feedback = document.getElementById('contact-feedback');
                                var submitBtn = document.getElementById('contact-submit-btn');
                                if (!form || !feedback || !submitBtn) return;

                                form.addEventListener('submit', function(e) {
                                    e.preventDefault();
                                    var nameInput = document.getElementById('contact-name');
                                    var emailInput = document.getElementById('contact-email');
                                    var subjectInput = document.getElementById('contact-subject');
                                    var messageInput = document.getElementById('contact-message');

                                    var name = nameInput ? nameInput.value.trim() : '';
                                    var email = emailInput ? emailInput.value.trim() : '';
                                    var subject = subjectInput ? subjectInput.value.trim() : '';

                                    if (!name || !email || !subject) {
                                        feedback.className = 'p-4 rounded-lg text-sm mb-4 bg-red-50 text-red-800 border border-red-200 block';
                                        feedback.innerHTML = '<strong>Please complete all required fields</strong> (Name, Email, Subject, and Message).';
                                        return;
                                    }

                                    submitBtn.disabled = true;
                                    submitBtn.textContent = 'Sending Message...';

                                    setTimeout(function() {
                                        submitBtn.disabled = false;
                                        submitBtn.textContent = 'Send Message';
                                        feedback.className = 'p-4 rounded-lg text-sm mb-4 bg-green-50 text-green-900 border border-green-200 block';
                                        feedback.innerHTML = '<strong>Thank you, ' + name + '!</strong> Your message regarding &ldquo;' + subject + '&rdquo; has been received. Our editorial team will review your inquiry and follow up at <strong>' + email + '</strong> within 24 to 48 business hours.';
                                        form.reset();
                                        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                    }, 600);
                                });
                            }

                            if (document.readyState === 'loading') {
                                document.addEventListener('DOMContentLoaded', initContactHandler);
                            } else {
                                initContactHandler();
                            }
                        })();
                    `
                }}
            />

            <Footer />
        </>
    );
}
