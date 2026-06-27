import type { Metadata } from "next";
import { ShieldCheck, UserCheck, CalendarClock, Smartphone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Derby Spotless was founded to fix what's broken about hiring a cleaner — inconsistent standards, no-shows and zero accountability. Here's how we work, and why it's different.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: UserCheck,
    title: "Consistency over convenience",
    description:
      "We'd rather take longer to match you with the right cleaner than rush a placement and have you start again in three weeks.",
  },
  {
    icon: CalendarClock,
    title: "Your time is the product",
    description:
      "Every decision we make — fixed windows, online booking, digital invoices — exists to remove friction from your day, not ours.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability, not excuses",
    description:
      "Insurance, DBS checks and a genuine satisfaction guarantee aren't marketing lines here. They're how disputes get resolved before they start.",
  },
  {
    icon: Smartphone,
    title: "Technology where it helps, people where it matters",
    description:
      "Booking, payment and invoicing are digital and instant. The clean itself is still done by a real person who knows your home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "About Us", url: `${site.url}/about` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <Badge>Founded {site.founded} · Derby-based</Badge>
          <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            We built the cleaning company we couldn&apos;t find ourselves.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            {site.yearsExperience}+ years in, Derby Spotless exists to replace the inconsistency, no-shows
            and guesswork of hiring a cleaner with something genuinely dependable.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-600">
            Derby Spotless started in {site.founded} after one too many conversations with friends and
            family about cleaners who cancelled last minute, never quite matched the standard they were
            promised, or left them chasing an invoice that never arrived. None of that was about effort —
            it was about a complete lack of structure behind most local cleaning services.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-600">
            So we built one with structure at the centre: a published cleaning standard for every service,
            DBS-checked and personally interviewed cleaners, fixed arrival windows backed by real
            scheduling software, and online booking and payment so nothing depends on a phone call being
            answered. Today we serve {site.customersServed} customers across Derby and the surrounding
            suburbs and towns — homeowners, landlords, letting agents, Airbnb hosts and small businesses —
            all on the same standard.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-600">
            We&apos;re still a Derby business, based on Nottingham Road in the city centre, and we still
            believe the best way to grow a cleaning company is to be relentlessly consistent at the one
            thing that actually matters: showing up, and doing the job properly, every single time.
          </p>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind every booking"
            description="None of this is complicated. It's just rarely done properly in the cleaning industry — so we made it the whole point."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950">
                  <value.icon className="h-[22px] w-[22px] text-brand-400" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where we operate"
            title="A Derby business, serving Derby and beyond"
            description={`Based at ${site.addressLine1}, ${site.addressLocality}, with cleaners covering the city and every major surrounding suburb and town.`}
          />
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2.5 rounded-full border border-ink-100 bg-white px-5 py-3 text-sm font-semibold text-ink-700">
              <MapPin className="h-4 w-4 text-brand-500" />
              {site.addressLine1}, {site.addressLocality}, {site.postalCode}
            </div>
          </div>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </Container>
      </section>

      <CtaBanner title="See it for yourself" description="Get an instant, fixed price online and find out why Derby trusts us with their homes and properties." />
    </>
  );
}
