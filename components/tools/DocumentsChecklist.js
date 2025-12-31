'use client';

import { useState } from 'react';

export default function DocumentsChecklist() {
    const [selectedState, setSelectedState] = useState('');
    const [selectedAct, setSelectedAct] = useState('hindu');

    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
        'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal'
    ];

    const commonDocuments = {
        hindu: {
            name: 'Hindu Marriage Act, 1955',
            documents: [
                { item: 'Application Form', required: true, note: 'Available at marriage registration office or online' },
                { item: 'Proof of Date of Birth', required: true, note: 'Birth certificate, school leaving certificate, or passport' },
                { item: 'Proof of Address', required: true, note: 'Aadhar card, voter ID, passport, or driving license' },
                { item: 'Photographs', required: true, note: '3-4 passport size photos of bride and groom' },
                { item: 'Marriage Invitation Card', required: false, note: 'If already married' },
                { item: 'Two Witnesses', required: true, note: 'ID proof and photos of witnesses' },
                { item: 'Affidavit', required: true, note: 'Declaring marital status, nationality, and consent' },
                { item: 'Divorce Decree (if applicable)', required: false, note: 'For divorcees - certified copy' },
                { item: 'Death Certificate (if applicable)', required: false, note: 'For widows/widowers - spouse\'s death certificate' },
            ]
        },
        special: {
            name: 'Special Marriage Act, 1954',
            documents: [
                { item: 'Notice of Intended Marriage', required: true, note: '30-day notice period required' },
                { item: 'Application Form', required: true, note: 'Form available at district marriage office' },
                { item: 'Proof of Date of Birth', required: true, note: 'Birth certificate, school certificate, or passport' },
                { item: 'Proof of Address', required: true, note: 'Residence proof for both parties (minimum 30 days)' },
                { item: 'Photographs', required: true, note: '3-4 passport size photos each' },
                { item: 'Three Witnesses', required: true, note: 'ID proof and photos of 3 witnesses' },
                { item: 'Affidavit', required: true, note: 'Declaring marital status, nationality, mental soundness' },
                { item: 'No Objection from Parents (if applicable)', required: false, note: 'For inter-faith marriages in some states' },
                { item: 'Divorce Decree (if applicable)', required: false, note: 'Certified copy if previously married' },
                { item: 'Death Certificate (if applicable)', required: false, note: 'If widow/widower' },
            ]
        },
        muslim: {
            name: 'Muslim Personal Law',
            documents: [
                { item: 'Nikahnama (Marriage Certificate)', required: true, note: 'Issued by Qazi after nikah ceremony' },
                { item: 'Proof of Date of Birth', required: true, note: 'Birth certificate or school certificate' },
                { item: 'Proof of Address', required: true, note: 'Aadhar card, voter ID, or passport' },
                { item: 'Photographs', required: true, note: '3-4 passport size photos' },
                { item: 'Witnesses', required: true, note: 'Two male witnesses - ID proof and signatures' },
                { item: 'Mehr Amount Document', required: true, note: 'Agreed upon dower amount' },
                { item: 'Consent of Bride', required: true, note: 'Written or verbal consent recorded' },
                { item: 'Wali (Guardian) Consent', required: false, note: 'For bride if required by tradition' },
            ]
        },
        christian: {
            name: 'Indian Christian Marriage Act, 1872',
            documents: [
                { item: 'Notice of Marriage', required: true, note: 'Published in church for 3 consecutive Sundays' },
                { item: 'Baptism Certificate', required: true, note: 'Proof of Christian faith' },
                { item: 'Proof of Date of Birth', required: true, note: 'Birth certificate or school certificate' },
                { item: 'Proof of Address', required: true, note: 'Residence proof' },
                { item: 'Photographs', required: true, note: '3-4 passport size photos' },
                { item: 'Two Witnesses', required: true, note: 'Christian witnesses with ID proof' },
                { item: 'License from District Registrar', required: true, note: 'Marriage license' },
                { item: 'Consent of Parents (if minor)', required: false, note: 'If bride/groom under 21' },
                { item: 'Divorce Decree (if applicable)', required: false, note: 'For previously married individuals' },
            ]
        }
    };

    const stateSpecificNotes = {
        'Delhi': 'Registration within 60 days of marriage. Fee: ₹100-200. Online appointment available.',
        'Maharashtra': 'Compulsory registration within prescribed time. Fee: ₹500. Fast track available for ₹1000.',
        'Karnataka': 'Registration mandatory. Fee: ₹200-500. Separate registration offices for different acts.',
        'Tamil Nadu': 'Online registration available. Fee: ₹200. Certificate issued within 3-7 days.',
        'Uttar Pradesh': 'Fee: ₹100-300. Registration can be done at Sub-Registrar office.',
        'West Bengal': 'Fee: ₹200-400. Online portal available for application.',
        'Gujarat': 'Registration at district marriage registration office. Fee: ₹100-200.',
        'Rajasthan': 'Fee: ₹200. Both parties must be present for registration.',
        'Punjab': 'Fee: ₹100-200. Registration within 60 days recommended.',
        'Haryana': 'Fee: ₹200-400. Online application available.',
        'Kerala': 'Fee: ₹200. Registration office at each district headquarters.',
        'Telangana': 'Online registration system. Fee: ₹200-500.',
    };

    const selectedDocuments = selectedAct ? commonDocuments[selectedAct] : null;
    const stateNote = selectedState && stateSpecificNotes[selectedState] ? stateSpecificNotes[selectedState] : null;

    return (
        <div className="space-y-8">
            {/* Selection */}
            <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Select Your Marriage Registration Details</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* State Selection */}
                    <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Select Your State
                        </label>
                        <select
                            id="state"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="">Choose a state...</option>
                            {states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    {/* Marriage Act Selection */}
                    <div>
                        <label htmlFor="act" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Marriage Act / Religion
                        </label>
                        <select
                            id="act"
                            value={selectedAct}
                            onChange={(e) => setSelectedAct(e.target.value)}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="hindu">Hindu Marriage Act (Hindu/Sikh/Jain/Buddhist)</option>
                            <option value="special">Special Marriage Act (Inter-faith/Civil)</option>
                            <option value="muslim">Muslim Personal Law</option>
                            <option value="christian">Christian Marriage Act</option>
                        </select>
                    </div>
                </div>

                {/* State-Specific Note */}
                {stateNote && (
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                        <p className="text-sm text-primary-800">
                            <strong>{selectedState} Specific Information:</strong> {stateNote}
                        </p>
                    </div>
                )}
            </div>

            {/* Documents Checklist */}
            {selectedDocuments && (
                <div className="bg-white rounded-lg shadow-md border border-neutral-200 p-6 md:p-8">
                    <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                        Required Documents
                    </h3>
                    <p className="text-neutral-600 mb-6">
                        For registration under <strong>{selectedDocuments.name}</strong>
                    </p>

                    <div className="space-y-3">
                        {selectedDocuments.documents.map((doc, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-4 p-4 rounded-lg border-2 ${doc.required
                                        ? 'bg-primary-50 border-primary-300'
                                        : 'bg-neutral-50 border-neutral-200'
                                    }`}
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${doc.required
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-neutral-400 text-white'
                                        }`}>
                                        {doc.required ? '✓' : 'i'}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h4 className="font-semibold text-neutral-900">{doc.item}</h4>
                                        {doc.required && (
                                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                                                Required
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-neutral-600">{doc.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Print Checklist */}
                    <div className="mt-8 pt-6 border-t border-neutral-200">
                        <button
                            onClick={() => window.print()}
                            className="btn-secondary w-full md:w-auto"
                        >
                            📄 Print Checklist
                        </button>
                    </div>
                </div>
            )}

            {/* General Tips */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">💡 Important Tips</h4>
                <ul className="space-y-2 text-sm text-green-800">
                    <li>✓ Carry original documents along with photocopies</li>
                    <li>✓ Self-attest all photocopies</li>
                    <li>✓ Both bride and groom must be present for registration</li>
                    <li>✓ Witnesses should carry original ID proofs</li>
                    <li>✓ Verify specific requirements with your local registration office</li>
                    <li>✓ Book appointment in advance if online booking is available</li>
                </ul>
            </div>
        </div>
    );
}
