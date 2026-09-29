import { categories } from "@/data/products";
import { Catalog } from "@/components/Catalog";
import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import { CategoryDiscovery, HowWePick } from "@/components/HomeSections";
import { buildCatalog } from "@/lib/catalog";

export default function Home() {
  const catalog = buildCatalog(categories);
  return <SiteShell>
    <Hero products={catalog.flatMap(c => c.products).slice(0, 3)} />
    <CategoryDiscovery categories={catalog} />
    <Catalog categories={catalog} />
    <HowWePick />
  </SiteShell>;
}
