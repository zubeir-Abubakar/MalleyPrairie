export const formspreeEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xeaeylry";

export const resourceUrls = {
  registrationPreschool:
    "https://cve-malley.ch/wp-content/uploads/2026/08/Inscription_prescolaire.pdf",
  registrationSchool:
    "https://cve-malley.ch/wp-content/uploads/2026/08/Inscription_parascolaire_1-2P.pdf",
  waitingList:
    "https://www.lausanne.ch/prestations/petite-enfance/cve-inscription.html",
  bip: "https://www.lausanne.ch/bip",
  closures:
    "https://cve-malley.ch/wp-content/uploads/2026/08/2026-2027-Fermetures-annuelles.pdf",
  menus:
    "https://www.lausanne.ch/vie-pratique/enfance-jeunesse-famille/menus-lieux-de-consommation.html",
  attiqueRules:
    "https://cve-malley.ch/wp-content/uploads/2026/08/ATTIQUE-directives-aux-parents.pdf",
  martinetRules:
    "https://cve-malley.ch/wp-content/uploads/2026/08/MARTINET-directives-aux-parents.pdf",
  mezzanineRules:
    "https://cve-malley.ch/wp-content/uploads/2026/08/MEZZANINE-directives-aux-parents.pdf",
  cancellation:
    "https://cve-malley.ch/wp-content/uploads/2026/08/Modele-pour-parents-resiliation-CVE.pdf",
  attiqueTravel:
    "https://cve-malley.ch/wp-content/uploads/2026/08/1.-Decharge-trajet-Attique.pdf",
  martinetTravel:
    "https://cve-malley.ch/wp-content/uploads/2026/08/2.-Decharge-trajet-Martinet.pdf",
  mezzanineTravel:
    "https://cve-malley.ch/wp-content/uploads/2026/08/3.-Decharge-trajet-Mezzanine.pdf",
  donation: "https://fondationmalleyprairie.ch/nous-soutenir/",
  jobs: "https://fondationmalleyprairie.ch/job/",
  map: "https://www.google.com/maps/search/?api=1&query=Chemin+du+Martinet+27%2C+1007+Lausanne%2C+Switzerland",
  foundation: "https://www.fondationmalleyprairie.ch",
  shelter: "https://www.malleyprairie.ch",
  prevention: "https://www.prevention-ale.ch",
} as const;

export type ResourceKey = keyof typeof resourceUrls;

export function isResourceKey(value: string | undefined): value is ResourceKey {
  return typeof value === "string" && Object.hasOwn(resourceUrls, value);
}

export const centerRoutes = {
  "L’Attique": "attique",
  "Le Martinet": "martinet",
  "La Mezzanine": "mezzanine",
  "La Prairie": "prairie",
} as const;
