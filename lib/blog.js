// Blog post data structure and management
export const BLOG_CATEGORIES = {
    legal: { name: 'Legal & Compliance', slug: 'legal', color: 'primary' },
    planning: { name: 'Wedding Planning', slug: 'planning', color: 'secondary' },
    finance: { name: 'Financial Planning', slug: 'finance', color: 'accent' },
    culture: { name: 'Cultural Traditions', slug: 'culture', color: 'purple' },
    relationships: { name: 'Relationships', slug: 'relationships', color: 'pink' },
};

export const BLOG_POSTS = [
    {
        slug: 'legal-marriage-age-india-explained',
        title: 'Legal Marriage Age in India: Complete Guide for 2025',
        excerpt: 'Everything you need to know about minimum marriage age laws in India, state variations, penalties for underage marriage, and recent legal changes.',
        category: 'legal',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-01',
        readTime: '8 min read',
        image: null,
    },
    {
        slug: 'indian-wedding-budget-breakdown',
        title: 'Indian Wedding Budget Breakdown: Complete Cost Guide',
        excerpt: 'Detailed breakdown of wedding costs in India by ceremony, city-wise comparisons, cost-saving tips, and realistic budget allocation strategies.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-02',
        readTime: '10 min read',
        image: null,
        detailedGuide: {
            budgetBreakdownTable: [
                { category: 'Venue & Banquet Mandapam', percentage: '28-32%', description: 'Main hall rental, air conditioning, stage setup, power backup, and basic lighting' },
                { category: 'Catering & Beverages', percentage: '25-30%', description: 'Multi-course lunch and dinner, live chaat stalls, dessert bars, and service staff' },
                { category: 'Jewelry & Precious Ornaments', percentage: '15-20%', description: 'Bridal gold sets, mangalsutra, wedding rings, and traditional heirloom ornaments' },
                { category: 'Clothing & Bridal Trousseau', percentage: '10-12%', description: 'Bridal lehengas, silk sarees, groom sherwanis, and immediate family attire' },
                { category: 'Photography & Cinematography', percentage: '8-10%', description: 'Candid photographer, traditional video team, drone coverage, and printed albums' },
                { category: 'Decor & Floral Production', percentage: '7-10%', description: 'Mandap floral canopy, entrance arches, table centerpieces, and stage backdrop' },
                { category: 'Entertainment & Music', percentage: '3-5%', description: 'Professional DJ, dhol troupe, live instrumentalists, and sound system rental' },
                { category: 'Logistics, Invitations & Gifts', percentage: '3-5%', description: 'Guest transport, hotel rooms, invitation printing, and return gift hampers' },
                { category: 'Emergency Contingency Fund', percentage: '10-15%', description: 'Buffer for overtime charges, last-minute guest additions, and vendor tips' }
            ],
            checklist: [
                'Establish a non-negotiable hard ceiling budget before contacting any commercial vendors',
                'Divide the total wedding fund into dedicated ceremony buckets (Mehendi, Sangeet, Muhurtham, Reception)',
                'Negotiate composite packages with venues that include complimentary bridal suites and generator backups',
                'Lock in catering rates per plate at least 6 months prior to avoid food commodity inflation',
                'Schedule jewelry purchases across multiple quarters using rupee-cost averaging',
                'Obtain written contracts detailing overtime rates, cancellation terms, and payment milestone dates',
                'Reserve at least 12% of total funds in a liquid account for unbudgeted emergency expenses'
            ],
            cityComparison: [
                { city: 'Mumbai & Delhi NCR', averageSpend: '₹25L - ₹65L', costPerPlate: '₹1,800 - ₹4,500', venueBookingWindow: '9-12 Months' },
                { city: 'Bengaluru & Chennai', averageSpend: '₹18L - ₹45L', costPerPlate: '₹1,200 - ₹3,200', venueBookingWindow: '8-10 Months' },
                { city: 'Hyderabad & Kolkata', averageSpend: '₹15L - ₹38L', costPerPlate: '₹1,000 - ₹2,800', venueBookingWindow: '6-9 Months' },
                { city: 'Tier-2 Cities (Jaipur, Lucknow, Pune)', averageSpend: '₹10L - ₹25L', costPerPlate: '₹750 - ₹1,800', venueBookingWindow: '4-6 Months' }
            ],
            comprehensiveAdvice: 'Planning an Indian wedding requires treating your personal finances with the same rigorous scrutiny as a major capital expenditure project. Most couples stumble into financial anxiety not because their initial vision was unrealistic, but because small peripheral costs—such as generator fuel surcharges, service staff gratuities, last-minute room upgrades for outstation relatives, and bespoke embroidery alterations—compound into hundreds of thousands of rupees of unaccounted debt. To maintain fiscal discipline, enforce a 3-tier vendor budgeting protocol: Tier 1 covers non-negotiable legal and hospitality anchors (hall rental, core catering, basic lighting); Tier 2 covers aesthetic enhancements (designer clothing, floral mandap canopies, candid cinematography); and Tier 3 covers luxury indulgences (celebrity DJs, imported floral displays, drone light shows). If commodity inflation or guest list expansion forces compromises, trim exclusively from Tier 3 before ever touching emergency contingency reserves.',
            roadmap: [
                { phase: '12-10 Months Prior', title: 'Cap Setting & Bank Account Separation', details: 'Establish non-negotiable budget ceiling, open dedicated high-yield joint savings account, and verify existing cash reserves without relying on speculative market returns.' },
                { phase: '9-7 Months Prior', title: 'Venue & Primary Vendor Lock-In', details: 'Contract primary wedding hall and master catering agency with fixed plate rates to hedge against annual food commodity inflation.' },
                { phase: '6-4 Months Prior', title: 'Staggered Gold & Attire Purchases', details: 'Accumulate jewelry across multiple buying windows using rupee-cost averaging, and lock tailor commitments for bridal trousseau.' },
                { phase: '3-2 Months Prior', title: 'RSVP Audit & Plate Headcount Calibration', details: 'Audit tentative RSVPs and inform caterers of minimum guaranteed plate count rather than maximum invited headcount.' },
                { phase: '1 Month Prior', title: 'Contract Finalization & Payment Schedule', details: 'Draft written payment schedules with vendors ensuring 25% final balance is retained until post-wedding delivery of albums and services.' },
                { phase: 'Post-Wedding', title: 'Financial Reconciliation & Recovery', details: 'Settle remaining vendor tabs against written receipts, tally wedding gift shagun contributions, and invest surplus funds into long-term family assets.' }
            ],
            faqs: [
                { q: 'How much does an average middle-class Indian wedding cost in 2025?', a: 'In tier-1 and tier-2 cities, a typical 300 to 500 guest wedding costs between ₹15 lakhs and ₹35 lakhs. Careful date selection and guest tiering can keep this under ₹12 lakhs without compromising ceremonial beauty.' },
                { q: 'What is the single most common budgeting mistake made by families?', a: 'Underestimating catering and beverage consumption during pre-wedding high-tea and late-night post-ceremony gatherings, which frequently adds 15-20% to food bills above quoted dinner plate minimums.' },
                { q: 'How should couples balance parental financial contributions?', a: 'Conduct structured three-way meetings where parents state fixed lump-sum contribution ceilings rather than open-ended promises, allowing the couple to plan within definite boundaries.' }
            ],
            expertTips: 'To maximize your wedding financial efficiency, prioritize items guests interact with directly: exceptional food, comfortable climate control, and punctuality. Scaling back elaborate floral centerpieces or oversized print invitations can save up to ₹2.5 lakhs without compromising guest satisfaction.'
        }
    },
    {
        slug: 'marriage-registration-process-guide',
        title: 'Marriage Registration in India: Step-by-Step Process',
        excerpt: 'Complete guide to marriage registration across Indian states, required documents, timelines, fees, and common mistakes to avoid.',
        category: 'legal',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-03',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'age-difference-marriage-significance',
        title: 'Age Difference in Marriage: What Research Says',
        excerpt: 'Scientific research on age gaps in marriages, cultural perspectives in India, and practical considerations for different age differences.',
        category: 'relationships',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-04',
        readTime: '7 min read',
        image: null,
    },
    {
        slug: 'kundli-matching-modern-perspective',
        title: 'Kundli Matching: Balancing Tradition and Modern Thinking',
        excerpt: 'Understanding Ashtakoot Kundli matching system, its cultural significance, scientific perspective, and how modern couples approach it.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-05',
        readTime: '9 min read',
        image: null,
    },
    {
        slug: 'hindu-wedding-rituals-complete-guide',
        title: 'Hindu Wedding Rituals: Complete Step-by-Step Guide',
        excerpt: 'Comprehensive guide to traditional Hindu wedding ceremonies from engagement to post-wedding rituals, including regional variations and modern adaptations.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-06',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'regional-wedding-customs-comparison',
        title: 'Regional Indian Wedding Customs: Complete Comparison',
        excerpt: 'Explore the rich diversity of Indian wedding traditions across Tamil, Bengali, Punjabi, Gujarati, and Malayalam communities with unique rituals and customs.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-07',
        readTime: '13 min read',
        image: null,
    },
    {
        slug: 'wedding-budget-city-wise-breakdown',
        title: 'Wedding Costs Across Indian Cities: Tier-Wise Breakdown',
        excerpt: 'Complete analysis of wedding expenses in Metro, Tier-1, and Tier-2 cities with detailed cost comparisons and money-saving strategies for each location.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-08',
        readTime: '14 min read',
        image: null,
    },
    {
        slug: 'pre-wedding-ceremonies-explained',
        title: 'Pre-Wedding Ceremonies: Mehendi, Sangeet & Haldi Guide',
        excerpt: 'Everything about Indian pre-wedding rituals, their significance, modern trends, budget planning, and how to organize memorable celebrations.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-09',
        readTime: '11 min read',
        image: null,
    },
    {
        slug: 'wedding-venue-selection-guide',
        title: 'Wedding Venue Selection: Complete Guide for Indian Weddings',
        excerpt: 'Expert guide to choosing the perfect wedding venue in India, from banquet halls to destination locations, with evaluation checklist and negotiation tips.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-10',
        readTime: '13 min read',
        image: null,
        detailedGuide: {
            venueTypesComparison: [
                { type: 'Heritage Forts & Haveli Palaces (Rajasthan)', capacity: '150 - 450 Guests', priceRange: '₹35L - ₹1.2Cr', advantages: 'Regal aesthetics, royal hospitality, stunning photo backdrops', constraints: 'Strict sound curfew at 10 PM, high freight cost for external vendors' },
                { type: '5-Star City Hotels & Resorts (Metros)', capacity: '200 - 800 Guests', priceRange: '₹25L - ₹75L', advantages: 'Seamless accommodation, central location, in-house culinary teams', constraints: 'Mandatory in-house alcohol/catering policies, limited outside decor freedom' },
                { type: 'Traditional Kalyana Mandapams (South India)', capacity: '400 - 1,500 Guests', priceRange: '₹5L - ₹20L', advantages: 'Spacious dining halls, traditional homam setups, modest pricing', constraints: 'Alcohol strictly prohibited, pure vegetarian catering mandated' },
                { type: 'Farmhouses & Open-Air Lawns (Delhi NCR / Pune)', capacity: '300 - 1,200 Guests', priceRange: '₹12L - ₹35L', advantages: 'Sprawling green grounds, custom stage trusses, flexible catering', constraints: 'Weather vulnerability, requires full mobile air conditioning and DG power sets' }
            ],
            dueDiligenceChecklist: [
                'Verify full capacity for seated dining versus floating reception cocktail arrangements',
                'Confirm availability of dedicated, air-conditioned green rooms for both groom and bride',
                'Check diesel generator (DG) power backup capacity (minimum 125 kVA recommended for stage lighting)',
                'Review parking capacity and dedicated valet parking ingress/egress permissions',
                'Inspect cleanliness and sanitation standards of guest restrooms during peak usage',
                'Check municipal sound limits and outdoor amplified music cutoff timings (typically 10:00 PM)',
                'Clarify corkage fees, royalty charges for outside decorators, and mandatory vendor tie-ins'
            ],
            comprehensiveAdvice: 'Selecting the ideal venue forms the physical and logistical foundation upon which all other wedding decisions rest. In India, where multi-generational families gather across distinct ceremonies, a venue must simultaneously satisfy traditional ceremonial prerequisites—such as sacred homam ventilation and priest accommodation—while providing modern comfort, high-capacity dining, and seamless guest ingress. Never finalize a venue based solely on glossy daytime brochures; visit prospective halls during an active evening reception to evaluate actual parking traffic flow, air conditioning performance under heavy crowds, restroom hygiene, and the efficiency of the kitchen staging area. Furthermore, scrutinize in-house vendor monopolies: many commercial banquet halls enforce mandatory decorators or caterers who charge 30-50% markups while delivering mediocre quality.',
            roadmap: [
                { phase: '12-9 Months Prior', title: 'Criteria Definition & Shortlisting', details: 'Establish expected guest headcounts for each ceremony, define geographical radius for outstation guest transit, and shortlist 3-5 verified properties.' },
                { phase: '8-7 Months Prior', title: 'On-Site Recce & Technical Audits', details: 'Inspect power generator ratings, kitchen gas connections, green room amenities, and acoustics during active event hours.' },
                { phase: '6 Months Prior', title: 'Contract Negotiations & Token Payment', details: 'Secure written terms for decorator entry windows, outside liquor permissions, and complimentary rooms before paying non-refundable advances.' },
                { phase: '3 Months Prior', title: 'Floor Layout & Seating Design', details: 'Coordinate stage positioning, buffet line traffic flow, and elderly accessibility ramps with your event decorator.' },
                { phase: '2 Weeks Prior', title: 'Final Logistics Walkthrough', details: 'Verify valet parking manpower, check diesel generator backup fuel levels, and assign venue coordinator point-of-contact.' }
            ],
            faqs: [
                { q: 'How far in advance should we book our wedding venue in India?', a: 'For peak auspicious muhurat dates in winter (Nov-Feb), book 9 to 12 months in advance. For weekday or off-season dates, 4 to 6 months is generally sufficient.' },
                { q: 'What is the standard ratio of parking spots needed for wedding venues?', a: 'Provide at least 1 parking space for every 4 invited guests (e.g., 100 dedicated parking slots for a 400-guest gathering), backed by professional valet handling.' },
                { q: 'What are hidden venue costs to watch out for?', a: 'Diesel generator running fees (₹2,500-₹5,000/hour), outside vendor royalty surcharges, corkage fees per alcohol bottle, and late teardown penalties.' }
            ],
            negotiationTactics: 'Always request written inclusions for early morning access for decorators, complimentary bridal suites for overnight stays, and waiver of generator per-hour running charges. Booking shoulder-season dates or weekday muhurats can yield 20% to 30% savings on standard tariffs.'
        }
    },
    {
        slug: 'indian-wedding-photography-guide',
        title: 'Indian Wedding Photography: Complete Guide & Trends 2025',
        excerpt: 'Master guide to wedding photography styles, must-have shots, choosing photographers, and latest trends in Indian wedding cinematography.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-11',
        readTime: '12 min read',
        image: null,
        detailedGuide: {
            styleMatrix: [
                { style: 'Candid / Documentary Storytelling', focus: 'Unscripted emotional moments, laughter, tears, and family reactions', gearUsed: 'Fast prime lenses (35mm/85mm), natural ambient lighting', deliverables: 'High-resolution photo story, bespoke fine-art albums' },
                { style: 'Traditional Stage Photography', focus: 'Formal posed portraits with visiting guests on reception stage', gearUsed: 'Standard zoom lenses, high-output flash diffusers', deliverables: 'Complete chronological guest archival coverage' },
                { style: 'Cinematic Teaser & Feature Film', focus: 'Color-graded short films with professional audio and drone visuals', gearUsed: 'Cinema cameras, motorized gimbals, multi-channel lapel audio', deliverables: '3-5 min trailer teaser + 25-40 min full feature narrative' },
                { style: 'Editorial Pre-Wedding Conceptual', focus: 'Stylized couples portraits in scenic heritage or natural locations', gearUsed: 'Drone aerials, creative lighting, high-fashion staging', deliverables: 'Save-the-date invites, reception LED display montage' }
            ],
            essentialShotList: [
                'Intricate bridal mehndi application details and bridal jewelry flat-lays',
                'Groom tying turban (safa), sehra bandi, and baraat energetic dancing',
                'First look reaction between bride and groom before the main ceremony',
                'Varmala garland exchange with flower petals in mid-air',
                'Emotional moments during Kanyadaan, Mangalsutra tying, and Saptapadi rounds around the holy fire',
                'Vidaai farewell with family embraces and genuine emotional expressions',
                'Unrehearsed joyful moments on the reception dance floor with friends and relatives'
            ],
            contractAuditPoints: [
                'Ensure contract specifies lead photographer attendance rather than junior replacement crew',
                'Lock exact delivery timelines in writing (raw previews within 3 weeks, final album within 8-12 weeks)',
                'Confirm raw 4K video footage and RAW photo files backup retention for at least 12 months',
                'Clarify travel, lodging, and meals coverage for outstation crew members'
            ],
            comprehensiveAdvice: 'Wedding photography has shifted from rigid, static stage lineups to emotive documentary cinematography that captures the essence and candid micro-interactions of an Indian wedding. Because memories fade while imagery endures for generations, allocating 8% to 10% of your total wedding budget to a reputable visual storytelling team is one of the highest-yield investments you can make. When interviewing photographic studios, always demand to review full wedding galleries from beginning to end, rather than curated highlight reels on social media. A studio must demonstrate mastery across challenging lighting environments—ranging from dim indoor mandap fire rituals to blinding afternoon outdoor haldis and high-contrast, strobe-lit sangeet dance floors.',
            roadmap: [
                { phase: '9-8 Months Prior', title: 'Studio Shortlisting & Visual Style Match', details: 'Determine whether you prefer fine-art pastel editorial tones or rich, true-to-life contrast documentary styles, and book your lead artist.' },
                { phase: '5-4 Months Prior', title: 'Pre-Wedding Shoot & Rapport Building', details: 'Conduct a relaxed 1-day engagement portrait session to get comfortable in front of the lens and refine your poses.' },
                { phase: '2 Months Prior', title: 'Lighting & Schedule Coordination', details: 'Align your makeup artist schedule and ceremony muhurat timings with your photographer to capture golden-hour couple portraits.' },
                { phase: '2 Weeks Prior', title: 'Curated Family Shot List Handover', details: 'Designate a family coordinator from each side to introduce elderly relatives and VIP guests to the lead photography team.' },
                { phase: 'Post-Wedding', title: 'Culling, Color Grading & Album Layout', details: 'Review digital raw proofs, select highlight images for fine-art print layout, and verify multi-drive cloud archiving.' }
            ],
            faqs: [
                { q: 'How many photographers and videographers are needed for 400 guests?', a: 'We recommend a 5-person crew: 2 candid photographers, 1 traditional stage photographer, 1 cinematic gimbal filmmaker, and 1 drone/audio assistant.' },
                { q: 'What is the average cost of professional wedding photography in India in 2025?', a: 'Standard mid-tier studios charge ₹1.5 lakhs to ₹3.5 lakhs for a 2-day multi-ceremony celebration, while top-tier national studios range from ₹5 lakhs to ₹12 lakhs.' },
                { q: 'Who owns the copyright to the wedding photographs?', a: 'Standard Indian commercial contracts grant the couple full personal printing and sharing rights, while the studio retains artistic copyright for promotional portfolio displays unless a non-disclosure agreement is signed.' }
            ]
        }
    },
    {
        slug: 'bridal-trousseau-essential-guide',
        title: 'Bridal Trousseau Essentials: Complete Regional Guide',
        excerpt: 'Comprehensive trousseau checklist for Indian brides covering traditional items, modern essentials, shopping tips, and budget planning across regions.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-12',
        readTime: '11 min read',
        image: null,
        detailedGuide: {
            regionalWeavesTable: [
                { region: 'Tamil Nadu & South India', iconicWeave: 'Pure Zari Kanjivaram Silk', ceremonialOccasion: 'Muhurtham & Sumangali Puja', stylingNotes: 'Paired with temple gold jewelry, jasmine poola jada, and vanki armlets' },
                { region: 'North India & Varanasi', iconicWeave: 'Banarasi Katan Silk & Zardozi Lehengas', ceremonialOccasion: 'Pheras & Grand Reception', stylingNotes: 'Paired with Kundan, Polki jewelry sets, and embroidered net dupattas' },
                { region: 'Maharashtra', iconicWeave: 'Paithani Silk (Mor Bangadi border)', ceremonialOccasion: 'Lagna & Satyanarayan Puja', stylingNotes: 'Draped in traditional Nauvari style with Brahmani nath and Kolhapuri saaj' },
                { region: 'Bengal & Eastern India', iconicWeave: 'Baluchari & Jamdani Silk', ceremonialOccasion: 'Saat Paake Bandha & Shubho Drishti', stylingNotes: 'Adorned with red-and-white Shankha Pola bangles, chandan forehead art, and mukut' }
            ],
            trousseauCategoriesChecklist: [
                'Ceremonial Outfits: 3-5 heavy traditional bridal silks or designer lehengas for main rituals',
                'Post-Wedding Family Wear: 6-8 mid-weight Anarkalis, silk kurtas, and chiffon sarees for celebratory dinners',
                'Contemporary Casuals: Smart fusion wear, co-ord sets, and modern Western clothing for daily wear',
                'Honeymoon Wardrobe: Destination-specific resort wear, comfortable travel essentials, and climate gear',
                'Bridal Footwear: Embroidered juttis, embellished block heels, and ultra-comfortable flats',
                'Bridal Vanity Kit: Comprehensive skincare, cosmetics, hair styling appliances, and emergency sewing kit',
                'Heirloom Jewelry Care: Velvet-lined travel jewelry boxes, silica gel moisture packets, and locker inventory list'
            ],
            comprehensiveAdvice: 'Assembling a contemporary bridal trousseau in India is no longer about accumulating dozens of heavy, single-wear garments that gather dust in steel almirahs. Modern brides prioritize versatile, heirloom-quality pieces that can be seamlessly repurposed, restyled, and cherished throughout married life. A thoughtfully curated trousseau combines ceremonial grandeur—such as pure zari handloom sarees or heritage bridal lehengas—with functional, high-comfort clothing tailored for celebratory family dinners, work gatherings, and vacation travel. Avoid impulse buying during the initial euphoria of engagement; instead, audit your wardrobe across six specific lifestyle compartments: high-ceremony attire, post-wedding family hospitality wear, smart fusion casuals, honeymoon travel pieces, footwear, and bridal vanity emergency accessories.',
            roadmap: [
                { phase: '8-6 Months Prior', title: 'Color Palette & Regional Weave Shortlisting', details: 'Select key bridal shades, research heritage handloom weavers in Varanasi, Kanchipuram, or Paithan, and schedule initial appointments.' },
                { phase: '5-4 Months Prior', title: 'Core Ceremonial Outfits & Custom Tailoring', details: 'Order primary wedding and reception ensembles, lock blouse embroidery patterns, and schedule interim fittings with Master tailors.' },
                { phase: '3-2 Months Prior', title: 'Jewelry Pairing & Accessory Curation', details: 'Match neckpieces, maang tikkas, and dupattas with your finished garments, and purchase broken-in, comfortable ceremonial footwear.' },
                { phase: '1 Month Prior', title: 'Final Trial & Alteration Buffer', details: 'Try on all outfits with bridal innerwear and footwear to ensure hemline precision and seamless movement.' },
                { phase: 'Post-Wedding Care', title: 'Museum-Grade Storage & Zari Maintenance', details: 'Wrap pure silks in pure muslin cloth with neem leaves and cedar balls to protect metallic threads from humidity.' }
            ],
            faqs: [
                { q: 'What is the ideal budget allocation for a bridal trousseau in India?', a: 'Typically 10% to 15% of the total wedding budget, with 60% allocated to heavy heirloom ceremonial pieces and 40% reserved for versatile post-wedding daily and festive wear.' },
                { q: 'How many sarees or lehengas should a modern bride pack?', a: 'Modern brides typically pack 2-3 primary ceremonial outfits, 6-8 festive handloom sarees/anarkalis, and 10-12 chic fusion/contemporary outfits for new home living.' },
                { q: 'How do you prevent pure gold and silver zari from turning black?', a: 'Keep zari away from direct perfumes, hairsprays, and sweat. Always wrap in unbleached white mulmul/muslin fabric rather than synthetic polythene covers.' }
            ],
            preservationAdvice: 'Store pure silk sarees wrapped in breathable unbleached muslin cloth rather than airtight plastic bags to prevent zari tarnishing. Air and refold expensive silk garments every six months along alternative creases to preserve fabric integrity.'
        }
    },
    {
        slug: 'destination-wedding-planning-india',
        title: 'Destination Wedding Planning in India: Complete Guide',
        excerpt: 'Plan your dream destination wedding in India with our guide covering top locations, logistics, guest management, legal requirements, and cost analysis.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-13',
        readTime: '14 min read',
        image: null,
        detailedGuide: {
            destinationsComparison: [
                { location: 'Udaipur & Jaipur (Rajasthan)', vibe: 'Royal Palatial Grandeur', optimalSeason: 'October to March', budgetEstimate: '₹45L - ₹1.5Cr+', highlight: 'Heritage courtyards, torchlit lake views, and majestic royal hospitality' },
                { location: 'South & North Goa', vibe: 'Sun-Drenched Beach Celebration', optimalSeason: 'November to February', budgetEstimate: '₹30L - ₹80L', highlight: 'Sunset vows by the Arabian Sea, bohemian mehendi setups, and breezy outdoor sangeet' },
                { location: 'Rishikesh & Jim Corbett (Uttarakhand)', vibe: 'Scenic River & Foothill Serenity', optimalSeason: 'October to April', budgetEstimate: '₹25L - ₹65L', highlight: 'Ganges riverbank mandap ceremonies, mountain breezes, and jungle resort hospitality' },
                { location: 'Kerala Backwaters (Kumarakom / Alleppey)', vibe: 'Tropical Coconut Grove Tranquility', optimalSeason: 'September to March', budgetEstimate: '₹28L - ₹70L', highlight: 'Houseboat pre-wedding cruises, tranquil lagoons, and authentic sadhya feasts' }
            ],
            masterPlanningTimeline: [
                '12 Months Prior: Shortlist destination clusters, evaluate hotel buyout options, and negotiate room block blocks',
                '9 Months Prior: Dispatch digital Save-The-Date cards and establish group flight/train booking concierge',
                '6 Months Prior: Conduct on-site recce with wedding planner, sound engineer, and decor team',
                '3 Months Prior: Finalize customized airport shuttle transfer schedules and dietary preferences for all attendees',
                '1 Month Prior: Assemble personalized welcome hampers, local emergency contact cards, and event itinerary booklets',
                'Wedding Week: Review indoor weather contingency ballrooms and test emergency power backups'
            ],
            comprehensiveAdvice: 'A destination wedding in India transforms a traditional single-day function into an immersive 3-day holiday experience for your closest circle of family and friends. However, success hinges entirely on seamless transit and guest hospitality logistics rather than just the scenic grandeur of the location. The primary budget risk in destination planning is guest dropouts versus guaranteed room block attrition penalties: Indian hotels require contractual minimum room night commitments months in advance. When selecting a destination, prioritize domestic travel convenience: choose properties within a 60-to-90-minute scenic drive from major commercial airports with frequent direct flights from your home cities. Furthermore, engage local regional vendors for heavy structural fabrication and floral rentals to avoid prohibitive inter-state logistics and freight surcharges.',
            roadmap: [
                { phase: '12-10 Months Prior', title: 'Location Scouting & Resort Buyout Lock', details: 'Visit 2-3 shortlisted resorts in Rajasthan, Goa, or Uttarakhand; negotiate composite room buyout rates inclusive of breakfast and banquet venues.' },
                { phase: '9-8 Months Prior', title: 'Save-The-Dates & Travel Concierge Setup', details: 'Dispatch digital calendar holds and collect tentative attendance numbers to refine the room allocation matrix.' },
                { phase: '6-5 Months Prior', title: 'Local Vendor Audits & Tasting Sessions', details: 'Conduct menu tasting sessions with resort culinary teams and verify outside sound limit agreements.' },
                { phase: '3-2 Months Prior', title: 'Flight Roster & Airport Shuttle Scheduling', details: 'Gather finalized flight itineraries and book private air-conditioned coach transfers for guest batches.' },
                { phase: '1 Month Prior', title: 'Hospitality Desk & Hamper Staging', details: 'Organize personalized welcome kits, emergency medical essentials, and bilingual hospitality desk personnel.' },
                { phase: 'Event Days', title: 'On-Ground Coordination & Weather Contingency', details: 'Ensure 24/7 hospitality desk staffing and review immediate rain-backup indoor ballroom readiness.' }
            ],
            faqs: [
                { q: 'Who typically pays for guest travel and hotel rooms at an Indian destination wedding?', a: 'Standard etiquette in India is that the host families provide complimentary hotel accommodation, meals, and local airport transfers for all invited guests, while attendees pay for their own inter-city flight or train tickets.' },
                { q: 'What is the ideal guest count for a destination wedding in India?', a: 'Between 120 and 220 guests. This size allows you to privatize a boutique resort completely, fostering deep social bonding without logistical fragmentation.' },
                { q: 'How much does an average 3-day destination wedding in Goa or Udaipur cost?', a: 'For a 150-guest celebration at a 4-to-5-star property, expect an investment between ₹35 lakhs and ₹85 lakhs covering 2 nights of accommodation, all meals, and decor.' }
            ],
            logisticsStrategy: 'To keep destination wedding budgets manageable, maintain a focused guest count of 100 to 200 attendees. Negotiating full hotel inventory buyouts often includes complimentary ceremony lawns, pool access, and discounted food packages compared to per-room retail bookings.'
        }
    },
    {
        slug: 'wedding-entertainment-music-guide',
        title: 'Wedding Entertainment & Music: Planning Guide for Indian Weddings',
        excerpt: 'Complete guide to wedding entertainment options, hiring DJs and bands, traditional vs modern music, and planning dance performances for your big day.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-14',
        readTime: '10 min read',
        image: null,
        detailedGuide: {
            entertainmentMatrix: [
                { format: 'Traditional Instrumentalists (Shehnai / Nadaswaram)', ceremony: 'Muhurtham & Sacred Pheras', priceRange: '₹12,000 - ₹35,000', audioNeeds: 'Acoustic mics, subtle amplification for spiritual purity' },
                { format: 'Energetic Punjabi Dhol / Nashik Dhol Troupes', ceremony: 'Baraat Procession & Groom Entry', priceRange: '₹15,000 - ₹45,000', audioNeeds: 'Pure acoustic live percussion, high stamina for moving crowds' },
                { format: 'Professional Bollywood & Commercial Club DJ', ceremony: 'Sangeet Night & After-Party', priceRange: '₹40,000 - ₹1,50,000', audioNeeds: 'High-wattage line array sound, subwoofers, intelligent moving-head lighting' },
                { format: 'Live Fusion / Sufi Ensemble Band', ceremony: 'Cocktail Evening & Mehendi', priceRange: '₹60,000 - ₹2,50,000', audioNeeds: 'Multi-channel digital audio mixer, dedicated monitor wedges, sound engineer' }
            ],
            sangeetDanceManagementChecklist: [
                'Hire a professional wedding choreographer 6 to 8 weeks before the event for family group routines',
                'Limit family performances to a maximum of 45-60 minutes total to prevent audience fatigue',
                'Order songs in an ascending tempo curve starting with elders and concluding with the high-energy couple dance',
                'Provide clear audio tracks on a dedicated USB drive and cloud link to the DJ sound engineer',
                'Inspect the dance floor surface (acrylic or wooden parquet) to prevent accidental slips during performances',
                'Ensure venue sound permissions accommodate amplified music until official municipal curfew hours'
            ],
            comprehensiveAdvice: 'Entertainment and music are the emotional pulse of an Indian wedding, dictating the tempo and joyous energy of each ritual from the spiritual solemnity of morning muhurthams to the explosive ecstasy of midnight sangeet after-parties. Crafting a memorable entertainment lineup requires balancing cultural authenticity with contemporary revelry. Rather than treating music as background noise, curate distinct sonic environments tailored to each phase of your celebrations: contemplative classical ragas (such as Shehnai or Nadaswaram) during sacred Vedic vows, high-octane live folk percussion (Punjabi Dhol or Nashik Dhol) during the groom\'s Baraat, soulful acoustic sufi or indie-folk for sundowner cocktail receptions, and an electrifying Bollywood/EDM DJ set with intelligent DMX lighting for the Sangeet dance floor. Crucially, coordinate closely with venue management regarding local sound pollution regulations. In India, Supreme Court guidelines mandate an outdoor sound threshold and strict decibel limits after 10:00 PM; planning an acoustic transition into an acoustically treated indoor ballroom or silent-disco after-party guarantees non-stop celebration without municipal law-enforcement interference.',
            roadmap: [
                { phase: '6-4 Months Prior', title: 'Artist Research & DJ Shortlisting', details: 'Review performance videos, check live set mixes on Soundcloud/YouTube, and shortlist DJs, emcees, and live bands with proven wedding experience.' },
                { phase: '3-2 Months Prior', title: 'Choreographer Hiring & Sangeet Rehearsals', details: 'Engage a wedding dance choreographer, finalize track lists, and schedule weekend dance rehearsals for cousins, friends, and parents.' },
                { phase: '1 Month Prior', title: 'Sound Engineering & Tech Rider Audit', details: 'Obtain technical sound riders from your artists (line array speakers, monitors, cordless microphones, DJ console) and verify electrical load capacity with the venue electrician.' },
                { phase: '2 Weeks Prior', title: 'Music Licenses & Playlist Finalization', details: 'Confirm PPL and IPRS music licensing clearance with the venue, and submit finalized entry songs and do-not-play track lists.' },
                { phase: 'Event Day', title: 'Sound Check & Decibel Management', details: 'Conduct dry sound checks 3 hours before guest arrival, calibrate monitor wedges, and establish smooth transitions between ceremonial rituals and DJ sets.' }
            ],
            faqs: [
                { q: 'Do we need PPL and IPRS licenses for an Indian wedding party?', a: 'While private family ceremonies often fall under domestic exceptions, public commercial venues like 5-star hotels and luxury banquet lawns strictly mandate PPL (Phonographic Performance Limited) and IPRS (Indian Performing Right Society) licenses to play copyrighted tracks. In most contracts, the hotel or professional event planner secures composite licenses.' },
                { q: 'How long should family Sangeet dance performances last?', a: 'Cap the total duration of choreographed performances at 45 to 60 minutes. Longer performance blocks lead to audience fatigue and delay the open dance floor where guests enjoy spontaneous dancing.' },
                { q: 'What is the standard outdoor music curfew in Indian cities?', a: 'Most Indian municipal corporations and state police authorities enforce a strict 10:00 PM outdoor sound curfew (55 decibels). To party late into the night, contractually reserve an indoor soundproof ballroom or arrange a silent disco headset party starting at 10:00 PM.' }
            ],
            licensingAndCurfewCompliance: 'In India, commercial public performance of recorded music at banquet halls and hotels legally requires PPL (Phonographic Performance Limited) and IPRS (Indian Performing Right Society) licensing, which reputable event venues or DJs typically handle. Always verify that your venue holds valid entertainment licenses to avoid unexpected sound disruptions on your wedding night.'
        }
    },
    {
        slug: 'post-wedding-rituals-traditions',
        title: 'Post-Wedding Rituals: Griha Pravesh, Vidaai & Reception Customs',
        excerpt: 'Understanding post-wedding ceremonies in Indian culture, their significance, regional variations, and how modern couples adapt these beautiful traditions.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-15',
        readTime: '10 min read',
        image: null,
    },
    {
        slug: 'tamil-6-month-marriage-planning-guide',
        title: 'முழுமையான 6 மாத திருமண திட்டமிடல் பட்டியல் மற்றும் வேலைகள் வழிகாட்டி',
        excerpt: 'திருமணத்திற்கு 6 மாதங்களுக்கு முன்பு தொடங்க வேண்டிய திட்டமிடல்கள், மண்டப முன்பதிவு, நகை வாங்குதல் முதல் திருமண நாள் வரையிலான முழுமையான வழிகாட்டி.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-20',
        readTime: '15 min read',
        image: null,
    },
    {
        slug: 'tamil-traditional-marriage-rituals-kasi-yatra',
        title: 'தமிழ் பாரம்பரிய திருமண சடங்குகள்: காசி யாத்திரை மற்றும் மாலை மாற்றுதல் தத்துவம்',
        excerpt: 'காசி யாத்திரை, மாலை மாற்றுதல், ஊஞ்சல் சடங்கு மற்றும் மாங்கல்ய தாரணம் ஆகியவற்றின் அறிவியல் மற்றும் ஆன்மீக தத்துவங்கள்.',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-21',
        readTime: '14 min read',
        image: null,
    },
    {
        slug: 'tamil-subha-muhurtham-selection-panchangam',
        title: 'சுப முகூர்த்த நாட்கள் தேர்ந்தெடுப்பது எப்படி? வாக்கிய பஞ்சாங்க அடிப்படை விதிகள்',
        excerpt: 'திருமணத்திற்கான சுப முகூர்த்தம், லக்னம், மற்றும் வளர்பிறை முகூர்த்தங்களை வாக்கிய பஞ்சாங்கத்தின் அடிப்படையில் தேர்ந்தெடுக்கும் முறை.',
        category: 'planning',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-22',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'tamil-wedding-budget-planning-tips',
        title: 'திருமணத்திற்கான பட்ஜெட் திட்டமிடல்: தேவையற்ற செலவுகளை குறைப்பதற்கான வழிகள்',
        excerpt: 'திருமணச் செலவுகளை எப்படி சரியாக திட்டமிடுவது, பட்ஜெட்டை மீறாமல் எப்படி நிர்வகிப்பது என்பதற்கான நடைமுறை ஆலோசனைகள்.',
        category: 'finance',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-23',
        readTime: '12 min read',
        image: null,
    },
    {
        slug: 'tamil-marriage-porutham-importance',
        title: 'பொருத்தம் பார்த்தல்: திருமணத்திற்கான பத்து பொருத்தங்களின் முக்கியத்துவமும் அறிவியல் பார்வையும்',
        excerpt: 'தினப் பொருத்தம் முதல் நாடிப் பொருத்தம் வரையிலான 10 பொருத்தங்கள் ஏன் பார்க்கப்படுகின்றன? அவற்றின் உண்மையான நோக்கம் என்ன?',
        category: 'culture',
        author: 'Chithrai Selvan & Editorial Team',
        publishDate: '2025-01-24',
        readTime: '13 min read',
        image: null,
    },
];

// Get blog post by slug
export function getBlogPost(slug) {
    return BLOG_POSTS.find(post => post.slug === slug);
}

// Get all blog posts (optionally filtered by category)
export function getAllBlogPosts(category = null) {
    if (category) {
        return BLOG_POSTS.filter(post => post.category === category);
    }
    return BLOG_POSTS;
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug, limit = 3) {
    const currentPost = getBlogPost(currentSlug);
    if (!currentPost) return [];

    return BLOG_POSTS
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}

// Get category info
export function getCategoryInfo(slug) {
    return Object.values(BLOG_CATEGORIES).find(cat => cat.slug === slug);
}
