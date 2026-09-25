import Link from "next/link";
import type { CatalogCategory } from "@/lib/catalog";
import { ProductGrid } from "./ProductGrid";

type Props = {
  category: CatalogCategory;
  /** Alternate sections sit on a subtle off-tone band. */
  banded?: boolean;
};

export function CategorySection({ category, banded = false }: Props) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className={`scroll-mt-20 lg:scroll-mt-24 ${banded ? "bg-band" : ""}`}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 py-12 sm:px-8 lg:px-20 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <div>
            <h2 id={`${category.id}-heading`} className="mb-1 text-2xl font-bold tracking-[-0.01em] lg:text-[26px]">
              {category.name}
            </h2>
            <p className="text-sm text-fg-muted">{category.description}</p>
          </div>
          <Link href={`/${category.id}`} className="text-sm font-semibold text-accent hover:text-accent-hover">
            View all {category.name} →
          </Link>
        </div>
        <ProductGrid products={category.products} />
      </div>
    </section>
  );
}
