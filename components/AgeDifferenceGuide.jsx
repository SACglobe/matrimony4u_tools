import React from 'react';

export default function AgeDifferenceGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the legal age for marriage in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under both the Hindu Marriage Act, 1955 and the Special Marriage Act, 1954, the legal minimum age for marriage in India is 21 years for males and 18 years for females."
        }
      },
      {
        "@type": "Question",
        "name": "Does a large age difference affect marriage registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Indian law does not mandate a maximum age difference between spouses. As long as both individuals meet the minimum legal age requirement and consent freely, the marriage can be legally registered."
        }
      },
      {
        "@type": "Question",
        "name": "Are there psychological implications to large age gaps in marriage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Couples with significant age gaps may face differing life stages, financial priorities, and societal judgments. However, studies show that shared values, strong communication, and mutual respect are far more indicative of marital success than chronological age."
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
        Understanding Marital Age Differences: Legal, Social, and Psychological Perspectives
      </h2>
      
      <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
        <p>
          The conversation around the "ideal" age difference between a husband and wife has evolved significantly over the decades. Traditionally, many cultures, particularly in South Asia, preferred the groom to be older than the bride by a margin of 3 to 5 years. This stemmed from historical socio-economic structures where men were the primary earners and older age equated to financial stability and maturity. However, modern marital dynamics have shifted dramatically. Today, couples prioritize emotional compatibility, shared life goals, and intellectual parity over rigid chronological milestones.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Legal Frameworks and Marriage Age in India</h3>
        <p>
          Before analyzing the sociological impact of age gaps, it is imperative to understand the strict legal boundaries governing marriage in India. The foundational laws, primarily the <strong>Hindu Marriage Act of 1955</strong> and the <strong>Special Marriage Act of 1954</strong>, explicitly define the minimum age of marital consent. Under Section 5(iii) of the Hindu Marriage Act, the bridegroom must have completed the age of 21 years, and the bride must have completed 18 years at the time of the marriage.
        </p>
        <p>
          A critical point of legal clarity is that <strong>there is no legally mandated maximum age difference</strong>. Whether the groom is older by 10 years, or the bride is older by 5 years, the state does not interfere, provided both parties have reached the legal minimum age and have entered into the union with free and informed consent. If you encounter issues during registration where a registrar questions an unconventional age gap, you are completely within your legal rights to proceed. The law purely concerns itself with protecting minors from child marriage and ensuring consent, not dictating the mathematics of love.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">The Psychology Behind Age Gaps</h3>
        <p>
          Psychological research into "May-December romances" (relationships with a significant age gap) offers fascinating insights. While society often raises eyebrows at age differences exceeding 10 years, clinical psychologists suggest that chronological age is merely a number; it is <em>developmental age</em> and <em>life stage</em> that truly matter.
        </p>
        <p>
          Couples with a large age gap must proactively navigate what sociologists call "life stage discordance." For example, a 25-year-old partner might be focused on aggressive career growth, intensive networking, and active socializing, while a 40-year-old partner might be seeking stability, starting a family, or early retirement planning. 
        </p>
        <p>
          To troubleshoot these potential friction points, couples are advised to engage in pre-marital counseling. Establishing a shared 5-year and 10-year life plan can mitigate the risks of life-stage mismatch. Questions regarding financial management, timeline for children, and lifestyle expectations must be addressed transparently. When these structural issues are managed, age-gap couples often report high levels of relationship satisfaction, citing that the older partner brings stability and wisdom, while the younger partner brings energy and fresh perspectives.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">The Evolution of the "Older Bride" Dynamic</h3>
        <p>
          Historically, a marriage where the bride is older than the groom was considered highly unconventional in Indian society. However, demographic shifts and women's increasing economic independence are normalizing this dynamic. High-profile celebrity marriages have further destigmatized this trend.
        </p>
        <p>
          From a biological standpoint, an older bride and younger groom dynamic can sometimes pose considerations regarding fertility windows, assuming the couple wishes to have biological children. In such cases, medical consultations regarding reproductive timelines or options like egg freezing and IVF become practical, actionable steps for the couple to explore together.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Practical Troubleshooting: How to Deal with Societal Pushback</h3>
        <p>
          One of the most significant challenges for couples with unconventional age differences is navigating family disapproval or societal judgment. If you are facing pushback from traditional families regarding your age gap, consider the following practical strategies:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Lead with Alignment:</strong> When discussing your partner with your family, focus heavily on your shared values, financial stability, and emotional maturity rather than defending the age number.</li>
          <li><strong>Set Boundaries:</strong> Establish firm boundaries with extended relatives. Make it clear that while you respect their concern, the decision is final and mutual respect for your partner is non-negotiable.</li>
          <li><strong>Focus on the Legal Foundation:</strong> If religious or community leaders object, politely remind them that your union is fully compliant with the Special Marriage Act or the Hindu Marriage Act. In cases of severe familial opposition, you may opt for court marriage under the Special Marriage Act, which bypasses the need for religious ceremonies entirely.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Conclusion: Does Age Really Matter?</h3>
        <p>
          Ultimately, calculating the age difference using our tool above is merely a mathematical exercise. The success of a marriage is never determined by a birth certificate. It is forged through mutual respect, financial transparency, emotional intelligence, and a shared vision for the future. Whether you are the same age, or separated by a decade, the legal framework protects your right to choose, and psychological frameworks provide the tools to build a lasting, resilient partnership.
        </p>
      </div>
    </div>
  );
}
