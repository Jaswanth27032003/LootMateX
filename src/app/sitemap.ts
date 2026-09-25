import type { MetadataRoute } from "next";
import { categories } from "@/data/products";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...categories.map((c) => ({
      url: `${site.url}/${c.id}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
