"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { bedroomOptions, frequencyOptions, estimateQuote, type FrequencyId } from "@/lib/quote";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const TOTAL_STEPS = 3;

export function InstantQuoteWizard() {
  const [step, setStep] = useState(1);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [bedroomIndex, setBedroomIndex] = useState(1);
  const [frequencyId, setFrequencyId] = useState<FrequencyId>("fortnightly");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const selectedService = useMemo(
    () => services.find((service) => service.slug === serviceSlug) ?? null,
    [serviceSlug]
  );

  const showFrequency = selectedService?.pricingUnit === "per hour";

  const estimate = useMemo(() => {
    if (!selectedService) return null;
    return estimateQuote(selectedService, bedroomIndex, showFrequency ? frequencyId : "one-off");
  }, [selectedService, bedroomIndex, frequencyId, showFrequency]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedService) return;
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          serviceSlug: selectedService.slug,
          bedroomLabel: bedroomOptions[bedroomIndex],
          frequency: showFrequency ? frequencyId : null,
          estimatedPrice: estimate?.price ?? null,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success" && selectedService) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <h2 className="mt-5 font-display text-2xl font-bold text-ink-950">Your quote request is in!</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600">
          We&apos;ve got your estimate of <span className="font-bold text-ink-950">£{estimate?.price}</span>{" "}
          for {selectedService.name.toLowerCase()}. We aim to confirm your fixed price and booking within{" "}
          {site.responseTime}.
        </p>
        <p className="mt-3 text-sm text-ink-500">
          Need it sooner? Call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-700">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-9">
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              index + 1 <= step ? "bg-brand-500" : "bg-ink-100"
            )}
          />
        ))}
      </div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
        Step {step} of {TOTAL_STEPS}
      </p>

      {step === 1 ? (
        <div>
          <h2 className="font-display text-xl font-bold text-ink-950">What do you need cleaned?</h2>
          <p className="mt-1.5 text-sm text-ink-500">Choose the service that best matches what you&apos;re after.</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Home;
              const isSelected = serviceSlug === service.slug;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setServiceSlug(service.slug)}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                    isSelected
                      ? "border-brand-400 bg-brand-50"
                      : "border-ink-100 bg-white hover:border-brand-200 hover:bg-ink-50"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                      isSelected ? "bg-brand-500 text-white" : "bg-ink-50 text-brand-600"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-950">{service.shortName}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink-500">{service.idealFor}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              disabled={!serviceSlug}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      {step === 2 && selectedService ? (
        <div>
          <h2 className="font-display text-xl font-bold text-ink-950">Tell us about the property</h2>
          <p className="mt-1.5 text-sm text-ink-500">This helps us put together an accurate estimate.</p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-ink-800">Property size</p>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {bedroomOptions.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setBedroomIndex(index)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors",
                    bedroomIndex === index
                      ? "border-brand-400 bg-brand-50 text-brand-700"
                      : "border-ink-100 text-ink-600 hover:border-brand-200"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {showFrequency ? (
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink-800">How often?</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {frequencyOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFrequencyId(option.id)}
                    className={cn(
                      "rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors",
                      frequencyId === option.id
                        ? "border-brand-400 bg-brand-50 text-brand-700"
                        : "border-ink-100 text-ink-600 hover:border-brand-200"
                    )}
                  >
                    {option.label}
                    {option.discount > 0 ? ` (-${option.discount * 100}%)` : ""}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {estimate ? (
            <div className="mt-7 rounded-xl bg-ink-950 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">Your instant estimate</p>
              <p className="mt-1 font-display text-3xl font-bold text-white">£{estimate.price}</p>
              <p className="mt-1 text-xs text-ink-300">{estimate.detail}</p>
            </div>
          ) : null}

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 && selectedService ? (
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-xl font-bold text-ink-950">Where should we send your quote?</h2>
          <p className="mt-1.5 text-sm text-ink-500">
            No obligation. We&apos;ll confirm your fixed price and available booking slots.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="qname" className="block text-sm font-semibold text-ink-800">Full name</label>
              <input
                id="qname"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label htmlFor="qemail" className="block text-sm font-semibold text-ink-800">Email</label>
              <input
                id="qemail"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label htmlFor="qphone" className="block text-sm font-semibold text-ink-800">Phone</label>
              <input
                id="qphone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label htmlFor="qpostcode" className="block text-sm font-semibold text-ink-800">Postcode</label>
              <input
                id="qpostcode"
                name="postcode"
                type="text"
                className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          {estimate ? (
            <div className="mt-6 flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{selectedService.name}</p>
                <p className="text-sm text-ink-600">{bedroomOptions[bedroomIndex]}</p>
              </div>
              <p className="font-display text-2xl font-bold text-ink-950">£{estimate.price}</p>
            </div>
          ) : null}

          {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-70"
            >
              {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Get my instant quote
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
