import { UserCheck, CalendarClock, ShieldCheck, Smartphone, RotateCcw, Receipt } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: UserCheck,
    title: "The same trusted cleaner, every time",
    description:
      "No revolving door of strangers. We match you with one dedicated cleaner who learns your home, so you never have to repeat yourself.",
  },
  {
    icon: CalendarClock,
    title: "Fixed arrival windows, never a guessing game",
    description:
      "Your time matters. We commit to a confirmed window for every visit and notify you immediately if anything changes.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured and DBS-checked, always",
    description:
      "Every cleaner is background checked and personally interviewed before they ever step into your home or business.",
  },
  {
    icon: Smartphone,
    title: "Book, pay and manage it all online",
    description:
      "A modern, technology-led booking process — instant quotes, secure online payments and a digital invoice after every visit.",
  },
  {
    icon: RotateCcw,
    title: "A satisfaction guarantee that actually means something",
    description:
      "Not happy with something? Tell us within 24 hours and we'll return to fix it, free of charge, no questions asked.",
  },
  {
    icon: Receipt,
    title: "Fast, transparent communication",
    description:
      "A 60-minute average response time on new enquiries, with no hidden charges hiding in the fine print.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Derby Spotless"
          title="Why choose Derby Spotless instead of another cleaner?"
          description="Less stress, more consistency, and a standard you can actually rely on — not just promises."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950">
                <point.icon className="h-[22px] w-[22px] text-brand-400" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{point.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
