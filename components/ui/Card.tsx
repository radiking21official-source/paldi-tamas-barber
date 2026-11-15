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
        "group relative overflow-hidden bg-bg-secondary p-8 transition-colors duration-300 " +
        "hover:bg-bg-elevated " +
        className
      }
    >
      {children}
    </div>
  );
}
