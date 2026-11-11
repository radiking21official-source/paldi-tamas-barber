import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Gallery />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Process />
      </Reveal>

      {/* Testimonials — csak akkor renderel, ha van vendég-vélemény */}
      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>
    </main>
  );
}
