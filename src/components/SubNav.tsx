"use client";

import { useEffect, useState } from "react";

type Props = { links: { id: string; title: string }[] };

/** Sticky jump-links under the header; highlights the group currently in view. */
export function SubNav({ links }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const key = links.map((l) => l.id).join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return (
    <nav
      aria-label="Jump to section"
      // Sits directly under the fixed-height header (h-16 / lg:h-20).
      className="sticky top-16 z-30 border-b border-border bg-surface lg:top-20"
    >
      <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-8 lg:px-20">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            aria-current={active === l.id ? "true" : undefined}
            className="shrink-0 rounded-control border border-border bg-surface px-3.5 py-2 text-[13px] font-medium text-nav transition-colors hover:text-fg aria-[current]:border-accent aria-[current]:bg-accent aria-[current]:text-white"
          >
            {l.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
