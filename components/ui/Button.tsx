import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.2em] " +
  "transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gold text-bg-primary hover:bg-accent-gold-hover hover:-translate-y-0.5 " +
    "border border-accent-gold hover:border-accent-gold-hover gold-glow",
  secondary:
    "bg-transparent text-text-primary border border-text-primary/30 " +
    "hover:border-accent-gold hover:text-accent-gold",
  ghost:
    "bg-transparent text-accent-gold border border-transparent " +
    "hover:border-accent-gold/40",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-xs",
  lg: "px-9 py-4 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, children: _c, className: _cn, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cn, ...rest } = props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
