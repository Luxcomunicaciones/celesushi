"use client";

import { useState } from "react";
import { CARTA, resolveItemImg } from "@/lib/data";
import { clp } from "@/lib/format";
import { useCart } from "@/lib/CartContext";
import { useAccount } from "@/lib/AccountContext";
import styles from "./Carta.module.css";

export default function Carta() {
  const [cat, setCat] = useState(CARTA[0].id);
  const { qtyOf, changeQty } = useCart();
  const { isFavorite, toggleFavorite } = useAccount();
  const activeCat = CARTA.find((c) => c.id === cat) || CARTA[0];

  return (
    <section id="carta" className={styles.section}>
      <div className={styles.eyebrow}>Todo el menú</div>
      <h2 className={styles.title}>La carta</h2>
      <div className={styles.tabs}>
        {CARTA.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            className={`${styles.tab} ${c.id === activeCat.id ? styles.tabActive : ""}`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {activeCat.items.map((i) => {
          const qty = qtyOf(i.id);
          const img = resolveItemImg(i);
          return (
            <div key={i.id} className={styles.row}>
              {img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img} alt={i.name} loading="lazy" className={styles.image} />
              )}
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <div className={styles.name}>{i.name}</div>
                  <button
                    onClick={() => toggleFavorite(i.id)}
                    className={styles.heartBtn}
                    aria-label={isFavorite(i.id) ? `Quitar ${i.name} de favoritos` : `Agregar ${i.name} a favoritos`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill={isFavorite(i.id) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.1 5 5.4 5c1.9 0 3.3 1 4 2.3.7-1.3 2.1-2.3 4-2.3 3.3 0 4.9 3.4 3.4 6.7C19.5 16.4 12 21 12 21z" />
                    </svg>
                  </button>
                </div>
                <div className={styles.desc}>{i.desc}</div>
              </div>
              <div className={styles.actions}>
                <div className={styles.price}>{clp(i.price)}</div>
                {qty > 0 ? (
                  <div className={styles.stepper}>
                    <button
                      onClick={() => changeQty(i.id, -1)}
                      className={styles.stepperBtn}
                      aria-label={`Quitar ${i.name}`}
                    >
                      −
                    </button>
                    <span className={styles.stepperQty}>{qty}</span>
                    <button
                      onClick={() => changeQty(i.id, 1)}
                      className={styles.stepperBtn}
                      aria-label={`Agregar ${i.name}`}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button onClick={() => changeQty(i.id, 1)} className={styles.addButton}>
                    Agregar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
