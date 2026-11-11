/**
 * Galéria — 8 placeholder kép
 * TODO: Unsplash URL-ek letöltése build előtt és lokálba `public/images/gallery-N.jpg` néven.
 * Addig a Next.js remotePatterns-szel Unsplash-ről tölti.
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Unsplash placeholder-ek — moody barbershop keresésből (desaturated filter CSS-ben)
export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
    alt: "Klasszikus barber szék — fekete bőr",
    width: 1200,
    height: 800,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=80",
    alt: "Borotva és fésűk sorban a munkaasztalon",
    width: 1200,
    height: 1500,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80",
    alt: "Hajvágás közben, oldalnézet",
    width: 1200,
    height: 800,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80",
    alt: "Szakállformázás közelről",
    width: 1200,
    height: 1500,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1521490878406-df22a46fb569?w=1200&q=80",
    alt: "Barber munkaasztala — nosztalgikus eszközök",
    width: 1200,
    height: 800,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
    alt: "Elegáns férfi vendég, kész frizura",
    width: 1200,
    height: 1500,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80",
    alt: "Barbershop enteriőr — sötét tónusok",
    width: 1200,
    height: 800,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=80",
    alt: "Meleg törölköző szakállra",
    width: 1200,
    height: 1500,
  },
];
