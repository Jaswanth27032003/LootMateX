"use client";

import type { CatalogCategory } from "@/lib/catalog";
import { filterCatalog } from "@/lib/search";
import { useCatalog } from "./CatalogProvider";
import { CategoryFilter } from "./CategoryFilter";
import { CategorySection } from "./CategorySection";

export function Catalog({ categories }: { categories: CatalogCategory[] }) {
  const { query, activeCategory, reset } = useCatalog();
  const visible = filterCatalog(categories, query, activeCategory);

  return (
    <div id="catalog" className="scroll-mt-20 lg:scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20">
        <CategoryFilter />
      </div>

      {visible.map((c, i) => (
        <CategorySection key={c.id} category={c} banded={i % 2 === 1} />
      ))}

      {visible.length === 0 && (
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 px-4 py-24 text-center" role="status">
          <p className="text-lg font-bold">No products match “{query}”.</p>
          <p className="text-sm text-fg-muted">Try a different search or browse all categories.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-2 cursor-pointer rounded-control border border-border bg-surface px-4 py-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
