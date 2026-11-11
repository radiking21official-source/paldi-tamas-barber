import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "group relative overflow-hidden border border-text-primary/10 bg-bg-secondary " +
        "p-8 transition-all duration-300 ease-out " +
        "hover:border-accent-gold/40 hover:-translate-y-1 " +
        className
      }
    >
      {/* bal felső sarok ornament */}
      <span className="pointer-events-none absolute left-0 top-0 h-px w-12 bg-accent-gold transition-all duration-500 group-hover:w-24" />
      {children}
    </div>
  );
}
