import type { Language } from "./i18n";

export type CentreId = "attique" | "martinet" | "mezzanine" | "prairie";
export type PageHeroId =
  | "home"
  | "pedagogy"
  | "activities"
  | "team"
  | "fees"
  | "practical"
  | "documents"
  | "faq"
  | "jobs"
  | "contact"
  | "notFound";

export const centreHeroImages: Record<CentreId, string> = {
  attique: "/images/attique-007.jpeg",
  martinet: "/images/martinet-002.jpeg",
  mezzanine: "/images/mezzanine-hero.jpeg",
  prairie: "/images/prairie-hero.jpeg",
};

export const centreGalleries: Record<CentreId, string[]> = {
  attique: [
    "/images/attique-001.jpeg",
    "/images/attique-002.jpeg",
    "/images/attique-003.jpg",
    "/images/attique-004.jpg",
    "/images/attique-005.jpeg",
    "/images/attique-006.jpeg",
    "/images/attique-007.jpeg",
    "/images/attique-008.jpg",
    "/images/attique-009.jpg",
    "/images/attique-010.jpeg",
    "/images/attique-011.jpeg",
    "/images/attique-012.jpg",
  ],
  martinet: [
    "/images/martinet-hero.jpeg",
    "/images/martinet-001.jpg",
    "/images/martinet-002.jpeg",
    "/images/martinet-003.jpg",
    "/images/martinet-004.jpeg",
    "/images/martinet-005.jpeg",
    "/images/martinet-006.jpg",
    "/images/martinet-007.jpeg",
    "/images/martinet-008.jpeg",
    "/images/martinet-009.jpeg",
    "/images/martinet-010.jpeg",
    "/images/martinet-011.jpg",
  ],
  mezzanine: [
    "/images/mezzanine-hero.jpeg",
    "/images/mezzanine-001.jpeg",
    "/images/mezzanine-002.jpeg",
    "/images/mezzanine-003.jpeg",
    "/images/mezzanine-004.jpeg",
    "/images/mezzanine-005.jpeg",
    "/images/mezzanine-006.jpeg",
    "/images/mezzanine-008.jpeg",
    "/images/mezzanine-009.jpeg",
    "/images/mezzanine-010.jpg",
  ],
  prairie: [
    "/images/prairie-hero.jpeg",
    "/images/prairie-001.jpeg",
    "/images/prairie-002.jpg",
    "/images/prairie-003.jpeg",
    "/images/prairie-004.jpeg",
    "/images/prairie-005.jpg",
    "/images/prairie-006.jpeg",
    "/images/prairie-007.jpg",
  ],
};

export const pageHeroImages: Record<PageHeroId, string> = {
  home: "/images/mezzanine-hero.jpeg",
  pedagogy: "/images/prairie-006.jpeg",
  activities: "/images/attique-007.jpeg",
  team: "/images/martinet-004.jpeg",
  fees: "/images/prairie-002.jpg",
  practical: "/images/mezzanine-hero.jpeg",
  documents: "/images/mezzanine-003.jpeg",
  faq: "/images/attique-008.jpg",
  jobs: "/images/martinet-004.jpeg",
  contact: "/images/mezzanine-hero.jpeg",
  notFound: "/images/prairie-hero.jpeg",
};

export const galleryAlt: Record<Language, string> = {
  fr: "Espace de vie et de jeu du centre",
  en: "Childcare centre living and play space",
  de: "Lebens- und Spielbereich der Kita",
  it: "Spazio di vita e gioco del centro",
};
