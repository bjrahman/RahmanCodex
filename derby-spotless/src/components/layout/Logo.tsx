import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
        <Sparkles className="h-5 w-5 text-white" strokeWidth={2.25} />
      </span>
      <span
        className={cn(
          "font-display text-lg font-bold leading-none tracking-tight",
          inverted ? "text-white" : "text-ink-950"
        )}
      >
        Derby Spotless
      </span>
    </Link>
  );
}
