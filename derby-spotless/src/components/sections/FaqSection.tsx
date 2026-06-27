import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description = "Everything you need to know before booking. Can't find your answer? Just get in touch.",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={title} description={description} />
        <div className="mt-12">
          <FaqAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
