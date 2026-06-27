import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const stats = [
  { value: `${site.reviewCount}+`, label: "5-star Google reviews" },
  { value: `${site.customersServed}`, label: "customers served in Derby" },
  { value: "50+", label: "letting agents work with us" },
  { value: `${site.yearsExperience} yrs`, label: "cleaning Derby homes" },
];

export function SocialProofBar() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-10">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-sm font-semibold text-ink-700">
              {site.ratingValue} / 5 average rating across {site.reviewCount}+ reviews
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-xl font-bold text-ink-950">{stat.value}</p>
                <p className="text-xs text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
