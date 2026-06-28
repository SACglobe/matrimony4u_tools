import React from 'react';

export default function MarriageEligibilityGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the core eligibility conditions under the Hindu Marriage Act?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To be eligible under the Hindu Marriage Act, both parties must be Hindus (or Buddhists, Jains, Sikhs), the groom must be 21+, the bride 18+, neither party should have a living spouse, both must be of sound mind capable of giving consent, and they must not fall within the degrees of prohibited relationship or be sapindas of each other."
        }
      },
      {
        "@type": "Question",
        "name": "Can a Hindu marry a non-Hindu legally in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a Hindu can marry a person of a different religion without either party converting. This type of inter-faith marriage is legally registered under the Special Marriage Act, 1954, which is a secular law."
        }
      },
      {
        "@type": "Question",
        "name": "What is the prohibited degree of relationship (Sapinda)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sapinda relationship refers to the prohibition of marrying close blood relatives. Generally, it extends as far as the third generation through the mother and the fifth generation through the father, unless local customs permit it (such as certain South Indian communities marrying first cousins)."
        }
      }
    ]
  };

  return (
    <div className="mt-16 bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
        Comprehensive Guide to Marriage Eligibility Laws in India
      </h2>
      
      <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
        <p>
          Determining your eligibility to marry in India is not merely a matter of reaching a certain age; it involves navigating a complex web of personal laws, secular acts, and cultural exceptions. India does not have a Uniform Civil Code (UCC) implemented nationwide (though debates continue), meaning that the legality of your marriage largely depends on your religion, your partner's religion, and the specific Act under which you choose to register your union.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">The Hindu Marriage Act, 1955 (HMA)</h3>
        <p>
          The Hindu Marriage Act applies to any person who is a Hindu, Buddhist, Jaina, or Sikh by religion. It explicitly excludes Muslims, Christians, Parsis, and Jews, who are governed by their respective personal laws. For a marriage to be legally valid under Section 5 of the HMA, several strict conditions must be met:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Monogamy:</strong> Neither party must have a living spouse at the time of the marriage. Bigamy is a punishable criminal offense under the Indian Penal Code.</li>
          <li><strong>Mental Capacity and Consent:</strong> Both parties must be capable of giving valid consent. Neither party should suffer from a mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children.</li>
          <li><strong>Age of Consent:</strong> The bridegroom must have completed the age of 21 years, and the bride must have completed 18 years.</li>
          <li><strong>Prohibited Degrees of Relationship:</strong> The parties must not be within the degrees of prohibited relationship (e.g., marrying a sibling, aunt, or uncle).</li>
          <li><strong>Sapinda Relationship:</strong> The parties cannot be "Sapindas" of each other. This generally means you cannot marry someone who shares a common ancestor within three generations on the mother's side and five generations on the father's side.</li>
        </ul>
        <p>
          <em>Troubleshooting Customary Exceptions:</em> It is crucial to note that the HMA allows exceptions to the Prohibited Degree and Sapinda rules if the custom or usage governing each party permits such a marriage. For example, in many South Indian communities, marrying a maternal uncle or a first cousin is culturally sanctioned and legally permitted under this customary exception clause.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">The Special Marriage Act, 1954 (SMA)</h3>
        <p>
          If you are engaging in an inter-faith marriage (e.g., a Hindu marrying a Muslim or a Christian), or if you simply prefer a civil marriage without religious ceremonies, the Special Marriage Act is your legal recourse. This is a progressive, secular law that allows any two individuals in India to marry, irrespective of their religion or caste, without requiring either partner to convert.
        </p>
        <p>
          The eligibility conditions under the SMA closely mirror the HMA (monogamy, age of 21/18, sound mind, and not within prohibited relationships). However, the procedural requirements are notably different and more stringent. 
        </p>
        <p>
          <strong>The 30-Day Notice Period:</strong> To marry under the SMA, couples must give a formal "Notice of Intended Marriage" to the Marriage Officer of the district where at least one of the parties has resided for a minimum of 30 days. This notice is published publicly by the Marriage Officer, inviting objections from the public for a period of 30 days. If no legal objections are raised (e.g., claims of an existing marriage or minority age), the marriage can be solemnized.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Troubleshooting Common Eligibility Issues</h3>
        <p>
          Couples frequently run into bureaucratic or legal hurdles when planning their marriage. Here is how to navigate the most common eligibility roadblocks:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Missing Documentation:</strong> To prove your eligibility (specifically age and address), standard documents like Aadhaar, Passport, or 10th-grade mark sheets are required. If you lack these, an affidavit sworn before a notary magistrate can sometimes serve as a substitute, depending on the state registrar's discretion.</li>
          <li><strong>Previous Marriages:</strong> If either party was previously married, they are strictly ineligible to remarry until they possess a finalized Divorce Decree from a competent family court, or a Death Certificate of the former spouse. Separation agreements or "mutual understandings" hold no legal weight.</li>
          <li><strong>Vigilante Interference:</strong> For inter-faith couples utilizing the Special Marriage Act, the 30-day public notice period has historically been exploited by vigilante groups to harass couples. If you fear for your safety, you can petition the High Court for police protection. Additionally, several states have moved to stop sending these notices directly to the parents' homes to protect the couple's privacy.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Upcoming Legislative Changes</h3>
        <p>
          The legal landscape of marriage eligibility is actively shifting. The Prohibition of Child Marriage (Amendment) Bill has been introduced in Parliament, which proposes to raise the minimum legal age of marriage for women from 18 to 21 years, bringing it on par with men. This proposed change aims to promote women's education, improve maternal health, and ensure true parity. If this bill passes into law, it will universally override all personal laws regarding the age of marriage.
        </p>
        <p>
          Always ensure you are consulting the most up-to-date legal statutes or a qualified family lawyer before initiating your marriage registration process.
        </p>
      </div>
    </div>
  );
}
