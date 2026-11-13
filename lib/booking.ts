/**
 * Booking provider config — a magyar barber-piac Cal.com-ot nem használ,
 * ezért támogatjuk a Reservio és Fresha alternatívát is.
 */

export type BookingProvider = "cal" | "reservio" | "fresha";

export const booking = {
  provider: (process.env.NEXT_PUBLIC_BOOKING_PROVIDER as BookingProvider) ?? "cal",
  calUsername: process.env.NEXT_PUBLIC_CAL_USERNAME ?? "paldi-tamas",
  calEventSlug: process.env.NEXT_PUBLIC_CAL_EVENT_SLUG ?? "",
  reservioUsername: process.env.NEXT_PUBLIC_RESERVIO_USERNAME ?? "",
  freshaSlug: process.env.NEXT_PUBLIC_FRESHA_SLUG ?? "",
  directUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://blackbarber.hu/idopont-foglalas/",
} as const;

export function bookingIframeUrl(eventSlug?: string): string {
  switch (booking.provider) {
    case "reservio":
      return `https://${booking.reservioUsername || "paldi-tamas"}.reservio.com/`;
    case "fresha":
      return `https://www.fresha.com/a/${booking.freshaSlug || "paldi-tamas"}`;
    case "cal":
    default: {
      if (!booking.calUsername || booking.calUsername === "paldi-tamas") {
        return booking.directUrl;
      }
      const slug = eventSlug ?? booking.calEventSlug;
      return slug
        ? `https://cal.com/${booking.calUsername}/${slug}`
        : `https://cal.com/${booking.calUsername}`;
    }
  }
}
