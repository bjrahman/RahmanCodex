export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  metaDescription: string;
  content: BlogBlock[];
  relatedServiceSlug?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cleaning-prices-in-derby",
    title: "How Much Does Cleaning Cost in Derby? A Transparent 2026 Pricing Guide",
    excerpt:
      "A clear breakdown of what domestic, deep and end of tenancy cleaning actually costs in Derby, and the factors that move the price up or down.",
    category: "Pricing Guides",
    date: "2026-05-12",
    readTime: "6 min read",
    metaDescription:
      "What does cleaning cost in Derby in 2026? A transparent breakdown of regular, deep and end of tenancy cleaning prices, with the factors that affect your quote.",
    relatedServiceSlug: "regular-domestic-cleaning",
    content: [
      { type: "p", text: "One of the most common questions we get from Derby homeowners is simple: what does cleaning actually cost? The honest answer is that it depends on a few clear factors — but it shouldn't be a mystery, and it shouldn't take a phone call to find out." },
      { type: "h2", text: "Typical price ranges in Derby" },
      { type: "ul", items: [
        "Regular domestic cleaning: £22–£28 per hour, with discounts for weekly and fortnightly plans",
        "One-off deep cleaning: from £180 for a 3-bedroom home, fixed price",
        "End of tenancy cleaning: from £150 for a 2-bedroom property, fixed price",
        "Airbnb turnover cleaning: from £55 per turnover for a 2-bedroom short-let",
        "Carpet and upholstery cleaning: from £25 per room",
      ]},
      { type: "h2", text: "What actually changes your price" },
      { type: "p", text: "Property size and number of bedrooms/bathrooms is the biggest factor, followed by how often you book (regular plans are always cheaper per visit than one-offs), and the condition of the property at the first visit. A home that hasn't been deep cleaned in a while will usually need a one-off deep clean before settling into a faster, cheaper regular routine." },
      { type: "h2", text: "Why fixed, transparent pricing matters" },
      { type: "p", text: "At Derby Spotless, every quote is generated instantly online based on your property and service, and confirmed before any cleaner is booked. No hourly surprises, no last-minute add-on charges — what you're quoted is what you pay, with a digital invoice after every visit." },
      { type: "p", text: "Want an exact number for your home? Our Instant Quote tool takes under two minutes and gives you a real price, not an estimate range." },
    ],
  },
  {
    slug: "end-of-tenancy-cleaning-checklist",
    title: "The Complete End of Tenancy Cleaning Checklist for Derby Tenants",
    excerpt:
      "Everything Derby letting agents check before returning a deposit, in one practical checklist you can use whether you clean yourself or book a professional.",
    category: "Moving & Tenancy",
    date: "2026-04-18",
    readTime: "7 min read",
    metaDescription:
      "The full end of tenancy cleaning checklist Derby letting agents use to assess deposit returns, room by room, plus tips to avoid common deductions.",
    relatedServiceSlug: "end-of-tenancy-cleaning",
    content: [
      { type: "p", text: "Most deposit deductions aren't about damage — they're about cleaning standards that don't match the inventory report from move-in day. Here's the exact checklist Derby letting agents typically work from." },
      { type: "h2", text: "Kitchen" },
      { type: "ul", items: [
        "Oven, hob and extractor degreased inside and out",
        "Inside and outside of every cupboard and drawer",
        "Fridge and freezer defrosted, cleaned and left open",
        "Sink, taps and worktops descaled and polished",
      ]},
      { type: "h2", text: "Bathroom" },
      { type: "ul", items: [
        "Limescale removed from taps, showerhead and tiles",
        "Toilet, bath and shower fully sanitised",
        "Extractor fan and mirrors cleaned",
      ]},
      { type: "h2", text: "Throughout the property" },
      { type: "ul", items: [
        "Carpets vacuumed (and steam cleaned if pets were present)",
        "Skirting boards, door frames and light switches wiped down",
        "Windows, sills and internal glass cleaned",
        "All cupboards, wardrobes and storage left empty and clean",
      ]},
      { type: "h2", text: "The most commonly missed items" },
      { type: "p", text: "Inside the oven, behind kitchen appliances, inside light fittings, and skirting boards are the items inventory clerks flag most often. These are also the most time-consuming to do properly, which is exactly why most tenants book a professional end of tenancy clean rather than risk a deposit dispute over a missed extractor fan." },
      { type: "p", text: "Our End of Tenancy Cleaning service follows this exact checklist and includes a 72-hour free re-clean guarantee if your agent raises any cleaning issue." },
    ],
  },
  {
    slug: "landlord-cleaning-checklist",
    title: "Landlord Cleaning Checklist: Preparing a Derby Rental Between Tenants",
    excerpt:
      "A practical checklist for Derby landlords and letting agents managing the turnaround between tenancies, from cleaning standard to documentation.",
    category: "Landlords & Agents",
    date: "2026-03-22",
    readTime: "6 min read",
    metaDescription:
      "A landlord's checklist for cleaning a Derby rental property between tenants, including documentation tips to protect against future disputes.",
    relatedServiceSlug: "landlord-property-cleaning",
    content: [
      { type: "p", text: "For landlords, the gap between tenancies is expensive every extra day it runs on. A fast, professional, well-documented clean keeps that gap as short as possible while protecting you from disputes with the next tenant." },
      { type: "h2", text: "Before the clean" },
      { type: "ul", items: [
        "Confirm the exact checkout date and access arrangements with the outgoing tenant",
        "Walk the property and note any damage separately from cleaning issues",
        "Photograph the property's condition before cleaning begins",
      ]},
      { type: "h2", text: "During the clean" },
      { type: "ul", items: [
        "Use a fixed checklist so nothing depends on memory or assumptions",
        "Request a digital invoice and checklist as proof of professional cleaning",
        "Flag any maintenance issues spotted during the clean separately",
      ]},
      { type: "h2", text: "After the clean" },
      { type: "ul", items: [
        "Photograph the cleaned property as a record for the new tenancy's inventory",
        "Share the cleaning invoice with your letting agent if managed externally",
        "Schedule the next inventory check-in promptly to avoid void period drift",
      ]},
      { type: "h2", text: "Why landlords prefer a consistent cleaning partner" },
      { type: "p", text: "Landlords managing multiple properties across Derby benefit most from a single, consistent cleaning standard and one point of contact for scheduling and invoicing — rather than juggling different cleaners for every property. Our Landlord & Property Cleaning service is built specifically around this, with consolidated invoicing for portfolios of any size." },
    ],
  },
  {
    slug: "airbnb-cleaning-guide-derby",
    title: "The Ultimate Airbnb Turnover Cleaning Guide for Derby Hosts",
    excerpt:
      "How Derby's most successful Airbnb hosts protect their ratings with a consistent turnover cleaning process, even on same-day changeovers.",
    category: "Airbnb & Short Lets",
    date: "2026-02-09",
    readTime: "6 min read",
    metaDescription:
      "A practical guide to Airbnb turnover cleaning for Derby hosts, covering same-day changeovers, staging, restocking and protecting your guest ratings.",
    relatedServiceSlug: "airbnb-holiday-let-cleaning",
    content: [
      { type: "p", text: "Cleanliness is consistently the single biggest driver of guest review scores. For Derby hosts juggling tight changeover windows, having a dependable turnover cleaning process isn't optional — it's the foundation of a profitable listing." },
      { type: "h2", text: "What guests actually notice" },
      { type: "ul", items: [
        "Fresh linen, hospital-corner bed making and hotel-style towel folding",
        "Bathroom and kitchen presentation, not just cleanliness",
        "Welcome essentials restocked: teas, coffee, toiletries",
        "No lingering odours, especially in properties with pets allowed",
      ]},
      { type: "h2", text: "Building a same-day turnover process" },
      { type: "p", text: "The key to reliable same-day turnovers is having a fixed checklist your cleaning team follows regardless of how tight the window is, plus a clear sign-off step before the next guest's check-in. Photo confirmation on completion removes the guesswork entirely — you know the property is ready before your guest even arrives." },
      { type: "h2", text: "Managing multiple properties" },
      { type: "p", text: "Hosts with more than one listing benefit hugely from a single cleaning partner who can sync with all their booking calendars and provide consolidated monthly invoicing, rather than coordinating separate cleaners property by property." },
      { type: "p", text: "Our Airbnb & Holiday Let Cleaning service covers same-day turnovers seven days a week across Derby, with calendar syncing and photo confirmation built in as standard." },
    ],
  },
  {
    slug: "moving-house-cleaning-guide",
    title: "Moving House in Derby? Your Complete Moving Day Cleaning Guide",
    excerpt:
      "A practical timeline for cleaning before you move out and before you move in, so moving day in Derby goes as smoothly as possible.",
    category: "Moving & Tenancy",
    date: "2026-01-15",
    readTime: "5 min read",
    metaDescription:
      "A practical cleaning timeline for moving house in Derby, covering what to clean before you leave your old home and before you move into your new one.",
    relatedServiceSlug: "deep-cleaning",
    content: [
      { type: "p", text: "Moving day is stressful enough without cleaning being an afterthought on both ends. Here's a simple timeline that works whether you're moving across Derby or just down the road." },
      { type: "h2", text: "Two weeks before" },
      { type: "ul", items: [
        "Book your end of tenancy or deep clean for your current property",
        "If possible, arrange a clean for your new property before move-in day",
        "Declutter so cleaners aren't working around boxes",
      ]},
      { type: "h2", text: "Moving day" },
      { type: "ul", items: [
        "Schedule your old property's clean for after the removal van leaves, not before",
        "If your new home wasn't professionally cleaned by the previous occupant, plan to be out of the property while a deep clean is completed",
        "Keep digital invoices from both cleans in case either is needed for deposit or dispute purposes",
      ]},
      { type: "h2", text: "Why a clean start matters" },
      { type: "p", text: "Starting in a genuinely deep-cleaned home — not just one that looks tidy after a quick once-over from the previous owner — makes a real difference to how settled a new home feels in the first few weeks. It also means your first regular cleaning visit starts from a proper baseline rather than catching up on months of missed detail." },
      { type: "p", text: "We offer both end of tenancy cleaning for the property you're leaving and deep cleaning for the one you're moving into, often booked back-to-back around the same moving day." },
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
