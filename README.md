# LootMateX

Affiliate tech-picks site built with Next.js (App Router), TypeScript and Tailwind CSS. It builds to a fully static site.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in /out
```

Environment variables are listed in `.env.example`. All are optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID` turns on analytics, and `NEXT_PUBLIC_SITE_URL` sets the URL used in canonical links, Open Graph and the sitemap. On Vercel the site URL defaults to the project's production domain.

- Products: `data/products.ts`
- Category page sub-sections: `data/sections.ts`
- Product images: `public/images/<category>/`

## Analytics (Google Analytics 4)

The site can send traffic data to your own Google Analytics 4 property. This is send-only: nothing about analytics is shown on the site, and there is no dashboard in this codebase. When no measurement ID is set, the Google script is never loaded and nothing is sent.

### 1. Get a Measurement ID

1. Sign in at [analytics.google.com](https://analytics.google.com) and create a GA4 property (or use an existing one).
2. Go to **Admin → Data collection and modification → Data streams → Add stream → Web**, and enter your site's URL.
3. Copy the **Measurement ID**. It looks like `G-XXXXXXXXXX`.

### 2. Add it to the project

Copy `.env.example` to `.env.local` and fill it in:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`.env.local` is git-ignored, so the ID isn't committed. Restart `npm run dev` after changing it.

**For the live site:** the ID is baked in at build time. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your hosting provider's environment variables (Vercel, Netlify, etc.) before it runs `npm run build`. Note that a GA measurement ID is not a secret: it ends up in the site's public JavaScript, like on every site that uses GA.

### 3. One setting to change in GA

The site sends its own `page_view` event on every page change, including client-side navigation between category pages. To avoid counting page changes twice, turn off GA's built-in history tracking:

**Admin → Data streams → (your web stream) → Enhanced measurement ⚙ → Page views → Show advanced settings → untick "Page changes based on browser history events"**.

### What gets tracked

| Event | When | Parameters |
| --- | --- | --- |
| `page_view` | Every page load and every in-site navigation | `page_path`, `page_location`, `page_title` |
| `view_deal_click` | A visitor clicks a **View Deal** button | `product_id`, `product_name`, `product_category`, `product_price`, `link_url` |

### Viewing your data

Log in to [analytics.google.com](https://analytics.google.com) with your own account:

- **Reports → Realtime** shows visitors and events as they happen. Open the site and you should appear within a few seconds.
- **Reports → Engagement → Events → `view_deal_click`** shows affiliate clicks.
- To break clicks down by product in standard reports, register the parameters once under **Admin → Custom definitions → Create custom dimension** (scope: Event). Use `product_name`, `product_category` and `product_id`. Data shows up in reports from that point on, usually within 24–48 hours.
