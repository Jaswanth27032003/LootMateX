import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-20">
        <div className="flex max-w-[640px] flex-col gap-1.5">
          <div className="text-[13px] font-bold">{site.name}</div>
          <p className="text-xs leading-relaxed text-fg-faint">
            This site contains affiliate links. We may earn a commission on qualifying purchases, at no extra cost to
            you.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={site.xUrl}
            target="_blank"
            rel="noopener"
            aria-label={`${site.name} on X`}
            className="flex size-9 items-center justify-center rounded-control border border-border text-nav transition-colors hover:text-accent"
          >
            <svg className="size-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5-5.7 6.5H2.9l8.1-9.3L2 2h6.6l4.5 6 5.8-6zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20z" />
            </svg>
          </a>
          <span className="text-xs text-fg-faint">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
