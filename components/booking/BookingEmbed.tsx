"use client";

import { bookingIframeUrl } from "@/lib/booking";

/**
 * Booking embed — provider-agnosticus (Cal.com / Reservio / Fresha).
 * A provider-t a NEXT_PUBLIC_BOOKING_PROVIDER env változó vezérli.
 */
export function BookingEmbed({ eventSlug }: { eventSlug?: string }) {
  const src = bookingIframeUrl(eventSlug);

  return (
    <div className="w-full">
      <iframe
        src={src}
        className="w-full border-0 bg-bg-secondary"
        style={{ minHeight: "900px" }}
        title="Időpontfoglalás"
        loading="lazy"
        allow="payment; camera; microphone"
      />
    </div>
  );
}
