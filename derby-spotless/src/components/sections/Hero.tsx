import { Phone, CheckCircle2, Star, CalendarCheck, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[640px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 0%, var(--color-brand-100) 0%, transparent 55%), radial-gradient(circle at 0% 30%, var(--color-gold-300) 0%, transparent 35%)",
        }}
      />
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-[var(--shadow-soft)]">
            <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
            {site.ratingValue} rated · {site.reviewCount}+ Derby reviews
          </div>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.4rem]">
            Professional Cleaning Services That Give You Your Time Back.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            Premium domestic and commercial cleaning across Derby, delivered with consistency,
            professionalism and complete peace of mind.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/instant-quote" size="lg">
              Get Instant Quote
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </div>
          <TrustBadges className="mt-10" />
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-ink-100 pb-4">
              <div>
                <p className="text-xs font-medium text-ink-400">Your next visit</p>
                <p className="font-display text-lg font-bold text-ink-950">Tomorrow, 9:00–10:00am</p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                <CalendarCheck className="h-3.5 w-3.5" />
                Confirmed
              </span>
            </div>
            <div className="flex items-center gap-3 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-white">
                EM
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-950">Emma, your regular cleaner</p>
                <p className="flex items-center gap-1 text-xs text-ink-400">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-500" /> DBS checked · 4.9★ rated
                </p>
              </div>
            </div>
            <div className="space-y-2.5 border-t border-ink-100 pt-4">
              {["Fortnightly · 3-bed house", "Fixed arrival window", "Digital invoice after every visit"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-ink-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
              <span className="text-sm font-medium text-ink-500">Next payment</span>
              <span className="font-display text-base font-bold text-ink-950">£48.00</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-[var(--shadow-card)] sm:block">
            <p className="font-display text-2xl font-bold text-brand-600">{site.customersServed}</p>
            <p className="text-xs text-ink-400">customers served across Derby</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
