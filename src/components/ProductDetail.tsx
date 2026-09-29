"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";
import { trackEvent } from "@/lib/analytics";
import { useCatalog } from "./CatalogProvider";
import { Icon } from "./Icon";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={diagonal ? "M7 17 17 7M7 7h10v10" : "M5 12h14m-6-6 6 6-6 6"} />
    </svg>
  );
}

function ProductGallery({ product }: { product: CatalogProduct }) {
  const images = Array.from(new Set([product.image, ...(product.gallery ?? [])]));
  const [selected, setSelected] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const imageId = useId();
  const showImage = product.hasImage && !failedImages.includes(images[selected]);

  return (
    <div className="min-w-0">
      <div id={imageId} className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[24px] border border-border bg-white sm:aspect-[4/3]">
        <div className="absolute left-5 top-5 z-10 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
          A closer look
        </div>
        {showImage ? (
          <Image
            key={images[selected]}
            src={images[selected]}
            alt={`${product.name}${selected ? ` — additional view ${selected}` : " — front view"}`}
            fill
            sizes="(min-width: 1280px) 650px, (min-width: 1024px) 53vw, 100vw"
            loading={selected === 0 ? "eager" : "lazy"}
            className="object-contain p-8 pt-16 sm:p-14"
            onError={() => setFailedImages((previous) => [...previous, images[selected]])}
          />
        ) : (
          <p className="px-8 text-center text-sm text-slate-500">Product image unavailable</p>
        )}
        <span className="absolute bottom-5 right-5 rounded-full bg-slate-100 px-3 py-1 font-mono text-[11px] text-slate-500" aria-live="polite" aria-atomic="true">
          {selected + 1} / {images.length}
        </span>
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3" role="group" aria-label="Product images">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show product image ${index + 1} of ${images.length}`}
              aria-pressed={selected === index}
              aria-controls={imageId}
              onClick={() => setSelected(index)}
              className={`relative h-20 w-24 cursor-pointer overflow-hidden rounded-xl border-2 bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${selected === index ? "border-accent" : "border-border hover:border-fg-muted"}`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-contain p-2" />
            </button>
          ))}
        </div>
      )}
      <p className="mt-4 text-xs leading-relaxed text-fg-muted">Product images are for reference. Confirm the exact model and finish with the retailer.</p>
    </div>
  );
}

