import Link from "next/link";

export function Logo() {
  return <Link href="/" className="site-logo" aria-label="LootMateX home"><span className="logo-mark" aria-hidden><svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="m10 1-8 11h6l-1 7 9-11h-6l1-7Z" fill="currentColor" /></svg></span><span>LootMate<span className="text-accent">X</span></span></Link>;
}
