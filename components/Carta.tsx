"use client";

import { useState } from "react";
import { CARTA, resolveItemImg } from "@/lib/data";
import { clp } from "@/lib/format";
import { useCart } from "@/lib/CartContext";
import styles from "./Carta.module.css";

export default function Carta() {
  const [cat, setCat] = useState(CARTA[0].id);
  const { qtyOf, changeQty } = useCart();
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
                <div className={styles.name}>{i.name}</div>
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
