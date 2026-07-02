import { SUCURSALES } from "@/lib/data";
import styles from "./Sucursales.module.css";

export default function Sucursales() {
  return (
    <section id="sucursales" className={styles.section}>
      <div className={styles.eyebrow}>Delivery y retiro</div>
      <h2 className={styles.title}>Sucursales</h2>
      <p className={styles.lead}>
        Despachamos hasta <strong>10 km a la redonda de cada sucursal</strong>. Escríbele
        directo a la más cercana o llama por teléfono.
      </p>
      <div className={styles.grid}>
        {SUCURSALES.map((s) => (
          <div key={s.comuna} className={styles.card}>
            <div className={styles.comuna}>{s.comuna}</div>
            <div className={styles.dir}>{s.dir}</div>
            <div className={styles.fono}>{s.fono}</div>
            <div className={styles.actions}>
              <a
                href={`https://wa.me/${s.num}?text=${encodeURIComponent(
                  `Hola CeleSushi ${s.comuna}! Quiero hacer un pedido.`
                )}`}
                target="_blank"
                rel="noopener"
                className={styles.waButton}
              >
                WhatsApp
              </a>
              <a href={`tel:+${s.num}`} className={styles.callButton}>
                Llamar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
