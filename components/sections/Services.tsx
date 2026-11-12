import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-primary"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle align="left"
          eyebrow="Szolgáltatások"
          title="Árak"
          lead="A jó hajvágás nem feltűnő. Csak egyszerűen jól áll."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-text-primary/15">
          {services.map((s, i) => (
            <Card key={s.id} className="service-row flex flex-col border-0 border-b border-text-primary/15 bg-transparent p-6 px-0 shadow-none hover:-translate-y-0 hover:bg-transparent md:flex-row md:items-center md:gap-10 md:p-8 md:px-0">
              <span className="hidden font-mono text-xs text-text-muted md:block">0{i + 1}</span>
              <h3 className="min-w-[250px] font-serif text-2xl font-light text-text-primary md:text-3xl">
                {s.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary md:mt-0">
                {s.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-8 md:mt-0">
                <span className="font-serif text-3xl text-accent-gold">
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
              <p className="mt-3 text-xs text-text-muted md:mt-0">{s.durationMin} perc</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
