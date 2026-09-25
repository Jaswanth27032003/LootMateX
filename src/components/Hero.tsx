import { categories } from "@/data/products";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-4 pb-16 pt-16 text-center sm:px-8 sm:pt-20 lg:px-20 lg:pb-20 lg:pt-24">
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Trending tech, curated daily</span>
      <h1 className="max-w-[760px] text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[56px]">
        The best tech gear, hand-picked for you.
      </h1>
      <p className="max-w-[560px] text-base leading-relaxed text-fg-muted sm:text-[17px]">
        Monitors, laptops, GPUs, accessories and helmets — the trending picks actually worth buying, updated every week.
      </p>
      <a
        href={`#${categories[0]?.id ?? ""}`}
        className="mt-3 inline-flex items-center gap-2 rounded-control bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Browse the picks
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </section>
  );
}
