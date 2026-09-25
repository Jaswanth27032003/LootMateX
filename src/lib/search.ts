import type { Product, ProductTags } from "@/data/products";

export function queryTerms(query: string) {
  return query.toLowerCase().split(/\s+/).filter(Boolean);
}

/** Every term must appear in the product's name, description, specs, or category name. */
export function matchesQuery(product: Product, terms: string[], categoryName: string) {
  if (!terms.length) return true;
  const specs = product.keySpecs.map((s) => s.value).join(" ");
  const haystack = `${product.name} ${product.shortDescription} ${specs} ${categoryName}`.toLowerCase();
  return terms.every((t) => haystack.includes(t));
}

/** True when the product's tag equals `value`, or contains it when the tag is a list. */
export function hasTag(product: Product, tag: keyof ProductTags, value: string) {
  const v = product.tags[tag];
  return Array.isArray(v) ? (v as string[]).includes(value) : v === value;
}

/**
 * Homepage: categories (and products within them) matching the active
 * category filter and search query; empty categories are dropped.
 */
export function filterCatalog<P extends Product, C extends { id: string; name: string; products: P[] }>(
  categories: C[],
  query: string,
  activeCategory: string,
): C[] {
  const terms = queryTerms(query);
  return categories
    .filter((c) => activeCategory === "all" || c.id === activeCategory)
    .map((c) => ({ ...c, products: c.products.filter((p) => matchesQuery(p, terms, c.name)) }))
    .filter((c) => c.products.length > 0);
}
