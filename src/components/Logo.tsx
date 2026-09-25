import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-fg" aria-label="LootMateX home">
      <span className="size-2.5 rounded-[3px] bg-accent" aria-hidden />
      <span className="text-xl font-extrabold tracking-[-0.02em]">LootMateX</span>
    </Link>
  );
}
