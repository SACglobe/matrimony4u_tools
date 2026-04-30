'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function BlogListClient({ posts, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'all') return posts;
        return posts.filter(post => post.category === selectedCategory);
    }, [posts, selectedCategory]);

    const getCategoryColor = (category) => {
        const colors = {
            primary: 'bg-primary-100 text-primary-700',
            secondary: 'bg-secondary-100 text-secondary-700',
            accent: 'bg-accent-100 text-accent-700',
            purple: 'bg-purple-100 text-purple-700',
            pink: 'bg-pink-100 text-pink-700',
        };
        return colors[categories[category]?.color] || 'bg-neutral-100 text-neutral-700';
    };

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                        selectedCategory === 'all' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                >
                    All Posts
                </button>
                {Object.values(categories).map(category => (
                    <button
                        key={category.slug}
                        onClick={() => setSelectedCategory(category.slug)}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                            selectedCategory === category.slug 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8 w-full">
                {filteredPosts.map(post => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}/`}
                        className="group bg-white rounded-xl border-2 border-neutral-100 hover:border-primary-300 transition-all hover:shadow-lg overflow-hidden"
                    >
                        {/* Image placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                            <span className="text-6xl">📰</span>
                        </div>

                        <div className="p-6">
                            {/* Category & Meta */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                                    {categories[post.category]?.name}
                                </span>
                                <span className="text-xs text-neutral-500">{post.readTime}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                <span className="text-xs text-neutral-500">
                                    {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="text-primary-600 text-sm font-semibold group-hover:gap-2 inline-flex items-center transition-all">
                                    Read More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    No posts found in this category.
                </div>
            )}
        </div>
    );
}