export function ProductDetail({
  product,
  categoryName,
  related,
}: {
  product: CatalogProduct;
  categoryName: string;
  related: CatalogProduct[];
}) {
  const merchant = product.merchant ?? "retailer";
  const { comparedIds, toggleCompare } = useCatalog();
  const compared = comparedIds.includes(product.id);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -55% 0px" });
    ["overview", "specifications", "before-you-buy"].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [product.id]);

  function trackAffiliateClick() {
    trackEvent("view_deal_click", {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      product_price: product.price,
      link_url: product.affiliateUrl,
      placement: "product_detail",
    });
  }

  return (
    <article className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 sm:pb-24">
      <nav aria-label="Breadcrumb" className="py-6 text-xs text-fg-muted sm:py-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <li><Link href="/" className="transition-colors hover:text-accent">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/${product.category}`} className="transition-colors hover:text-accent">{categoryName}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-fg" aria-current="page">Product details</li>
        </ol>
      </nav>

      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <ProductGallery key={product.id} product={product} />
        <div className="lg:pt-3">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">{product.badge ?? categoryName}</p>
          <h1 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[40px]">{product.name}</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg-muted">{product.shortDescription}</p>
          <button type="button" onClick={() => toggleCompare(product.id)} aria-pressed={compared} disabled={!compared && comparedIds.length >= 3} className="mt-4 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-accent"><Icon name={compared ? "check" : "compare"} size={16} />{compared ? "Added to comparison" : "Compare this pick"}</button>

          <div className="my-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-6">
            {product.keySpecs.slice(0, 4).map((spec) => (
              <div key={spec.label}>
                <p className="mb-1.5 text-[11px] uppercase tracking-wider text-fg-muted">{spec.label}</p>
                <p className="text-sm font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-border bg-surface p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="mb-1 text-xs text-fg-muted">Listed price</p>
                <p className="text-[34px] font-semibold leading-none tracking-tight">{product.price}</p>
              </div>
              <span className="pb-1 text-sm text-fg-muted">at {merchant}</span>
            </div>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel={product.rel}
              onClick={trackAffiliateClick}
              className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Check price on {merchant} <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="mt-3 text-[11px] leading-relaxed text-fg-muted">Price and availability may change. Check the retailer for the current price, delivery, and returns.</p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-fg-muted">
            <span className="font-semibold text-fg">Affiliate link.</span> We may earn a commission if you buy through this link, at no extra cost to you.
          </p>
        </div>
      </div>

      <nav aria-label="Product information" className="mt-12 flex gap-7 overflow-x-auto border-b border-border text-sm font-medium sm:mt-16">
        {[{ id: "overview", title: "At a glance" }, { id: "specifications", title: "Specifications" }, { id: "before-you-buy", title: "Before you buy" }].map(section => <a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} aria-current={activeSection === section.id ? "location" : undefined} className={`shrink-0 border-b-2 pb-4 transition-colors hover:text-accent ${activeSection === section.id ? "border-accent text-fg" : "border-transparent text-fg-muted"}`}>{section.title}</a>)}
      </nav>

      <section id="overview" aria-labelledby="overview-title" className="scroll-mt-28 py-10 sm:py-12">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">The useful details</p>
            <h2 id="overview-title" className="text-2xl font-semibold tracking-tight">Is it right for your setup?</h2>
          </div>
          {product.bestFor && <p className="max-w-sm text-sm leading-relaxed text-fg-muted">{product.bestFor}</p>}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[20px] border border-border bg-surface p-6 sm:p-8">
            <h3 className="mb-5 text-base font-semibold">What stands out</h3>
            <ul className="space-y-4">
              {(product.benefits ?? [product.shortDescription]).map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                  <svg className="mt-1 size-4 shrink-0 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m4 10 4 4 8-8" /></svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-border bg-band p-6 sm:p-8">
            <h3 className="mb-5 text-base font-semibold">Worth considering</h3>
            <ul className="space-y-4">
              {(product.considerations ?? ["Check the retailer for compatibility, warranty, and the latest specifications."]).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-fg-muted" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-fg-muted">These notes interpret the listed specifications. They are not based on hands-on testing by LootMateX.</p>
      </section>

      <div className="grid gap-10 border-t border-border pt-10 sm:pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <section id="specifications" aria-labelledby="specifications-title" className="scroll-mt-28">
          <h2 id="specifications-title" className="mb-6 text-2xl font-semibold tracking-tight">The specs, clearly.</h2>
          <dl className="overflow-hidden rounded-[20px] border border-border bg-surface">
            {product.keySpecs.map((spec, index) => (
              <div key={spec.label} className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4 px-5 py-4 text-sm ${index ? "border-t border-border" : ""}`}>
                <dt className="text-fg-muted">{spec.label}</dt>
                <dd className="text-right font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="before-you-buy" aria-labelledby="before-buy-title" className="scroll-mt-28">
          <h2 id="before-buy-title" className="mb-6 text-2xl font-semibold tracking-tight">Before you buy</h2>
          <div className="divide-y divide-border border-y border-border">
            <details className="group py-4" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-sm font-semibold [&::-webkit-details-marker]:hidden">What should I check with the retailer?<span aria-hidden="true" className="text-xl font-normal group-open:rotate-45">+</span></summary>
              <p className="pr-6 pt-3 text-sm leading-relaxed text-fg-muted">Match the exact model, confirm the ports work with your setup, and review the warranty and return policy. The retailer sets the final price and availability.</p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-sm font-semibold [&::-webkit-details-marker]:hidden">How do affiliate links work?<span aria-hidden="true" className="text-xl font-normal group-open:rotate-45">+</span></summary>
              <p className="pr-6 pt-3 text-sm leading-relaxed text-fg-muted">Our link takes you to {merchant}, where you can check the latest listing and make your purchase. LootMateX may receive a commission from qualifying purchases at no extra cost to you.</p>
            </details>
          </div>
        </section>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="mt-14 border-t border-border pt-10 sm:mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 id="related-title" className="text-2xl font-semibold tracking-tight">Also on your radar</h2>
            <Link href={`/${product.category}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent">Explore {categoryName.toLowerCase()} <Arrow /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`} className="group flex min-w-0 items-center gap-4 rounded-[20px] border border-border bg-surface p-4 transition-colors hover:border-accent sm:p-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-white sm:w-28">
                  {item.hasImage && <Image src={item.image} alt="" fill sizes="112px" className="object-contain p-2" />}
                </div>
                <div className="min-w-0">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent">{item.badge ?? categoryName}</p>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-accent">{item.name}</h3>
                  <p className="mt-2 text-sm text-fg-muted">Listed at <span className="font-semibold text-fg">{item.price}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
