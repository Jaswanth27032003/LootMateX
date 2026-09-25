"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/data/products";
import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";

// The header has a fixed height (h-16 / lg:h-20); SubNav sticks directly below it.
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (id: string) => pathname === `/${id}` || pathname === `/${id}/`;

  // Close the mobile menu after navigating.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-surface lg:h-20">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8 lg:px-20">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label="Categories" className="hidden items-center gap-7 lg:flex">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/${c.id}`}
                aria-current={isActive(c.id) ? "page" : undefined}
                className="px-1 py-2 text-sm font-medium text-nav transition-colors hover:text-fg aria-[current]:text-accent"
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4 lg:flex-none">
          <SearchInput />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-categories"
            aria-label={menuOpen ? "Close categories menu" : "Open categories menu"}
            className="flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-control border border-border bg-surface text-nav hover:text-fg lg:hidden"
          >
            <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-categories" aria-label="Categories" className="border-b border-border bg-surface shadow-card lg:hidden">
          <ul className="mx-auto flex max-w-[1440px] flex-col px-4 py-2 sm:px-8">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/${c.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(c.id) ? "page" : undefined}
                  className="block rounded-control px-3 py-3 text-[15px] font-medium text-fg hover:bg-field aria-[current]:text-accent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
