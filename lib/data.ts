export type Sucursal = {
  comuna: string;
  dir: string;
  num: string;
  fono: string;
};

export const SUCURSALES: Sucursal[] = [
  { comuna: "La Cisterna", dir: "Gran Avenida #8010", num: "56936505194", fono: "+56 9 3650 5194" },
  { comuna: "Providencia", dir: "Santa Isabel #219", num: "56975103059", fono: "+56 9 7510 3059" },
  { comuna: "Maipú", dir: "Avenida Sur #918", num: "56978314673", fono: "+56 9 7831 4673" },
  { comuna: "El Bosque", dir: "Observatorio #1062", num: "56986395924", fono: "+56 9 8639 5924" },
  { comuna: "Pedro Aguirre Cerda", dir: "Club Hípico #2707", num: "56976779371", fono: "+56 9 7677 9371" },
  { comuna: "Ñuñoa", dir: "Azapa #3843 - Local 13", num: "56940667283", fono: "+56 9 4066 7283" },
  { comuna: "La Florida", dir: "Av. Vicuña Mackena #9124", num: "56958297002", fono: "+56 9 5829 7002" },
];

export const DEFAULT_SUCURSAL = SUCURSALES[0].comuna;

export type HeroSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  { src: "/assets/food/p1-01.jpg", alt: "Sushi burger", caption: "Sushi Burgers" },
  { src: "/assets/food/p1-06.jpg", alt: "Promo 50 VIP", caption: "Promo 50 VIP" },
  { src: "/assets/food/p1-19.jpg", alt: "Dúo Nikkei", caption: "Dúo Nikkei" },
  { src: "/assets/food/p2-06.jpg", alt: "Gohan Mixto", caption: "Gohan Mixto" },
  { src: "/assets/food/p1-15.jpg", alt: "30 Premium", caption: "30 Premium" },
];

export type PromoTab = "mixtas" | "hot" | "nikkei";

export type Promo = {
  id: string;
  tab: PromoTab;
  name: string;
  pzs: number;
  price: number;
  img: string;
  lines: string[];
};

export const PROMO_TABS: { key: PromoTab; label: string }[] = [
  { key: "mixtas", label: "Promos Mixtas" },
  { key: "hot", label: "Promos Hot" },
  { key: "nikkei", label: "Promos Nikkei" },
];

