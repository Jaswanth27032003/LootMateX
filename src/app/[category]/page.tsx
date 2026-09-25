import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/products";
import { categorySections } from "@/data/sections";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteShell } from "@/components/SiteShell";
import { buildCatalog } from "@/lib/catalog";
import { site } from "@/lib/site";

type Params = { category: string };

// One static page per category in data/products.ts; any other path is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.id }));
}

function findCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const category = findCategory((await params).category);
  if (!category) return {};
  const title = `${category.name} — ${site.name}`;
  // The root opengraph-image.png isn't inherited by this dynamic route, so reference it directly.
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.title }];
  return {
    title,
    description: category.description,
    alternates: { canonical: `/${category.id}` },
    openGraph: { type: "website", url: `/${category.id}`, siteName: site.name, title, description: category.description, images },
    twitter: { card: "summary_large_image", site: site.twitterHandle, title, description: category.description, images },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const category = findCategory((await params).category);
  if (!category) notFound();

  const [catalogCategory] = buildCatalog([category]);
  return (
    <SiteShell>
      <CategoryPage category={catalogCategory} groups={categorySections[category.id]} />
    </SiteShell>
  );
}
