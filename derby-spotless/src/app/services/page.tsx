import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Derby",
  description:
    "Explore Derby Spotless's full range of premium cleaning services — regular domestic cleaning, deep cleaning, end of tenancy, landlord & Airbnb turnovers, commercial contracts and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />
      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="A cleaning service for every part of your life"
            description="Whatever you need cleaned, and whoever you are, there's a Derby Spotless service built around your outcome — not a generic checklist."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Home;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-ink-950">{service.name}</h2>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {service.idealFor}
                  </p>
                  <p className="mt-3 grow text-sm leading-relaxed text-ink-500">
                    {service.heroSubheadline}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="text-sm font-bold text-ink-950">
                      From £{service.pricingFrom}{" "}
                      <span className="font-normal text-ink-400">{service.pricingUnit}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      View service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
