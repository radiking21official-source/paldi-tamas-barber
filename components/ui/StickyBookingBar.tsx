"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

/** Mobil-only sticky foglalás gomb — a hero kiscrolloz után jelenik meg. */
export function StickyBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "md:hidden fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 " +
        (show ? "translate-y-0" : "translate-y-full")
      }
    >
      <Link
        href="/foglalas"
        className="flex items-center justify-center gap-2 bg-accent-gold px-6 py-4 text-bg-primary font-sans font-medium uppercase tracking-[0.2em] text-xs shadow-2xl gold-glow"
      >
        <Calendar className="h-4 w-4" strokeWidth={1.75} />
        Foglalj időpontot
      </Link>
    </div>
  );
}
