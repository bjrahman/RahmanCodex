export type Area = {
  slug: string;
  name: string;
  type: "City" | "Suburb" | "Town";
  postcodes: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  landmarks: string[];
  responseTime: string;
  testimonial: { name: string; text: string; rating: number };
};

export const areas: Area[] = [
  {
    slug: "derby",
    name: "Derby",
    type: "City",
    postcodes: "DE1, DE3, DE21, DE22, DE23, DE24",
    metaTitle: "Cleaning Services in Derby | Domestic & Commercial | Derby Spotless",
    metaDescription:
      "Derby Spotless is Derby's premium cleaning company, covering the city centre and every surrounding suburb with the same trusted, insured standard.",
    intro: [
      "As a Derby-based company, the city centre is where it all started. From apartments overlooking Pride Park to family homes near Markeaton Park and Allestree, our teams cover every corner of Derby with the same fixed standard of cleaning.",
      "We work with homeowners near the Cathedral Quarter, professionals in the Derbion and Friar Gate area, and landlords managing properties close to the University of Derby, all on the same transparent, online booking system.",
    ],
    landmarks: ["Derby Cathedral", "Pride Park Stadium", "Derbion Shopping Centre", "Markeaton Park", "Derby Silk Mill"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Sarah M., Derby City Centre",
      text: "Booked online in two minutes and had a confirmed cleaner the same day. My flat near Pride Park has never looked better, and the digital invoice makes expensing it effortless.",
      rating: 5,
    },
  },
  {
    slug: "mickleover",
    name: "Mickleover",
    type: "Suburb",
    postcodes: "DE3",
    metaTitle: "Cleaning Services in Mickleover, Derby | Derby Spotless",
    metaDescription:
      "Trusted home cleaning in Mickleover, Derby. Same cleaner every visit, fixed arrival windows and a satisfaction guarantee for local families and professionals.",
    intro: [
      "Mickleover's mix of established family homes and newer developments around Western Park makes it one of our most requested suburbs for regular weekly and fortnightly cleaning.",
      "We know the area well, from the homes near Mickleover Golf Club to the streets surrounding Station Road, and our cleaners are familiar with the parking and access patterns typical of Mickleover properties.",
    ],
    landmarks: ["Western Park", "Mickleover Golf Club", "Mickleover Sports Club", "Station Road"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "James T., Mickleover",
      text: "We've used three different cleaning companies over the years and Derby Spotless is the first one that's actually consistent. Same cleaner, same standard, every fortnight.",
      rating: 5,
    },
  },
  {
    slug: "littleover",
    name: "Littleover",
    type: "Suburb",
    postcodes: "DE23",
    metaTitle: "Cleaning Services in Littleover, Derby | Derby Spotless",
    metaDescription:
      "Reliable domestic and end of tenancy cleaning in Littleover, Derby. DBS-checked cleaners, online booking and a satisfaction guarantee.",
    intro: [
      "Littleover's tree-lined streets and popular family catchment make it a stronghold for our regular domestic cleaning service, particularly among busy parents juggling school runs and full-time work.",
      "We also see strong demand from landlords near Heatherton Village and Sunnyhill managing rental turnovers between tenants.",
    ],
    landmarks: ["Heatherton Village", "Sunnyhill", "Littleover Community School area", "Pastures Hill"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Priya K., Littleover",
      text: "Having the same cleaner who knows exactly how we like things done has been brilliant for our household with two young kids. Booking and paying online makes it completely hassle-free.",
      rating: 5,
    },
  },
  {
    slug: "chaddesden",
    name: "Chaddesden",
    type: "Suburb",
    postcodes: "DE21",
    metaTitle: "Cleaning Services in Chaddesden, Derby | Derby Spotless",
    metaDescription:
      "Professional home cleaning in Chaddesden, Derby. Fixed arrival windows, transparent pricing and a satisfaction guarantee on every visit.",
    intro: [
      "Chaddesden's strong community feel and proximity to Chaddesden Park make it a popular base for family bookings, while its closeness to Oakwood and the A38 corridor brings steady demand from commuting professionals.",
      "We regularly clean homes near Nottingham Road and the Whitaker Road area, with flexible scheduling around shift work and school hours.",
    ],
    landmarks: ["Chaddesden Park", "Nottingham Road", "Oakwood border", "Whitaker Road"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Lewis B., Chaddesden",
      text: "I work shifts so a fixed arrival window matters to me. Derby Spotless has never missed it once in six months of fortnightly cleans.",
      rating: 5,
    },
  },
  {
    slug: "spondon",
    name: "Spondon",
    type: "Suburb",
    postcodes: "DE21",
    metaTitle: "Cleaning Services in Spondon, Derby | Derby Spotless",
    metaDescription:
      "Local cleaning services in Spondon, Derby for homes, landlords and Airbnb hosts. Insured, DBS-checked cleaners with online booking.",
    intro: [
      "Spondon's village character around St Werburgh's Church and the historic high street sits alongside a growing number of young professional households, giving us a healthy mix of regular cleans and one-off deep cleans.",
      "We also support a number of landlords near Borrowash Road managing turnovers for rental properties close to the train station.",
    ],
    landmarks: ["St Werburgh's Church", "Spondon High Street", "Borrowash Road", "Spondon Train Station"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Anna R., Spondon",
      text: "Booked a deep clean before moving in and it was spotless. Genuinely impressed by the attention to detail behind appliances and inside cupboards.",
      rating: 5,
    },
  },
  {
    slug: "allestree",
    name: "Allestree",
    type: "Suburb",
    postcodes: "DE22",
    metaTitle: "Cleaning Services in Allestree, Derby | Derby Spotless",
    metaDescription:
      "Premium home cleaning in Allestree, Derby. Trusted by families and professionals near Allestree Park, with consistent cleaners and online booking.",
    intro: [
      "Allestree's larger family homes near Allestree Park and Allestree Hall are some of our most established regular cleaning accounts, often combined with seasonal deep cleans ahead of family gatherings.",
      "We're also a regular choice for professionals commuting toward the city centre who want a dependable, fixed-schedule cleaning service.",
    ],
    landmarks: ["Allestree Park", "Allestree Hall", "Markeaton Park (border)", "Park Farm Centre"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Helen D., Allestree",
      text: "We've had the same cleaner for over a year now. She knows our home better than we do at this point. It's exactly the consistency we were looking for.",
      rating: 5,
    },
  },
  {
    slug: "oakwood",
    name: "Oakwood",
    type: "Suburb",
    postcodes: "DE21",
    metaTitle: "Cleaning Services in Oakwood, Derby | Derby Spotless",
    metaDescription:
      "Trusted domestic cleaning in Oakwood, Derby. Online booking, fixed arrival windows and DBS-checked cleaners for local homes.",
    intro: [
      "Oakwood's newer housing developments near Oakwood Retail Park bring strong demand for regular cleaning among young families and professional couples settling into the area.",
      "We also support several landlords with properties close to the Chaddesden border managing rental turnovers between tenants.",
    ],
    landmarks: ["Oakwood Retail Park", "Lime Lane", "Chaddesden border", "Oakwood Park & Ride"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Mark S., Oakwood",
      text: "Easy online booking, transparent pricing and the cleaner actually turned up exactly when she said she would. Sounds simple but it's rare.",
      rating: 5,
    },
  },
  {
    slug: "chellaston",
    name: "Chellaston",
    type: "Suburb",
    postcodes: "DE73",
    metaTitle: "Cleaning Services in Chellaston, Derby | Derby Spotless",
    metaDescription:
      "Reliable home and end of tenancy cleaning in Chellaston, Derby. Insured, DBS-checked cleaners with a satisfaction guarantee.",
    intro: [
      "Chellaston's rapid growth, with new estates spreading toward Swarkestone Road, has made it one of our fastest-growing areas for regular domestic cleaning, particularly among first-time buyers and growing families.",
      "We also see consistent demand for end of tenancy cleans as the area's rental market continues to expand near the A50 corridor.",
    ],
    landmarks: ["Swarkestone Road", "Chellaston Academy area", "Chellaston Park", "A50 corridor"],
    responseTime: "under 60 minutes",
    testimonial: {
      name: "Olivia F., Chellaston",
      text: "Moved into a new-build last year and have used Derby Spotless for fortnightly cleaning ever since. Always on time, always thorough.",
      rating: 5,
    },
  },
  {
    slug: "belper",
    name: "Belper",
    type: "Town",
    postcodes: "DE56",
    metaTitle: "Cleaning Services in Belper, Derbyshire | Derby Spotless",
    metaDescription:
      "Professional cleaning services in Belper, Derbyshire. Domestic, deep and end of tenancy cleaning with online booking and a satisfaction guarantee.",
    intro: [
      "Belper's historic character, anchored by the UNESCO-listed Derwent Valley Mills, brings a mix of period homes and riverside properties that benefit from our deep cleaning and regular domestic services alike.",
      "We regularly serve households near Belper River Gardens and the Market Place, with flexible scheduling for the town's many commuters travelling into Derby.",
    ],
    landmarks: ["Derwent Valley Mills (UNESCO site)", "Belper River Gardens", "Belper Market Place", "Belper Memorial Gardens"],
    responseTime: "under 75 minutes",
    testimonial: {
      name: "Rachel N., Belper",
      text: "Our period cottage has some quirky corners and the team handled it brilliantly. Lovely to deal with from booking through to payment.",
      rating: 5,
    },
  },
  {
    slug: "long-eaton",
    name: "Long Eaton",
    type: "Town",
    postcodes: "NG10",
    metaTitle: "Cleaning Services in Long Eaton | Derby Spotless",
    metaDescription:
      "Trusted cleaning services in Long Eaton for homes, landlords and businesses. Same-day quotes, insured cleaners and online booking.",
    intro: [
      "Long Eaton's strong rental market around Trent Lock and the town centre keeps end of tenancy cleaning one of our most booked services here, alongside regular cleaning for the area's many family homes.",
      "We also support several local businesses near the Market Place with scheduled commercial cleaning contracts.",
    ],
    landmarks: ["Trent Lock", "Long Eaton Market", "West Park", "Long Eaton Town Centre"],
    responseTime: "under 75 minutes",
    testimonial: {
      name: "David W., Long Eaton",
      text: "Used Derby Spotless for an end of tenancy clean on a rental property and the letting agent didn't raise a single issue. Saved us so much stress.",
      rating: 5,
    },
  },
  {
    slug: "ilkeston",
    name: "Ilkeston",
    type: "Town",
    postcodes: "DE7",
    metaTitle: "Cleaning Services in Ilkeston, Derbyshire | Derby Spotless",
    metaDescription:
      "Local, insured cleaning services in Ilkeston, Derbyshire. Domestic, deep and end of tenancy cleaning with transparent online pricing.",
    intro: [
      "Ilkeston's mix of established residential streets near the Market Place and newer developments toward Rutland Recreation Ground gives us a steady base of regular cleaning clients alongside growing demand from landlords.",
      "Our cleaners are familiar with the town's terraced housing layouts, which means faster, more efficient visits without compromising on standard.",
    ],
    landmarks: ["Ilkeston Market Place", "Rutland Recreation Ground", "Erewash Museum", "Bath Street"],
    responseTime: "under 75 minutes",
    testimonial: {
      name: "Karen P., Ilkeston",
      text: "Great communication throughout, fair pricing and the cleaner was fantastic with our two dogs and muddy floors. Highly recommend.",
      rating: 5,
    },
  },
];

export const getAreaBySlug = (slug: string) => areas.find((area) => area.slug === slug);
