'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

function formatPublishDate(dateString) {
    if (!dateString) return '';
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const monthIndex = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        if (!isNaN(year) && monthIndex >= 0 && monthIndex < 12 && !isNaN(day)) {
            return `${months[monthIndex]} ${day}, ${year}`;
        }
    }
    return dateString;
}

export default function BlogListClient({ posts, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = useMemo(() => {
        let result = posts;
        if (selectedCategory !== 'all') {
            result = result.filter(post => post.category === selectedCategory);
        }
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            result = result.filter(post => 
                (post.title && post.title.toLowerCase().includes(query)) ||
                (post.excerpt && post.excerpt.toLowerCase().includes(query))
            );
        }
        return result;
    }, [posts, selectedCategory, searchQuery]);

    const getCategoryColor = (category) => {
        const colors = {
            primary: 'bg-primary-100 text-primary-800 border-primary-200',
            secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200',
            accent: 'bg-accent-100 text-accent-800 border-accent-200',
            purple: 'bg-purple-100 text-purple-800 border-purple-200',
            pink: 'bg-pink-100 text-pink-800 border-pink-200',
        };
        return colors[categories[category]?.color] || 'bg-neutral-100 text-neutral-800 border-neutral-200';
    };

    const getCategoryEmoji = (category) => {
        const emojis = {
            legal: '⚖️',
            finance: '💰',
            planning: '📋',
            culture: '🪔',
            relationships: '💖',
        };
        return emojis[category] || '📰';
    };

    return (
        <div className="w-full">
            {/* Search and Category Filter Bar */}
            <div className="mb-10 max-w-3xl mx-auto space-y-5">
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search matrimonial guides, legal acts, budget tips..."
                        className="w-full px-5 py-3.5 pl-12 bg-white border border-neutral-200 rounded-2xl shadow-xs focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm sm:text-base placeholder-neutral-400"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">
                        🔍
                    </span>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs bg-neutral-100 px-2 py-1 rounded-md"
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-2xs ${
                            selectedCategory === 'all' 
                            ? 'bg-primary-600 text-white shadow-sm ring-2 ring-primary-300' 
                            : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                    >
                        🌟 All Guides ({posts.length})
                    </button>
                    {Object.values(categories).map(category => {
                        const count = posts.filter(p => p.category === category.slug).length;
                        return (
                            <button
                                key={category.slug}
                                onClick={() => setSelectedCategory(category.slug)}
                                className={`px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-2xs flex items-center gap-1.5 ${
                                    selectedCategory === category.slug 
                                    ? 'bg-primary-600 text-white shadow-sm ring-2 ring-primary-300' 
                                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                                }`}
                            >
                                <span>{getCategoryEmoji(category.slug)}</span>
                                <span>{category.name}</span>
                                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${selectedCategory === category.slug ? 'bg-primary-700 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Results count banner */}
            <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-neutral-500 px-1">
                <span>Showing <strong className="text-neutral-800">{filteredPosts.length}</strong> authoritative articles</span>
                {selectedCategory !== 'all' && (
                    <span className="text-primary-600 font-medium">Filtered by: {categories[selectedCategory]?.name}</span>
                )}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredPosts.map(post => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group bg-white rounded-2xl border border-neutral-200 hover:border-primary-400 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                    >
                        <div>
                            {/* Visual Header */}
                            <div className="aspect-[16/9] bg-gradient-to-br from-primary-50 via-rose-50 to-amber-50 flex items-center justify-center border-b border-neutral-100 relative group-hover:scale-[1.02] transition-transform">
                                <span className="text-5xl filter drop-shadow-xs">{getCategoryEmoji(post.category)}</span>
                                <div className="absolute top-3 left-3">
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs ${getCategoryColor(post.category)}`}>
                                        {categories[post.category]?.name || 'Guide'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                                    <span>⏱️ {post.readTime}</span>
                                    <span>•</span>
                                    <span suppressHydrationWarning>{formatPublishDate(post.publishDate)}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-lg sm:text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="px-6 py-4 bg-neutral-50/70 border-t border-neutral-100 flex items-center justify-between text-xs">
                            <span className="text-neutral-500 font-medium truncate max-w-[150px]">
                                By {post.author ? post.author.split('&')[0] : 'Editorial Desk'}
                            </span>
                            <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Read Guide →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200 my-10 max-w-xl mx-auto">
                    <span className="text-5xl mb-4 block">🔍</span>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">No Matching Articles Found</h3>
                    <p className="text-sm text-neutral-500 mb-6">
                        We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try exploring other categories or clearing your search.
                    </p>
                    <button
                        onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                        className="px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors shadow-xs"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}
        </div>
    );
}
