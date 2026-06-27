import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsappHref}?text=${encodeURIComponent(
        "Hi! I'd like a quote for cleaning in Derby."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-card)] transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </a>
  );
}
