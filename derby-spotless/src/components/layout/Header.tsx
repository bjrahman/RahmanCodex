"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const hasDropdown = link.label === "Services" || link.label === "Areas We Cover";
            if (!hasDropdown) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-950"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-950"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openDropdown === link.label ? (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="grid w-72 grid-cols-1 gap-1 rounded-2xl border border-ink-100 bg-white p-3 shadow-[var(--shadow-card)]">
                      {link.label === "Services"
                        ? services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {s.name}
                            </Link>
                          ))
                        : areas.map((a) => (
                            <Link
                              key={a.slug}
                              href={`/areas-we-cover/${a.slug}`}
                              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {a.name}
                            </Link>
                          ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-ink-700 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button href="/instant-quote">Get Instant Quote</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-x-0 top-[4.5rem] z-40 h-[calc(100vh-4.5rem)] overflow-y-auto bg-white px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-ink-900 hover:bg-ink-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/instant-quote" size="lg" onClick={() => setMobileOpen(false)}>
              Get Instant Quote
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
