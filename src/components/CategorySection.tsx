import Link from "next/link";
import type { CatalogCategory } from "@/lib/catalog";
import { ProductGrid } from "./ProductGrid";

export function CategorySection({ category }: { category: CatalogCategory }) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-24 pt-9 lg:pt-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <h3 id={`${category.id}-heading`} className="mb-1 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">{category.name}</h3>
          <p className="text-sm leading-6 text-fg-muted">{category.description}</p>
        </div>
        <Link href={`/${category.id}`} className="group inline-flex items-center gap-2 py-2 text-[13px] font-semibold text-accent hover:text-accent-hover">
          Explore {category.name.toLowerCase()} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
        </Link>
      </div>
      <ProductGrid products={category.products} />
    </section>
  );
}
