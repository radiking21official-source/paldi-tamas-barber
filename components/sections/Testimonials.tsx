import { Star } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  // Ha nincs vélemény, nem renderel semmit — ne hazudjunk fake-ekkel.
  if (testimonials.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-primary">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Vendégeink mondták"
          title="Visszajelzések"
          lead="Néhány gondolat azoktól, akik már jártak nálam."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="border border-text-primary/10 bg-bg-secondary p-8"
            >
              {t.rating && (
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent-gold text-accent-gold"
                    />
                  ))}
                </div>
              )}
              <p className="text-base leading-relaxed text-text-primary italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-text-muted">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
