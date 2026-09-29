"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/products";
import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isActive = (id: string) => pathname === `/${id}` || pathname === `/${id}/`;

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { if (menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } if (searchOpen) { setSearchOpen(false); searchButton.current?.focus(); } } };
    const onPointer = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) { setMenuOpen(false); setSearchOpen(false); } };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    if (searchOpen) document.getElementById("site-search")?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [menuOpen, searchOpen]);

  return <header className="site-header" ref={headerRef}>
    <div className="site-container header-inner"><Logo />
      <nav className="desktop-nav" aria-label="Categories">{categories.map(c => <Link key={c.id} href={`/${c.id}`} aria-current={isActive(c.id) ? "page" : undefined}>{c.name}</Link>)}</nav>
      <div className="header-actions"><button ref={searchButton} type="button" className="icon-button" aria-label={searchOpen ? "Close product search" : "Open product search"} aria-expanded={searchOpen} aria-controls="header-search" onClick={() => { setSearchOpen(o => !o); setMenuOpen(false); }}><Icon name={searchOpen ? "close" : "search"} size={19} /></button><ThemeToggle /><button ref={menuButton} type="button" className="icon-button mobile-menu-button" aria-label={menuOpen ? "Close categories menu" : "Open categories menu"} aria-expanded={menuOpen} aria-controls="mobile-categories" onClick={() => { setMenuOpen(o => !o); setSearchOpen(false); }}><Icon name={menuOpen ? "close" : "menu"} size={20} /></button></div>
    </div>
    {searchOpen && <div id="header-search" className="header-search"><div className="site-container"><SearchInput /></div></div>}
    {menuOpen && <nav id="mobile-categories" aria-label="Mobile categories" className="mobile-nav"><div className="site-container"><Link href="/" onClick={() => setMenuOpen(false)}>All picks <Icon name="arrow-right" size={16} /></Link>{categories.map(c => <Link key={c.id} href={`/${c.id}`} aria-current={isActive(c.id) ? "page" : undefined} onClick={() => setMenuOpen(false)}>{c.name}<Icon name="arrow-right" size={16} /></Link>)}</div></nav>}
  </header>;
}
