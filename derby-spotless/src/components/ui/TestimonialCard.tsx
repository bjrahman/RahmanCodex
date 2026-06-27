import { Quote } from "lucide-react";
import { ReviewStars } from "./ReviewStars";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-soft)]",
        className
      )}
    >
      <Quote className="mb-4 h-6 w-6 text-brand-300" />
      <ReviewStars rating={testimonial.rating} className="mb-3" />
      <p className="grow text-[15px] leading-relaxed text-ink-700">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-5 border-t border-ink-100 pt-4">
        <p className="text-sm font-semibold text-ink-950">{testimonial.name}</p>
        <p className="text-xs text-ink-400">
          {testimonial.location} · {testimonial.service}
        </p>
      </div>
    </div>
  );
}
