import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/products";
import { ProductDetail } from "@/components/ProductDetail";
import { SiteShell } from "@/components/SiteShell";
import { buildCatalog } from "@/lib/catalog";
import { isPublishedProduct } from "@/lib/products";
import { site } from "@/lib/site";

type Params = { product: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return categories.flatMap((category) =>
    category.products.filter(isPublishedProduct).map((product) => ({ product: product.id })),
  );
}

function findProduct(id: string) {
  return categories.flatMap((category) => category.products).find((product) => product.id === id && isPublishedProduct(product));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const product = findProduct((await params).product);
  if (!product) return {};
  const title = `${product.name} — ${site.name}`;
  const description = `${product.shortDescription} Explore the key specs, practical considerations, and retailer link on ${site.name}.`;
  const url = `/products/${product.id}`;
  const images = [{ url: product.image, alt: product.name }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: site.name, images },
    twitter: { card: "summary_large_image", site: site.twitterHandle, title, description, images },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const id = (await params).product;
  const category = buildCatalog(categories).find((item) => item.products.some((product) => product.id === id));
  const product = category?.products.find((item) => item.id === id);
  if (!category || !product) notFound();

  // Prices are not live-verified, so omit offers, availability, and review ratings.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${site.url}/products/${product.id}#product`,
        name: product.name,
        description: product.shortDescription,
        image: [product.image, ...(product.gallery ?? [])].map((src) => new URL(src, site.url).href),
        category: category.name,
        url: `${site.url}/products/${product.id}`,
        additionalProperty: product.keySpecs.map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: category.name, item: `${site.url}/${category.id}` },
          { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/products/${product.id}` },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <ProductDetail product={product} categoryName={category.name} related={category.products.filter((item) => item.id !== product.id).slice(0, 2)} />
    </SiteShell>
  );
}
