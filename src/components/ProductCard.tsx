"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { CatalogProduct } from "@/lib/catalog";
import { useCatalog } from "./CatalogProvider";
import { Icon } from "./Icon";

export function ProductCard({ product }: { product: CatalogProduct }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { comparedIds, toggleCompare } = useCatalog();
  const compared = comparedIds.includes(product.id);
  const specs = [product.keySpecs.find(s => s.label === "Screen Size"), product.keySpecs.find(s => s.label === "Refresh Rate"), product.keySpecs.find(s => s.label === "Panel Type")].filter(s => s !== undefined);
  const highlights = specs.length === 3 ? specs : product.keySpecs.slice(0, 3);
  return <article className="product-card">
    <div className="product-media">
      <div className="product-card-top"><span className="product-badge">{product.badge ?? "On the shortlist"}</span><button type="button" className="product-compare" aria-label={`${compared ? "Remove" : "Add"} ${product.name} ${compared ? "from" : "to"} comparison`} aria-pressed={compared} disabled={!compared && comparedIds.length >= 3} onClick={() => toggleCompare(product.id)} title={compared ? "Remove from comparison" : "Compare this product"}><Icon name={compared ? "check" : "plus"} size={18} /></button></div>
      <Link href={`/products/${product.id}`} className="product-image-link" aria-label={`View details for ${product.name}`}>{product.hasImage && !imageFailed ? <Image src={product.image} alt={product.name} fill loading="lazy" sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw" className="product-image" onError={() => setImageFailed(true)} /> : <span className="product-image-fallback"><Icon name="monitor" size={44} />Image coming soon</span>}</Link>
    </div>
    <div className="product-body">
      <span className="product-purpose">{product.bestFor ?? product.keySpecs.find(s => s.label === "Best For")?.value ?? "Explore this pick"}</span>
      <h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3>
      <p className="product-description">{product.shortDescription}</p>
      <dl className="product-specs">{highlights.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
      <div className="product-price-row"><div><span className="price-label">Listed price</span><strong>{product.price}</strong></div><a className="product-shop-link" href={product.affiliateUrl} target="_blank" rel={product.rel} onClick={() => trackEvent("view_deal_click", { product_id: product.id, product_name: product.name, product_category: product.category, product_price: product.price, link_url: product.affiliateUrl })}>View deal <Icon name="arrow-up-right" size={16} /><span className="sr-only"> for {product.name}, affiliate link, opens in a new tab</span></a></div>
      <Link href={`/products/${product.id}`} className="product-details-link">Take a closer look <Icon name="arrow-right" size={16} /><span className="sr-only"> at {product.name}</span></Link>
    </div>
  </article>;
}
