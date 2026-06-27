import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies on our website, and how to manage your preferences.`,
  alternates: { canonical: "/cookie-policy" },
};

const LAST_UPDATED = "27 June 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Cookie Policy", url: `${site.url}/cookie-policy` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Cookie Policy</h1>
          <p className="mt-3 text-sm text-ink-400">Last updated: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">1. What are cookies</h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you visit a website. They help the site
              function correctly and let us understand how it&apos;s used, so we can keep improving it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">2. Cookies we use</h2>
            <p className="mt-3">We use the following categories of cookies on our website:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-ink-800">Essential cookies</span> — required for the website
                and our instant quote tool to work correctly. These cannot be switched off.
              </li>
              <li>
                <span className="font-semibold text-ink-800">Analytics cookies</span> — help us understand which
                pages are popular and how visitors move through the site, so we can improve the experience.
              </li>
              <li>
                <span className="font-semibold text-ink-800">Functionality cookies</span> — remember choices
                you&apos;ve made, such as form progress in our instant quote tool, to make your next visit
                smoother.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">3. Third-party cookies</h2>
            <p className="mt-3">
              Some cookies may be set by third-party services we use, such as analytics or scheduling providers.
              We don&apos;t control these cookies directly; please refer to the relevant third party&apos;s own
              cookie policy for further detail.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">4. Managing cookies</h2>
            <p className="mt-3">
              You can control or delete cookies through your browser settings at any time. Most browsers let you
              block cookies from specific sites, block third-party cookies, or clear all cookies when you close
              the browser. Please note that blocking essential cookies may affect how parts of our site work,
              including the instant quote tool.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">5. More information</h2>
            <p className="mt-3">
              For more on how we handle your personal data more broadly, see our{" "}
              <Link href="/privacy-policy" className="font-semibold text-brand-600 hover:text-brand-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-950">6. Contact us</h2>
            <p className="mt-3">
              If you have any questions about our use of cookies, contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
