import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
} as const;

export function PhotoPlaceholder({
  label,
  aspect = "video",
  className,
}: {
  label: string;
  aspect?: keyof typeof aspectClasses;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink-200 bg-ink-50 text-center",
        aspectClasses[aspect],
        className
      )}
    >
      <Camera className="h-6 w-6 text-ink-300" />
      <p className="px-4 text-xs font-medium text-ink-400">{label}</p>
    </div>
  );
}
