"use client";

import { useState } from "react";
import { useAccount } from "@/lib/AccountContext";
import { useCart } from "@/lib/CartContext";
import { allProducts } from "@/lib/data";
import { clp } from "@/lib/format";
import styles from "./AccountModal.module.css";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AccountModal() {
  const {
    user,
    open,
    closeAccount,
    otpSent,
    pendingEmail,
    sendOtp,
    verifyOtp,
    resetOtpFlow,
    signOut,
    favorites,
    toggleFavorite,
    orders,
    ordersLoading,
  } = useAccount();
  const { changeQty, openCart } = useCart();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [tab, setTab] = useState<"pedidos" | "favoritos">("pedidos");

  if (!open) return null;

  const products = allProducts();
  const favoriteEntries = Array.from(favorites)
    .map((id) => ({ id, product: products[id] }))
    .filter((f) => f.product);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setFormError(null);
    const { error } = await sendOtp(email);
    if (error) setFormError(error);
    setSubmitting(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingEmail || !code) return;
    setSubmitting(true);
    setFormError(null);
    const { error } = await verifyOtp(pendingEmail, code);
    if (error) setFormError(error);
    else setCode("");
    setSubmitting(false);
  };

  const handleRepeatOrder = (items: { id: string; qty: number }[]) => {
    items.forEach((item) => changeQty(item.id, item.qty));
    closeAccount();
    openCart();
  };

  return (
    <div className={styles.overlay}>
      <div onClick={closeAccount} className={styles.backdrop} />
      <aside className={styles.panel}>
        <div className={styles.head}>
          <h3 className={styles.headTitle}>{user ? "Mi cuenta" : "Iniciar sesión"}</h3>
          <button onClick={closeAccount} className={styles.closeBtn} aria-label="Cerrar">
            ✕
          </button>
        </div>

        {!user ? (
          <div className={styles.body}>
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className={styles.form}>
                <p className={styles.lead}>
                  Guarda tus favoritos y repite pedidos anteriores con tu cuenta.
                </p>
                <label className={styles.fieldLabel}>
                  Email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className={styles.input}
                  />
                </label>
                {formError && <p className={styles.error}>{formError}</p>}
                <button type="submit" disabled={submitting} className={styles.submit}>
                  {submitting ? "Enviando..." : "Enviar código"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className={styles.form}>
                <p className={styles.lead}>
                  Te enviamos un código a <strong>{pendingEmail}</strong>
                </p>
                <label className={styles.fieldLabel}>
                  Código de 6 dígitos
                  <input
                    type="text"
                    required
                    inputMode="numeric"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="123456"
                    className={styles.input}
                  />
                </label>
                {formError && <p className={styles.error}>{formError}</p>}
                <button type="submit" disabled={submitting} className={styles.submit}>
                  {submitting ? "Verificando..." : "Verificar"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetOtpFlow();
                    setFormError(null);
                    setCode("");
                  }}
                  className={styles.linkBtn}
                >
                  Usar otro email
                </button>
              </form>
            )}
          </div>
        ) : (
          <>
            <div className={styles.tabs}>
              <button
                onClick={() => setTab("pedidos")}
                className={tab === "pedidos" ? styles.tabActive : styles.tab}
              >
                Mis pedidos
              </button>
              <button
                onClick={() => setTab("favoritos")}
                className={tab === "favoritos" ? styles.tabActive : styles.tab}
              >
                Favoritos
              </button>
            </div>
            <div className={styles.body}>
              {tab === "pedidos" ? (
                ordersLoading ? (
                  <p className={styles.muted}>Cargando...</p>
                ) : orders.length === 0 ? (
                  <div className={styles.empty}>
                    <div className={styles.emptyTitle}>Aún no has hecho pedidos</div>
                    <div className={styles.emptyText}>
                      Tus pedidos enviados por WhatsApp van a aparecer acá.
                    </div>
                  </div>
                ) : (
                  orders.map((order) => (
                    <div key={order.id} className={styles.card}>
                      <div className={styles.cardHead}>
                        <span className={styles.cardTitle}>
                          {formatDate(order.created_at)} · {order.sucursal}
                        </span>
                        <span className={styles.badge}>Enviado</span>
                      </div>
                      <p className={styles.cardMeta}>
                        {order.items.length} producto{order.items.length !== 1 ? "s" : ""} ·{" "}
                        {clp(order.total)}
                      </p>
                      <button
                        onClick={() => handleRepeatOrder(order.items)}
                        className={styles.repeatBtn}
                      >
                        Repetir
                      </button>
                    </div>
                  ))
                )
              ) : favoriteEntries.length === 0 ? (
                <div className={styles.empty}>
                  <div className={styles.emptyTitle}>Sin favoritos todavía</div>
                  <div className={styles.emptyText}>
                    Toca el corazón en cualquier producto de la carta para guardarlo acá.
                  </div>
                </div>
              ) : (
                favoriteEntries.map(({ id, product }) => (
                  <div key={id} className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardTitle}>{product.name}</span>
                      <button
                        onClick={() => toggleFavorite(id)}
                        className={styles.heartBtn}
                        aria-label="Quitar de favoritos"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.1 5 5.4 5c1.9 0 3.3 1 4 2.3.7-1.3 2.1-2.3 4-2.3 3.3 0 4.9 3.4 3.4 6.7C19.5 16.4 12 21 12 21z" />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.cardMeta}>{clp(product.price)}</p>
                    <button
                      onClick={() => {
                        changeQty(id, 1);
                        closeAccount();
                        openCart();
                      }}
                      className={styles.repeatBtn}
                    >
                      Agregar
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className={styles.footer}>
              <button onClick={signOut} className={styles.signOutBtn}>
                Cerrar sesión
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
