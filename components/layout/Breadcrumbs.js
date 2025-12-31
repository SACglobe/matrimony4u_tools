import Link from 'next/link';

/**
 * Breadcrumb component for SEO and navigation
 * @param {Object} props
 * @param {Array} props.items - Array of breadcrumb items [{ name, href }]
 */
export default function Breadcrumbs({ items = [] }) {
    if (!items || items.length === 0) {
        return null;
    }

    // Always add Home as first item
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        ...items,
    ];

    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-sm text-neutral-600">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <li key={item.href || item.name} className="flex items-center">
                            {index > 0 && (
                                <svg
                                    className="w-4 h-4 mx-2 text-neutral-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}

                            {isLast ? (
                                <span className="font-medium text-neutral-900" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hoverset-primary-600 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
