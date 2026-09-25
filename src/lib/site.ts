// Site-wide settings. Only used by server components and build-time routes
// (metadata, sitemap, robots), so non-public env vars are safe to read here.

/**
 * Public URL used for canonical links, Open Graph and the sitemap:
 * 1. NEXT_PUBLIC_SITE_URL if set (use this once you have a custom domain),
 * 2. else, on Vercel, the project's production domain (set automatically at build),
 * 3. else a local fallback.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "LootMateX",
  title: "LootMateX — The best tech gear, hand-picked for you",
  description:
    "Monitors, laptops, GPUs, accessories and helmets — the trending picks actually worth buying, updated every week.",
  url: resolveSiteUrl().replace(/\/$/, ""),
  twitterHandle: "@lootmatex",
  xUrl: "https://x.com/lootmatex",
};
