import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { testimonials } from "@/data/testimonials";
import { breadcrumbSchema, reviewSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read ${site.reviewCount}+ verified reviews from Derby Spotless customers: homeowners, landlords, letting agents, Airbnb hosts and businesses across Derby.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Reviews", url: `${site.url}/reviews` },
          ]),
          reviewSchema(testimonials),
        ]}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Badge>
            <Star className="h-3 w-3 fill-current" />
            {site.ratingValue} average rating
          </Badge>
          <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Don&apos;t just take our word for it.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            {site.reviewCount}+ verified reviews from professionals, families, landlords, letting agents
            and Airbnb hosts across Derby.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-${testimonial.date}`} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Ready to become our next five-star review?" />
    </>
  );
}
