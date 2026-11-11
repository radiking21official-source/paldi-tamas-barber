import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  as: HeadingTag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="font-serif text-4xl font-light leading-tight text-text-primary md:text-5xl lg:text-6xl">
        {title}
      </HeadingTag>
      {lead && (
        <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">{lead}</p>
      )}
    </div>
  );
}
