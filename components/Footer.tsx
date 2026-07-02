import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/seo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="CeleSushi Delivery" className={styles.logo} />
          <p className={styles.blurb}>
            Sushi delivery con 7 sucursales en Santiago. Pide por WhatsApp y recibe en tu
            casa.
          </p>
        </div>
        <div className={styles.col}>
          <div className={styles.colTitle}>Contacto</div>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
            {CONTACT_EMAIL}
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener" className={styles.link}>
            Instagram · @celesushi.cl
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener" className={styles.link}>
            Facebook · CeleSushi
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener" className={styles.link}>
            TikTok · @cele_sushi
          </a>
        </div>
        <div className={styles.col}>
          <div className={styles.colTitle}>Secciones</div>
          <a href="#promos" className={styles.link}>Promociones</a>
          <a href="#carta" className={styles.link}>Carta</a>
          <a href="#sucursales" className={styles.link}>Sucursales</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span>© 2026 CeleSushi Delivery · Santiago de Chile</span>
          <span>Fotos referenciales. Precios en pesos chilenos.</span>
          <a
            href="https://luxchile.cl"
            target="_blank"
            rel="noopener"
            className={styles.credit}
          >
            Sitio creado por luxchile.cl
          </a>
        </div>
      </div>
    </footer>
  );
}
