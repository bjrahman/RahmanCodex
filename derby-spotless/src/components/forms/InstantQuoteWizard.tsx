"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Home, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { bedroomOptions, frequencyOptions, estimateQuote, type FrequencyId } from "@/lib/quote";
import { extras } from "@/data/extras";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function InstantQuoteWizard({ initialServiceSlug }: { initialServiceSlug?: string }) {
  const [step, setStep] = useState(initialServiceSlug ? 2 : 1);
  const [serviceSlug, setServiceSlug] = useState<string | null>(initialServiceSlug ?? null);
  const [serviceLocked, setServiceLocked] = useState(Boolean(initialServiceSlug));
  const [bedroomIndex, setBedroomIndex] = useState(1);
  const [frequencyId, setFrequencyId] = useState<FrequencyId>("fortnightly");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const totalSteps = serviceLocked ? 2 : 3;
  const displayStep = serviceLocked ? step - 1 : step;

  function changeService() {
    setServiceLocked(false);
    setServiceSlug(null);
    setStep(1);
  }

  const selectedService = useMemo(
    () => services.find((service) => service.slug === serviceSlug) ?? null,
    [serviceSlug]
  );

  const showFrequency = selectedService?.pricingUnit === "per hour";

  const extrasTotal = useMemo(
    () =>
      selectedExtras.reduce((total, slug) => {
        const extra = extras.find((item) => item.slug === slug);
        return total + (extra?.price ?? 0);
      }, 0),
    [selectedExtras]
  );

  function toggleExtra(slug: string) {
    setSelectedExtras((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]
    );
  }

  const recurringFrequencyId = frequencyId === "one-off" ? "fortnightly" : frequencyId;

  const oneOffEstimate = useMemo(
    () => (selectedService ? estimateQuote(selectedService, bedroomIndex, "one-off", extrasTotal) : null),
    [selectedService, bedroomIndex, extrasTotal]
  );

  const recurringEstimate = useMemo(
    () =>
      selectedService
        ? estimateQuote(selectedService, bedroomIndex, recurringFrequencyId, extrasTotal)
        : null,
    [selectedService, bedroomIndex, recurringFrequencyId, extrasTotal]
  );

  const estimate = useMemo(() => {
    if (!selectedService) return null;
    return estimateQuote(selectedService, bedroomIndex, showFrequency ? frequencyId : "one-off", extrasTotal);
  }, [selectedService, bedroomIndex, frequencyId, showFrequency, extrasTotal]);

  const includedDisplay = useMemo(() => {
    const base = (selectedService?.included ?? []).map((label) => ({ label, isExtra: false }));
    const extraLines = selectedExtras
      .map((slug) => extras.find((item) => item.slug === slug))
      .filter((item): item is (typeof extras)[number] => Boolean(item))
      .map((item) => ({ label: item.label, isExtra: true }));
    return [...base, ...extraLines];
  }, [selectedService, selectedExtras]);

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
          extras: selectedExtras,
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
        <h2 className="mt-5 font-display text-2xl font-bold text-ink-950">Your booking request is in!</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600">
          Here&apos;s your fixed price of <span className="font-bold text-ink-950">£{estimate?.price}</span>{" "}
          for {selectedService.name.toLowerCase()}. We aim to confirm your booking within{" "}
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
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              (serviceLocked ? index + 2 : index + 1) <= step ? "bg-brand-500" : "bg-ink-100"
            )}
          />
        ))}
      </div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
        Step {displayStep} of {totalSteps}
      </p>

      {step === 1 ? (
        <div className="mx-auto max-w-xl">
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
          {serviceLocked ? (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700">
              {(() => {
                const Icon = serviceIcons[selectedService.slug] ?? Home;
                return <Icon className="h-3.5 w-3.5 text-brand-600" />;
              })()}
              {selectedService.shortName}
              <button
                type="button"
                onClick={changeService}
                className="ml-1 text-ink-400 underline-offset-2 hover:text-brand-600 hover:underline"
              >
                Change
              </button>
            </div>
          ) : null}

          <h2 className="font-display text-xl font-bold text-ink-950">
            {serviceLocked ? `Customise your ${selectedService.shortName.toLowerCase()}` : "Tell us about the property"}
          </h2>
          <p className="mt-1.5 text-sm text-ink-500">This helps us put together an accurate estimate.</p>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <div>
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

              <div className="mt-6">
                <p className="text-sm font-semibold text-ink-800">Choose additional tasks</p>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {extras.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.slug);
                    return (
                      <button
                        key={extra.slug}
                        type="button"
                        onClick={() => toggleExtra(extra.slug)}
                        className={cn(
                          "flex flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center transition-colors",
                          isSelected
                            ? "border-brand-400 bg-brand-50"
                            : "border-ink-100 bg-white hover:border-brand-200 hover:bg-ink-50"
                        )}
                      >
                        <extra.icon className={cn("h-5 w-5", isSelected ? "text-brand-600" : "text-ink-400")} />
                        <span className="text-[11px] font-semibold leading-tight text-ink-700">{extra.label}</span>
                        <span className="text-[11px] text-ink-400">+£{extra.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {showFrequency ? (
                <div className="mt-7">
                  <p className="text-sm font-semibold text-ink-800">How often?</p>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setFrequencyId("one-off")}
                      className={cn(
                        "rounded-xl border p-4 text-left transition-colors",
                        frequencyId === "one-off"
                          ? "border-brand-400 bg-brand-50"
                          : "border-ink-100 bg-white hover:border-brand-200"
                      )}
                    >
                      <p className="text-sm font-bold text-ink-950">One-off clean</p>
                      <p className="mt-1 font-display text-2xl font-bold text-ink-950">
                        £{oneOffEstimate?.price ?? "—"}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {["No commitment", "Pay once, no recurring charge"].map((item) => (
                          <li key={item} className="flex items-center gap-1.5 text-xs text-ink-500">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </button>

                    <div
                      className={cn(
                        "rounded-xl border p-4 text-left transition-colors",
                        frequencyId !== "one-off" ? "border-brand-400 bg-brand-50" : "border-ink-100 bg-white"
                      )}
                    >
                      <button type="button" onClick={() => setFrequencyId(recurringFrequencyId)} className="w-full text-left">
                        <p className="text-sm font-bold text-ink-950">Recurring clean</p>
                        <p className="mt-1 font-display text-2xl font-bold text-ink-950">
                          £{recurringEstimate?.price ?? "—"}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {["Save up to 10% per visit", "Same trusted cleaner every time", "Change or cancel anytime"].map(
                            (item) => (
                              <li key={item} className="flex items-center gap-1.5 text-xs text-ink-500">
                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </button>
                      <div className="mt-3 grid grid-cols-3 gap-1.5 border-t border-ink-100 pt-3">
                        {frequencyOptions
                          .filter((option) => option.id !== "one-off")
                          .map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => setFrequencyId(option.id)}
                              className={cn(
                                "rounded-lg border px-2 py-1.5 text-[11px] font-semibold transition-colors",
                                frequencyId === option.id
                                  ? "border-brand-400 bg-white text-brand-700"
                                  : "border-transparent text-ink-500 hover:border-brand-200"
                              )}
                            >
                              {option.label}
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  What&apos;s covered in your clean
                </p>
                <ul className="mt-4 space-y-3">
                  {includedDisplay.map((item) => (
                    <li
                      key={item.label}
                      className={cn(
                        "flex items-start gap-2.5 text-sm leading-relaxed",
                        item.isExtra ? "font-medium text-brand-700" : "text-ink-600"
                      )}
                    >
                      {item.isExtra ? (
                        <Plus className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      ) : (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      )}
                      {item.label}
                    </li>
                  ))}
                </ul>

                {estimate ? (
                  <div className="mt-6 rounded-xl bg-ink-950 p-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">Your instant estimate</p>
                    <p className="mt-1 font-display text-3xl font-bold text-white">£{estimate.price}</p>
                    <p className="mt-1 text-xs text-ink-300">{estimate.detail}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            {serviceLocked ? (
              <span />
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            )}
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
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <h2 className="font-display text-xl font-bold text-ink-950">Where should we send your booking request?</h2>
          <p className="mt-1.5 text-sm text-ink-500">
            No obligation. We&apos;ll confirm your fixed price and lock in a booking slot.
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
              Request my booking
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
