import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { services, getServiceBySlug } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug];
  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: service.name, url: `${site.url}/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url: `${site.url}/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-ink-400">
                <Link href="/" className="hover:text-brand-600">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-brand-600">Services</Link>
                <span>/</span>
                <span className="text-ink-700">{service.shortName}</span>
              </nav>
              <Badge>{service.idealFor}</Badge>
              <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
                {service.heroHeadline}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
                {service.heroSubheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={`/instant-quote?service=${service.slug}`} size="lg">
                  Get Instant Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </div>
              <p className="mt-4 text-sm text-ink-400">{service.pricingNote}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {service.outcomeStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-[var(--shadow-soft)]">
                  <p className="font-display text-2xl font-bold text-brand-600">{stat.value}</p>
                  <p className="mt-1 text-sm leading-snug text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950">
            {Icon ? <Icon className="h-[22px] w-[22px] text-brand-400" /> : null}
          </div>
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950">What&apos;s included</h2>
              <ul className="mt-6 space-y-3.5">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950">Not included</h2>
              <ul className="mt-6 space-y-3.5">
                {service.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-500">
                    <XCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ink-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-400">
                Need something on this list? Mention it in your instant quote or get in touch and we&apos;ll confirm pricing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step.title} className="relative">
                <span className="font-display text-5xl font-bold text-ink-100">0{index + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-950">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <TrustBadges />
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              You might also need
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
                >
                  <h3 className="font-display text-base font-bold text-ink-950">{relatedService.name}</h3>
                  <p className="mt-2 grow text-sm leading-relaxed text-ink-500">
                    {relatedService.heroSubheadline}
                  </p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBanner title={`Ready to book ${service.shortName.toLowerCase()}?`} serviceSlug={service.slug} />
    </>
  );
}
