/**
 * Vendég-vélemények
 * ÜRES alapból. Ha Tamás tud 2-3 engedélyezett véleményt adni, itt feltölthető.
 * Üres array → a Testimonials szekció nem renderelődik (ne hazudjunk).
 */

export type Testimonial = {
  id: string;
  author: string;
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  source?: "google" | "facebook" | "instagram" | "direct";
};

export const testimonials: Testimonial[] = [
  // Példa (kommentelve):
  // {
  //   id: "t1",
  //   author: "Kovács Péter",
  //   text: "Már 1 éve járok Tamáshoz, minden alkalommal precíz és figyelmes munka. Ajánlom.",
  //   rating: 5,
  //   source: "google",
  // },
];
