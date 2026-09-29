"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { categories } from "@/data/products";
import { useCatalog } from "./CatalogProvider";
import { Icon } from "./Icon";

export function CompareTray() {
  const { comparedIds, toggleCompare, clearComparison, compareOpen, setCompareOpen } = useCatalog();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const compareButton = useRef<HTMLButtonElement>(null);
  const products = categories.flatMap(c => c.products).filter(p => comparedIds.includes(p.id));
  const specLabels = [...new Set(products.flatMap(p => p.keySpecs.map(s => s.label)))];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (compareOpen && products.length >= 2) dialog?.showModal();
    else dialog?.close();
  }, [compareOpen, products.length]);
  useEffect(() => {
    if (!compareOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [compareOpen]);

  return <>
    {products.length > 0 && <aside className="compare-tray" aria-label="Product comparison">
      <div className="compare-tray-label"><Icon name="compare" /><div><strong>Compare your picks</strong><span role="status">{products.length} of 3 selected{products.length < 2 ? " · Add one more" : ""}</span></div></div>
      <div className="compare-mini-products">{products.map(p => <button key={p.id} type="button" onClick={() => toggleCompare(p.id)} aria-label={`Remove ${p.name} from comparison`}><Image src={p.image} alt="" width={44} height={32} /><Icon name="close" size={12} /></button>)}</div>
      <button ref={compareButton} type="button" className="button-primary" disabled={products.length < 2} onClick={() => setCompareOpen(true)}>Compare <span className="hidden sm:inline">picks</span><Icon name="arrow-right" size={16} /></button>
      <button type="button" className="icon-button" onClick={clearComparison} aria-label="Clear comparison"><Icon name="close" size={18} /></button>
    </aside>}
    <dialog ref={dialogRef} className="compare-dialog" aria-labelledby="compare-title" onCancel={() => setCompareOpen(false)} onClose={() => { setCompareOpen(false); compareButton.current?.focus(); }} onClick={e => { if (e.target === e.currentTarget) { const box = e.currentTarget.getBoundingClientRect(); if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) setCompareOpen(false); } }}>
      <div className="compare-dialog-top"><div><span className="eyebrow">THE DETAILS, SIDE BY SIDE</span><h2 id="compare-title">Find your better fit.</h2></div><button type="button" className="icon-button" onClick={() => setCompareOpen(false)} aria-label="Close comparison" autoFocus><Icon name="close" /></button></div>
      <div className="comparison-scroll" tabIndex={0} role="region" aria-label="Product specifications comparison; scroll horizontally to see all products"><table className="comparison-table"><caption className="sr-only">Specifications of your selected products</caption>
        <thead><tr><th scope="col">Your shortlist</th>{products.map(p => <th key={p.id} scope="col"><div className="comparison-image"><Image src={p.image} alt="" width={180} height={110} /></div><Link href={`/products/${p.id}`} onClick={() => setCompareOpen(false)}>{p.name}<Icon name="arrow-up-right" size={15} /></Link></th>)}</tr></thead>
        <tbody><tr><th scope="row">Listed price</th>{products.map(p => <td key={p.id} className="comparison-price">{p.price}</td>)}</tr>
          {specLabels.map(label => <tr key={label}><th scope="row">{label}</th>{products.map(p => <td key={p.id}>{p.keySpecs.find(s => s.label === label)?.value ?? "Not listed"}</td>)}</tr>)}
          <tr><th scope="row">Things to consider</th>{products.map(p => <td key={p.id}>{p.considerations?.[0] ?? "Check the retailer for full specifications."}</td>)}</tr>
        </tbody>
      </table></div>
      <p className="comparison-note">Prices are from our listings and may change. Check the retailer for current price, availability, and full specifications.</p>
    </dialog>
  </>;
}
