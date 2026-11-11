import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-primary"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Szolgáltatások"
          title="Árak"
          lead="Minőségi munka, személyre szabott megjelenés. Válaszd ki a hozzád illő szolgáltatást."
        />

        <div className="mt-8 flex justify-center">
          <Divider withIcon />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <Card key={s.id} className="flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl font-light text-text-primary">
                {s.name}
              </h3>
              <span className="mt-4 h-px w-16 bg-accent-gold" />
              <p className="mt-5 text-sm text-text-secondary leading-relaxed">
                {s.description}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="font-serif text-3xl md:text-4xl text-accent-gold">
                  {s.priceLabel}
                </span>
                <Link
                  href="/foglalas"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-primary hover:text-accent-gold transition-colors"
                >
                  Foglalok
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
              <p className="mt-3 text-xs text-text-muted">~ {s.durationMin} perc</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
