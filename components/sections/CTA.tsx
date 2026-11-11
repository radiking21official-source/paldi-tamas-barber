import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-elevated overflow-hidden">
      {/* Finom háttér-gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-accent-gold/5 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          Időpontfoglalás
        </p>

        <h2 className="mt-6 font-serif text-4xl md:text-6xl font-light leading-tight text-text-primary">
          Készen állsz a frissítésre?
        </h2>

        <p className="mt-6 text-base md:text-lg text-text-secondary">
          Foglalj időpontot, és találkozzunk a szalonban.
        </p>

        <Divider withIcon />

        <Button href="/foglalas" variant="primary" size="lg" className="mt-4">
          Foglalás most
        </Button>
      </div>
    </section>
  );
}
