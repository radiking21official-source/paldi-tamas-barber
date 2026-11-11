import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=2000&q=85";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      {/* BG kép — moody barbershop interior */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={HERO_IMAGE}
          alt="Barber műhely hangulatkép"
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:grayscale(0.4)_contrast(1.05)_brightness(0.75)]"
        />
      </div>

      {/* Sötét gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary" />

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-accent-gold">
          {site.tagline}
        </p>

        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-text-primary">
          {site.slogan}
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-text-secondary">
          4+ év tapasztalat precíz férfi hajvágásban és szakállformázásban.
          Minden vendégnek a saját stílusa — a{" "}
          <span className="text-accent-gold">Black Barber</span> szalonban.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/foglalas" variant="primary" size="lg">
            Foglalj időpontot
          </Button>
          <Button href="#szolgaltatasok" variant="secondary" size="lg">
            Árak megtekintése
          </Button>
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
