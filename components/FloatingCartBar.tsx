"use client";

import { useCart } from "@/lib/CartContext";
import styles from "./FloatingCartBar.module.css";

export default function FloatingCartBar() {
  const { cartCount, open, openCart, total } = useCart();
  if (cartCount === 0 || open) return null;

  return (
    <button onClick={openCart} className={styles.bar}>
      <span className={styles.count}>{cartCount}</span>
      <span>Ver mi pedido</span>
      <span>{total}</span>
    </button>
  );
}
