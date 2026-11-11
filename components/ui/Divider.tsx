import { Scissors } from "lucide-react";

export function Divider({ withIcon = false }: { withIcon?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-accent-gold" />
      {withIcon && <Scissors className="h-4 w-4 text-accent-gold" strokeWidth={1.25} />}
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-accent-gold" />
    </div>
  );
}
