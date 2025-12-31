import Link from 'next/link';
import { SITE_CONFIG, TOOL_CATEGORIES } from '@/lib/config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="container">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white font-display font-semibold text-lg mb-4">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-sm text-neutral-400 mb-4">
                            {SITE_CONFIG.tagline}
                        </p>
                        <p className="text-sm text-neutral-400">
                            Free matrimonial planning tools and guidance for Indian couples and families.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/tools/" className="hover:text-primary-400 transition-colors">
                                    All Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/" className="hover:text-primary-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/" className="hover:text-primary-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact/" className="hover:text-primary-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/legal-eligibility/" className="hover:text-primary-400 transition-colors">
                                    Legal & Eligibility
                                </Link>
                            </li>
                            <li>
                                <Link href="/wedding-planning/" className="hover:text-primary-400 transition-colors">
                                    Wedding Planning
                                </Link>
                            </li>
                            <li>
                                <Link href="/financial-planning/" className="hover:text-primary-400 transition-colors">
                                    Financial Planning
                                </Link>
                            </li>
                            <li>
                                <Link href="/cultural-traditions/" className="hover:text-primary-400 transition-colors">
                                    Cultural Traditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/compatibility-assessment/" className="hover:text-primary-400 transition-colors">
                                    Compatibility
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal & Policies</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy-policy/" className="hover:text-primary-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service/" className="hover:text-primary-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer/" className="hover:text-primary-400 transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-neutral-400">
                            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                        </div>
                        <div className="text-sm text-neutral-400">
                            Made with ❤️ for Indian Couples
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
