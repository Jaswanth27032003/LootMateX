"use client";

import type { CatalogCategory } from "@/lib/catalog";
import { useCatalog } from "./CatalogProvider";

export function CategoryFilter({ categories }: { categories: CatalogCategory[] }) {
  const { activeCategory, setActiveCategory } = useCatalog();
  const options = [
    { id: "all", name: "All gear", count: categories.reduce((total, category) => total + category.products.length, 0) },
    ...categories.map((category) => ({ id: category.id, name: category.name, count: category.products.length })),
  ];

  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {options.map((category) => {
        const active = activeCategory === category.id;
        return (
          <button key={category.id} type="button" aria-pressed={active} onClick={() => setActiveCategory(category.id)}
            className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-colors ${active ? "border-fg bg-fg text-bg" : "border-border bg-surface text-nav hover:border-fg-muted hover:text-fg"}`}>
            {category.name}
            {category.count > 0 && <span className={`flex min-w-5 items-center justify-center rounded-full px-1 text-[10px] leading-5 ${active ? "bg-bg/15 text-bg" : "bg-band text-fg-muted"}`}>{category.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
