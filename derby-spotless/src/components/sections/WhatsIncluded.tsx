import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

const rooms = [
  {
    name: "Kitchen",
    photoLabel: "Photo: kitchen clean",
    tasks: [
      "Kitchen surfaces, appliance exteriors, hob and sink degreased",
      "Dusting of all reachable surfaces and cupboard fronts",
      "Bins emptied and relined",
    ],
  },
  {
    name: "Bathroom",
    photoLabel: "Photo: bathroom clean",
    tasks: [
      "Bathrooms sanitised, descaled and polished",
      "Mirrors, fixtures and tiling wiped down",
      "Floors vacuumed and mopped",
    ],
  },
  {
    name: "Living areas",
    photoLabel: "Photo: living room clean",
    tasks: [
      "Dusting of furniture, skirting boards and shelves",
      "Vacuuming and mopping of all hard floors and carpets",
      "Bed making and laundry folding on request",
    ],
  },
];

export function WhatsIncluded() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What's included"
          title="Every regular clean, room by room"
          description="No vague promises. Here's exactly what a Derby Spotless visit covers in every part of your home."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.name}>
              <PhotoPlaceholder label={room.photoLabel} aspect="square" />
              <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{room.name}</h3>
              <ul className="mt-3 space-y-2.5">
                {room.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
