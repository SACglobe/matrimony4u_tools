import Link from 'next/link';
import { SITE_CONFIG, TOOL_CATEGORIES } from '@/lib/config';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                    >
                        <img
                            src="/logo.png"
                            alt={SITE_CONFIG.name}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {/* Tools Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors py-2">
                                <span className="font-medium">Tools</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="p-4">
                                    <Link
                                        href="/tools/"
                                        className="block px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                                    >
                                        View All Tools →
                                    </Link>
                                    <div className="mt-2 space-y-1">
                                        {TOOL_CATEGORIES.map((category) => (
                                            <div key={category.id} className="px-4 py-2 hover:bg-neutral-50 rounded-md transition-colors">
                                                <div className="flex items-start space-x-2">
                                                    <span className="text-xl flex-shrink-0">{category.icon}</span>
                                                    <div>
                                                        <div className="font-medium text-neutral-900 text-sm">
                                                            {category.name}
                                                        </div>
                                                        <div className="text-xs text-neutral-600 mt-0.5">
                                                            {category.description.substring(0, 60)}...
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/blog/"
                            className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/about/"
                            className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact/"
                            className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
