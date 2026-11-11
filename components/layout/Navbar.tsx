"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#galeria", label: "Galéria" },
  { href: "#bemutatkozas", label: "Bemutatkozás" },
  { href: "#hogyan-dolgozom", label: "Folyamat" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-text-primary/10"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo / brand */}
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-text-primary hover:text-accent-gold transition-colors"
        >
          {site.shortName}
          <span className="text-accent-gold"> ·</span> Barber
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-accent-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button href="/foglalas" variant="primary" size="md">
            Foglalj időpontot
          </Button>
        </nav>

        {/* Mobil toggle */}
        <button
          type="button"
          aria-label={open ? "Menü bezárása" : "Menü nyitása"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-text-primary hover:text-accent-gold transition-colors"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobil menü panel */}
      {open && (
        <nav className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-text-primary/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-text-secondary hover:text-accent-gold transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <Button
            href="/foglalas"
            variant="primary"
            size="md"
            onClick={() => setOpen(false)}
          >
            Foglalj időpontot
          </Button>
        </nav>
      )}
    </header>
  );
}
