export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  idealFor: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  outcomeStats: { value: string; label: string }[];
  intro: string[];
  included: string[];
  notIncluded: string[];
  process: { title: string; description: string }[];
  pricingNote: string;
  pricingFrom: number;
  pricingUnit: string;
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const services: Service[] = [
  {
    slug: "regular-domestic-cleaning",
    name: "Regular Domestic Cleaning",
    shortName: "Regular Cleaning",
    idealFor: "Busy professionals & families",
    metaTitle: "Regular Domestic Cleaning Derby | Weekly & Fortnightly | Derby Spotless",
    metaDescription:
      "Reliable weekly, fortnightly or monthly home cleaning in Derby. Same trusted cleaner, fixed arrival windows, online booking and a satisfaction guarantee.",
    heroHeadline: "Come home to a clean house, every single time.",
    heroSubheadline:
      "Weekly, fortnightly or monthly cleaning visits built around your schedule, with the same vetted cleaner wherever possible.",
    outcomeStats: [
      { value: "3+ hrs", label: "given back to you every visit" },
      { value: "98%", label: "of clients keep the same cleaner" },
      { value: "60 min", label: "average response time on enquiries" },
    ],
    intro: [
      "Regular cleaning isn't about ticking boxes — it's about never having to think about cleaning again. Derby Spotless runs a recurring home cleaning service designed for people whose time is worth more than a Saturday morning with a mop.",
      "You choose the frequency, we match you with a vetted, DBS-checked cleaner, and we hold them to a published standard on every visit. If something's missed, we come back and fix it for free — no awkward conversations required.",
    ],
    included: [
      "Kitchen surfaces, appliances exteriors, hob and sink degreased",
      "Bathrooms sanitised, descaled and polished",
      "Dusting of all reachable surfaces, skirting boards and furniture",
      "Vacuuming and mopping of all hard floors and carpets",
      "Bed making and laundry folding (on request)",
      "Bins emptied and relined",
    ],
    notIncluded: [
      "Inside-oven deep degreasing (available as an add-on)",
      "Exterior window cleaning",
      "Heavy after-builders debris removal",
    ],
    process: [
      { title: "Get your instant quote", description: "Tell us your home size and frequency online in under 2 minutes." },
      { title: "Meet your cleaner", description: "We match you with a DBS-checked cleaner and confirm a fixed arrival window." },
      { title: "Enjoy a spotless home", description: "Pay securely online and receive a digital invoice after every visit." },
    ],
    pricingNote: "Most 3-bed homes on a fortnightly plan pay between £22–£28 per hour, with multi-visit discounts applied automatically.",
    pricingFrom: 22,
    pricingUnit: "per hour",
    faqs: [
      { question: "Will I get the same cleaner every time?", answer: "Wherever possible, yes. We match you with one dedicated cleaner for ongoing visits, so they learn your home and your preferences. If they're ever off, we send a fully briefed replacement so standards never slip." },
      { question: "Do I need to provide cleaning products?", answer: "No — our cleaners bring professional-grade, eco-conscious products and equipment as standard. If you'd prefer we use your own products, just let us know when booking." },
      { question: "Can I change my cleaning frequency later?", answer: "Yes. You can move between weekly, fortnightly and monthly cleaning, pause for holidays, or cancel with 48 hours' notice through your online account." },
      { question: "What if I'm not happy with a clean?", answer: "Let us know within 24 hours and we'll return to put it right at no extra cost, no questions asked. That's our satisfaction guarantee." },
    ],
    relatedServices: ["deep-cleaning", "carpet-upholstery-cleaning", "elderly-support-cleaning"],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortName: "Deep Cleaning",
    idealFor: "Spring cleans, big resets & one-off occasions",
    metaTitle: "Deep Cleaning Services Derby | One-Off Deep Clean | Derby Spotless",
    metaDescription:
      "A top-to-bottom deep clean for Derby homes — ovens, behind appliances, grout, skirting boards and every detail your regular clean doesn't reach. Book online today.",
    heroHeadline: "The reset your home has been waiting for.",
    heroSubheadline:
      "A meticulous, top-to-bottom deep clean that reaches everything your weekly routine skips — perfect before guests, after illness, or just because.",
    outcomeStats: [
      { value: "40+", label: "checklist points covered per visit" },
      { value: "4–8 hrs", label: "average team time on a 3-bed home" },
      { value: "100%", label: "satisfaction guarantee on every deep clean" },
    ],
    intro: [
      "A deep clean is the difference between a home that looks clean and one that actually is clean. We strip back grease, grime and dust from the places that get missed week to week — skirting boards, behind appliances, extractor fans, light switches, door frames.",
      "Most clients book a deep clean as a seasonal reset or before starting a regular plan, so every future visit starts from a genuinely clean baseline.",
    ],
    included: [
      "Full kitchen deep clean including inside oven, hob and extractor",
      "Descaling and degreasing of all bathroom tiling and grout",
      "Behind and underneath movable furniture and appliances",
      "Skirting boards, door frames, light switches and handles",
      "Interior windows and sills throughout",
      "Detailed dusting of blinds, radiators and high-level surfaces",
    ],
    notIncluded: [
      "Exterior window cleaning",
      "Carpet shampooing (available as an add-on)",
      "Mould remediation beyond surface treatment",
    ],
    process: [
      { title: "Tell us your priorities", description: "Flag any specific areas of concern in your instant quote." },
      { title: "We bring a small team", description: "Most deep cleans are completed by 2–3 cleaners in a single visit." },
      { title: "Walkthrough and sign-off", description: "We review the finished home with you before we leave." },
    ],
    pricingNote: "A typical 3-bed deep clean starts from £180, with transparent fixed pricing confirmed before we arrive.",
    pricingFrom: 180,
    pricingUnit: "fixed price",
    faqs: [
      { question: "How long does a deep clean take?", answer: "A typical 2–3 bedroom home takes 4–6 hours with a two-person team. Larger homes or properties left for longer periods may take a full day." },
      { question: "Should I book a deep clean before regular cleaning starts?", answer: "We recommend it. Starting your regular plan from a genuinely deep-cleaned baseline means every future visit is faster and more consistent." },
      { question: "Do you move furniture during a deep clean?", answer: "Yes, where it's safe to do so. Let us know about anything particularly heavy, fragile or that you'd prefer we leave untouched." },
      { question: "Is a deep clean the same as end of tenancy cleaning?", answer: "They're similar but end of tenancy cleaning follows a stricter, inventory-style checklist designed to satisfy letting agents and deposit return requirements. See our End of Tenancy Cleaning page for details." },
    ],
    relatedServices: ["end-of-tenancy-cleaning", "regular-domestic-cleaning", "after-builders-cleaning"],
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    shortName: "End of Tenancy",
    idealFor: "Tenants, landlords & letting agents",
    metaTitle: "End of Tenancy Cleaning Derby | Deposit-Back Guarantee | Derby Spotless",
    metaDescription:
      "Professional end of tenancy cleaning in Derby to the letting agent standard, with a 72-hour re-clean guarantee. Trusted by tenants, landlords and agents.",
    heroHeadline: "Move out with your deposit, not excuses.",
    heroSubheadline:
      "A checklist-driven end of tenancy clean built to the standard letting agents and inventory clerks actually check for.",
    outcomeStats: [
      { value: "72 hrs", label: "free re-clean guarantee window" },
      { value: "50+", label: "Derby letting agents who recognise our standard" },
      { value: "£0", label: "deposit deductions on disputed cleanliness, on average" },
    ],
    intro: [
      "Most deposit disputes come down to cleaning standards, not damage. Our end of tenancy clean follows the same checklist used by Derby letting agents and inventory clerks, so there's nothing left for anyone to challenge.",
      "Whether you're a tenant protecting your deposit, a landlord preparing for new tenants, or an agent managing turnover at scale, we work to your timeline and provide a digital invoice and checklist for your records.",
    ],
    included: [
      "Inside and outside of all kitchen cupboards and drawers",
      "Oven, hob, extractor and all kitchen appliances inside and out",
      "Full bathroom descale, sanitisation and limescale removal",
      "All internal glass, mirrors, light fittings and switches",
      "Carpets vacuumed and skirting boards washed throughout",
      "Wardrobes, cupboards and storage spaces inside and out",
    ],
    notIncluded: [
      "Carpet steam cleaning (available as an add-on)",
      "Garden, garage or outbuilding clearance",
      "Removal of bulky items left behind by previous occupants",
    ],
    process: [
      { title: "Share your move-out date", description: "Book online with your exact checkout date and property size." },
      { title: "Checklist-driven clean", description: "Our team works through the full inventory-standard checklist." },
      { title: "72-hour guarantee", description: "If your agent flags an issue within 72 hours, we return free of charge." },
    ],
    pricingNote: "A standard 2-bed end of tenancy clean starts from £150, fully fixed-price and confirmed before booking.",
    pricingFrom: 150,
    pricingUnit: "fixed price",
    faqs: [
      { question: "Do you guarantee my deposit back?", answer: "We guarantee the clean itself meets letting agent standard, and we'll return free of charge within 72 hours if any cleaning issue is raised. Deposit decisions ultimately sit with your landlord or agent based on the full check-out report, including damage and condition beyond cleaning." },
      { question: "Can you clean on the same day as checkout?", answer: "Yes, this is the most common booking we take. Let us know your exact checkout time and we'll schedule accordingly, including evening and weekend slots." },
      { question: "Do letting agents in Derby recognise your standard?", answer: "Yes — we work directly with letting agents and property managers across Derby and provide a digital checklist and invoice that can be shared as proof of professional cleaning." },
      { question: "What if the property is unfurnished or empty?", answer: "No problem, our checklist and pricing apply equally to furnished and unfurnished properties." },
    ],
    relatedServices: ["landlord-property-cleaning", "deep-cleaning", "carpet-upholstery-cleaning"],
  },
  {
    slug: "landlord-property-cleaning",
    name: "Landlord & Property Cleaning",
    shortName: "Landlord Cleaning",
    idealFor: "Landlords, letting agents & property managers",
    metaTitle: "Landlord Cleaning Services Derby | Portfolio & Void Property Cleaning | Derby Spotless",
    metaDescription:
      "Cleaning services for Derby landlords and letting agents covering void periods, scheduled visits and portfolio-wide contracts with consolidated invoicing.",
    heroHeadline: "One cleaning partner for your entire portfolio.",
    heroSubheadline:
      "Void property cleaning, scheduled communal cleaning and turnaround support for landlords and letting agents managing properties across Derby.",
    outcomeStats: [
      { value: "1 invoice", label: "for any number of properties" },
      { value: "50+", label: "Derby letting agents we work alongside" },
      { value: "Same week", label: "turnaround on most void properties" },
    ],
    intro: [
      "Managing cleaning across a portfolio of rental properties shouldn't mean juggling multiple cleaners, inconsistent standards and a stack of separate invoices. We work with landlords and letting agents across Derby as a single, consistent cleaning partner — covering everything from one-off void cleans to scheduled communal area visits.",
      "Every property is cleaned to the same published standard with photo confirmation on request, and portfolio clients receive one consolidated invoice each month rather than paperwork per property.",
    ],
    included: [
      "Void property cleaning between tenancies",
      "Scheduled cleaning of communal hallways, stairwells and bin stores",
      "Pre-inventory cleaning ahead of new tenant move-in",
      "Photo confirmation of completed cleans on request",
      "Consolidated monthly invoicing across multiple properties",
      "Priority scheduling for urgent turnaround properties",
    ],
    notIncluded: [
      "Garden, garage or outbuilding clearance",
      "Removal of items left behind by previous tenants",
      "Structural repairs or maintenance work",
    ],
    process: [
      { title: "Tell us your portfolio size", description: "Share the number and type of properties you manage with us." },
      { title: "Agree a standard rate card", description: "We confirm fixed pricing per property type, ready to call off as needed." },
      { title: "One invoice, every month", description: "Every clean is consolidated into a single, simple monthly invoice." },
    ],
    pricingNote: "Void property cleans are priced per property based on size and condition; portfolio clients receive a fixed rate card.",
    pricingFrom: 130,
    pricingUnit: "fixed price from",
    faqs: [
      { question: "Do you offer portfolio-wide pricing for landlords?", answer: "Yes, landlords and letting agents managing multiple properties can agree a fixed rate card per property type, with consolidated monthly invoicing across the whole portfolio." },
      { question: "Can you clean communal areas in shared buildings?", answer: "Yes, we run scheduled cleaning contracts for hallways, stairwells, bin stores and other communal areas in HMOs and apartment blocks." },
      { question: "How quickly can you turn around a void property?", answer: "Most void properties are cleaned within the same week of being notified, and often faster when timed alongside an end of tenancy clean." },
      { question: "Do you work directly with letting agents as well as landlords?", answer: "Yes, more than 50 Derby letting agents and property managers already work with us directly, recognising our checklist and digital invoicing as part of their standard process." },
    ],
    relatedServices: ["end-of-tenancy-cleaning", "deep-cleaning", "office-commercial-cleaning"],
  },
  {
    slug: "airbnb-holiday-let-cleaning",
    name: "Airbnb & Holiday Let Cleaning",
    shortName: "Airbnb Turnover",
    idealFor: "Airbnb & short-let hosts",
    metaTitle: "Airbnb Cleaning Derby | Same-Day Turnovers | Derby Spotless",
    metaDescription:
      "Fast, five-star standard turnover cleaning for Airbnb and short-let properties in Derby. Same-day turnarounds, linen changes and guest-ready staging.",
    heroHeadline: "Five-star reviews start with a five-star clean.",
    heroSubheadline:
      "Reliable same-day turnover cleaning, linen changes and guest-ready staging that protects your ratings and your booking calendar.",
    outcomeStats: [
      { value: "<3 hrs", label: "typical turnover time" },
      { value: "7 days", label: "a week availability, including same-day" },
      { value: "4.9★", label: "average guest rating impact reported by hosts" },
    ],
    intro: [
      "Guest reviews live and die on cleanliness. We run a dedicated turnover cleaning service built around the realities of short-let hosting: tight changeover windows, last-minute bookings and the need for a consistently flawless presentation, every single time.",
      "We can sync with your booking calendar (Airbnb, Booking.com, Vrbo), manage linen and towel changes, restock essentials, and send you photo confirmation once the property is guest-ready.",
    ],
    included: [
      "Full turnover clean of all rooms, kitchen and bathrooms",
      "Bed making with fresh linen and hotel-style towel folding",
      "Restocking of toiletries, teas/coffees and welcome essentials",
      "Staging and presentation check before guest arrival",
      "Photo confirmation sent on completion",
      "Laundry collection and return available on request",
    ],
    notIncluded: [
      "Linen and towel laundering itself (available as an add-on)",
      "Maintenance or repair issues identified during clean",
      "Deep cleaning of heavily soiled properties (quoted separately)",
    ],
    process: [
      { title: "Connect your calendar", description: "Share your booking calendar or turnover dates with us." },
      { title: "We turn the property", description: "Our team cleans, restages and restocks within your changeover window." },
      { title: "Photo sign-off", description: "You receive photo confirmation the moment it's guest-ready." },
    ],
    pricingNote: "Turnover cleans for a 2-bed short-let start from £55, with volume pricing for hosts managing multiple properties.",
    pricingFrom: 55,
    pricingUnit: "per turnover",
    faqs: [
      { question: "Can you handle same-day turnovers?", answer: "Yes, same-day turnarounds are the core of this service. Tell us your checkout and check-in times and we'll plan around them." },
      { question: "Do you manage multiple properties?", answer: "We work with hosts managing portfolios of properties across Derby, with calendar syncing and consolidated monthly invoicing available." },
      { question: "What happens if a guest leaves the property in poor condition?", answer: "We'll always complete the clean to standard, but where a property requires significantly more time than a standard turnover, we'll contact you before proceeding with any additional charge." },
      { question: "Can you supply linen and towels?", answer: "We can arrange linen hire and laundering as an add-on service — ask for details when booking." },
    ],
    relatedServices: ["regular-domestic-cleaning", "deep-cleaning", "carpet-upholstery-cleaning"],
  },
  {
    slug: "office-commercial-cleaning",
    name: "Office & Commercial Cleaning",
    shortName: "Commercial Cleaning",
    idealFor: "Small businesses & offices",
    metaTitle: "Office & Commercial Cleaning Derby | Daily, Weekly Contracts | Derby Spotless",
    metaDescription:
      "Professional office and commercial cleaning contracts in Derby for small businesses, retail and clinics. Out-of-hours scheduling and fixed pricing.",
    heroHeadline: "A workplace that reflects how you do business.",
    heroSubheadline:
      "Scheduled office and commercial cleaning that runs quietly in the background, out of hours, so your team walks into a spotless workplace every morning.",
    outcomeStats: [
      { value: "Out-of-hours", label: "scheduling as standard" },
      { value: "£2m+", label: "public liability cover for commercial sites" },
      { value: "30+", label: "Derby businesses on active contracts" },
    ],
    intro: [
      "First impressions matter as much for your clients as for your staff. We run flexible commercial cleaning contracts for offices, retail units, clinics and small business premises across Derby, scheduled before or after working hours so it never disrupts your day.",
      "Every contract includes a fixed monthly price, a single point of contact, and a published cleaning specification so you always know exactly what's covered.",
    ],
    included: [
      "Desks, workstations and communal area surfaces",
      "Kitchens, breakout areas and washrooms sanitised",
      "Floors vacuumed and mopped throughout",
      "Bins emptied and waste removed to designated areas",
      "Glass partitions, doors and reception areas",
      "Consumable restocking (soap, paper towels, toilet roll) available",
    ],
    notIncluded: [
      "Specialist industrial or medical-grade cleaning",
      "Window cleaning above ground floor",
      "Waste disposal beyond standard commercial bins",
    ],
    process: [
      { title: "Site walk-through", description: "We assess your premises and agree a cleaning specification." },
      { title: "Fixed contract proposal", description: "Receive a fixed monthly price and schedule, no hidden extras." },
      { title: "Consistent delivery", description: "A dedicated team cleans to spec, with regular quality audits." },
    ],
    pricingNote: "Small office contracts typically start from £95 per month for a weekly visit; request a tailored quote for your premises.",
    pricingFrom: 95,
    pricingUnit: "per month from",
    faqs: [
      { question: "Can cleaning be scheduled outside working hours?", answer: "Yes, the majority of our commercial clients have us clean early morning, evening or weekends to avoid any disruption to their working day." },
      { question: "Do you offer contracts or one-off commercial cleans?", answer: "Both. Most businesses move to a fixed monthly contract, but we also support one-off commercial cleans for events, audits or new premises." },
      { question: "Are your commercial cleaners insured?", answer: "Yes, we carry up to £5m public liability insurance and all staff are DBS checked, which we can provide documentation for as part of any contract." },
      { question: "What size of business do you work with?", answer: "We work with small offices, retail units, clinics and studios, typically under 5,000 sq ft. For larger commercial sites, get in touch to discuss your requirements." },
    ],
    relatedServices: ["after-builders-cleaning", "deep-cleaning", "carpet-upholstery-cleaning"],
  },
  {
    slug: "after-builders-cleaning",
    name: "After Builders Cleaning",
    shortName: "After Builders",
    idealFor: "Renovations, extensions & new builds",
    metaTitle: "After Builders Cleaning Derby | Post-Renovation Clean | Derby Spotless",
    metaDescription:
      "Post-construction and after builders cleaning in Derby. We clear dust, debris and residue from renovations, extensions and new builds so you can move in faster.",
    heroHeadline: "From building site to move-in ready.",
    heroSubheadline:
      "Thorough post-construction cleaning that clears fine dust, debris and residue so your renovation or new build is genuinely ready to live in.",
    outcomeStats: [
      { value: "Fine dust", label: "removed from every surface, vent and fitting" },
      { value: "1–2 days", label: "typical turnaround for full-property cleans" },
      { value: "100%", label: "satisfaction guarantee before final sign-off" },
    ],
    intro: [
      "Construction dust gets everywhere — inside cupboards, on light fittings, deep in carpets and air vents. Standard cleaning doesn't cut it after a renovation, extension or new build. We use specialist equipment and a structured top-down approach to clear it properly, the first time.",
      "We work closely with builders, project managers and homeowners to schedule the clean at the right point in your project, so you can move in or hand over without a layer of dust over everything you've just finished.",
    ],
    included: [
      "Removal of fine dust from all surfaces, sills and fittings",
      "Light fittings, switches and sockets cleaned of residue",
      "Windows, frames and glass cleaned inside",
      "Floors deep-vacuumed and washed, including new carpets",
      "Kitchen and bathroom fittings cleaned ready for use",
      "Removal of minor packaging and construction debris",
    ],
    notIncluded: [
      "Heavy waste or skip-level debris removal",
      "Paint, plaster or adhesive residue removal requiring specialist solvents",
      "External cleaning of scaffolding or building exteriors",
    ],
    process: [
      { title: "Tell us your project stage", description: "Share your handover date and the scope of works completed." },
      { title: "Specialist team deployed", description: "We bring the right equipment for dust extraction and debris clearance." },
      { title: "Move-in ready handover", description: "A final walkthrough confirms the property is ready to use." },
    ],
    pricingNote: "After builders cleans are quoted per project based on scope; typical 3-bed renovations start from £220.",
    pricingFrom: 220,
    pricingUnit: "fixed price",
    faqs: [
      { question: "How soon after building work can you clean?", answer: "As soon as physical works are complete and the site is safe to access. We recommend booking once you have a firm handover or move-in date." },
      { question: "Can you remove paint splashes or plaster dust?", answer: "We remove general construction dust and residue from surfaces and fittings. Heavier paint or adhesive removal requiring specialist solvents is assessed and quoted separately." },
      { question: "Do you work directly with builders and contractors?", answer: "Yes, we regularly coordinate directly with building teams and project managers to fit around the final stages of a project." },
      { question: "Is after builders cleaning more expensive than a deep clean?", answer: "It typically takes longer due to the volume of fine dust and debris, so pricing is usually higher than a standard deep clean. We'll always confirm a fixed price before starting." },
    ],
    relatedServices: ["deep-cleaning", "office-commercial-cleaning", "carpet-upholstery-cleaning"],
  },
  {
    slug: "carpet-upholstery-cleaning",
    name: "Carpet & Upholstery Cleaning",
    shortName: "Carpet & Upholstery",
    idealFor: "Homes, landlords & offices",
    metaTitle: "Carpet & Upholstery Cleaning Derby | Stain & Odour Removal | Derby Spotless",
    metaDescription:
      "Professional carpet and upholstery deep cleaning in Derby using hot water extraction. Stain removal, odour treatment and fast-dry results.",
    heroHeadline: "Carpets that look (and smell) brand new.",
    heroSubheadline:
      "Professional hot water extraction cleaning for carpets, rugs and upholstery, lifting embedded dirt, stains and odours that vacuuming alone can't reach.",
    outcomeStats: [
      { value: "95%+", label: "of common stains lifted" },
      { value: "4–6 hrs", label: "typical dry time" },
      { value: "Pet & child", label: "safe, low-moisture solutions" },
    ],
    intro: [
      "Carpets and upholstery trap dirt, allergens and odours that surface cleaning never reaches. We use professional hot water extraction equipment to lift embedded grime and treat stains at the source, leaving fabrics genuinely clean, not just dry on top.",
      "This service works brilliantly alongside a deep clean or end of tenancy clean, and is one of the most requested add-ons for homes with pets or young children.",
    ],
    included: [
      "Pre-inspection and stain assessment",
      "Hot water extraction deep clean of carpets and rugs",
      "Upholstery cleaning for sofas, armchairs and dining chairs",
      "Targeted stain and odour treatment",
      "Fast-dry technique to minimise downtime",
      "Deodorising finish on request",
    ],
    notIncluded: [
      "Permanent staining from dye, bleach or burns",
      "Carpet repair or re-stretching",
      "Leather upholstery (treated as a specialist quote)",
    ],
    process: [
      { title: "Free assessment", description: "We inspect fabric type and stains to confirm the right treatment." },
      { title: "Deep extraction clean", description: "Professional equipment lifts dirt, allergens and odours at the root." },
      { title: "Fast-dry finish", description: "Most rooms are walkable again within a few hours." },
    ],
    pricingNote: "Carpet cleaning starts from £25 per room, with bundle pricing when combined with a deep or end of tenancy clean.",
    pricingFrom: 25,
    pricingUnit: "per room from",
    faqs: [
      { question: "How long until carpets are dry?", answer: "Most carpets are dry enough to walk on within 4–6 hours, and fully dry within 24 hours depending on ventilation and carpet thickness." },
      { question: "Can you remove pet stains and odours?", answer: "Yes, pet stains and odours are one of our most common requests and we use targeted enzymatic treatments for the best results." },
      { question: "Is the cleaning solution safe for children and pets?", answer: "Yes, we use low-moisture, child and pet-safe solutions as standard." },
      { question: "Can this be added to another booking?", answer: "Yes, carpet and upholstery cleaning is commonly bundled with deep cleans and end of tenancy cleans at a discounted combined rate." },
    ],
    relatedServices: ["deep-cleaning", "end-of-tenancy-cleaning", "regular-domestic-cleaning"],
  },
  {
    slug: "elderly-support-cleaning",
    name: "Elderly & Support Cleaning",
    shortName: "Elderly Support Cleaning",
    idealFor: "Elderly homeowners & family carers",
    metaTitle: "Cleaning Support for Elderly Homeowners Derby | Derby Spotless",
    metaDescription:
      "Gentle, reliable home cleaning support for elderly residents in Derby. DBS-checked cleaners, consistent visits and family updates for peace of mind.",
    heroHeadline: "Independence at home, without the worry.",
    heroSubheadline:
      "Gentle, dependable cleaning support designed around the needs of elderly homeowners, with the same familiar face and peace of mind for family members.",
    outcomeStats: [
      { value: "Same cleaner", label: "every visit for familiarity & trust" },
      { value: "DBS checked", label: "and personally interviewed staff" },
      { value: "Family updates", label: "available after every visit" },
    ],
    intro: [
      "For many elderly homeowners, a cleaner isn't just a convenience — it's the difference between managing comfortably at home and struggling alone. We take extra care matching clients with a consistent, patient and familiar cleaner who understands their routine and pace.",
      "Family members based elsewhere can request a short update after each visit, and we're always happy to liaise with carers or family on scheduling, access and any special requirements.",
    ],
    included: [
      "General home cleaning tailored to mobility and needs",
      "Kitchen and bathroom sanitising with safety in mind",
      "Light laundry and bed changing on request",
      "Gentle decluttering and tidying support",
      "Friendly, familiar and consistent cleaner",
      "Optional family update after each visit",
    ],
    notIncluded: [
      "Personal care or medical assistance of any kind",
      "Heavy lifting or moving of large furniture",
      "Gardening or outdoor maintenance",
    ],
    process: [
      { title: "A friendly introduction", description: "We arrange an introductory visit so everyone feels comfortable." },
      { title: "A consistent, familiar cleaner", description: "The same person visits every time, building genuine trust." },
      { title: "Peace of mind for family", description: "Optional updates keep family members informed and reassured." },
    ],
    pricingNote: "Priced the same as our regular domestic cleaning service, from £22 per hour, with flexible scheduling.",
    pricingFrom: 22,
    pricingUnit: "per hour",
    faqs: [
      { question: "Can a family member arrange this on someone else's behalf?", answer: "Yes, this is very common. We're happy to coordinate scheduling, access and updates directly with family members or carers." },
      { question: "Will the same person visit every time?", answer: "We prioritise consistency for elderly clients specifically, and make every effort to ensure the same trusted cleaner attends every visit." },
      { question: "Are your cleaners trained to be patient and considerate?", answer: "All cleaners are personally interviewed, DBS checked, and selected for reliability and a genuinely caring approach, particularly for elderly or vulnerable clients." },
      { question: "Can visits be arranged around medical appointments or carer visits?", answer: "Yes, we'll work around existing routines and are happy to adjust scheduling as needs change." },
    ],
    relatedServices: ["regular-domestic-cleaning", "deep-cleaning", "carpet-upholstery-cleaning"],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
