'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, TOOL_CATEGORIES } from '@/lib/config';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 hover:opacity-90 transition-opacity z-50"
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
                            <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="p-4">
                                    <Link
                                        href="/tools/"
                                        className="block px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                                    >
                                        View All Tools →
                                    </Link>
                                    <div className="mt-2 space-y-1">
                                        {TOOL_CATEGORIES.map((category) => (
                                            <Link
                                                key={category.id}
                                                href={`/${category.slug}/`}
                                                className="block px-4 py-2 hover:bg-neutral-50 rounded-md transition-colors group/item"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <span className="text-xl flex-shrink-0">{category.icon}</span>
                                                    <div>
                                                        <div className="font-medium text-neutral-900 text-sm group-hover/item:text-primary-600 transition-colors">
                                                            {category.name}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                                                            {category.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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
                        className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-20 px-6 pb-10 overflow-y-auto">
                    <nav className="flex flex-col space-y-6">
                        <Link
                            href="/"
                            className="text-2xl font-display font-bold text-neutral-900 border-b border-neutral-100 pb-2"
                        >
                            Home
                        </Link>

                        <div>
                            <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                                Planning Tools
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                {TOOL_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/${category.slug}/`}
                                        className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-xl"
                                    >
                                        <span className="text-2xl">{category.icon}</span>
                                        <span className="font-semibold text-neutral-800">{category.name}</span>
                                    </Link>
                                ))}
                                <Link
                                    href="/tools/"
                                    className="flex items-center justify-center p-3 text-primary-600 font-bold bg-primary-50 rounded-xl"
                                >
                                    View All Tools →
                                </Link>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-neutral-100 space-y-6">
                            <Link
                                href="/blog/"
                                className="block text-2xl font-display font-bold text-neutral-900"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about/"
                                className="block text-2xl font-display font-bold text-neutral-900"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact/"
                                className="block text-2xl font-display font-bold text-neutral-900"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>

                    <div className="mt-auto pt-10 text-center">
                        <p className="text-sm text-neutral-400">
                            © {new Date().getFullYear()} {SITE_CONFIG.name}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

