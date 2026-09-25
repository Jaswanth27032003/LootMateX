"use client";

import { useCatalog } from "./CatalogProvider";

export function SearchInput() {
  const { query, setQuery } = useCatalog();

  function onChange(value: string) {
    // When a search starts, bring the results into view.
    if (!query && value) document.getElementById("catalog")?.scrollIntoView({ block: "start" });
    setQuery(value);
  }

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="flex min-w-0 flex-1 items-center gap-2 rounded-control border border-border bg-field px-3.5 py-[9px] transition-colors focus-within:border-accent lg:w-60 lg:flex-none"
    >
      <svg className="size-4 shrink-0 text-fg-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        autoComplete="off"
        className="w-full min-w-0 bg-transparent text-[13px] text-fg outline-none placeholder:text-fg-faint [&::-webkit-search-cancel-button]:hidden"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          aria-label="Clear search"
          className="shrink-0 cursor-pointer text-fg-faint hover:text-fg"
        >
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </form>
  );
}
