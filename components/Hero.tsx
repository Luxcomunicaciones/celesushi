"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.badge}>Sushi delivery · Santiago</div>
          <h1 className={styles.headline}>
            Sushi fresco,
            <br />
            directo a <span>tu puerta</span>.
          </h1>
          <p className={styles.lead}>
            Rolls recién hechos, promos para compartir y ese antojo que no espera. Elige lo
            tuyo, envíalo por WhatsApp y nosotros nos encargamos del resto.
          </p>
          <div className={styles.ctas}>
            <a href="#promos" className={styles.ctaPrimary}>Ver promos</a>
            <a href="#carta" className={styles.ctaSecondary}>Explorar la carta</a>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>7</div>
              <div className={styles.statLabel}>sucursales en Santiago</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statValue}>10 km</div>
              <div className={styles.statLabel}>de cobertura por sucursal</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statValue}>+100</div>
              <div className={styles.statLabel}>preparaciones en carta</div>
            </div>
          </div>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imageCard}>
            {HERO_SLIDES.map((slide, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? undefined : "lazy"}
                className={styles.slide}
                style={{ opacity: i === heroIdx ? 1 : 0 }}
              />
            ))}
            <div className={styles.caption}>{HERO_SLIDES[heroIdx].caption}</div>
            <div className={styles.waTag}>
              <span className={styles.waDot} />
              <span className={styles.waLabel}>Pedidos abiertos por WhatsApp</span>
            </div>
            <div className={styles.dots}>
              {HERO_SLIDES.map((slide, i) => (
                <span
                  key={slide.src}
                  className={`${styles.dot} ${i === heroIdx ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
