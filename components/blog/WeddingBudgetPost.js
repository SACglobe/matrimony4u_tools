export default function WeddingBudgetPost() {
    return (
        <>
            <p className="text-xl text-neutral-700 leading-relaxed mb-6 font-medium">
                Planning an Indian wedding without breaking the bank requires strategic budgeting. This guide provides realistic cost breakdowns, city-wise comparisons, and proven money-saving strategies.
            </p>

            <h2 className="text-3xl font-display font-semibold mb-4 mt-8">Average Indian Wedding Costs (2025)</h2>

            <p className="text-neutral-700 leading-relaxed mb-4">
                Indian wedding costs vary dramatically based on location, guest count, and celebration style. Here's what to expect:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
                    <h4 className="font-semibold text-green-900 mb-2">Budget Wedding</h4>
                    <p className="text-3xl font-bold text-green-700 mb-2">₹3-8L</p>
                    <p className="text-sm text-green-800">100-150 guests<br />Community halls<br />2-3 events</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 text-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Mid-Range Wedding</h4>
                    <p className="text-3xl font-bold text-blue-700 mb-2">₹15-40L</p>
                    <p className="text-sm text-blue-800">250-400 guests<br />3-star hotels<br />4-5 events</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 text-center">
                    <h4 className="font-semibold text-purple-900 mb-2">Luxury Wedding</h4>
                    <p className="text-3xl font-bold text-purple-700 mb-2">₹50L-2Cr+</p>
                    <p className="text-sm text-purple-800">500+ guests<br />5-star venues<br />Destination</p>
                </div>
            </div>

            <h2 className="text-3xl font-display font-semibold mb-4 mt-8">Expense Breakdown by Category</h2>

            <p className="text-neutral-700 leading-relaxed mb-4">
                For a typical ₹20 lakh wedding (250 guests, 4 events), here's the recommended budget distribution:
            </p>

            <div className="bg-neutral-50 rounded-lg p-6 my-6">
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Venue & Catering (35-40%)</span>
                            <span className="text-primary-600 font-bold">₹7-8L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-primary-500 h-3 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Outfits & Jewelry (15-20%)</span>
                            <span className="text-secondary-600 font-bold">₹3-4L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-secondary-500 h-3 rounded-full" style={{ width: '17%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Photography & Video (10-15%)</span>
                            <span className="text-accent-600 font-bold">₹2-3L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-accent-500 h-3 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Decoration & Flowers (10-12%)</span>
                            <span className="text-green-600 font-bold">₹2-2.5L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-green-500 h-3 rounded-full" style={{ width: '11%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Makeup & Beauty (5-8%)</span>
                            <span className="text-pink-600 font-bold">₹1-1.6L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-pink-500 h-3 rounded-full" style={{ width: '6.5%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Music & Entertainment (5-8%)</span>
                            <span className="text-blue-600 font-bold">₹1-1.6L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-blue-500 h-3 rounded-full" style={{ width: '6.5%' }}></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Miscellaneous & Contingency (10-15%)</span>
                            <span className="text-orange-600 font-bold">₹2-3L</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full" style={{ width: '12.5%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-display font-semibold mb-4 mt-8">City-Wise Cost Comparison</h2>

            <p className="text-neutral-700 leading-relaxed mb-4">
                Wedding costs vary significantly across Indian cities. Per-guest averages for mid-range weddings:
            </p>

            <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-neutral-300">
                            <th className="py-3 px-4">City</th>
                            <th className="py-3 px-4">Per Guest Cost</th>
                            <th className="py-3 px-4">Venue (per day)</th>
                            <th className="py-3 px-4">Total for 300 Guests</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-neutral-700">
                        <tr className="border-b border-neutral-100">
                            <td className="py-3 px-4 font-semibold">Mumbai</td>
                            <td>₹12,000-18,000</td>
                            <td>₹8-15L</td>
                            <td>₹40-60L</td>
                        </tr>
                        <tr className="border-b border-neutral-100">
                            <td className="py-3 px-4 font-semibold">Delhi NCR</td>
                            <td>₹10,000-15,000</td>
                            <td>₹6-12L</td>
                            <td>₹35-50L</td>
                        </tr>
                        <tr className="border-b border-neutral-100">
                            <td className="py-3 px-4 font-semibold">Bangalore</td>
                            <td>₹9,000-14,000</td>
                            <td>₹5-10L</td>
                            <td>₹30-45L</td>
                        </tr>
                        <tr className="border-b border-neutral-100">
                            <td className="py-3 px-4 font-semibold">Hyderabad</td>
                            <td>₹8,000-12,000</td>
                            <td>₹4-8L</td>
                            <td>₹25-40L</td>
                        </tr>
                        <tr className="border-b border-neutral-100">
                            <td className="py-3 px-4 font-semibold">Tier-2 Cities</td>
                            <td>₹5,000-8,000</td>
                            <td>₹2-5L</td>
                            <td>₹15-25L</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-3xl font-display font-semibold mb-4 mt-8">10 Proven Money-Saving Strategies</h2>

            <div className="space-y-4 my-6">
                <div className="card">
                    <h4 className="font-semibold mb-2">1. Choose Off-Season Dates (Save 20-30%)</h4>
                    <p className="text-sm text-neutral-600">
                        Avoid Oct-Feb peak season. March-September weddings get significant discounts on venues, photographers, decorators.
                    </p>
                </div>

                <div className="card">
                    <h4 className="font-semibold mb-2">2. Morning/Afternoon Ceremonies (Save 30-40%)</h4>
                    <p className="text-sm text-neutral-600">
                        Evening events cost premium. Schedule wedding for 9am-12pm or 3pm-6pm slots for major savings.
                    </p>
                </div>

                <div className="card">
                    <h4 className="font-semibold mb-2">3. Ruthless Guest List Trimming (₹15-30K per 10 guests)</h4>
                    <p className="text-sm text-neutral-600">
                        Every guest costs ₹1,500-3,000 in food + gifts. Cut distant relatives, office acquaintances you rarely meet.
                    </p>
                </div>

                <div className="card">
                    <h4 className="font-semibold mb-2">4. Combine Pre-Wedding Events (Save ₹2-5L)</h4>
                    <p className="text-sm text-neutral-600">
                        Host Mehendi + Sangeet same day/venue. Saves on decorator, venue, catering, coordination costs.
                    </p>
                </div>

                <div className="card">
                    <h4 className="font-semibold mb-2">5. Book Package Deals (Save 15-20%)</h4>
                    <p className="text-sm text-neutral-600">
                        Negotiate venue + catering + rooms package with hotels. Or decorator + caterer combo deals.
                    </p>
                </div>

                <div className="card">
                    <h4 className="font-semibold mb-2">6. DIY Decor for Smaller Events (Save ₹50K- 1L)</h4>
                    <p className="text-sm text-neutral-600">
                        Professional decorator for main wedding only. DIY photo booth, welcome board, centerpieces for mehendi/sangeet.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-display font-semibold mb-4 mt-8">Budget Mistakes to Avoid</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                <h4 className="font-semibold text-red-900 mb-3">Common Financial Pitfalls:</h4>
                <ul className="space-y-2 text-sm text-red-800">
                    <li>❌ No contingency fund (always budget 15-20% extra for unexpected costs)</li>
                    <li>❌ Paying 100% advance to vendors (negotiate 50% advance, 50% after delivery)</li>
                    <li>❌ Taking wedding loans (16% interest! Save first or scale down)</li>
                    <li>❌ Saying yes to every vendor upsell (stick to your planned budget)</li>
                    <li>❌ Not comparing vendor quotes (get 3-4 quotes for every category)</li>
                    <li>❌ Ignoring hidden costs (taxes, tips, overtime charges, transport)</li>
                </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl p-8 my-8">
                <h3 className="text-2xl font-display font-bold mb-4">Calculate Your Wedding Budget</h3>
                <p className="mb-6 text-white/90">
                    Use our interactive calculator to plan category-wise expenses and track your wedding budget
                </p>
                <a href="/wedding-budget-calculator/" className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                    Start Budget Planning
                </a>
            </div>
        </>
    );
}
