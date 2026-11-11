import { MessageCircle, Scissors, Sparkles, Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: MessageCircle,
    title: "Konzultáció",
    desc: "Átbeszéljük mit szeretnél, és mi illik hozzád — fejforma, arc, életstílus.",
  },
  {
    icon: Scissors,
    title: "Hajvágás",
    desc: "Ollóval és géppel, precíz technikával. Pontos fade, tiszta átmenetek.",
  },
  {
    icon: Sparkles,
    title: "Szakáll / Finishing",
    desc: "Szakállformázás, kontúrozás, meleg törölköző — ha kell. Styling.",
  },
  {
    icon: Check,
    title: "Végellenőrzés",
    desc: "Közösen nézzük meg — csak akkor engedlek el, ha mindketten elégedettek vagyunk.",
  },
];

export function Process() {
  return (
    <section
      id="hogyan-dolgozom"
      className="relative py-24 md:py-32 px-6 lg:px-10 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Folyamat"
          title="Hogyan dolgozom"
          lead="4 lépés, ami minden alkalommal ugyanolyan igényes."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative border border-text-primary/10 bg-bg-primary p-8 hover:border-accent-gold/40 transition-colors"
            >
              <span className="absolute top-4 right-5 font-serif text-5xl text-accent-gold/20">
                0{i + 1}
              </span>
              <step.icon
                className="h-8 w-8 text-accent-gold"
                strokeWidth={1.25}
              />
              <h3 className="mt-6 font-serif text-xl text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
