import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, Phone, Quote, Clock, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ReviewStars } from "@/components/ui/ReviewStars";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { areas, getAreaBySlug } from "@/data/areas";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { generalFaqs } from "@/data/faqs";
import { breadcrumbSchema, serviceSchema, reviewSchema } from "@/lib/schema";
import { site } from "@/data/site";

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas-we-cover/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Areas We Cover", url: `${site.url}/areas-we-cover` },
            { name: area.name, url: `${site.url}/areas-we-cover/${area.slug}` },
          ]),
          serviceSchema({
            name: `Cleaning Services in ${area.name}`,
            description: area.metaDescription,
            url: `${site.url}/areas-we-cover/${area.slug}`,
            areaServed: area.name,
          }),
          reviewSchema([{ ...area.testimonial, date: new Date().toISOString().slice(0, 10) }]),
        ]}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container>
          <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-ink-400">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link href="/areas-we-cover" className="hover:text-brand-600">Areas We Cover</Link>
            <span>/</span>
            <span className="text-ink-700">{area.name}</span>
          </nav>
          <Badge>
            <MapPin className="h-3 w-3" />
            {area.type} · {area.postcodes}
          </Badge>
          <h1 className="mt-5 max-w-2xl font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Premium cleaning services in {area.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            The same trusted cleaner, fixed arrival windows and satisfaction guarantee that Derby Spotless is known for, delivered locally across {area.name}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/instant-quote" size="lg">
              Get Instant Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:max-w-lg">
            <div className="rounded-xl border border-ink-100 bg-white px-4 py-3.5">
              <Clock className="h-4 w-4 text-brand-500" />
              <p className="mt-2 text-sm font-bold text-ink-950">{area.responseTime}</p>
              <p className="text-xs text-ink-400">average response</p>
            </div>
            <div className="rounded-xl border border-ink-100 bg-white px-4 py-3.5">
              <MapPin className="h-4 w-4 text-brand-500" />
              <p className="mt-2 text-sm font-bold text-ink-950">{area.postcodes}</p>
              <p className="text-xs text-ink-400">postcodes covered</p>
            </div>
            <div className="rounded-xl border border-ink-100 bg-white px-4 py-3.5">
              <Home className="h-4 w-4 text-brand-500" />
              <p className="mt-2 text-sm font-bold text-ink-950">{services.length} services</p>
              <p className="text-xs text-ink-400">available locally</p>
            </div>
          </div>
          <PhotoPlaceholder
            label={`Photo: cleaning in ${area.name}`}
            aspect="wide"
            className="mt-10"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          {area.intro.map((paragraph) => (
            <p key={paragraph} className="mt-2 text-base leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            {area.landmarks.map((landmark) => (
              <span
                key={landmark}
                className="rounded-full border border-ink-100 bg-ink-50 px-3.5 py-1.5 text-xs font-medium text-ink-600"
              >
                {landmark}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            Cleaning services available in {area.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Home;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-ink-100 bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-950">{service.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">{service.idealFor}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="rounded-2xl border border-ink-100 bg-white p-8 text-center shadow-[var(--shadow-soft)]">
            <Quote className="mx-auto h-7 w-7 text-brand-300" />
            <ReviewStars rating={area.testimonial.rating} className="mx-auto mt-4 justify-center" />
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              &ldquo;{area.testimonial.text}&rdquo;
            </p>
            <p className="mt-5 text-sm font-semibold text-ink-950">{area.testimonial.name}</p>
          </div>
        </Container>
      </section>

      <FaqSection
        faqs={generalFaqs}
        title={`Frequently asked questions for ${area.name}`}
        description="Everything local customers ask before booking. Can't find your answer? Just get in touch."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-xl font-bold text-ink-950">Nearby areas we also cover</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/areas-we-cover/${other.slug}`}
                className="flex items-center gap-1.5 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                {other.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title={`Ready to book cleaning in ${area.name}?`} />
    </>
  );
}
