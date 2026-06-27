import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { areas } from "@/data/areas";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Derby Spotless covers Derby city and every major surrounding suburb and town, including Mickleover, Littleover, Chaddesden, Spondon, Allestree, Oakwood, Chellaston, Belper, Long Eaton and Ilkeston.",
  alternates: { canonical: "/areas-we-cover" },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Areas We Cover", url: `${site.url}/areas-we-cover` },
        ])}
      />
      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title="Covering Derby and every surrounding suburb"
            description="The same trusted standard, the same online booking, and the same satisfaction guarantee, wherever you are in and around Derby."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-cover/${area.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-display text-lg font-bold text-ink-950">
                    <MapPin className="h-4 w-4 text-brand-500" />
                    {area.name}
                  </span>
                  <span className="rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                    {area.type}
                  </span>
                </div>
                <p className="mt-3 grow text-sm leading-relaxed text-ink-500">
                  {area.intro[0]}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  View local cleaning services
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Don't see your area listed?" description="We're expanding across Derbyshire and Nottinghamshire every month — get in touch and we'll confirm coverage for your postcode." />
    </>
  );
}
