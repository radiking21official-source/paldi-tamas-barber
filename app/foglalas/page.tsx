import type { Metadata } from "next";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Időpontfoglalás",
  description:
    "Foglalj időpontot Páldi Tamás-nál — férfi hajvágás és szakállformázás a Black Barber szalonban, Budapesten.",
  alternates: { canonical: "/foglalas" },
};

export default function FoglalasPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 px-6 lg:px-10 bg-bg-primary">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          Időpontfoglalás
        </p>
        <h1 className="mt-6 font-serif text-4xl md:text-6xl font-light text-text-primary">
          Foglalj időpontot
        </h1>
        <p className="mt-6 text-base md:text-lg text-text-secondary">
          Válaszd ki az időpontot a naptárban — azonnali visszaigazolást kapsz.
        </p>
        <Divider withIcon />
      </div>

      <div className="mx-auto max-w-5xl mt-8">
        <BookingEmbed />
      </div>

      <p className="mx-auto max-w-2xl mt-10 text-center text-sm text-text-muted">
        Technikai probléma a foglalással? Írj egy üzenetet Instagramon vagy
        Facebookon — igyekszem gyorsan válaszolni.
      </p>
    </main>
  );
}
