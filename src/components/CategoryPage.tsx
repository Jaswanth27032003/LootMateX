"use client";

import type { SectionGroup } from "@/data/sections";
import type { CatalogCategory, CatalogProduct } from "@/lib/catalog";
import { hasTag, matchesQuery, queryTerms } from "@/lib/search";
import { useCatalog } from "./CatalogProvider";
import { ProductGrid } from "./ProductGrid";
import { SubNav } from "./SubNav";

type Props = {
  category: CatalogCategory;
  /** Sub-section groups from data/sections.ts; omitted → one grid of all products. */
  groups?: SectionGroup[];
};

const container = "mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20";
// Clears the sticky header + jump-link bar when jumping to an anchor.
const anchorOffset = "scroll-mt-32 lg:scroll-mt-36";

export function CategoryPage({ category, groups }: Props) {
  const { query, setQuery } = useCatalog();
  const terms = queryTerms(query);
  const products = category.products.filter((p) => matchesQuery(p, terms, category.name));

  // Keep only sections with matching products, and groups with at least one section.
  const visibleGroups = (groups ?? [])
    .map((g) => ({
      ...g,
      sections: g.sections
        .map((s) => ({ ...s, products: products.filter((p) => hasTag(p, s.tag, s.value)) }))
        .filter((s) => s.products.length > 0),
    }))
    .filter((g) => g.sections.length > 0);

  const count = category.products.length;

  return (
    <>
      <div className={`${container} flex flex-col gap-3 pb-10 pt-12 lg:pb-12 lg:pt-16`}>
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">
          {count} {count === 1 ? "pick" : "picks"}
        </span>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] lg:text-5xl">{category.name}</h1>
        <p className="max-w-[560px] text-base leading-relaxed text-fg-muted">{category.description}</p>
      </div>

      {visibleGroups.length > 0 && <SubNav links={visibleGroups.map(({ id, title }) => ({ id, title }))} />}

      <div id="catalog" className={anchorOffset}>
        {groups
          ? visibleGroups.map((g, i) => (
              <section
                key={g.id}
                id={g.id}
                aria-labelledby={`${g.id}-heading`}
                className={`${anchorOffset} ${i % 2 === 0 ? "bg-band" : ""}`}
              >
                <div className={`${container} flex flex-col gap-12 py-12 lg:py-14`}>
                  <h2 id={`${g.id}-heading`} className="text-2xl font-bold tracking-[-0.01em] lg:text-[26px]">
                    {g.title}
                  </h2>
                  {g.sections.map((s) => (
                    <SubSection key={s.id} id={s.id} title={s.title} description={s.description} products={s.products} />
                  ))}
                </div>
              </section>
            ))
          : products.length > 0 && (
              <section aria-label={`All ${category.name}`} className="bg-band">
                <div className={`${container} py-12 lg:py-14`}>
                  <ProductGrid products={products} />
                </div>
              </section>
            )}

        {products.length === 0 && (
          <div className={`${container} flex flex-col items-center gap-3 py-24 text-center`} role="status">
            <p className="text-lg font-bold">
              No {category.name} match “{query}”.
            </p>
            <p className="text-sm text-fg-muted">Try a different search.</p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-2 cursor-pointer rounded-control border border-border bg-surface px-4 py-2 text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function SubSection(props: { id: string; title: string; description: string; products: CatalogProduct[] }) {
  return (
    <div id={props.id} aria-labelledby={`${props.id}-heading`} role="region" className={`flex flex-col gap-5 ${anchorOffset}`}>
      <div>
        <h3 id={`${props.id}-heading`} className="mb-1 text-lg font-bold tracking-[-0.01em]">
          {props.title}
        </h3>
        <p className="text-sm text-fg-muted">{props.description}</p>
      </div>
      <ProductGrid products={props.products} />
    </div>
  );
}
