import { CartProvider } from "@/lib/CartContext";
import { SUCURSALES } from "@/lib/data";
import { buildStructuredData } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promos from "@/components/Promos";
import Carta from "@/components/Carta";
import Sucursales from "@/components/Sucursales";
import Footer from "@/components/Footer";
import FloatingCartBar from "@/components/FloatingCartBar";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const structuredData = buildStructuredData(SUCURSALES);

  return (
    <CartProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <Promos />
      <Carta />
      <Sucursales />
      <Footer />
      <FloatingCartBar />
      <CartDrawer />
    </CartProvider>
  );
}
