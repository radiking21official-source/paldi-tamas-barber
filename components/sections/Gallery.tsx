import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery } from "@/lib/gallery";

export function Gallery() {
  return (
    <section
      id="galeria"
      className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Inspiráció"
          title="Barber hangulat"
          lead="Néhány hangulatkép — cseréld le őket saját munkáid fotóira. (Jelenleg Unsplash placeholder-ek.)"
        />

        {/* Desktop: masonry-szerű grid */}
        <div className="mt-16 hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {gallery.map((img, i) => {
            const tall = img.height > img.width;
            return (
              <div
                key={img.id}
                className={
                  "relative overflow-hidden group bg-bg-elevated " +
                  (tall ? "row-span-2" : "row-span-1") +
                  (i % 5 === 0 ? " col-span-2 row-span-2" : "")
                }
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 [filter:grayscale(0.5)_contrast(1.05)]"
                />
                <div className="absolute inset-0 bg-accent-gold/0 group-hover:bg-accent-gold/15 transition-colors duration-500 mix-blend-overlay" />
              </div>
            );
          })}
        </div>

        {/* Mobil: horizontal snap carousel */}
        <div className="mt-16 md:hidden snap-x-scroll flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
          {gallery.map((img) => (
            <div
              key={img.id}
              className="relative flex-shrink-0 w-[75vw] aspect-[4/5] bg-bg-elevated"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="75vw"
                className="object-cover [filter:grayscale(0.5)_contrast(1.05)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
