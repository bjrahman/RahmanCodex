import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection({ limit = 6 }: { limit?: number }) {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trusted across Derby"
          title="Don't just take our word for it"
          description="Real feedback from professionals, families, landlords and Airbnb hosts across Derby."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, limit).map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.date}`} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
