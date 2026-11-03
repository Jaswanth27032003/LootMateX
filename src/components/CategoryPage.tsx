"use client";

import Link from "next/link";
import { useState } from "react";
import type { SectionGroup } from "@/data/sections";
import type { CatalogCategory } from "@/lib/catalog";
import { hasTag, matchesQuery, queryTerms } from "@/lib/search";
import { BrandFilter } from "./BrandFilter";
import { useCatalog } from "./CatalogProvider";
import { CatalogToolbar, sortProducts, type CatalogSort } from "./CatalogToolbar";
import { ProductGrid } from "./ProductGrid";

type Props = { category: CatalogCategory; groups?: SectionGroup[] };

export function CategoryPage({ category, groups = [] }: Props) {
  const { query, setQuery } = useCatalog();
  const [sort, setSort] = useState<CatalogSort>("recommended");
  const [facets, setFacets] = useState<Record<string, string>>({});
  const [brand, setBrand] = useState(""); // "" = all brands
  const terms = queryTerms(query);
  // Lowercase for mid-sentence use, but keep acronyms like "GPUs" intact.
  const inlineName = /[A-Z]{2}/.test(category.name) ? category.name : category.name.toLowerCase();
  const availableGroups = groups.map((group) => ({
    ...group,
    sections: group.sections.filter((section) => category.products.some((product) => hasTag(product, section.tag, section.value))),
  })).filter((group) => group.sections.length > 0);
  const brandCounts = new Map<string, number>();
  for (const p of category.products) if (p.brand) brandCounts.set(p.brand, (brandCounts.get(p.brand) ?? 0) + 1);
  const brands = [...brandCounts].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  const selectedSections = availableGroups.flatMap((group) => group.sections.filter((section) => section.id === facets[`${category.id}:${group.id}`]));
  const products = sortProducts(category.products.filter((product) => matchesQuery(product, terms, category.name) && (!brand || product.brand === brand) && selectedSections.every((section) => hasTag(product, section.tag, section.value))), sort);
  const hasFilters = Boolean(query.trim()) || Boolean(brand) || selectedSections.length > 0 || sort !== "recommended";

  function clearFilters() {
    setQuery("");
    setFacets({});
    setBrand("");
    setSort("recommended");
  }

  return (
    <div className="site-container pb-20 pt-8 sm:pt-10">
      <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-fg-muted">
        <Link href="/" className="transition-colors hover:text-accent">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-fg">{category.name}</span>
      </nav>

      <header className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-10 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">The {inlineName} edit</p>
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[52px]">{category.name}</h1>
          <p className="mt-4 max-w-[560px] text-base leading-7 text-fg-muted">{category.description}</p>
        </div>
        <p className="text-sm text-fg-muted"><span className="font-semibold text-fg">{category.products.length}</span> {category.products.length === 1 ? "pick" : "picks"} in the collection</p>
      </header>

      {category.notice && (
        <aside aria-label={category.notice.title} className="mb-8 flex gap-4 rounded-2xl border border-accent/25 bg-accent/[0.06] p-5 sm:p-6">
          <span aria-hidden="true" className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
          </span>
          <div>
            {category.notice.eyebrow && <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">{category.notice.eyebrow}</p>}
            <h2 className="text-lg font-bold tracking-[-0.01em] sm:text-xl">{category.notice.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-fg-muted">{category.notice.body}</p>
          </div>
        </aside>
      )}

      {category.products.length > 0 ? (
        <section id="catalog" aria-label={`${category.name} collection`} className="scroll-mt-24">
          {availableGroups.length > 0 && (
            <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2 xl:grid-cols-4">
              {availableGroups.map((group) => (
                <label key={group.id} className="flex min-w-0 flex-col gap-2 text-xs font-semibold text-fg-muted">
                  {group.title.replace(/^By /, "")}
                  <select
                    value={facets[`${category.id}:${group.id}`] ?? ""}
                    onChange={(event) => setFacets((current) => ({ ...current, [`${category.id}:${group.id}`]: event.target.value }))}
                    className="h-11 w-full cursor-pointer rounded-lg border border-border bg-field px-3 text-[13px] font-medium text-fg outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
                  >
                    <option value="">All options</option>
                    {group.sections.map((section) => <option key={section.id} value={section.id}>{section.title.replace(/ Monitors$/, "")}</option>)}
                  </select>
                </label>
              ))}
            </div>
          )}

          {brands.length > 1 && <BrandFilter brands={brands} selected={brand} onSelect={setBrand} />}

          <CatalogToolbar count={products.length} sort={sort} onSortChange={setSort} hasFilters={hasFilters} onClear={clearFilters} placeholder={`Search ${inlineName}, brands or specs…`} />

          {(selectedSections.length > 0 || brand) && (
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Active filters">
              {brand && <span className="rounded-full bg-accent/8 px-3 py-1.5 text-xs font-medium text-accent">{brand}</span>}
              {selectedSections.map((section) => <span key={section.id} className="rounded-full bg-accent/8 px-3 py-1.5 text-xs font-medium text-accent">{section.title}</span>)}
            </div>
          )}

          <div className="mt-7">
            {products.length > 0 ? <ProductGrid products={products} /> : (
              <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
                <h2 className="text-xl font-semibold tracking-tight">No picks match those filters.</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-fg-muted">Try a different combination or clear the filters to explore every {inlineName} pick.</p>
                <button type="button" onClick={clearFilters} className="mt-6 cursor-pointer rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover">Clear filters</button>
              </div>
            )}
          </div>
          {products.length > 0 && <p className="mt-6 text-xs leading-6 text-fg-muted">Affiliate links may earn us a commission at no extra cost to you. Listed prices may change; check the retailer for current pricing and availability.</p>}
        </section>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-20 text-center">
          <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-accent/8 text-accent" aria-hidden="true">
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M3 8v9l9 5 9-5V8M12 13v9" /></svg>
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">This collection is taking shape.</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-fg-muted">There are no published {inlineName} picks yet. In the meantime, discover the gear already in our shortlist.</p>
          <Link href="/#catalog" onClick={clearFilters} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">Explore current picks <span aria-hidden="true">→</span></Link>
        </div>
      )}
    </div>
  );
}
