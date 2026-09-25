"use client";

import { categories } from "@/data/products";
import { useCatalog } from "./CatalogProvider";

export function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useCatalog();
  const options = [{ id: "all", name: "All" }, ...categories];

  return (
    <div role="group" aria-label="Filter by category" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
      {options.map((c) => {
        const active = activeCategory === c.id;
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 cursor-pointer rounded-control border px-3.5 py-2 text-[13px] font-medium transition-colors ${
              active
                ? "border-accent bg-accent text-white"
                : "border-border bg-surface text-nav hover:text-fg"
            }`}
          >
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
