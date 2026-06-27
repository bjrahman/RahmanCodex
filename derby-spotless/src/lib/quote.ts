import type { Service } from "@/data/services";

export const bedroomOptions = ["Studio / 1 bed", "2 bed", "3 bed", "4 bed", "5+ bed"] as const;

export const frequencyOptions = [
  { id: "one-off", label: "One-off", discount: 0 },
  { id: "weekly", label: "Weekly", discount: 0.1 },
  { id: "fortnightly", label: "Fortnightly", discount: 0.05 },
  { id: "monthly", label: "Monthly", discount: 0 },
] as const;

export type FrequencyId = (typeof frequencyOptions)[number]["id"];

export function estimateQuote(service: Service, bedroomIndex: number, frequencyId: FrequencyId) {
  switch (service.pricingUnit) {
    case "per hour": {
      const hoursTable = [2, 2.5, 3, 3.5, 4.5];
      const hours = hoursTable[bedroomIndex] ?? hoursTable[hoursTable.length - 1];
      const discount = frequencyOptions.find((f) => f.id === frequencyId)?.discount ?? 0;
      const price = Math.round(hours * service.pricingFrom * (1 - discount));
      return { price, detail: `Estimated at ~${hours} hours, £${service.pricingFrom}/hr` };
    }
    case "per turnover": {
      const price = Math.round(service.pricingFrom + bedroomIndex * 15);
      return { price, detail: "Per turnover, based on property size" };
    }
    case "per room from": {
      const rooms = bedroomIndex + 2;
      const price = Math.round(service.pricingFrom * rooms);
      return { price, detail: `Estimated for ${rooms} rooms` };
    }
    case "per month from": {
      return { price: service.pricingFrom, detail: "Starting price, confirmed after a short site review" };
    }
    default: {
      const price = Math.round(service.pricingFrom + bedroomIndex * 25);
      return { price, detail: "Fixed price, confirmed before your booking is locked in" };
    }
  }
}
