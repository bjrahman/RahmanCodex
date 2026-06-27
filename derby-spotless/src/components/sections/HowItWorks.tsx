import { Search, CalendarCheck2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    icon: Search,
    title: "Get your instant quote",
    description: "Answer a few quick questions about your property and service online. No phone call needed.",
  },
  {
    icon: CalendarCheck2,
    title: "Choose your time, confirm online",
    description: "Pick a fixed arrival window that suits you and confirm your booking securely online in minutes.",
  },
  {
    icon: Sparkles,
    title: "Relax, we'll take it from here",
    description: "Your vetted cleaner arrives on time, every time, and you get a digital invoice after every visit.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From enquiry to spotless, in three simple steps"
          description="A technology-led booking process designed to take less time than making a cup of tea."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-[var(--shadow-soft)]">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="absolute -top-2 right-0 font-display text-5xl font-bold text-ink-100">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/instant-quote" size="lg">
            Get Instant Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
