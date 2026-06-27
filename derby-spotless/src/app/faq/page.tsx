import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { generalFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about booking, pricing, insurance, guarantees and what to expect from Derby Spotless's cleaning services.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "FAQ", url: `${site.url}/faq` },
          ]),
          faqSchema(generalFaqs),
        ]}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Badge>FAQ</Badge>
          <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            Everything you need to know before booking. Can&apos;t find your answer here?{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
              Just get in touch
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={generalFaqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
