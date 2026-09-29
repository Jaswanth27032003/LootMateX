import Link from "next/link";
import type { CatalogCategory } from "@/lib/catalog";
import { Icon, type IconName } from "./Icon";

const categoryIcons: Record<string, IconName> = { monitors: "monitor", laptops: "laptop", gpus: "gpu", desktops: "desktop", accessories: "gadgets", helmets: "helmet" };

export function CategoryDiscovery({ categories }: { categories: CatalogCategory[] }) {
  return <section className="category-discovery site-container" aria-labelledby="discover-title">
    <div className="section-kicker"><h2 id="discover-title">A better setup, piece by piece.</h2><span>FIND YOUR CATEGORY <Icon name="arrow-down" size={14} /></span></div>
    <div className="discovery-grid">{categories.map(c => <Link href={`/${c.id}`} key={c.id} className="discovery-item"><span className="discovery-icon"><Icon name={categoryIcons[c.id] ?? "gadgets"} size={25} /></span><span><strong>{c.name}</strong><small>{c.products.length ? `${c.products.length} curated picks` : "Coming soon"}</small></span><Icon name="arrow-up-right" size={16} className="discovery-arrow" /></Link>)}</div>
  </section>;
}

export function HowWePick() {
  return <section id="how-we-pick" className="how-section">
    <div className="site-container how-layout"><div className="how-intro"><span className="eyebrow">A LITTLE LESS GUESSWORK</span><h2>Good gear.<br />Clear choices.</h2><p>Finding your next upgrade should feel exciting. We put the useful details in one place so you can decide with confidence.</p></div>
      <div className="how-steps">{[
        { number: "01", title: "Find your fit", text: "Start with what you need: a smoother game, a more comfortable workspace, or an everyday upgrade.", icon: "search" as const },
        { number: "02", title: "Know the details", text: "See the specifications, useful benefits, and things to consider. Compare picks side by side before deciding.", icon: "compare" as const },
        { number: "03", title: "Check the current deal", text: "Head to the retailer for the latest price and availability. Our affiliate links may earn us a commission, at no extra cost to you.", icon: "arrow-up-right" as const },
      ].map(step => <div className="how-step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><Icon name={step.icon} size={21} /></div>)}</div>
    </div>
  </section>;
}
