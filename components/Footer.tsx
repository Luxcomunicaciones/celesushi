import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/seo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="CeleSushi Delivery" className={styles.logo} />
          <p className={styles.tagline}>
            Sushi delivery con 7 sucursales en Santiago. Pide por WhatsApp.
          </p>
        </div>

        <nav className={styles.nav}>
          <a href="#promos" className={styles.navLink}>Promociones</a>
          <a href="#carta" className={styles.navLink}>Carta</a>
          <a href="#sucursales" className={styles.navLink}>Sucursales</a>
        </nav>

        <div className={styles.socials}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Escríbenos por correo"
            className={styles.socialIcon}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 6 10 7 10-7" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className={styles.socialIcon}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className={styles.socialIcon}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 8h2V5h-2a4 4 0 0 0-4 4v2H9v3h2v7h3v-7h2.5l.5-3H14V9a1 1 0 0 1 1-1Z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener"
            aria-label="TikTok"
            className={styles.socialIcon}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M16.5 3c.4 2.1 1.7 3.5 3.9 3.7v2.9c-1.4.1-2.7-.3-3.9-1.1v6.6c0 3.3-2.6 5.9-6 5.9s-6-2.6-6-5.9 2.6-5.9 6-5.9c.4 0 .7 0 1 .1v2.9a3 3 0 1 0 2.1 2.9V3h2.9Z" />
            </svg>
          </a>
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
