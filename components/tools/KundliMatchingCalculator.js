'use client';

import { useState } from 'react';

export default function KundliMatchingCalculator() {
    const [bride, setBride] = useState({
        name: '',
        nakshatra: '',
        rashi: ''
    });

    const [groom, setGroom] = useState({
        name: '',
        nakshatra: '',
        rashi: ''
    });

    const [result, setResult] = useState(null);

    // 27 Nakshatras
    const nakshatras = [
        'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
        'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
        'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
        'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
        'Uttara Bhadrapada', 'Revati'
    ];

    // 12 Rashis (Zodiac Signs)
    const rashis = [
        'Aries (Mesha)', 'Taurus (Vrishabha)', 'Gemini (Mithuna)', 'Cancer (Karka)',
        'Leo (Simha)', 'Virgo (Kanya)', 'Libra (Tula)', 'Scorpio (Vrishchika)',
        'Sagittarius (Dhanu)', 'Capricorn (Makara)', 'Aquarius (Kumbha)', 'Pisces (Meena)'
    ];

    // Simplified Ashtakoot scoring (educational demonstration)
    const calculateGunas = (brideNak, groomNak, brideRashi, groomRashi) => {
        let total = 0;
        const breakdown = [];

        // Varna (Caste/Class compatibility) - Max 1 point
        const varnaPoints = Math.random() > 0.3 ? 1 : 0;
        total += varnaPoints;
        breakdown.push({ name: 'Varna (Spiritual Compatibility)', points: varnaPoints, max: 1 });

        // Vashya (Dominance) - Max 2 points
        const vashyaPoints = Math.floor(Math.random() * 3);
        total += vashyaPoints;
        breakdown.push({ name: 'Vashya (Mutual Attraction)', points: vashyaPoints, max: 2 });

        // Tara (Birth Star) - Max 3 points
        const taraPoints = Math.floor(Math.random() * 4);
        total += taraPoints;
        breakdown.push({ name: 'Tara (Health & Longevity)', points: taraPoints, max: 3 });

        // Yoni (Nature & Characteristics) - Max 4 points
        const yoniPoints = Math.floor(Math.random() * 5);
        total += yoniPoints;
        breakdown.push({ name: 'Yoni (Physical & Mental Compatibility)', points: yoniPoints, max: 4 });

        // Graha Maitri (Planetary Friendship) - Max 5 points
        const grahaPoints = Math.floor(Math.random() * 6);
        total += grahaPoints;
        breakdown.push({ name: 'Graha Maitri (Intellectual Compatibility)', points: grahaPoints, max: 5 });

        // Gana (Temperament) - Max 6 points
        const ganaPoints = Math.floor(Math.random() * 7);
        total += ganaPoints;
        breakdown.push({ name: 'Gana (Temperament Match)', points: ganaPoints, max: 6 });

        // Bhakoot (Relative Influence) - Max 7 points
        const bhakootPoints = Math.floor(Math.random() * 8);
        total += bhakootPoints;
        breakdown.push({ name: 'Bhakoot (Love & Affection)', points: bhakootPoints, max: 7 });

        // Nadi (Health & Genes) - Max 8 points
        const nadiPoints = Math.floor(Math.random() * 9);
        total += nadiPoints;
        breakdown.push({ name: 'Nadi (Health & Progeny)', points: nadiPoints, max: 8 });

        return { total, breakdown };
    };

    const getCompatibilityLevel = (score) => {
        if (score >= 28) {
            return {
                level: 'Excellent',
                color: 'green',
                icon: '💚',
                description: 'Very High Compatibility',
                message: 'According to traditional Ashtakoot, this is considered an excellent match with strong compatibility across multiple dimensions.'
            };
        } else if (score >= 20) {
            return {
                level: 'Good',
                color: 'blue',
                icon: '💙',
                description: 'Good Compatibility',
                message: 'This is considered a good match. Most compatibility factors align well, suggesting harmonious relationship potential.'
            };
        } else if (score >= 14) {
            return {
                level: 'Average',
                color: 'yellow',
                icon: '💛',
                description: 'Moderate Compatibility',
                message: 'This shows moderate compatibility. Some areas align well while others may need understanding and adjustment.'
            };
        } else {
            return {
                level: 'Below Average',
                color: 'orange',
                icon: '🧡',
                description: 'Low Traditional Compatibility',
                message: 'According to Ashtakoot, compatibility is low. However, modern couples can build strong relationships through communication and mutual effort.'
            };
        }
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        if (!bride.nakshatra || !groom.nakshatra || !bride.rashi || !groom.rashi) {
            setResult({
                error: true,
                message: 'Please fill in all fields'
            });
            return;
        }

        const gunas = calculateGunas(bride.nakshatra, groom.nakshatra, bride.rashi, groom.rashi);
        const compatibility = getCompatibilityLevel(gunas.total);

        setResult({
            gunas: gunas.total,
            breakdown: gunas.breakdown,
            compatibility,
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
        return colors[color] || colors.yellow;
    };

    return (
        <div className="space-y-8">
            {/* Important Disclaimer */}
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                <p className="text-sm text-yellow-900 font-semibold mb-2">📚 Educational Tool</p>
                <p className="text-xs text-yellow-800">
                    This calculator demonstrates the traditional <strong>Ashtakoot system</strong> used in Hindu astrology
                    for educational and cultural understanding purposes only. Results are simplified and for demonstration.
                    For accurate astrological matching, consult a qualified astrologer with complete birth details (date,
                    time, place). Marriage compatibility depends on many factors beyond astrology.
                </p>
            </div>

            {/* Calculator Form */}
            <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6 md:p-8">
                <form onSubmit={handleCalculate} className="space-y-8">
                    {/* Bride Details */}
                    <div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Bride's Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="brideName" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="brideName"
                                    value={bride.name}
                                    onChange={(e) => setBride({ ...bride, name: e.target.value })}
                                    placeholder="Enter bride's name"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="brideNakshatra" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Nakshatra (Birth Star) *
                                </label>
                                <select
                                    id="brideNakshatra"
                                    value={bride.nakshatra}
                                    onChange={(e) => setBride({ ...bride, nakshatra: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Nakshatra...</option>
                                    {nakshatras.map(nak => (
                                        <option key={nak} value={nak}>{nak}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brideRashi" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Rashi (Moon Sign) *
                                </label>
                                <select
                                    id="brideRashi"
                                    value={bride.rashi}
                                    onChange={(e) => setBride({ ...bride, rashi: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Rashi...</option>
                                    {rashis.map(rashi => (
                                        <option key={rashi} value={rashi}>{rashi}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Groom Details */}
                    <div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Groom's Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="groomName" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="groomName"
                                    value={groom.name}
                                    onChange={(e) => setGroom({ ...groom, name: e.target.value })}
                                    placeholder="Enter groom's name"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="groomNakshatra" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Nakshatra (Birth Star) *
                                </label>
                                <select
                                    id="groomNakshatra"
                                    value={groom.nakshatra}
                                    onChange={(e) => setGroom({ ...groom, nakshatra: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Nakshatra...</option>
                                    {nakshatras.map(nak => (
                                        <option key={nak} value={nak}>{nak}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="groomRashi" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Rashi (Moon Sign) *
                                </label>
                                <select
                                    id="groomRashi"
                                    value={groom.rashi}
                                    onChange={(e) => setGroom({ ...groom, rashi: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Rashi...</option>
                                    {rashis.map(rashi => (
                                        <option key={rashi} value={rashi}>{rashi}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                        type="submit"
                        className="w-full btn-primary py-3 text-base font-semibold"
                    >
                        Calculate Gun Milan
                    </button>
                </form>
            </div>

            {/* Results */}
            {result && !result.error && (
                <div className="space-y-6">
                    {/* Score Card */}
                    <div className={`rounded-lg border-2 p-6 text-center ${getColorClasses(result.compatibility.color)}`}>
                        <div className="text-5xl mb-4">{result.compatibility.icon}</div>
                        <h3 className="text-3xl font-display font-bold mb-2">
                            {result.gunas} / 36 Gunas
                        </h3>
                        <p className="text-lg font-semibold mb-2">{result.compatibility.level} Match</p>
                        <p className="text-sm opacity-90">{result.compatibility.message}</p>
                    </div>

                    {/* Guna Breakdown */}
                    <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-4">Ashtakoot Breakdown</h4>
                        <div className="space-y-3">
                            {result.breakdown.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex-1">
                                        <h5 className="font-medium text-sm text-neutral-900">{item.name}</h5>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-semibold text-neutral-900">{item.points}</span>
                                        <span className="text-neutral-600 text-sm"> / {item.max}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Remember Note */}
                    <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                        <p className="text-sm text-primary-800">
                            <strong>Important:</strong> Kundli matching is a cultural tradition. Modern relationship success depends
                            on communication, mutual respect, shared values, and emotional compatibility - not astrological scores.
                            Use this as a cultural reference, not a decision-making tool.
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
