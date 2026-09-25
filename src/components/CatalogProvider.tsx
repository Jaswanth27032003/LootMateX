"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CatalogState = {
  query: string;
  setQuery: (q: string) => void;
  activeCategory: string; // "all" or a category id
  setActiveCategory: (id: string) => void;
  reset: () => void;
};

const CatalogContext = createContext<CatalogState | null>(null);

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const value = useMemo(
    () => ({
      query,
      setQuery,
      activeCategory,
      setActiveCategory,
      reset: () => {
        setQuery("");
        setActiveCategory("all");
      },
    }),
    [query, activeCategory],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used inside <CatalogProvider>");
  return ctx;
}
