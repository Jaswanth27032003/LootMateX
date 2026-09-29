"use client";

import { useRouter } from "next/navigation";
import { useCatalog } from "./CatalogProvider";
import { Icon } from "./Icon";

export function SearchInput() {
  const { query, setQuery } = useCatalog();
  const router = useRouter();
  return <form role="search" className="header-search-form" onSubmit={e => { e.preventDefault(); const catalog = document.getElementById("catalog"); if (catalog) catalog.scrollIntoView({ block: "start" }); else router.push(`/?q=${encodeURIComponent(query)}#catalog`); }}>
    <Icon name="search" size={20} /><label htmlFor="site-search" className="sr-only">Search products</label>
    <input id="site-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search a product, spec, or category…" autoComplete="off" />
    {query && <button type="button" className="icon-button" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" size={16} /></button>}
    <button type="submit" className="button-primary">Search <Icon name="arrow-right" size={16} /></button>
  </form>;
}
