import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-main"><div className="footer-brand"><Logo /><p>A little discovery.<br />A better everyday setup.</p></div><div className="footer-nav"><span>KEEP EXPLORING</span><Link href="/#catalog">Browse the picks</Link><Link href="/#how-we-pick">How we pick</Link><a href={site.xUrl} target="_blank" rel="noopener noreferrer">Find us on X <Icon name="arrow-up-right" size={14} /><span className="sr-only"> (opens in a new tab)</span></a></div><div className="footer-disclosure" id="affiliate-disclosure"><span>ALWAYS TRANSPARENT</span><p>This site contains affiliate links. We may earn a commission on qualifying purchases, at no extra cost to you.</p><p>Listed prices may change. Check the retailer for current pricing and availability.</p></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. Curated with curiosity.</span><a href="#main-content">Back to top <Icon name="arrow-up-right" size={14} /></a></div>
  </div></footer>;
}
