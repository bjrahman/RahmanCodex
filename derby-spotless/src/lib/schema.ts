import { site } from "@/data/site";

type BreadcrumbItem = { name: string; url: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description:
      "Premium, technology-enabled domestic and commercial cleaning across Derby, delivering consistent, insured and guaranteed cleaning for busy professionals, families, landlords and businesses.",
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "££",
    image: `${site.url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine1,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      "Derby",
      "Mickleover",
      "Littleover",
      "Chaddesden",
      "Spondon",
      "Allestree",
      "Oakwood",
      "Chellaston",
      "Belper",
      "Long Eaton",
      "Ilkeston",
    ],
    openingHoursSpecification: site.openingHours
      .filter((d) => d.hours !== "Closed")
      .map((d) => {
        const [opens, closes] = d.hours.split("–");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: d.day,
          opens,
          closes,
        };
      }),
    sameAs: [site.social.facebook, site.social.instagram, site.social.google],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      "@id": `${site.url}/#business`,
    },
    areaServed: opts.areaServed ?? "Derby",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema(
  reviews: { name: string; text: string; rating: number; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} Cleaning Services`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };
}
