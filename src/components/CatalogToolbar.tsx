"use client";

import { useId } from "react";
import type { CatalogProduct } from "@/lib/catalog";
import { useCatalog } from "./CatalogProvider";

export type CatalogSort = "recommended" | "price-low" | "price-high";

/** Sort reference prices without changing the curated source order. */
export function sortProducts(products: CatalogProduct[], sort: CatalogSort) {
  if (sort === "recommended") return products;
  return [...products].sort((a, b) => {
    const priceA = Number(a.price.replace(/[^\d.]/g, ""));
    const priceB = Number(b.price.replace(/[^\d.]/g, ""));
    if (!priceA) return priceB ? 1 : 0;
    if (!priceB) return -1;
    return sort === "price-low" ? priceA - priceB : priceB - priceA;
  });
}

type Props = {
  count: number;
  sort: CatalogSort;
  onSortChange: (sort: CatalogSort) => void;
  hasFilters?: boolean;
  onClear?: () => void;
  placeholder?: string;
};

export function CatalogToolbar({ count, sort, onSortChange, hasFilters, onClear, placeholder = "Search gear, brands or specs…" }: Props) {
  const { query, setQuery } = useCatalog();
  const searchId = useId();
  const sortId = useId();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-[380px]">
          <label htmlFor={searchId} className="sr-only">Search products</label>
          <svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-fg-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" />
          </svg>
          <input id={searchId} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-accent focus:ring-2 focus:ring-accent/15" />
        </div>
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <label htmlFor={sortId} className="shrink-0 text-sm text-fg-muted">Sort by</label>
          <select id={sortId} value={sort} onChange={(event) => onSortChange(event.target.value as CatalogSort)} className="h-12 min-w-0 flex-1 cursor-pointer rounded-xl border border-border bg-surface px-3 text-sm font-medium text-fg outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 sm:w-[182px] sm:flex-none">
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>
      <div className="flex min-h-6 flex-wrap items-center justify-between gap-2 text-xs text-fg-muted">
        <p role="status" aria-live="polite" aria-atomic="true"><span className="font-semibold text-fg">{count} {count === 1 ? "pick" : "picks"}</span>{query.trim() ? <> matching “{query.trim()}”</> : " to explore"}</p>
        {hasFilters && onClear ? <button type="button" onClick={onClear} className="cursor-pointer py-1 font-semibold text-accent underline-offset-4 hover:underline">Clear filters</button> : <span>Find your fit. Compare the details.</span>}
      </div>
    </div>
  );
}