export const PROMOS: Promo[] = [
  { id: "promo-20", tab: "mixtas", name: "Promo 20", pzs: 20, price: 9000, img: "/assets/food/p1-03.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Env. en Palta: Camarón apanado, queso"] },
  { id: "promo-30", tab: "mixtas", name: "Promo 30", pzs: 30, price: 12000, img: "/assets/food/p1-04.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Env. en Palta: Salmón, queso", "10 Env. en Sésamo: Kanikama, queso, palta"] },
  { id: "promo-40", tab: "mixtas", name: "Promo 40", pzs: 40, price: 14000, img: "/assets/food/p1-05.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Env. en Palta: Camarón apanado, queso", "10 Env. en Sésamo: Kanikama, queso, palta"] },
  { id: "promo-50-vip", tab: "mixtas", name: "Promo 50 VIP", pzs: 50, price: 18000, img: "/assets/food/p1-06.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Env. en Palta: Camarón, queso, palta", "10 Env. en Queso: Pollo apanado, cebollín", "10 Sésamo y Ciboulette: Camarón, queso, palta"] },
  { id: "promo-60", tab: "mixtas", name: "Promo 60", pzs: 60, price: 21000, img: "/assets/food/p1-07.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Env. en Palta: Salmón, queso", "10 Env. en Sésamo: Camarón, queso, palta", "10 Env. en Ciboulette: Palmito, queso, palta", "10 Env. en Queso: Pollo apanado, cebollín"] },
  { id: "promo-70", tab: "mixtas", name: "Promo 70", pzs: 70, price: 18500, img: "/assets/food/p1-08.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Env. en Palta: Pollo apanado, queso, cebollín", "10 Env. en Sésamo: Kanikama, queso, palta", "10 Env. en Ciboulette: Palmito, queso, palta", "10 Hosomaki: Queso, cebollín", "10 Hosomaki Frito: Queso, cebollín"] },
  { id: "promo-80", tab: "mixtas", name: "Promo 80", pzs: 80, price: 26500, img: "/assets/food/p1-09.jpg", lines: ["20 Fritas: Pollo apanado, queso", "10 Fritas: Camarón, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Env. en Salmón: Camarón, queso", "10 Env. en Sésamo: Kanikama, queso, palta", "10 Env. en Palta: Camarón apanado, queso", "10 Env. en Queso: Pollo apanado, cebollín"] },
  { id: "promo-120", tab: "mixtas", name: "Promo 120", pzs: 120, price: 35500, img: "/assets/food/p1-10.jpg", lines: ["20 Fritas: Pollo apanado, queso", "20 Fritas: Camarón, queso, cebollín", "20 Fritas: Kanikama, queso, cebollín", "10 Env. en Ciboulette: Palmito, queso, palta", "10 Env. en Palta: Salmón, queso", "10 Env. en Palta: Camarón apanado, queso", "10 Env. en Salmón: Camarón apanado, queso", "10 Env. en Queso: Pollo apanado, cebollín", "10 Env. en Sésamo: Kanikama, queso, palta"] },
  { id: "hot-20", tab: "hot", name: "Promo Hot 20", pzs: 20, price: 9500, img: "/assets/food/p1-11.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Camarón, cebollín y queso"] },
  { id: "hot-30", tab: "hot", name: "Promo Hot 30", pzs: 30, price: 13000, img: "/assets/food/p1-12.jpg", lines: ["10 Fritas: Pollo, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Fritas: Salmón, queso"] },
  { id: "hot-40", tab: "hot", name: "Promo Hot 40", pzs: 40, price: 17000, img: "/assets/food/p1-13.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Fritas: Palmito, queso, cebollín", "10 Fritas: Camarón, queso, cebollín"] },
  { id: "hot-50", tab: "hot", name: "Promo Hot 50", pzs: 50, price: 20000, img: "/assets/food/p1-14.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Fritas: Kanikama, queso, cebollín", "10 Fritas: Salmón, queso", "10 Fritas: Palmito, queso, cebollín", "10 Fritas: Camarón, queso, cebollín"] },
  { id: "30-premium", tab: "nikkei", name: "30 Premium", pzs: 30, price: 14500, img: "/assets/food/p1-15.jpg", lines: ["10 Fritas: Pollo apanado, queso", "10 Relleno camarón apanado. Bañado en salsa huancaína con topping", "10 Env. en Palta: Camarón, queso, palta. Bañado de salsa acevichada con topping"] },
  { id: "duo-nikkei", tab: "nikkei", name: "Dúo Nikkei", pzs: 20, price: 14000, img: "/assets/food/p1-19.jpg", lines: ["10 Env. en Palta: Pollo apanado, palta. Bañado en salsa olivo, coronado de pulpo y papa hilo", "10 Fritas: Camarón apanado, queso, coronado de ceviche"] },
  { id: "tri-nikkei", tab: "nikkei", name: "Tri Nikkei", pzs: 30, price: 19000, img: "/assets/food/p1-16.jpg", lines: ["10 Env. en Palta: Pollo apanado, palta. Salsa olivo, pulpo y papa hilo", "10 Relleno camarón apanado, palta. Coronado de ceviche mixto", "10 Env. en Palta: Camarón apanado. Coronado de tartar de kanikama"] },
  { id: "4-nikkei", tab: "nikkei", name: "4 Nikkei", pzs: 40, price: 22000, img: "/assets/food/p1-20.jpg", lines: ["10 Fritas de Nori Apanado: Champiñón apanado, palmito, cebollín. Salsa spicy, wantan al hilo", "10 Env. en Palta (sin arroz): Champiñón apanado, pepino, palta. Camote al hilo", "10 Env. en Palta: Camarón apanado, palta. Tártaro de camarón flameado", "10 Fritas: Camarón apanado, queso, coronado de ceviche"] },
];

