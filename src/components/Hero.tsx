"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CatalogProduct } from "@/lib/catalog";
import { Icon } from "./Icon";

export function Hero({ products }: { products: CatalogProduct[] }) {
  const [selected, setSelected] = useState(0);
  const product = products[selected];
  if (!product) return null;
  const titles = ["A wider world.\nA better setup.", "Room to focus.\nSpace to create.", "A fresh curve.\nAn everyday upgrade."];

  return <section className="hero-section">
    <div className="site-container hero-layout">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> GOOD TECH. GREAT FINDS.</span>
        <h1>Your next<br />upgrade starts <span className="hero-italic">here.</span></h1>
        <p>Less searching. Better gear. Explore hand-picked tech, get to know the details, and find what fits your setup.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#catalog">Explore the picks <Icon name="arrow-right" size={18} /></a>
          <a className="text-link" href="#how-we-pick">How we pick <span aria-hidden>↗</span></a>
        </div>
        <div className="hero-footnote"><span className="mini-icon"><Icon name="check" size={15} /></span> Curated finds <span className="footnote-dot">·</span> Details that matter</div>
      </div>
      <div className="hero-showcase">
        <div className="showcase-top"><span><Icon name="sparkle" size={14} /> IN THE SPOTLIGHT</span><span className="showcase-number">0{selected + 1} / 0{products.length}</span></div>
        <div className="showcase-heading">{(titles[selected] ?? product.name).split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</div>
        <Link href={`/products/${product.id}`} className="showcase-image" aria-label={`Explore ${product.name}`}>
          <div className="showcase-orbit" aria-hidden />
          <Image key={product.id} src={product.image} alt={product.name} width={600} height={350} loading={selected === 0 ? "eager" : "lazy"} className="spotlight-image" sizes="(min-width: 1024px) 540px, 90vw" />
          <span className="showcase-image-link"><Icon name="arrow-up-right" size={20} /></span>
        </Link>
        <div className="showcase-bottom">
          <div><span className="showcase-product-name">{product.name.split(' 34"')[0].split(' 27"')[0]}</span><span className="showcase-product-spec">{product.keySpecs.find(s => s.label === "Refresh Rate")?.value} <span>·</span> {product.keySpecs.find(s => s.label === "Panel Type")?.value} panel</span></div>
          <div className="showcase-dots" role="group" aria-label="Featured products">{products.map((p, i) => <button key={p.id} type="button" onClick={() => setSelected(i)} aria-label={`Feature ${p.name}`} aria-pressed={selected === i}><span /></button>)}</div>
        </div>
      </div>
    </div>
  </section>;
}
