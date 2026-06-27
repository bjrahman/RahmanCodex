"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "ds_exit_intent_shown";

export function ExitIntentModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const show = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };

    const timer = setTimeout(() => {
      window.addEventListener("mouseleave", onMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md animate-fade-up rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setVisible(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-400 hover:bg-ink-50"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
          <Sparkles className="h-6 w-6 text-brand-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink-950">
          Before you go: 10% off your first clean
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          Get an instant, fixed price for your home or business in under two minutes. New
          customers save 10% on their first booking, automatically applied at checkout.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button href="/instant-quote" size="lg" onClick={() => setVisible(false)}>
            Claim My Instant Quote
          </Button>
          <Link
            href="/contact"
            onClick={() => setVisible(false)}
            className="text-sm font-medium text-ink-400 hover:text-ink-700"
          >
            No thanks, I&apos;ll browse first
          </Link>
        </div>
      </div>
    </div>
  );
}
