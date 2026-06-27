import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { InstantQuoteWizard } from "@/components/forms/InstantQuoteWizard";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Instant Quote",
  description:
    "Get an instant, fixed price for cleaning in Derby in under two minutes — no phone call needed. Choose your service, tell us about your property, and get a quote on screen.",
  alternates: { canonical: "/instant-quote" },
};

export default function InstantQuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Instant Quote", url: `${site.url}/instant-quote` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <Badge>Under 2 minutes · No phone call needed</Badge>
          <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Get your instant cleaning quote
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            Answer a few quick questions and see a price on screen straight away. No obligation, no sales
            call.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <InstantQuoteWizard />
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <TrustBadges />
        </Container>
      </section>
    </>
  );
}
