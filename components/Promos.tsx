"use client";

import { useState } from "react";
import { PROMO_TABS, PROMOS, PromoTab } from "@/lib/data";
import { clp } from "@/lib/format";
import { useCart } from "@/lib/CartContext";
import styles from "./Promos.module.css";

export default function Promos() {
  const [tab, setTab] = useState<PromoTab>("mixtas");
  const { qtyOf, changeQty } = useCart();
  const promos = PROMOS.filter((p) => p.tab === tab);

  return (
    <section id="promos" className={styles.section}>
      <div className={styles.headRow}>
        <div>
          <div className={styles.eyebrow}>Las favoritas</div>
          <h2 className={styles.title}>Promociones</h2>
        </div>
        <div className={styles.tabs}>
          {PROMO_TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`${styles.tab} ${t.key === tab ? styles.tabActive : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {promos.map((p) => {
          const qty = qtyOf(p.id);
          return (
            <article key={p.id} className={styles.card}>
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} loading="lazy" className={styles.image} />
                <span className={styles.pzsBadge}>{p.pzs} piezas</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{p.name}</h3>
                <div className={styles.lines}>
                  {p.lines.map((ln) => (
                    <div key={ln} className={styles.line}>
                      <span className={styles.lineBullet}>•</span>
                      <span>{ln}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.footerRow}>
                  <div className={styles.price}>{clp(p.price)}</div>
                  {qty > 0 ? (
                    <div className={styles.stepper}>
                      <button
                        onClick={() => changeQty(p.id, -1)}
                        className={styles.stepperBtn}
                        aria-label={`Quitar ${p.name}`}
                      >
                        −
                      </button>
                      <span className={styles.stepperQty}>{qty}</span>
                      <button
                        onClick={() => changeQty(p.id, 1)}
                        className={styles.stepperBtn}
                        aria-label={`Agregar ${p.name}`}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => changeQty(p.id, 1)} className={styles.addButton}>
                      Agregar
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
