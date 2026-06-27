import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "27 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Privacy Policy", url: `${site.url}/privacy-policy` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink-400">Last updated: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">1. Introduction</h2>
            <p className="mt-3">
              {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
              privacy and is committed to protecting your personal data. This policy explains what
              information we collect when you use our website or book our cleaning services, how we use
              it, and the rights you have over it under UK data protection law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">2. Information we collect</h2>
            <p className="mt-3">When you request a quote, make a booking or contact us, we may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Your name, email address, phone number and property address or postcode</li>
              <li>Booking details such as service type, frequency and preferred dates</li>
              <li>Payment information, processed securely by our payment provider (we do not store full card details)</li>
              <li>Communications you send us by email, WhatsApp, phone or our contact and quote forms</li>
              <li>Basic website usage data such as pages visited and device/browser type</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">3. How we use your information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide instant quotes and process bookings, payments and digital invoices</li>
              <li>Match you with a cleaner and coordinate scheduling and access</li>
              <li>Respond to enquiries sent via phone, email, WhatsApp or our website forms</li>
              <li>Improve our website, services and customer communications</li>
              <li>Meet our legal, accounting and insurance obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">4. Cookies</h2>
            <p className="mt-3">
              Our website uses essential cookies required for it to function, along with optional analytics
              cookies that help us understand how the site is used. See our{" "}
              <a href="/cookie-policy" className="font-semibold text-brand-600 hover:text-brand-700">
                Cookie Policy
              </a>{" "}
              for full details and how to manage your preferences.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">5. Sharing your information</h2>
            <p className="mt-3">
              We do not sell your personal data. We may share it with trusted third parties strictly where
              necessary to deliver our service, including payment processors, scheduling and communication
              software providers, and the individual cleaner or team assigned to your booking. Any
              third-party processor we use is contractually required to protect your data to an equivalent
              standard.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">6. Data retention</h2>
            <p className="mt-3">
              We retain booking and invoicing records for as long as required for accounting and legal
              purposes, typically up to six years. Enquiry data not converted into a booking is retained
              only as long as needed to respond, and is periodically deleted thereafter.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">7. Your rights</h2>
            <p className="mt-3">
              Under UK GDPR, you have the right to access, correct, delete or restrict the use of your
              personal data, and to object to certain processing. To exercise any of these rights, contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">8. Contact us</h2>
            <p className="mt-3">
              For any questions about this policy or your personal data, contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {site.email}
              </a>{" "}
              or write to us at {site.addressLine1}, {site.addressLocality}, {site.postalCode}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">9. Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
