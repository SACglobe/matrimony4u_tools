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
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 md:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-2xl">🪔</span>
                  <span className="text-sm font-medium">Trusted by Indian families nationwide</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Plan Your Dream<br />
                <span className="text-accent-200">Indian Wedding</span>
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
                {SITE_CONFIG.tagline}
              </p>

              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                Free expert tools for marriage eligibility, budget planning, legal documentation, and cultural guidance
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/tools/"
                  className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  <span>Explore All Tools</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <Link
                  href="/legal-marriage-age-india/"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30"
                >
                  Check Eligibility
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-sm text-white/80">Expert Tools</div>
                </div>
                <div className="text-center border-x border-white/20">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/80">Free Forever</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">29</div>
                  <div className="text-sm text-white/80">States Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why These Tools Matter */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
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

        {/* Tool Categories */}
        <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Tools By Category
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore our comprehensive suite of matrimonial planning tools organized by your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOL_CATEGORIES.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/tools/#${category.slug}`}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Category number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center text-xs font-bold text-primary-600">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Explore Tools</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Understanding Indian Marriages */}
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
                Understanding Indian Marriages
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Marriage in India is governed by multiple personal laws based on religion, along with secular options.
                  The primary legal frameworks include:
                </p>
                <ul className="space-y-2 text-neutral-700 mb-6">
                  <li><strong>Hindu Marriage Act, 1955</strong> - For Hindus, Buddhists, Jains, and Sikhs</li>
                  <li><strong>Special Marriage Act, 1954</strong> - Secular law for inter-faith marriages</li>
                  <li><strong>Muslim Personal Law (Shariat) Application Act, 1937</strong></li>
                  <li><strong>Indian Christian Marriage Act, 1872</strong></li>
                  <li><strong>Parsi Marriage and Divorce Act, 1936</strong></li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Beyond legal compliance, successful marriage planning requires understanding regional customs,
                  budget allocation across multiple ceremonies, family coordination, and modern vs traditional balance.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Important:</strong> While our tools provide valuable information and calculations,
                  they are for educational purposes only. Always consult qualified legal professionals for
                  specific legal advice, and seek guidance from family elders and cultural experts for
                  traditional matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-12 bg-white border-t border-neutral-200">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-display font-semibold text-2xl mb-4">Trust & Transparency</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-600">
                <div>
                  <div className="text-primary-600 font-semibold mb-2">100% Free</div>
                  <p>All tools are completely free to use, no hidden charges or subscriptions</p>
                </div>
                <div>
                  <div className="text-primary-600 font-semibold mb-2">Privacy Focused</div>
                  <p>We don't collect personal data or require account creation</p>
                </div>
                <div>
                  <div className="text-primary-600 font-semibold mb-2">Expert Reviewed</div>
                  <p>Content reviewed by legal and cultural experts</p>
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
