import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-ink-100 bg-white/95 p-2.5 backdrop-blur-md lg:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink-200 py-3 text-sm font-semibold text-ink-900"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/instant-quote"
        className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white"
      >
        <Sparkles className="h-4 w-4" />
        Get Instant Quote
      </Link>
    </div>
  );
}
