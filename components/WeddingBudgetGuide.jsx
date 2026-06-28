import React from 'react';

export default function WeddingBudgetGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an average Indian wedding cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of an Indian wedding varies wildly based on region, guest count, and scale. On average, a middle-class urban Indian wedding costs between ₹10 Lakhs to ₹25 Lakhs, with catering and venue taking up nearly 50% of the total budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to split wedding expenses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While traditional structures placed the financial burden entirely on the bride's family, modern couples increasingly opt for a 50-50 split between both families, or split the costs proportionately based on the number of guests invited by each side."
        }
      },
      {
        "@type": "Question",
        "name": "How can we reduce wedding expenses without compromising the experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective ways to reduce costs are trimming the guest list, choosing off-season or non-Muhurtham dates to lower venue costs, opting for digital invitations, and renting heavy bridal jewelry instead of purchasing it."
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
        Mastering the Indian Wedding Budget: Financial Planning and Cost Optimization
      </h2>
      
      <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
        <p>
          An Indian wedding is often considered a grand socio-cultural festival, characterized by vibrant colors, multiple ceremonies, and expansive guest lists. However, this grandeur comes with a steep financial reality. The Indian wedding industry is a multi-billion dollar market, and without a rigid financial framework, it is incredibly easy for families to deplete life savings or fall into high-interest debt. Our Wedding Budget Calculator provides a mathematical breakdown, but understanding the strategy behind those numbers is what will truly save you money.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">The Standard Expense Breakdown</h3>
        <p>
          To effectively manage a wedding budget, you must understand where the money is going. While every wedding is unique, financial planners generally suggest the following allocation matrix for an urban Indian wedding:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Venue and Catering (40% - 50%):</strong> This is the largest expense block. It scales linearly with your guest list. More people mean a larger hall and more plates of food.</li>
          <li><strong>Jewelry and Apparel (15% - 20%):</strong> Gold jewelry, Kanjeevaram silks, designer lehengas, and bespoke sherwanis dominate this category.</li>
          <li><strong>Photography and Videography (10% - 15%):</strong> Pre-wedding shoots, candid photography, drone footage, and cinematic wedding films.</li>
          <li><strong>Decor and Florals (10% - 15%):</strong> Mandap design, lighting, stage setups, and floral arrangements.</li>
          <li><strong>Miscellaneous and Contingency (10%):</strong> Logistics, makeup artists, digital/print invitations, priest fees, and emergency funds.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Practical Troubleshooting: How to Avoid Financial Traps</h3>
        <p>
          The most common financial trap in wedding planning is "scope creep"—when small, unplanned upgrades snowball into massive budget overruns. Here are highly actionable strategies to troubleshoot and optimize your budget:
        </p>

        <h4 className="text-xl font-bold text-neutral-800 mt-6">1. Ruthlessly Optimize the Guest List</h4>
        <p>
          The single most effective way to cut costs is to reduce the guest count. If a plate of food costs ₹1,000, cutting 100 distant acquaintances immediately saves ₹1,00,000 in food alone, not to mention the savings on seating, venue size, and return gifts. Shift towards the modern trend of <strong>Intimate Weddings</strong> (50-150 guests) for a more personal, luxurious experience at a fraction of the cost.
        </p>

        <h4 className="text-xl font-bold text-neutral-800 mt-6">2. Hack the Venue and Date Logistics</h4>
        <p>
          Wedding venues charge a massive premium on highly auspicious dates (Subha Muhurtham days). If your families are flexible, booking a venue on a weekday, during an off-season month, or on a non-muhurtham day can slash venue rental costs by up to 40%. Additionally, choosing a venue that includes in-house decor and catering often works out cheaper than hiring external vendors who charge setup fees.
        </p>

        <h4 className="text-xl font-bold text-neutral-800 mt-6">3. Smart Jewelry and Apparel Strategies</h4>
        <p>
          A bridal lehenga or a heavy reception necklace is typically worn exactly once. Instead of sinking lakhs into an outfit that will sit in a closet, look into the booming rental market. Premium bridal wear and heavy imitation temple jewelry can be rented for 10% of their retail cost. Invest your actual wealth in solid gold coins or mutual funds that appreciate, rather than depreciating designer wear.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Navigating the Expense Split</h3>
        <p>
          Historically, the bride's family bore the overwhelming majority of the wedding expenses. In modern, progressive families, this outdated tradition is being discarded in favor of fair financial splits. 
        </p>
        <p>
          The two most recommended approaches are:
          <br/>
          <strong>The 50-50 Split:</strong> Both families pool a specific amount of money into a joint wedding account, and all expenses are drawn from there equally.
          <br/>
          <strong>The Proportionate Split:</strong> If the groom's side invites 400 guests and the bride's side invites 100 guests, splitting costs 50-50 is unfair. Instead, fixed costs (like decor and photography) are split equally, while variable costs (like catering per plate) are paid by each family according to their exact guest count.
        </p>

        <h3 className="text-2xl font-semibold text-primary-800 mt-8 mb-4">Conclusion: Marriage vs. Wedding</h3>
        <p>
          Always remember that a <em>wedding</em> is a two-day event, but a <em>marriage</em> is a lifetime commitment. Entering a marriage burdened by personal loans or depleted parental savings creates unnecessary stress during the honeymoon phase. Use the calculator tools to strictly monitor your outflows, keep a 10% contingency buffer for hidden costs, and prioritize the elements of the wedding that truly matter to you as a couple.
        </p>
      </div>
    </div>
  );
}
