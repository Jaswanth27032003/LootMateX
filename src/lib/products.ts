import type { Product } from "@/data/products";

/** Shared by browser and build code. Draft examples must never become live offers. */
export function isPublishedProduct(product: Pick<Product, "id" | "affiliateUrl">): boolean {
  if (product.id.toLowerCase().startsWith("placeholder-")) return false;
  try {
    const url = new URL(product.affiliateUrl);
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      url.hostname !== "example.com" &&
      !url.hostname.endsWith(".example.com")
    );
  } catch {
    return false;
  }
}
