import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG, TOOL_CATEGORIES, FEATURED_TOOLS } from '@/lib/config';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center text-white py-20 md:py-28 overflow-hidden bg-neutral-900">
          {/* Dynamic Premium Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-secondary-800 opacity-90"></div>
            {/* Decorative blurs for 'wow' effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center w-full">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-xl animate-fade-in">
                <span className="text-xl">✨</span>
                <span className="text-sm font-medium tracking-wide first-letter:uppercase">{SITE_CONFIG.name.toLowerCase()} for Indian Families</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.1] drop-shadow-2xl">
                Plan Your Dream<br />
                <span className="text-secondary-300">Indian Wedding</span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-2xl mx-auto font-medium leading-relaxed w-full">
                {SITE_CONFIG.tagline}
              </p>

              <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed w-full">
                Free expert tools for marriage eligibility, budget planning, legal documentation, and cultural guidance
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 w-full px-4">
                <Link
                  href="/tools/"
                  className="inline-flex items-center px-10 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-neutral-50 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-none hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
                >
                  Explore All Tools
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/legal-marriage-age-india/"
                  className="inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/30 text-lg w-full sm:w-auto justify-center"
                >
                  Check Eligibility
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-secondary-300">5+</div>
                  <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-tighter">Expert Tools</div>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-secondary-300">100%</div>
                  <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-tighter">Free Forever</div>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-secondary-300">28</div>
                  <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-tighter">States Covered</div>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-secondary-300">5+</div>
                  <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-tighter">Religions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why These Tools Matter */}
        <section className="py-16 bg-white w-full">
          <div className="container">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 w-full">
                Why MATRIMONY4U?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                  Indian marriages are beautifully complex, blending cultural traditions, religious ceremonies,
                  legal formalities, and significant financial planning. Unlike simpler Western ceremonies,
                  Indian weddings involve multiple considerations:
                </p>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold">⚖️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">Legal Complexity</h3>
                        <p className="text-neutral-600 text-sm">State-specific registration, multiple marriage acts, age eligibility verification</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                        <span className="text-secondary-700 font-bold">🕉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">Cultural Depth</h3>
                        <p className="text-neutral-600 text-sm">Auspicious dates, multi-day ceremonies, regional variations</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                        <span className="text-accent-600 font-bold">💰</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">Financial Planning</h3>
                        <p className="text-neutral-600 text-sm">₹5L to ₹2Cr+ budgets, multiple events, vendor negotiations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold">👨‍👩‍👧‍👦</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">Family Involvement</h3>
                        <p className="text-neutral-600 text-sm">Joint family decisions, inter-generational planning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 text-lg leading-relaxed">
                  Our mission is to empower you with knowledge and tools to make informed compatibility decisions,
                  plan financially responsible celebrations, navigate legal requirements confidently, and honor
                  cultural traditions respectfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tools */}
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Popular Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_TOOLS.map((toolSlug) => (
                <ToolCard key={toolSlug} slug={toolSlug} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/tools/"
                className="btn-primary"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
          <div className="container w-full">
            <div className="text-center mb-16 w-full">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Tools By Category
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed w-full">
                Explore our comprehensive suite of matrimonial planning tools organized by your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {TOOL_CATEGORIES.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/tools/#${category.slug}`}
                  className="group relative bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
                >
                  {/* Category number badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-neutral-50 rounded-2xl flex items-center justify-center text-sm font-bold text-neutral-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-6xl group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-neutral-600 text-base mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary-600 font-bold text-sm tracking-wide">
                    <span className="border-b-2 border-primary-100 group-hover:border-primary-500 transition-colors pb-0.5">EXPLORE CATEGORY</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Understanding Indian Marriages */}
        <section className="py-24 bg-white">
          <div className="container w-full">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
                Understanding Indian Marriages
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700 w-full">
                <p className="mb-6 leading-relaxed">
                  Marriage in India is governed by multiple personal laws based on religion, along with secular options.
                  The primary legal frameworks include:
                </p>
                <div className="bg-neutral-50 rounded-2xl p-8 mb-8 border border-neutral-100">
                  <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
                    <li className="flex items-center gap-3">
                      <span className="text-primary-600 text-xl">🕉️</span>
                      <strong>Hindu Marriage Act, 1955</strong>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary-600 text-xl">⚖️</span>
                      <strong>Special Marriage Act, 1954</strong>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary-600 text-xl">🌙</span>
                      <strong>Muslim Personal Law, 1937</strong>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary-600 text-xl">✝️</span>
                      <strong>Christian Marriage Act, 1872</strong>
                    </li>
                  </ul>
                </div>
                <p className="mb-6 leading-relaxed italic text-neutral-500 text-base">
                  Beyond legal compliance, successful planning requires understanding regional customs,
                  budget allocation, and family coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
          <div className="container w-full relative z-10">
            <div className="max-w-5xl mx-auto w-full">
              <div className="text-center mb-12">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Trust & Transparency</h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">We build tools with integrity and respect for Indian matrimonial values.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-10 w-full">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-400 text-4xl mb-4">💎</div>
                  <div className="text-white text-xl font-bold mb-3">100% Free</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">All tools are completely free to use, with no hidden charges, locked features, or subscriptions required.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-400 text-4xl mb-4">🛡️</div>
                  <div className="text-white text-xl font-bold mb-3">Privacy First</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">We don't collect personal data, require account creation, or track your tool usage. Your calculations stay private.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-400 text-4xl mb-4">📜</div>
                  <div className="text-white text-xl font-bold mb-3">Authority</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">Content is researched and structured specifically for Indian legal and cultural contexts by domain experts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Temporary Tool Card component (will be moved to separate file)
function ToolCard({ slug }) {
  const toolInfo = {
    'legal-marriage-age-india': {
      name: 'Legal Marriage Age Checker',
      description: 'Verify if you meet the minimum legal age requirement to get married in India',
      icon: '⚖️',
    },
    'wedding-budget-calculator': {
      name: 'Wedding Budget Calculator',
      description: 'Plan your Indian wedding budget across all ceremonies and events',
      icon: '💰',
    },
    'marriage-registration-documents': {
      name: 'Registration Documents Checklist',
      description: 'State-wise list of documents required for marriage registration',
      icon: '📝',
    },
    'age-difference-calculator': {
      name: 'Age Difference Calculator',
      description: 'Calculate age gap and understand social norms for marriage',
      icon: '💑',
    },
    'marriage-date-calculator': {
      name: 'Auspicious Marriage Date',
      description: 'Find auspicious dates for your wedding according to Hindu calendar',
      icon: '📅',
    },
    'wedding-guest-list-planner': {
      name: 'Guest List Planner',
      description: 'Organize your wedding guest list by categories and manage RSVPs',
      icon: '👥',
    },
  };

  const tool = toolInfo[slug] || { name: slug, description: '', icon: '🔧' };

  return (
    <Link href={`/${slug}/`} className="card-hover group">
      <div className="text-4xl mb-4">{tool.icon}</div>
      <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
        {tool.name}
      </h3>
      <p className="text-neutral-600 text-sm">
        {tool.description}
      </p>
    </Link>
  );
}
