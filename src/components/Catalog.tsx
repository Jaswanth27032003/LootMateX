"use client";

import { useState } from "react";
import type { CatalogCategory } from "@/lib/catalog";
import { filterCatalog } from "@/lib/search";
import { useCatalog } from "./CatalogProvider";
import { CatalogToolbar, sortProducts, type CatalogSort } from "./CatalogToolbar";
import { CategoryFilter } from "./CategoryFilter";
import { CategorySection } from "./CategorySection";

export function Catalog({ categories }: { categories: CatalogCategory[] }) {
  const { query, activeCategory, reset } = useCatalog();
  const [sort, setSort] = useState<CatalogSort>("recommended");
  const visible = filterCatalog(categories, query, activeCategory).map((category) => ({
    ...category,
    products: sortProducts(category.products, sort),
  }));
  const count = visible.reduce((total, category) => total + category.products.length, 0);
  const selectedCategory = categories.find((category) => category.id === activeCategory);
  const isComingSoon = selectedCategory?.products.length === 0;

  function clearFilters() {
    reset();
    setSort("recommended");
  }

  return (
    <section id="catalog" aria-labelledby="catalog-heading" className="catalog-section scroll-mt-24 pb-16 pt-16 lg:pb-20 lg:pt-20">
      <div className="site-container">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">The shortlist</p>
            <h2 id="catalog-heading" className="text-[32px] font-bold leading-[1.15] tracking-[-0.035em] sm:text-[40px]">Find your next upgrade.</h2>
          </div>
          <p className="max-w-[340px] text-sm leading-6 text-fg-muted">Good gear, useful details, and a clearer way to choose what belongs in your setup.</p>
        </div>
        <CategoryFilter categories={categories} />
        <div className="mt-6 border-t border-border pt-6">
          <CatalogToolbar count={count} sort={sort} onSortChange={setSort} hasFilters={Boolean(query.trim()) || activeCategory !== "all" || sort !== "recommended"} onClear={clearFilters} />
        </div>

        {visible.map((category) => <CategorySection key={category.id} category={category} />)}

        {count > 0 && <p className="mt-6 text-xs leading-6 text-fg-muted">Affiliate links may earn us a commission at no extra cost to you. Listed prices may change; check the retailer for the latest price and availability.</p>}

        {count === 0 && (
          <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-accent/8 text-accent" aria-hidden="true">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {isComingSoon ? <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M3 8v9l9 5 9-5V8M12 13v9" /></> : <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>}
              </svg>
            </div>
            <h3 className="text-xl font-semibold tracking-tight">{isComingSoon ? `${selectedCategory.name}: coming to the shortlist.` : "No picks found this time."}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-fg-muted">{isComingSoon ? "There are no published picks in this category yet. Explore the current selection while this collection takes shape." : "Try another product, brand or spec, or clear your filters to see the full selection."}</p>
            <button type="button" onClick={clearFilters} className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">Explore all picks <span aria-hidden="true">→</span></button>
          </div>
        )}
      </div>
    </section>
  );
}