// Maps a carta item id to the index of its extracted thumbnail (assets/food/rNN.jpg).
// Where an id appears here, this image wins over any explicit `img` on the item —
// it reflects the later pass that matched every roll name to its real PDF thumbnail.
const ITEM_IMG_INDEX: Record<string, number> = {
  "av-angel": 0, "av-avocado": 1, "av-ebi": 2, "av-katzu": 3, "av-palmito": 4, "av-shitake": 5, "av-tako": 6, "av-tempura": 7, "av-tuna": 8,
  "ca-ebi": 9, "ca-sake": 10, "ca-katzu": 11, "ca-light": 12, "ca-ebi-sake": 13, "ca-tako": 14, "ca-veggie": 15,
  "fr-elmer": 16, "fr-mary": 17, "fr-salmon": 18, "fr-vegel": 19, "fr-panko-tori": 20, "fr-panko-sake": 21, "fr-tako": 22, "fr-panko": 23,
  "sa-avocado-tuna": 24, "sa-avocado": 25, "sa-betarraga": 26, "sa-omar": 27, "sa-veggie": 28, "sa-zani": 29, "sa-yuri": 30, "sa-tori": 31, "sa-sake": 32,
  "pr-chesse-sake": 33, "pr-chesse-teri": 34, "pr-chesse-minon": 35, "pr-chesse-ebi": 36, "pr-betarraga": 37, "pr-mango": 38, "pr-peru": 39, "pr-thiago": 40, "pr-taki": 41, "pr-beef": 42, "pr-tako-grill": 43, "pr-imperio": 44,
  "sk-tako": 45, "sk-ebi": 46, "sk-sake": 47, "sk-ebi-tempura": 48, "sk-fanny": 49, "sk-tempura": 50, "sk-tori": 51, "sk-tuna": 52,
  "nk-acevichado": 53, "nk-cele": 54, "nk-ceviche": 55, "nk-ceviche-furai": 56, "nk-gratinado": 57, "nk-huancaina": 58, "nk-lima": 59, "nk-lomo": 60, "nk-maguro-ebi": 61, "nk-karen": 62, "nk-maracuya": 63, "nk-panko-shitake": 64, "nk-olivo": 65, "nk-maguro": 66, "nk-xander": 67,
  "ng-maguro": 68, "ng-sake": 69, "ng-tako": 70, "ng-ebi": 71,
  "ss-mixto": 72,
  "hs-ebi": 73, "hs-fresh": 74, "hs-hazu": 75, "hs-maguro": 76, "hs-sake": 77, "hs-tako": 78,
};

export type CartaItemData = {
  id: string;
  name: string;
  desc: string;
  price: number;
  img?: string;
};

export type CartaCategory = {
  id: string;
  label: string;
  items: CartaItemData[];
};

