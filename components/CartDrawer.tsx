"use client";

import { SUCURSALES } from "@/lib/data";
import { useCart } from "@/lib/CartContext";
import { useAccount } from "@/lib/AccountContext";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const {
    open,
    closeCart,
    cartLines,
    cartEmpty,
    changeQty,
    suc,
    setSuc,
    total,
    totalAmount,
    waOrderHref,
  } = useCart();
  const { recordOrder } = useAccount();

  if (!open) return null;

  const handleSendOrder = () => {
    recordOrder({
      sucursal: suc,
      items: cartLines.map((l) => ({
        id: l.id,
        name: l.name,
        qty: l.qty,
        unit_price: l.unitPrice,
        subtotal: l.subtotal,
      })),
      total: totalAmount,
      waMessage: decodeURIComponent(waOrderHref?.split("?text=")[1] ?? ""),
    });
  };

  const goPromos = () => {
    closeCart();
    const el = document.getElementById("promos");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.overlay}>
      <div onClick={closeCart} className={styles.backdrop} />
      <aside className={styles.panel}>
        <div className={styles.head}>
          <h3 className={styles.headTitle}>Mi pedido</h3>
          <button onClick={closeCart} className={styles.closeBtn} aria-label="Cerrar">
            ✕
          </button>
        </div>
        <div className={styles.body}>
          {cartEmpty ? (
            <div className={styles.empty}>
              <div className={styles.emptyTitle}>Tu pedido está vacío</div>
              <div className={styles.emptyText}>
                Agrega promos o rolls de la carta y envíalos por WhatsApp.
              </div>
              <button onClick={goPromos} className={styles.emptyCta}>
                Ver promociones
              </button>
            </div>
          ) : (
            cartLines.map((l) => (
              <div key={l.id} className={styles.line}>
                <div className={styles.lineInfo}>
                  <div className={styles.lineName}>{l.name}</div>
                  <div className={styles.lineUnit}>{l.unit} c/u</div>
                </div>
                <div className={styles.stepper}>
                  <button
                    onClick={() => changeQty(l.id, -1)}
                    className={styles.stepperBtn}
                    aria-label={`Quitar ${l.name}`}
                  >
                    −
                  </button>
                  <span className={styles.stepperQty}>{l.qty}</span>
                  <button
                    onClick={() => changeQty(l.id, 1)}
                    className={styles.stepperBtn}
                    aria-label={`Agregar ${l.name}`}
                  >
                    +
                  </button>
                </div>
                <div className={styles.lineSub}>{l.sub}</div>
              </div>
            ))
          )}
        </div>
        <div className={styles.footer}>
          <label className={styles.sucLabel}>
            Sucursal para tu pedido
            <select
              value={suc}
              onChange={(e) => setSuc(e.target.value)}
              className={styles.select}
            >
              {SUCURSALES.map((s) => (
                <option key={s.comuna} value={s.comuna}>
                  {s.comuna}
                </option>
              ))}
            </select>
          </label>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>{total}</span>
          </div>
          {cartEmpty ? (
            <div className={styles.submitDisabled}>Agrega productos para pedir</div>
          ) : (
            <a
              href={waOrderHref}
              target="_blank"
              rel="noopener"
              onClick={handleSendOrder}
              className={styles.submit}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z" />
              </svg>
              <span>Enviar pedido por WhatsApp</span>
            </a>
          )}
          <p className={styles.disclaimer}>
            Se abrirá WhatsApp con el detalle de tu pedido. Coordina dirección y pago directo
            con la sucursal.
          </p>
        </div>
      </aside>
    </div>
  );
}
