import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { areas } from "@/data/areas";

export function AreasCoveredSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Where we work"
          title="Covering Derby and every surrounding suburb"
          description="Wherever you are in and around Derby, the same standard, the same guarantee."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas-we-cover/${area.slug}`}
              className="group flex items-center justify-between rounded-xl border border-ink-100 bg-white px-4 py-3.5 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-800">
                <MapPin className="h-4 w-4 text-brand-500" />
                {area.name}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/areas-we-cover" variant="outline" size="lg">
            View all areas we cover
          </Button>
        </div>
      </Container>
    </section>
  );
}
