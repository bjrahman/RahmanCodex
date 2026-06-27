import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `The terms and conditions for booking and using ${site.name} cleaning services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "27 June 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Terms and Conditions", url: `${site.url}/terms-and-conditions` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Terms and Conditions</h1>
          <p className="mt-3 text-sm text-ink-400">Last updated: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">1. About these terms</h2>
            <p className="mt-3">
              These terms and conditions govern any booking made with {site.legalName} (&ldquo;{site.name}&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;). By requesting a quote, confirming a booking or using our
              services, you agree to be bound by them.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">2. Quotes and pricing</h2>
            <p className="mt-3">
              Instant quotes provided on our website are estimates based on the information you provide and may
              be adjusted once we&apos;ve confirmed property size, condition and access. We&apos;ll always agree a
              fixed price with you before any cleaning takes place. Prices for ongoing services may be reviewed
              periodically, with reasonable notice given in advance of any change.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">3. Bookings and access</h2>
            <p className="mt-3">
              You agree to provide accurate property details and safe, reasonable access for our cleaners at
              the agreed time. If access cannot be gained through no fault of ours, the visit may still be
              chargeable. Please remove or secure any items of particular sentimental or high value before each
              visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">4. Cancellations and rescheduling</h2>
            <p className="mt-3">
              We ask for at least 48 hours&apos; notice to cancel or reschedule a visit. Cancellations made with
              less notice, or missed access on the day, may incur a charge to cover the cleaner&apos;s reserved
              time.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">5. Our satisfaction guarantee</h2>
            <p className="mt-3">
              If you&apos;re not satisfied with any area cleaned, let us know within 24 hours and we&apos;ll
              return to re-clean it free of charge. This guarantee applies to the standard of cleaning carried
              out and does not cover pre-existing damage, wear and tear, or issues outside the agreed scope of
              work.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">6. Payment</h2>
            <p className="mt-3">
              Payment is due as set out at the time of booking, typically on or shortly after completion of a
              visit for one-off services, or on a recurring basis for ongoing services. We accept payment by the
              methods shown at checkout or invoice; we do not store full card details.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">7. Liability and insurance</h2>
            <p className="mt-3">
              We hold public liability insurance up to £5 million. We take reasonable care of your property at
              all times; any accidental damage caused by our team should be reported within 48 hours so we can
              investigate and resolve it fairly. We are not liable for pre-existing damage or items not
              disclosed to us in advance.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">8. Our cleaners</h2>
            <p className="mt-3">
              All cleaners working under the {site.name} name are DBS checked and interviewed in person. We aim
              to provide the same cleaner for every visit wherever possible, but reserve the right to assign a
              suitably vetted alternative where needed due to holiday, illness or scheduling.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">9. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">10. Contact us</h2>
            <p className="mt-3">
              For any questions about these terms, contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {site.email}
              </a>{" "}
              or write to us at {site.addressLine1}, {site.addressLocality}, {site.postalCode}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
