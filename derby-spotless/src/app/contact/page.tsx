import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Derby Spotless by phone, WhatsApp, email or online form. We aim to respond to every enquiry within 60 minutes during business hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Badge>
            <Clock className="h-3 w-3" />
            {site.responseTime} average response
          </Badge>
          <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Talk to a real person, fast.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            Prefer to get a price instantly? Use our{" "}
            <a href="/instant-quote" className="font-semibold text-brand-600 hover:text-brand-700">
              Instant Quote
            </a>{" "}
            tool. For anything else, reach us below.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-5">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Call us</p>
                  <p className="text-base font-bold text-ink-950">{site.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">WhatsApp</p>
                  <p className="text-base font-bold text-ink-950">Message us directly</p>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Email</p>
                  <p className="text-base font-bold text-ink-950">{site.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Office</p>
                  <p className="text-base font-bold text-ink-950">
                    {site.addressLine1}, {site.addressLocality}, {site.postalCode}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Opening hours</p>
                <dl className="mt-3 space-y-1.5">
                  {site.openingHours.map((day) => (
                    <div key={day.day} className="flex items-center justify-between text-sm">
                      <dt className="text-ink-600">{day.day}</dt>
                      <dd className="font-semibold text-ink-900">{day.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <h2 className="font-display text-xl font-bold text-ink-950">Send us a message</h2>
              <p className="mt-1.5 text-sm text-ink-500">
                We aim to reply within {site.responseTime} during business hours.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 text-center sm:py-20">
        <Container>
          <p className="text-sm text-ink-500">Looking for a fixed price instead?</p>
          <div className="mt-5 flex justify-center">
            <Button href="/instant-quote" size="lg">
              Get Instant Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
