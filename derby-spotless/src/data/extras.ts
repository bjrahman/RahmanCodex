import { Shirt, WashingMachine, AppWindow, Refrigerator, CookingPot, type LucideIcon } from "lucide-react";

export type Extra = {
  slug: string;
  label: string;
  icon: LucideIcon;
  price: number;
};

export const extras: Extra[] = [
  { slug: "ironing", label: "Ironing", icon: Shirt, price: 8 },
  { slug: "laundry", label: "Laundry", icon: WashingMachine, price: 10 },
  { slug: "inside-windows", label: "Inside windows", icon: AppWindow, price: 12 },
  { slug: "inside-fridge", label: "Inside fridge", icon: Refrigerator, price: 10 },
  { slug: "inside-oven", label: "Inside oven", icon: CookingPot, price: 15 },
];
