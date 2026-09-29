"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { categories } from "@/data/products";
import { isPublishedProduct } from "@/lib/products";

type CatalogState = {
  query: string;
  setQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  reset: () => void;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  clearComparison: () => void;
  compareOpen: boolean;
  setCompareOpen: (open: boolean) => void;
};
const CatalogContext = createContext<CatalogState | null>(null);
const publishedIds = new Set(categories.flatMap(c => c.products).filter(isPublishedProduct).map(p => p.id));

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
    try {
      const stored: unknown = JSON.parse(localStorage.getItem("lootmatex-compare") ?? "[]");
      if (Array.isArray(stored)) setComparedIds([...new Set(stored.filter((id): id is string => typeof id === "string" && publishedIds.has(id)))].slice(0, 3));
    } catch { /* Browsing still works when storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem("lootmatex-compare", JSON.stringify(comparedIds)); } catch {}
  }, [comparedIds, ready]);

  useEffect(() => {
    if (!ready) return;
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
  }, [query, ready]);

  const value = useMemo(() => ({
    query, setQuery, activeCategory, setActiveCategory,
    reset: () => { setQuery(""); setActiveCategory("all"); },
    comparedIds,
    toggleCompare: (id: string) => setComparedIds(ids => ids.includes(id) ? ids.filter(value => value !== id) : ids.length < 3 && publishedIds.has(id) ? [...ids, id] : ids),
    clearComparison: () => { setComparedIds([]); setCompareOpen(false); },
    compareOpen, setCompareOpen,
  }), [query, activeCategory, comparedIds, compareOpen]);

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}
export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used inside <CatalogProvider>");
  return ctx;
}
