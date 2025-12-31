'use client';

import { useState } from 'react';

export default function WeddingBudgetCalculator() {
    const [budget, setBudget] = useState({
        venue: '',
        catering: '',
        photography: '',
        decoration: '',
        clothing: '',
        jewelry: '',
        entertainment: '',
        invitation: '',
        transportation: '',
        accommodation: '',
        miscellaneous: '',
    });

    const [guestCount, setGuestCount] = useState('');
    const [result, setResult] = useState(null);

    const categories = [
        { key: 'venue', label: 'Venue & Mandap', icon: '🏛️', description: 'Hall rental, mandap setup' },
        { key: 'catering', label: 'Catering & Food', icon: '🍽️', description: 'Food, beverages, desserts' },
        { key: 'photography', label: 'Photography & Videography', icon: '📸', description: 'Photos, videos, album' },
        { key: 'decoration', label: 'Decoration & Flowers', icon: '💐', description: 'Stage decor, floral arrangements' },
        { key: 'clothing', label: 'Clothing & Accessories', icon: '👗', description: 'Bride & groom outfits' },
        { key: 'jewelry', label: 'Jewelry & Ornaments', icon: '💍', description: 'Wedding jewelry' },
        { key: 'entertainment', label: 'Entertainment & Music', icon: '🎵', description: 'DJ, band, performers' },
        { key: 'invitation', label: 'Invitations & Printing', icon: '💌', description: 'Cards, printing, delivery' },
        { key: 'transportation', label: 'Transportation', icon: '🚗', description: 'Baraat, guest transport' },
        { key: 'accommodation', label: 'Guest Accommodation', icon: '🏨', description: 'Hotel bookings' },
        { key: 'miscellaneous', label: 'Miscellaneous', icon: '📋', description: 'Other expenses' },
    ];

    const handleInputChange = (key, value) => {
        setBudget(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        const total = Object.values(budget).reduce((sum, val) => {
            return sum + (parseFloat(val) || 0);
        }, 0);

        const perGuestCost = guestCount ? total / parseInt(guestCount) : 0;

        // Calculate category percentages
        const breakdown = categories.map(cat => {
            const amount = parseFloat(budget[cat.key]) || 0;
            const percentage = total > 0 ? (amount / total * 100).toFixed(1) : 0;
            return {
                ...cat,
                amount,
                percentage
            };
        }).filter(item => item.amount > 0);

        // Sort by highest spend
        breakdown.sort((a, b) => b.amount - a.amount);

        setResult({
            total,
            perGuestCost,
            guestCount: parseInt(guestCount) || 0,
            breakdown
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="space-y-8">
            {/* Guest Count */}
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <label htmlFor="guestCount" className="block text-sm font-semibold text-primary-900 mb-2">
                    Expected Number of Guests
                </label>
                <input
                    type="number"
                    id="guestCount"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    placeholder="e.g., 300"
                    min="1"
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <p className="text-xs text-primary-700 mt-2">
                    Used to calculate per-guest cost
                </p>
            </div>

            {/* Budget Categories */}
            <form onSubmit={handleCalculate} className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Budget Breakdown by Category</h3>

                <div className="grid md:grid-cols-2 gap-4">
                    {categories.map(category => (
                        <div key={category.key} className="bg-white rounded-lg p-4 border border-neutral-200">
                            <div className="flex items-start space-x-3 mb-2">
                                <span className="text-2xl flex-shrink-0">{category.icon}</span>
                                <div className="flex-1">
                                    <label htmlFor={category.key} className="block font-semibold text-neutral-900 text-sm">
                                        {category.label}
                                    </label>
                                    <p className="text-xs text-neutral-600">{category.description}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">₹</span>
                                <input
                                    type="number"
                                    id={category.key}
                                    value={budget[category.key]}
                                    onChange={(e) => handleInputChange(category.key, e.target.value)}
                                    placeholder="0"
                                    min="0"
                                    className="w-full pl-8 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full btn-primary py-3 text-base font-semibold mt-6"
                >
                    Calculate Total Budget
                </button>
            </form>

            {/* Results */}
            {result && (
                <div className="bg-white rounded-lg shadow-lg border-2 border-primary-500 p-6 md:p-8">
                    <h3 className="text-2xl font-display font-bold text-center mb-6">Your Wedding Budget Summary</h3>

                    {/* Total Budget */}
                    <div className="text-center mb-8">
                        <div className="text-sm text-neutral-600 mb-2">Total Wedding Budget</div>
                        <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
                            {formatCurrency(result.total)}
                        </div>
                        {result.guestCount > 0 && (
                            <div className="text-neutral-700">
                                <span className="font-semibold">{formatCurrency(result.perGuestCost)}</span> per guest
                                <span className="text-neutral-500"> ({result.guestCount} guests)</span>
                            </div>
                        )}
                    </div>

                    {/* Breakdown */}
                    {result.breakdown.length > 0 && (
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-neutral-900">Expense Breakdown</h4>
                            <div className="space-y-3">
                                {result.breakdown.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                        <div className="flex items-center space-x-3 flex-1">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <div className="font-medium text-neutral-900 text-sm">{item.label}</div>
                                                <div className="text-xs text-neutral-600">{item.percentage}% of total</div>
                                            </div>
                                        </div>
                                        <div className="font-semibold text-neutral-900">
                                            {formatCurrency(item.amount)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Budget Tips */}
                    <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2 text-sm">💡 Budget Tips</h4>
                        <ul className="text-xs text-green-800 space-y-1">
                            <li>• Add 10-15% contingency for unexpected expenses</li>
                            <li>• Compare quotes from at least 3 vendors for each category</li>
                            <li>• Off-season weddings (July-Sept) can save 20-30%</li>
                            <li>• Consider weekday weddings for better venue rates</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
