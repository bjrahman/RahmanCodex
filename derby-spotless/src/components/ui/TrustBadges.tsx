import { ShieldCheck, BadgeCheck, RotateCcw, MapPin, Clock, Users } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: BadgeCheck, label: "DBS checked staff" },
  { icon: RotateCcw, label: "Satisfaction guarantee" },
  { icon: MapPin, label: "Derby-based business" },
  { icon: Clock, label: `${site.responseTime} response` },
  { icon: Users, label: `${site.customersServed} customers served` },
];

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6", className)}>
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3.5 py-3"
        >
          <Icon className="h-[18px] w-[18px] shrink-0 text-brand-600" />
          <span className="text-xs font-semibold leading-tight text-ink-700 sm:text-[13px]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
