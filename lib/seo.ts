export const SITE_URL = "https://www.celesushi.cl";
export const SITE_NAME = "CeleSushi Delivery";
export const SITE_TITLE = "CeleSushi Delivery | Sushi fresco a domicilio en Santiago";
export const SITE_DESCRIPTION =
  "Sushi delivery en Santiago con 7 sucursales: La Cisterna, Providencia, Maipú, El Bosque, Pedro Aguirre Cerda, Ñuñoa y La Florida. Rolls, promos y sushi burgers. Pide directo por WhatsApp.";

export const SITE_KEYWORDS = [
  "sushi delivery santiago",
  "sushi a domicilio",
  "celesushi",
  "cele sushi",
  "pedir sushi por whatsapp",
  "sushi la cisterna",
  "sushi providencia",
  "sushi maipú",
  "sushi el bosque",
  "sushi pedro aguirre cerda",
  "sushi ñuñoa",
  "sushi la florida",
  "promociones sushi santiago",
  "sushi burgers santiago",
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/celesushi.cl",
  facebook: "https://www.facebook.com/celesushi.cl",
  tiktok: "https://www.tiktok.com/@cele_sushi",
};

export const CONTACT_EMAIL = "celesushi@gmail.com";

const ACCENTS: Record<string, string> = {
  á: "a", é: "e", í: "i", ó: "o", ú: "u", ñ: "n",
  Á: "a", É: "e", Í: "i", Ó: "o", Ú: "u", Ñ: "n",
};

function slugify(value: string): string {
  return value
    .split("")
    .map((ch) => ACCENTS[ch] ?? ch)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type SucursalLike = { comuna: string; dir: string; fono: string };

export function buildStructuredData(sucursales: SucursalLike[]) {
  const orgId = `${SITE_URL}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.png`,
        image: `${SITE_URL}/assets/logo.png`,
        email: CONTACT_EMAIL,
        sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.tiktok],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": orgId },
        inLanguage: "es-CL",
      },
      ...sucursales.map((s) => ({
        "@type": "FastFoodRestaurant",
        "@id": `${SITE_URL}/#sucursal-${slugify(s.comuna)}`,
        name: `${SITE_NAME} ${s.comuna}`,
        url: SITE_URL,
        image: `${SITE_URL}/assets/logo.png`,
        telephone: s.fono,
        priceRange: "$$",
        servesCuisine: ["Sushi", "Japonesa", "Nikkei"],
        menu: `${SITE_URL}/#carta`,
        branchOf: { "@id": orgId },
        hasDeliveryMethod: "https://schema.org/DeliveryModeDirectDelivery",
        address: {
          "@type": "PostalAddress",
          streetAddress: s.dir,
          addressLocality: s.comuna,
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
      })),
    ],
  };
}
