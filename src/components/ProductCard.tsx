"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { CatalogProduct } from "@/lib/catalog";

/** How many specs appear as chips on the card. */
const CHIP_COUNT = 3;

/**
 * Specs appear as an overlay on top of the card, so the card never changes size:
 * - mouse: on hover (Tailwind's hover variants only apply on hover-capable devices)
 * - touch: the (i) button toggles it; tapping outside the card closes it
 * - keyboard: while a control inside the card has visible focus
 * "View Deal" sits above the overlay and stays clickable throughout.
 */
export function ProductCard({ product }: { product: CatalogProduct }) {
  const [specsOpen, setSpecsOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const overlayId = useId();
  const showImage = product.hasImage && !imageFailed;
  const hasSpecs = product.keySpecs.length > 0;

  // While pinned open (touch), close on a tap outside the card or on Escape.
  useEffect(() => {
    if (!specsOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!cardRef.current?.contains(e.target as Node)) setSpecsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setSpecsOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [specsOpen]);

  return (
    <article
      ref={cardRef}
      data-open={specsOpen || undefined}
      className="group relative flex flex-col gap-3 rounded-card border border-border bg-surface p-4 transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-control lg:aspect-auto lg:h-[150px] ${
          // Product shots are on white, so the well stays white in both themes.
          showImage ? "bg-white" : "bg-media"
        }`}
      >
        {showImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-2"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 text-fg-faint" aria-hidden>
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[0.06em]">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug">{product.name}</h3>
        <p className="line-clamp-2 text-[13px] leading-snug text-fg-muted">{product.shortDescription}</p>
      </div>

      {hasSpecs && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Highlights">
          {product.keySpecs.slice(0, CHIP_COUNT).map((spec) => (
            <li
              key={spec.label}
              title={spec.label}
              className="rounded-md border border-border bg-field px-2 py-1 text-[11px] font-medium leading-none text-fg-muted"
            >
              {spec.value}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col gap-3 pt-1">
        <span className="text-base font-extrabold">{product.price}</span>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel={product.rel}
          onClick={() =>
            trackEvent("view_deal_click", {
              product_id: product.id,
              product_name: product.name,
              product_category: product.category,
              product_price: product.price,
              link_url: product.affiliateUrl,
            })
          }
          className="relative z-20 block rounded-control bg-deal py-2.5 text-center text-[13px] font-semibold text-deal-fg transition-colors hover:bg-accent hover:text-white group-hover:bg-accent group-hover:text-white group-data-open:bg-accent group-data-open:text-white"
        >
          View Deal<span className="sr-only"> for {product.name} (opens in a new tab)</span>
        </a>
      </div>

      {hasSpecs && (
        <>
          {/* Covers the card; bottom padding leaves the View Deal button uncovered. */}
          <div
            id={overlayId}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col overflow-hidden rounded-card bg-black/90 p-4 pb-16 backdrop-blur-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-has-focus-visible:opacity-100 group-data-open:opacity-100"
          >
            <p className="mb-2 pr-10 text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">Key specs</p>
            <dl className="divide-y divide-white/10 text-[13px]">
              {product.keySpecs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between gap-3 py-2">
                  <dt className="text-white/65">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Touch devices have no hover, so they get a tap target instead. */}
          <button
            type="button"
            onClick={() => setSpecsOpen((o) => !o)}
            aria-expanded={specsOpen}
            aria-controls={overlayId}
            aria-label={specsOpen ? "Hide specs" : "Show specs"}
            className="absolute right-6 top-6 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-surface/90 text-nav shadow-sm transition-colors group-data-open:border-white/20 group-data-open:bg-white/15 group-data-open:text-white [@media(hover:hover)]:hidden"
          >
            {specsOpen ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            )}
          </button>
        </>
      )}
    </article>
  );
}
