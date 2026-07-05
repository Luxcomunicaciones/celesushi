"use client";

import { useAccount } from "@/lib/AccountContext";
import { useCart } from "@/lib/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const { cartCount, openCart } = useCart();
  const { user, openAccount } = useAccount();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="CeleSushi Delivery" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <a href="#promos" className={styles.navLink}>Promos</a>
          <a href="#carta" className={styles.navLink}>Carta</a>
          <a href="#sucursales" className={styles.navLink}>Sucursales</a>
          <button
            onClick={openAccount}
            className={styles.accountButton}
            aria-label={user ? "Mi cuenta" : "Iniciar sesión"}
          >
            {user ? (
              user.email?.[0]?.toUpperCase()
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            )}
          </button>
          <button onClick={openCart} className={styles.cartButton}>
            <span>Mi pedido</span>
            <span className={styles.cartCount}>{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
