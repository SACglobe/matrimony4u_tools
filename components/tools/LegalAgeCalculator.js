'use client';

import { useState } from 'react';

export default function LegalAgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [result, setResult] = useState(null);

    const calculateAge = (birthDateStr) => {
        const today = new Date();
        const birth = new Date(birthDateStr);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        if (!birthDate || !gender) {
            setResult({
                eligible: false,
                message: 'Please fill in all fields',
                type: 'error'
            });
            return;
        }

        const age = calculateAge(birthDate);
        const legalAge = gender === 'male' ? 21 : 18;
        const eligible = age >= legalAge;

        let message = '';
        let details = '';

        if (eligible) {
            message = `✓ You are ${age} years old and legally eligible to marry in India.`;
            details = `Under Indian law, ${gender === 'male' ? 'men' : 'women'} must be at least ${legalAge} years old to marry.`;
        } else {
            const yearsRemaining = legalAge - age;
            message = `✗ You are ${age} years old and NOT yet legally eligible to marry.`;
            details = `You need to wait ${yearsRemaining} more year${yearsRemaining > 1 ? 's' : ''} to meet the legal requirement of ${legalAge} years for ${gender === 'male' ? 'men' : 'women'}.`;
        }

        setResult({
            eligible,
            age,
            legalAge,
            message,
            details,
            type: eligible ? 'success' : 'warning'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6 md:p-8">
            <form onSubmit={handleCalculate} className="space-y-6">
                {/* Birth Date Input */}
                <div>
                    <label htmlFor="birthDate" className="block text-sm font-semibold text-neutral-900 mb-2">
                        Your Date of Birth
                    </label>
                    <input
                        type="date"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Gender Selection */}
                <div>
                    <label className="block text-sm font-semibold text-neutral-900 mb-2">
                        Gender
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setGender('male')}
                            className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${gender === 'male'
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                                }`}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => setGender('female')}
                            className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${gender === 'female'
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                                }`}
                        >
                            Female
                        </button>
                    </div>
                </div>

                {/* Calculate Button */}
                <button
                    type="submit"
                    className="w-full btn-primary py-3 text-base font-semibold"
                >
                    Check Eligibility
                </button>
            </form>

            {/* Result Display */}
            {result && (
                <div className={`mt-6 p-6 rounded-lg border-2 ${result.type === 'success'
                        ? 'bg-green-50 border-green-500'
                        : result.type === 'warning'
                            ? 'bg-yellow-50 border-yellow-500'
                            : 'bg-red-50 border-red-500'
                    }`}>
                    <div className="text-center mb-4">
                        <div className={`text-5xl mb-2 ${result.eligible ? 'text-green-600' : 'text-yellow-600'
                            }`}>
                            {result.eligible ? '✓' : '⏳'}
                        </div>
                        <p className={`text-xl font-semibold mb-2 ${result.eligible ? 'text-green-900' : 'text-yellow-900'
                            }`}>
                            {result.message}
                        </p>
                        <p className={`text-sm ${result.eligible ? 'text-green-800' : 'text-yellow-800'
                            }`}>
                            {result.details}
                        </p>
                    </div>

                    {result.eligible && (
                        <div className="mt-4 pt-4 border-t border-green-200">
                            <p className="text-sm text-green-800 text-center">
                                <strong>Next Step:</strong> Check state-specific marriage registration requirements
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Important Notice */}
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <p className="text-xs text-neutral-600">
                    <strong>Note:</strong> This calculator checks compliance with the Prohibition of Child Marriage Act, 2006
                    and Hindu Marriage Act, 1955. Always verify with local authorities for state-specific requirements.
                </p>
            </div>
        </div>
    );
}
