import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogPosts } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cleaning Guides & Local Tips",
  description:
    "Practical cleaning guides, pricing breakdowns and checklists for Derby homeowners, tenants, landlords and Airbnb hosts.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />

      <section className="bg-ink-50/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Derby Spotless Blog"
            title="Practical cleaning guides for Derby"
            description="Pricing breakdowns, checklists and local guides for homeowners, tenants, landlords and Airbnb hosts across Derby."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 gap-6 rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-200 hover:border-brand-200 hover:shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {featured.category}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-ink-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 lg:whitespace-nowrap">
              Read guide
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink-950">{post.title}</h3>
                <p className="mt-2.5 grow text-sm leading-relaxed text-ink-500">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-400">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1 font-semibold text-ink-900">
                    Read
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
