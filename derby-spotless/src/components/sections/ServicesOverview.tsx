import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="A cleaning service for every part of your life"
          description="From the home you live in to the properties you manage, one trusted standard covers it all."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-950">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-brand-600">{service.idealFor}</p>
                <p className="mt-3 grow text-sm leading-relaxed text-ink-500">
                  {service.heroSubheadline}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
