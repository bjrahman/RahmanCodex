import { Phone, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { site } from "@/data/site";

export function CtaBanner({
  title = "Ready for a home that's always guest-ready?",
  description = "Get an instant, fixed price online in under two minutes — no phone call, no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, var(--color-brand-500) 0%, transparent 40%), radial-gradient(circle at 85% 80%, var(--color-brand-700) 0%, transparent 45%)",
        }}
      />
      <Container className="relative text-center">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-200">
          <Sparkles className="h-3.5 w-3.5" />
          Derby&apos;s premium cleaning company
        </div>
        <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-200">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/instant-quote" size="lg">
            Get Instant Quote
          </Button>
          <Button href={site.phoneHref} variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:border-brand-400 hover:bg-white/10 hover:text-brand-200">
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
