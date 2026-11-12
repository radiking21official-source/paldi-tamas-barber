import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

const PORTRAIT_IMAGE =
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=85";

export function About() {
  return (
    <section
      id="bemutatkozas"
      className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-primary"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Portré */}
        <div className="relative aspect-[3/4] overflow-hidden border border-accent-gold/40">
          <Image
            src={PORTRAIT_IMAGE}
            alt="Páldi Tamás barber portré"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover [filter:grayscale(0.7)_contrast(1.1)]"
          />
          <span className="absolute top-4 left-4 right-4 h-px bg-accent-gold/50" />
          <span className="absolute bottom-4 left-4 right-4 h-px bg-accent-gold/50" />
        </div>

        {/* Szöveg */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
            Bemutatkozás
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light text-text-primary">
            Páldi Tamás Barber
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              <span className="text-text-primary">4–5 éve</span> foglalkozom
              barber szakmával. Fontos számomra a precíz, igényes munka, a
              részletekre való odafigyelés — és hogy minden vendég úgy
              távozzon, hogy elégedetten néz a tükörbe.
            </p>
            <p>
              Nem egy generikus hajvágást adok. Minden vendégnél azt keresem,
              hogy mi az ami hozzá illik: a fejformához, az arcához, az élete
              stílusához. Ez a &bdquo;találd meg a saját stílusod&rdquo; —
              nem szlogen, hanem ahogy dolgozom.
            </p>
          </div>

          <div className="mt-8 h-px w-24 bg-accent-gold" />

          <div className="mt-6 flex items-center gap-3 text-text-primary">
            <MapPin className="h-5 w-5 text-accent-gold" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Helyszín
              </p>
              <p className="text-base">
                {site.venue.name} · {site.venue.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
