'use client';

import { useState } from 'react';

export default function AgeDifferenceCalculator() {
    const [person1, setPerson1] = useState({
        birthDate: '',
        label: 'Partner 1'
    });

    const [person2, setPerson2] = useState({
        birthDate: '',
        label: 'Partner 2'
    });

    const [result, setResult] = useState(null);

    const calculateAgeDifference = (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);

        // Calculate ages
        const today = new Date();
        const age1 = today.getFullYear() - d1.getFullYear() -
            ((today.getMonth() < d1.getMonth() || (today.getMonth() === d1.getMonth() && today.getDate() < d1.getDate())) ? 1 : 0);
        const age2 = today.getFullYear() - d2.getFullYear() -
            ((today.getMonth() < d2.getMonth() || (today.getMonth() === d2.getMonth() && today.getDate() < d2.getDate())) ? 1 : 0);

        // Calculate difference
        const diffMs = Math.abs(d1 - d2);
        const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
        const remainingMs = diffMs % (1000 * 60 * 60 * 24 * 365.25);
        const diffMonths = Math.floor(remainingMs / (1000 * 60 * 60 * 24 * 30.44));
        const remainingDays = Math.floor((remainingMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

        return {
            years: diffYears,
            months: diffMonths,
            days: remainingDays,
            totalDays: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
            age1,
            age2,
            olderPerson: age1 > age2 ? 1 : 2
        };
    };

    const getSocialContext = (years) => {
        if (years === 0) {
            return {
                category: 'Same Age',
                icon: '🤝',
                color: 'green',
                description: 'Partners are the same age or within 1 year',
                insights: 'Common in love marriages and urban settings. Often indicates shared life stage and similar generational perspectives.'
            };
        } else if (years <= 3) {
            return {
                category: 'Small Gap',
                icon: '💑',
                color: 'green',
                description: '1-3 years age difference',
                insights: 'Very common and socially accepted across all Indian communities. Minimal generational differences, shared cultural references.'
            };
        } else if (years <= 7) {
            return {
                category: 'Moderate Gap',
                icon: '👫',
                color: 'blue',
                description: '4-7 years age difference',
                insights: 'Common in arranged marriages. Generally well-accepted. May bring different life experiences while maintaining compatibility.'
            };
        } else if (years <= 15) {
            return {
                category: 'Significant Gap',
                icon: '💞',
                color: 'yellow',
                description: '8-15 years age difference',
                insights: 'Less common but not unusual. May face some social questions but generally accepted if both partners are mature adults. Consider life stage compatibility.'
            };
        } else {
            return {
                category: 'Large Gap',
                icon: '💕',
                color: 'orange',
                description: '15+ years age difference',
                insights: 'Uncommon in Indian society. May face social scrutiny. Requires strong mutual understanding, clear communication about life goals, and family support.'
            };
        }
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        if (!person1.birthDate || !person2.birthDate) {
            setResult({
                error: true,
                message: 'Please enter both birth dates'
            });
            return;
        }

        const diff = calculateAgeDifference(person1.birthDate, person2.birthDate);
        const context = getSocialContext(diff.years);

        setResult({
            ...diff,
            context,
            error: false
        });
    };

    const getColorClasses = (color) => {
        const colors = {
            green: 'bg-green-50 border-green-500 text-green-900',
            blue: 'bg-blue-50 border-blue-500 text-blue-900',
            yellow: 'bg-yellow-50 border-yellow-500 text-yellow-900',
            orange: 'bg-orange-50 border-orange-500 text-orange-900'
        };
        return colors[color] || colors.green;
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6 md:p-8">
            <form onSubmit={handleCalculate} className="space-y-6">
                {/* Person 1 */}
                <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-900">
                        Partner 1 Birth Date
                    </label>
                    <input
                        type="date"
                        value={person1.birthDate}
                        onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Person 2 */}
                <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-900">
                        Partner 2 Birth Date
                    </label>
                    <input
                        type="date"
                        value={person2.birthDate}
                        onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Calculate Button */}
                <button
                    type="submit"
                    className="w-full btn-primary py-3 text-base font-semibold"
                >
                    Calculate Age Difference
                </button>
            </form>

            {/* Results */}
            {result && !result.error && (
                <div className="mt-8 space-y-6">
                    {/* Age Difference Display */}
                    <div className="text-center">
                        <div className="text-5xl mb-4">{result.context.icon}</div>
                        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                            {result.years} Years, {result.months} Months, {result.days} Days
                        </h3>
                        <p className="text-neutral-600">
                            ({result.totalDays.toLocaleString()} total days apart)
                        </p>
                    </div>

                    {/* Current Ages */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-600 mb-1">Partner 1 Age</div>
                            <div className="text-2xl font-bold text-neutral-900">{result.age1}</div>
                        </div>
                        <div className="text-center p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-600 mb-1">Partner 2 Age</div>
                            <div className="text-2xl font-bold text-neutral-900">{result.age2}</div>
                        </div>
                    </div>

                    {/* Social Context */}
                    <div className={`p-6 rounded-lg border-2 ${getColorClasses(result.context.color)}`}>
                        <div className="flex items-start space-x-3 mb-3">
                            <span className="text-3xl">{result.context.icon}</span>
                            <div>
                                <h4 className="font-semibold text-lg mb-1">{result.context.category}</h4>
                                <p className="text-sm opacity-90">{result.context.description}</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                            <strong>Social Context:</strong> {result.context.insights}
                        </p>
                    </div>

                    {/* Important Note */}
                    <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                        <p className="text-xs text-primary-800">
                            <strong>Remember:</strong> Age difference is just one factor. Compatibility depends on shared values,
                            life goals, emotional maturity, and mutual respect. Focus on the quality of your relationship.
                        </p>
                    </div>
                </div>
            )}

            {result && result.error && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                    <p className="text-red-900 text-center">{result.message}</p>
                </div>
            )}
        </div>
    );
}
