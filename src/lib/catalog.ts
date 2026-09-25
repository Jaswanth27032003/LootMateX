import { existsSync } from "node:fs";
import path from "node:path";
import type { Category, Product } from "@/data/products";

export type CatalogProduct = Product & { hasImage: boolean };
export type CatalogCategory = Omit<Category, "products"> & { products: CatalogProduct[] };

/** True for remote URLs, or local /public paths whose file actually exists. */
function imageExists(src: string) {
  if (/^https?:\/\//.test(src)) return true;
  return existsSync(path.join(process.cwd(), "public", src));
}

/**
 * Server-only: marks which products have their image file in place, so cards
 * can show a neutral placeholder instead of a broken image. Runs at build time
 * (and on each request in dev, so newly added images show up on refresh).
 */
export function buildCatalog(categories: Category[]): CatalogCategory[] {
  return categories.map((c) => ({
    ...c,
    products: c.products.map((p) => {
      if (p.category !== c.id) {
        throw new Error(`Product "${p.id}" has category "${p.category}" but is listed under "${c.id}" in data/products.ts`);
      }
      return { ...p, hasImage: imageExists(p.image) };
    }),
  }));
}
