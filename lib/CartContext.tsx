"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { allProducts, DEFAULT_SUCURSAL, SUCURSALES } from "./data";
import { clp } from "./format";

const STORAGE_KEY = "celesushi-pedido";

type CartLine = {
  id: string;
  name: string;
  unit: string;
  qty: number;
  sub: string;
};

type CartContextValue = {
  cart: Record<string, number>;
  qtyOf: (id: string) => number;
  changeQty: (id: string, delta: number) => void;
  cartCount: number;
  total: string;
  cartLines: CartLine[];
  cartEmpty: boolean;
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  suc: string;
  setSuc: (value: string) => void;
  waOrderHref: string | undefined;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [suc, setSucState] = useState<string>(DEFAULT_SUCURSAL);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && typeof saved === "object") {
        // One-time hydration from localStorage after mount, deliberately not in
        // the initial render, so SSR output and first client render still match.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (saved.cart) setCart(saved.cart);
        if (saved.suc) setSucState(saved.suc);
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, suc }));
    } catch {
      // storage unavailable, ignore
    }
  }, [cart, suc, hydrated]);

  const changeQty = useCallback((id: string, delta: number) => {
    setCart((prev) => {
      const next = { ...prev };
      const q = (next[id] || 0) + delta;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }, []);

  const qtyOf = useCallback((id: string) => cart[id] || 0, [cart]);

  const products = useMemo(() => allProducts(), []);

  const cartIds = useMemo(() => Object.keys(cart), [cart]);
  const cartCount = useMemo(
    () => cartIds.reduce((a, id) => a + cart[id], 0),
    [cartIds, cart]
  );
  const totalN = useMemo(
    () =>
      cartIds.reduce(
        (a, id) => a + cart[id] * (products[id] ? products[id].price : 0),
        0
      ),
    [cartIds, cart, products]
  );

  const cartLines = useMemo<CartLine[]>(
    () =>
      cartIds.map((id) => {
        const p = products[id] || { name: id, price: 0 };
        return {
          id,
          name: p.name,
          unit: clp(p.price),
          qty: cart[id],
          sub: clp(p.price * cart[id]),
        };
      }),
    [cartIds, cart, products]
  );

  const waOrderHref = useMemo(() => {
    if (cartCount === 0) return undefined;
    const sucObj = SUCURSALES.find((x) => x.comuna === suc) || SUCURSALES[0];
    let msg = `Hola CeleSushi ${sucObj.comuna}! Quiero hacer este pedido:\n`;
    cartIds.forEach((id) => {
      const p = products[id];
      if (p) msg += `\n• ${cart[id]}× ${p.name} — ${clp(p.price * cart[id])}`;
    });
    msg += `\n\nTotal: ${clp(totalN)}\n\nMi dirección es: `;
    return "https://wa.me/" + sucObj.num + "?text=" + encodeURIComponent(msg);
  }, [cartIds, cart, products, totalN, cartCount, suc]);

  const value: CartContextValue = {
    cart,
    qtyOf,
    changeQty,
    cartCount,
    total: clp(totalN),
    cartLines,
    cartEmpty: cartCount === 0,
    open,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    suc,
    setSuc: setSucState,
    waOrderHref,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
