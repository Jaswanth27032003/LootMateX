import { categories } from "@/data/products";
import { Catalog } from "@/components/Catalog";
import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import { buildCatalog } from "@/lib/catalog";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Catalog categories={buildCatalog(categories)} />
    </SiteShell>
  );
}
