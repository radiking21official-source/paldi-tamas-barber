import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=2000&q=85";

export function Hero() {
  return (
    <section className="hero relative isolate flex min-h-[min(860px,100svh)] items-end overflow-hidden">
      {/* BG kép — moody barbershop interior */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={HERO_IMAGE}
          alt="Barber műhely hangulatkép"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] [filter:grayscale(0.3)_contrast(1.08)_brightness(0.7)]"
        />
      </div>

      {/* Sötét gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,10,.95)_0%,rgba(10,10,10,.72)_36%,rgba(10,10,10,.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#0a0a0a_0%,transparent_42%)]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-24">
        <div className="max-w-2xl text-left">
        <p className="hero-kicker text-xs font-medium uppercase tracking-[0.32em] text-accent-gold">
          {site.tagline}
        </p>

        <h1 className="mt-5 max-w-xl font-serif text-5xl font-light leading-[.98] text-text-primary sm:text-6xl lg:text-8xl">
          Saját stílus.<br /><em className="text-accent-gold">Tiszta forma.</em>
        </h1>

        <p className="mt-7 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
          Férfi hajvágás és szakállformázás Budapesten, személyre szabva. Precíz munka, nyugodt hangulat, jó tükörkép.
          {" "}
          <span className="text-accent-gold">Black Barber</span> szalonban.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <Button href="/foglalas" variant="primary" size="lg">
            Foglalj időpontot
          </Button>
          <Button href="#szolgaltatasok" variant="secondary" size="lg">
            Árak megtekintése
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-text-muted">
          <span>Black Barber · Budapest</span><span>4+ év tapasztalat</span>
        </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-[10px] uppercase tracking-[0.3em]">Görgess</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent-gold to-transparent" />
      </div>
    </section>
  );
}