export const CARTA: CartaCategory[] = [
  { id: "avocados", label: "Rolls Avocados", items: [
    { id: "av-katzu", name: "Katzu", desc: "Pollo apanado, queso, palta", price: 5600 },
    { id: "av-ebi", name: "Ebi", desc: "Camarón, queso, palta", price: 5300 },
    { id: "av-angel", name: "Ángel", desc: "Salmón, camarón, queso", price: 5800 },
    { id: "av-avocado", name: "Avocado", desc: "Salmón, queso, palta", price: 5300 },
    { id: "av-tuna", name: "Tuna", desc: "Atún, queso, cebollín", price: 5600 },
    { id: "av-tempura", name: "Tempura", desc: "Camarón apanado, queso, palta", price: 5600 },
    { id: "av-shitake", name: "Shitake", desc: "Champiñón apanado, queso, salsa spicy", price: 4800 },
    { id: "av-tako", name: "Tako", desc: "Pulpo, queso, palta", price: 5800 },
    { id: "av-palmito", name: "Palmito", desc: "Palmito, queso, cebollín", price: 4800 },
  ]},
  { id: "california", label: "Rolls California", items: [
    { id: "ca-ebi", name: "California Ebi", desc: "Camarón, queso, palta", price: 4300 },
    { id: "ca-sake", name: "California Sake", desc: "Salmón, palta", price: 4500 },
    { id: "ca-ebi-sake", name: "California Ebi Sake", desc: "Camarón, salmón, queso", price: 4800 },
    { id: "ca-katzu", name: "California Katzu", desc: "Pollo apanado, palta", price: 4300 },
    { id: "ca-tako", name: "California Tako", desc: "Pulpo, queso, palta", price: 4700 },
    { id: "ca-veggie", name: "California Veggie", desc: "Palmito, palta", price: 3800 },
    { id: "ca-light", name: "California Light", desc: "Champiñón, queso, cebollín", price: 3800 },
  ]},
  { id: "fritos", label: "Rolls Fritos", items: [
    { id: "fr-panko", name: "Panko", desc: "Camarón, queso, cebollín", price: 5300 },
    { id: "fr-vegel", name: "Panko Vegel", desc: "Palta, pepino, cebollín, queso", price: 4800 },
    { id: "fr-tori", name: "Tori", desc: "Camarón, queso, cebollín. Env. en pollo apanado", price: 5600 },
    { id: "fr-panko-tori", name: "Panko Tori", desc: "Pollo apanado, queso, cebollín", price: 5300 },
    { id: "fr-panko-sake", name: "Panko Sake", desc: "Camarón, queso, cebollín. Env. en salmón apanado", price: 5500 },
    { id: "fr-elmer", name: "Elmer", desc: "Salmón, queso, cebollín", price: 5600 },
    { id: "fr-tako", name: "Tako Especial", desc: "Pulpo, queso, cebollín", price: 5300 },
    { id: "fr-salmon", name: "Salmón", desc: "Salmón, palta, cebollín. Env. en salmón apanado", price: 6200 },
    { id: "fr-mary", name: "Mary", desc: "Salmón, camarón, queso", price: 5800 },
  ]},
  { id: "sake", label: "Rolls Sake", items: [
    { id: "sk-ebi", name: "Sake Ebi", desc: "Camarón, queso, palta", price: 5700 },
    { id: "sk-ebi-tempura", name: "Sake Ebi Tempura", desc: "Camarón apanado, queso, palta", price: 6000 },
    { id: "sk-fanny", name: "Sake Fanny", desc: "Salmón, queso, cebollín, palta", price: 6000 },
    { id: "sk-sake", name: "Sake", desc: "Salmón, queso, cebollín", price: 5800 },
    { id: "sk-tori", name: "Sake Tori", desc: "Pollo apanado, queso, palta", price: 5300 },
    { id: "sk-tako", name: "Sake Tako", desc: "Pulpo, queso, palta", price: 5300 },
    { id: "sk-tuna", name: "Sake Tuna", desc: "Atún, queso, cebollín", price: 6000 },
    { id: "sk-tempura", name: "Sake Tempura", desc: "Champiñón apanado, queso, cebollín", price: 4700 },
  ]},
  { id: "sinarroz", label: "Rolls Sin Arroz", items: [
    { id: "sa-avocado", name: "Avocado Oriental", desc: "Camarón apanado, salmón, queso. Salsa acevichada, coronado con topping camote", price: 7500 },
    { id: "sa-avocado-tuna", name: "Avocado Tuna Oriental", desc: "Env. en Palta: Camarón apanado, atún, queso", price: 7000 },
    { id: "sa-betarraga", name: "Betarraga Oriental", desc: "Env. en Betarraga: Champiñón apanado, palmito, queso y palta", price: 7000 },
    { id: "sa-omar", name: "Omar Oriental", desc: "Env. en Salmón Apanado: Salmón, queso, cebollín, tortilla de huevo", price: 7000 },
    { id: "sa-veggie", name: "Oriental Veggie", desc: "Env. en Palta: Champiñón apanado, palta, pepino", price: 7000 },
    { id: "sa-sake", name: "Sake Oriental", desc: "Camarón apanado, queso, palta. Env. en salmón", price: 7500 },
    { id: "sa-tori", name: "Tori Oriental", desc: "Pollo apanado, palta, cebollín. Env. en queso", price: 7000 },
    { id: "sa-yuri", name: "Yuri Oriental", desc: "Atún, salsa spicy, queso, ciboulette. Env. en tortilla de huevo apanado", price: 7000 },
    { id: "sa-zani", name: "Zani Oriental", desc: "Palta, palmito, cebollín. Env. en zanahoria", price: 7000 },
  ]},
  { id: "premium", label: "Rolls Premium", items: [
    { id: "pr-chesse-ebi", name: "Chesse Ebi", desc: "Camarón, palta", price: 5500 },
    { id: "pr-chesse-sake", name: "Chesse Sake", desc: "Salmón, palta", price: 5800 },
    { id: "pr-chesse-teri", name: "Chesse Teri", desc: "Pollo apanado, palta, cebollín", price: 5500 },
    { id: "pr-chesse-minon", name: "Chesse Miñon", desc: "Champiñón tempura, cebollín, palta", price: 5000 },
    { id: "pr-betarraga", name: "Betarraga", desc: "Env. en Betarraga: Zanahoria, pimentón, queso. Coronado con topping de papa hilo", price: 5000 },
    { id: "pr-peru", name: "Perú", desc: "Env. en Salmón: Camarón apanado, queso, palta. Coronado con limón de pica", price: 6000 },
    { id: "pr-mango", name: "Mango", desc: "Env. en Mango: Camarón apanado, queso. Bañado en salsa maracuyá y topping de wantan", price: 6500 },
    { id: "pr-thiago", name: "Thiago", desc: "Env. en Plátano: Salmón, queso, cebollín. Bañado en salsa maracuyá", price: 6000 },
    { id: "pr-taki", name: "Taki", desc: "Env. en Palta: Camarón apanado, palta. Coronado con tártaro de camarón flameado", price: 5500 },
    { id: "pr-imperio", name: "Imperio Roll", desc: "Envuelto en salmón, relleno con camarón apanado y palta. Coronado con chimichurri de la casa", price: 7000 },
    { id: "pr-beef", name: "Beef Rolls", desc: "Envuelto en lomo flameado, relleno con camarón apanado y palta. Coronado con chimichurri de la casa", price: 7000 },
    { id: "pr-tako-grill", name: "Tako Grill Roll", desc: "Envuelto en queso, relleno con camarón apanado y palta. Coronado con pulpo a la parrilla y chimichurri", price: 7000 },
  ]},
  { id: "nikkei", label: "Rolls Nikkei", items: [
    { id: "nk-cele", name: "Cele", desc: "Camarón apanado, queso, palta, bañado en salsa acevichada con topping", price: 7000, img: "p1-23.jpg" },
    { id: "nk-acevichado", name: "Acevichado", desc: "Camarón, palta, queso. Coronado de pescado blanco, bañado de salsa acevichada", price: 7000, img: "p1-22.jpg" },
    { id: "nk-ceviche-furai", name: "Ceviche Furai", desc: "Frito: Camarón apanado, queso. Coronado con ceviche", price: 7500 },
    { id: "nk-ceviche", name: "Ceviche", desc: "Camarón apanado, palta. Coronado de ceviche mixto", price: 7500 },
    { id: "nk-gratinado", name: "Gratinado Furai", desc: "Champiñón apanado, palmito, cebollín. Nori apanado con salsa spicy, wantan al hilo", price: 7500 },
    { id: "nk-huancaina", name: "Huancaína", desc: "Env. en Salmón: Camarón, queso. Bañado con salsa huancaína, topping de papa hilo", price: 7000 },
    { id: "nk-karen", name: "Karen", desc: "Env. en Palta: Camarón apanado, palta. Coronado con tartar de kanikama", price: 7000 },
    { id: "nk-lima", name: "Lima", desc: "Env. en Palta: Queso, palta. Coronado de camarón apanado, bañado en salsa acevichada", price: 7000 },
    { id: "nk-lomo", name: "Lomo", desc: "Palta, queso, ciboulette. Coronado de Lomo Saltado", price: 7000, img: "p1-21.jpg" },
    { id: "nk-maguro", name: "Maguro", desc: "Env. en Atún: Camarón apanado, queso, cebollín. Bañado en salsa acevichada", price: 7000 },
    { id: "nk-maguro-ebi", name: "Maguro Ebi Sake", desc: "Env. en Palta, salmón y atún. Camarón apanado, queso. Con salsa acevichada", price: 7500 },
    { id: "nk-maracuya", name: "Maracuyá", desc: "Env. en Salmón: Camarón apanado, queso. Bañado en salsa maracuyá, wantan al hilo", price: 7000 },
    { id: "nk-olivo", name: "Olivo", desc: "Env. en Palta: Pollo apanado, palta. Bañado en salsa olivo con topping", price: 7500, img: "p1-19.jpg" },
    { id: "nk-panko-shitake", name: "Panko Shitake", desc: "Frito: Pollo apanado, champiñón apanado, queso. Papa hilo con salsa tari y teriyaki", price: 7500 },
    { id: "nk-xander", name: "Xander", desc: "Env. en Palta y Plátano: Queso, camarón tempura, tocino", price: 7500 },
  ]},
  { id: "burgers", label: "Sushi Burgers", items: [
    { id: "bg-sake", name: "Sake Burger", desc: "Salmón, queso, palta", price: 8000, img: "p2-00.jpg" },
    { id: "bg-katzu", name: "Katzu Burger", desc: "Pollo apanado, queso, palta", price: 7000, img: "p2-03.jpg" },
    { id: "bg-ebi", name: "Ebi Burger", desc: "Camarón apanado, queso, palta", price: 7000, img: "p2-01.jpg" },
    { id: "bg-tradicional", name: "Tradicional Burger", desc: "Pollo apanado, queso, palta, cebollín", price: 7000, img: "p2-02.jpg" },
    { id: "bg-veggie", name: "Veggie Burger", desc: "Palta, queso, champiñón", price: 7000, img: "p2-04.jpg" },
    { id: "bg-arma", name: "Arma tu Burger", desc: "4 ingredientes a elección", price: 9000 },
  ]},
  { id: "clasicos", label: "Niguiris · Sashimi · Hosomakis", items: [
    { id: "ng-ebi", name: "Niguiri Ebi", desc: "Bolitas de arroz cubiertas de camarón", price: 2500 },
    { id: "ng-maguro", name: "Niguiri Maguro", desc: "Bolitas de arroz cubiertas de atún", price: 2700 },
    { id: "ng-tako", name: "Niguiri Tako", desc: "Bolitas de arroz cubiertas de pulpo", price: 2700 },
    { id: "ng-sake", name: "Niguiri Sake", desc: "Bolitas de arroz cubiertas de salmón", price: 3000 },
    { id: "ss-mixto", name: "Sashimi Mixto", desc: "9 cortes", price: 10500 },
    { id: "ss-pulpo", name: "Sashimi Pulpo", desc: "9 cortes", price: 10500 },
    { id: "ss-salmon", name: "Sashimi Salmón", desc: "9 cortes", price: 11000 },
    { id: "hs-hazu", name: "Hosomaki Hazu", desc: "Kanikama, queso · 6 cortes", price: 2800 },
    { id: "hs-ebi", name: "Hosomaki Ebi", desc: "Camarón, queso · 6 cortes", price: 3300 },
    { id: "hs-fresh", name: "Hosomaki Fresh", desc: "Pepino, palta · 6 cortes", price: 3500 },
    { id: "hs-maguro", name: "Hosomaki Maguro", desc: "Atún, palta · 6 cortes", price: 3500 },
    { id: "hs-sake", name: "Hosomaki Sake", desc: "Salmón, queso · 6 cortes", price: 3500 },
    { id: "hs-tako", name: "Hosomaki Tako", desc: "Pulpo, palta · 6 cortes", price: 3500 },
  ]},
  { id: "entradas", label: "Entradas", items: [
    { id: "en-gyosa-cam", name: "Gyosas Camarón", desc: "5 unidades", price: 4000, img: "p2-05.jpg" },
    { id: "en-gyosa-cerdo", name: "Gyosas Cerdo", desc: "5 unidades", price: 3800 },
    { id: "en-gyosa-pollo", name: "Gyosas Pollo", desc: "5 unidades", price: 3500 },
    { id: "en-arrollado-jq", name: "Arrollado Jamón Queso", desc: "5 unidades", price: 4000 },
    { id: "en-arrollado-pr", name: "Arrollado Primavera", desc: "5 unidades", price: 3500 },
  ]},
  { id: "gohan", label: "Gohan", items: [
    { id: "go-mixto", name: "Gohan Mixto", desc: "Salmón, camarón, pulpo, palta, salsa spicy", price: 8000, img: "p2-06.jpg" },
    { id: "go-ebi", name: "Gohan Ebi Furai", desc: "Camarón apanado, queso, cebollín, palta", price: 7000, img: "p2-08.jpg" },
    { id: "go-tori", name: "Gohan Tori", desc: "Pollo apanado, queso, cebollín, palta", price: 7000, img: "p2-07.jpg" },
    { id: "go-acevichado", name: "Gohan Acevichado", desc: "Ceviche, camarón apanado, palta", price: 8500, img: "p2-09.jpg" },
  ]},
];

export function resolveItemImg(item: CartaItemData): string {
  const idx = ITEM_IMG_INDEX[item.id];
  if (idx !== undefined) return `/assets/food/r${String(idx).padStart(2, "0")}.jpg`;
  return item.img ? `/assets/food/${item.img}` : "";
}

export type ProductInfo = { name: string; price: number };

export function allProducts(): Record<string, ProductInfo> {
  const map: Record<string, ProductInfo> = {};
  PROMOS.forEach((p) => {
    map[p.id] = { name: p.name, price: p.price };
  });
  CARTA.forEach((c) => c.items.forEach((i) => {
    map[i.id] = { name: i.name, price: i.price };
  }));
  return map;
}
