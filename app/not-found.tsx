import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg-primary">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-gold">
        404
      </p>
      <h1 className="mt-6 font-serif text-5xl md:text-7xl font-light text-text-primary">
        Ez az oldal nem létezik
      </h1>
      <p className="mt-6 max-w-md text-text-secondary">
        Lehet, hogy a link elavult. Vigyünk vissza a főoldalra?
      </p>
      <Link href="/" className="mt-10 inline-block">
        <Button variant="primary" size="lg">
          Vissza a főoldalra
        </Button>
      </Link>
    </main>
  );
}
