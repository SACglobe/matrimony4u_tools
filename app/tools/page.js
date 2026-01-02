import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SITE_CONFIG, TOOL_CATEGORIES } from '@/lib/config';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata({
    title: 'All Tools',
    description: 'Browse all free matrimonial planning tools for Indian weddings. Legal guides, budget calculators, cultural tools, and more.',
    canonicalPath: '/tools/',
});

export default function ToolsPage() {
    // Tool registry
    const toolsByCategory = {
        'legal-eligibility': [
            {
                slug: 'legal-marriage-age-india',
                name: 'Legal Marriage Age Checker',
                description: 'Verify if you meet the minimum legal age requirement for marriage in India',
                icon: '⚖️',
                status: 'active',
            },
            {
                slug: 'marriage-registration-documents',
                name: 'Marriage Registration Documents',
                description: 'State-wise checklist of documents required for marriage registration',
                icon: '📝',
                status: 'active',
            },
            {
                slug: 'marriage-eligibility-checker',
                name: 'Marriage Eligibility Checker',
                description: 'Check your eligibility for marriage under different Indian laws',
                icon: '✓',
                status: 'active',
            },
        ],
        'wedding-planning': [
            {
                slug: 'wedding-guest-list-planner',
                name: 'Wedding Guest List Planner',
                description: 'Organize your guest list by categories and manage RSVPs efficiently',
                icon: '👥',
                status: 'active',
            },
        ],
        'financial-planning': [
            {
                slug: 'wedding-budget-calculator',
                name: 'Wedding Budget Calculator',
                description: 'Plan your Indian wedding budget across all ceremonies and events',
                icon: '💰',
                status: 'active',
            },
            {
                slug: 'wedding-expense-split-calculator',
                name: 'Wedding Expense Split Calculator',
                description: 'Calculate how to split wedding expenses between families',
                icon: '💸',
                status: 'active',
            },
            {
                slug: 'wedding-savings-calculator',
                name: 'Wedding Savings Calculator',
                description: 'Plan how much to save monthly for your dream wedding',
                icon: '🏦',
                status: 'active',
            },
        ],
        'date-timing': [
            {
                slug: 'marriage-date-calculator',
                name: 'Auspicious Marriage Date',
                description: 'Find auspicious dates for wedding according to Hindu calendar',
                icon: '📅',
                status: 'active',
            },
        ],
        'compatibility': [
            {
                slug: 'age-difference-calculator',
                name: 'Age Difference Calculator',
                description: 'Calculate age gap and understand social norms for marriage',
                icon: '💑',
                status: 'active',
            },
        ],
        'cultural-traditional': [
            {
                slug: 'kundli-matching',
                name: 'Kundli Matching (Ashtakoot)',
                description: 'Understand traditional compatibility based on birth stars and moon signs',
                icon: '🔮',
                status: 'active',
            },
        ],
    };

    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <Breadcrumbs items={[{ name: 'All Tools' }]} />

                    <div className="py-12">
                        {/* Page Header */}
                        <div className="text-center mb-16 w-full">
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Matrimonial Planning Tools
                            </h1>
                            <p className="text-xl text-neutral-600 max-w-3xl mx-auto w-full">
                                Free, accurate, and easy-to-use tools for planning your Indian wedding.
                                From legal requirements to budget planning, we've got you covered.
                            </p>
                        </div>

                        {/* Tools by Category */}
                        {TOOL_CATEGORIES.map((category) => {
                            const categoryTools = toolsByCategory[category.id] || [];

                            if (categoryTools.length === 0) return null;

                            return (
                                <section key={category.id} id={category.slug} className="mb-16 w-full">
                                    <div className="flex items-center space-x-3 mb-6 w-full">
                                        <span className="text-4xl">{category.icon}</span>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-display font-bold">
                                                {category.name}
                                            </h2>
                                            <p className="text-neutral-600">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                        {categoryTools.map((tool) => (
                                            <ToolCardComponent key={tool.slug} tool={tool} />
                                        ))}
                                    </div>
                                </section>
                            );
                        })}

                        {/* More Coming Soon */}
                        <div className="mt-16 text-center bg-primary-50 rounded-lg p-12 w-full">
                            <h3 className="text-2xl font-display font-semibold mb-4">
                                More Tools Coming Soon
                            </h3>
                            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto w-full">
                                We're continuously adding new tools to help you with every aspect of marriage planning.
                                Have a suggestion? We'd love to hear it!
                            </p>
                            <Link href="/contact/" className="btn-primary">
                                Suggest a Tool
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

function ToolCardComponent({ tool }) {
    const isComingSoon = tool.status === 'coming-soon';

    if (isComingSoon) {
        return (
            <div className="card opacity-75">
                <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded-full font-medium">
                        Coming Soon
                    </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                    {tool.name}
                </h3>
                <p className="text-neutral-600 text-sm">
                    {tool.description}
                </p>
            </div>
        );
    }

    return (
        <Link href={`/${tool.slug}/`} className="card-hover group">
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

