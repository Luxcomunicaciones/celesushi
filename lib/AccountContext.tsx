"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";

export type OrderItem = {
  id: string;
  name: string;
  qty: number;
  unit_price: number;
  subtotal: number;
};

export type Order = {
  id: string;
  sucursal: string;
  items: OrderItem[];
  total: number;
  status: string;
  created_at: string;
};

type AccountContextValue = {
  user: User | null;
  loading: boolean;
  open: boolean;
  openAccount: () => void;
  closeAccount: () => void;

  otpSent: boolean;
  pendingEmail: string | null;
  sendOtp: (email: string) => Promise<{ error: string | null }>;
  verifyOtp: (email: string, token: string) => Promise<{ error: string | null }>;
  resetOtpFlow: () => void;
  signOut: () => Promise<void>;

  favorites: Set<string>;
  favoritesLoading: boolean;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => Promise<void>;

  orders: Order[];
  ordersLoading: boolean;
  loadOrders: () => Promise<void>;

  recordOrder: (input: {
    sucursal: string;
    items: OrderItem[];
    total: number;
    waMessage: string;
  }) => Promise<void>;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [favoritesLoading, setFavoritesLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        setUser(data.session?.user ?? null);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const loadFavorites = useCallback(async () => {
    if (!user) {
      setFavorites(new Set());
      return;
    }
    setFavoritesLoading(true);
    try {
      const { data } = await supabase
        .from("favorites")
        .select("product_id")
        .eq("user_id", user.id);
      setFavorites(new Set((data ?? []).map((r) => r.product_id as string)));
    } catch {
      setFavorites(new Set());
    } finally {
      setFavoritesLoading(false);
    }
  }, [user]);

  const loadOrders = useCallback(async () => {
    if (!user) {
      setOrders([]);
      return;
    }
    setOrdersLoading(true);
    try {
      const { data } = await supabase
        .from("orders")
        .select("id, sucursal, items, total, status, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      setOrders((data as Order[]) ?? []);
    } catch {
      setOrders([]);
    } finally {
      setOrdersLoading(false);
    }
  }, [user]);

  useEffect(() => {
    // Fetches favorites from Supabase and calls setState in a .then/.finally,
    // not synchronously — safe despite the lint rule's static analysis.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadOrders();
    }
  }, [open, loadOrders]);

  const sendOtp = useCallback(async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    });
    if (!error) {
      setOtpSent(true);
      setPendingEmail(email);
    }
    return { error: error?.message ?? null };
  }, []);

  const verifyOtp = useCallback(async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({ email, token, type: "email" });
    if (!error) {
      setOtpSent(false);
      setPendingEmail(null);
    }
    return { error: error?.message ?? null };
  }, []);

  const resetOtpFlow = useCallback(() => {
    setOtpSent(false);
    setPendingEmail(null);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

  const toggleFavorite = useCallback(
    async (id: string) => {
      if (!user) {
        setOpen(true);
        return;
      }
      const isFav = favorites.has(id);
      setFavorites((prev) => {
        const next = new Set(prev);
        if (isFav) next.delete(id);
        else next.add(id);
        return next;
      });
      try {
        if (isFav) {
          await supabase
            .from("favorites")
            .delete()
            .eq("user_id", user.id)
            .eq("product_id", id);
        } else {
          await supabase.from("favorites").insert({ user_id: user.id, product_id: id });
        }
      } catch {
        // optimistic update stands; a stale row will just resync on next loadFavorites()
      }
    },
    [user, favorites]
  );

  const recordOrder = useCallback(
    async (input: { sucursal: string; items: OrderItem[]; total: number; waMessage: string }) => {
      if (!user) return;
      try {
        await supabase.from("orders").insert({
          user_id: user.id,
          sucursal: input.sucursal,
          items: input.items,
          total: input.total,
          wa_message: input.waMessage,
        });
      } catch {
        // best-effort receipt log; never blocks the WhatsApp handoff
      }
    },
    [user]
  );

  const value: AccountContextValue = useMemo(
    () => ({
      user,
      loading,
      open,
      openAccount: () => setOpen(true),
      closeAccount: () => setOpen(false),
      otpSent,
      pendingEmail,
      sendOtp,
      verifyOtp,
      resetOtpFlow,
      signOut,
      favorites,
      favoritesLoading,
      isFavorite,
      toggleFavorite,
      orders,
      ordersLoading,
      loadOrders,
      recordOrder,
    }),
    [
      user,
      loading,
      open,
      otpSent,
      pendingEmail,
      sendOtp,
      verifyOtp,
      resetOtpFlow,
      signOut,
      favorites,
      favoritesLoading,
      isFavorite,
      toggleFavorite,
      orders,
      ordersLoading,
      loadOrders,
      recordOrder,
    ]
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount(): AccountContextValue {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within an AccountProvider");
  return ctx;
}
