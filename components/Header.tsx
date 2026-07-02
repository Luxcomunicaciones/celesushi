"use client";

import { useCart } from "@/lib/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const { cartCount, openCart } = useCart();

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
          <button onClick={openCart} className={styles.cartButton}>
            <span>Mi pedido</span>
            <span className={styles.cartCount}>{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
