import type { CatalogProduct } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: CatalogProduct[] }) {
  return (
    // Cards in a row share one height (specs open as an overlay, so nothing ever grows).
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
