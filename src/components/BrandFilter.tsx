import { brandLogo } from "@/lib/brand-logos";

type Props = {
  brands: { name: string; count: number }[];
  selected: string; // "" = all brands
  onSelect: (brand: string) => void;
};

const base =
  "inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-xl border px-4 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";
const idle = "border-border bg-surface text-fg hover:border-accent/60 hover:text-accent";
const active = "border-accent bg-accent text-white";

/** A row of brand buttons with logos, plus "All". Logos use currentColor so they follow the theme. */
export function BrandFilter({ brands, selected, onSelect }: Props) {
  const total = brands.reduce((sum, b) => sum + b.count, 0);
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold text-fg-muted">Brand</p>
      <div role="group" aria-label="Filter by brand" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
        <button type="button" aria-pressed={selected === ""} onClick={() => onSelect("")} className={`${base} ${selected === "" ? active : idle}`}>
          All <span className="text-[11px] font-medium opacity-70">{total}</span>
        </button>
        {brands.map(({ name, count }) => {
          const logo = brandLogo(name);
          const isActive = selected === name;
          return (
            <button key={name} type="button" aria-pressed={isActive} onClick={() => onSelect(isActive ? "" : name)} className={`${base} ${isActive ? active : idle}`}>
              {logo && (
                <svg aria-hidden="true" viewBox={logo.viewBox} className={logo.wordmark ? "h-3 w-auto" : "size-4"} fill="currentColor">
                  <path d={logo.path} />
                </svg>
              )}
              <span className={logo?.wordmark ? "sr-only" : undefined}>{name}</span>
              <span className="text-[11px] font-medium opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
