import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import { site } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedService = post.relatedServiceSlug ? getServiceBySlug(post.relatedServiceSlug) : undefined;
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
            { name: post.title, url: `${site.url}/blog/${post.slug}` },
          ]),
          articleSchema({
            headline: post.title,
            description: post.metaDescription,
            url: `${site.url}/blog/${post.slug}`,
            datePublished: post.date,
          }),
        ]}
      />

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-ink-400">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-600">Blog</Link>
            <span>/</span>
            <span className="text-ink-700">{post.category}</span>
          </nav>
          <Badge>{post.category}</Badge>
          <h1 className="mt-5 font-display text-balance text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <article>
            {post.content.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="mt-10 font-display text-2xl font-bold text-ink-950">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink-600">
                        <CheckCircle2 className="mt-1 h-[18px] w-[18px] shrink-0 text-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="mt-5 text-base leading-relaxed text-ink-600">
                  {block.text}
                </p>
              );
            })}
          </article>

          {relatedService ? (
            <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Related service</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink-950">{relatedService.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{relatedService.heroSubheadline}</p>
              <Link
                href={`/services/${relatedService.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                View {relatedService.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-ink-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-xl font-bold text-ink-950">More guides</h2>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {other.category}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-ink-950">{other.title}</h3>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  Read guide
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
