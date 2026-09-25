/**
 * Google Analytics 4 — send-only, no UI. Everything here is a no-op unless
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set at build time (see README).
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || undefined;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/**
 * Sets up the gtag queue on first use. Calls made before gtag.js finishes
 * loading are queued in dataLayer and sent once it arrives.
 */
function getGtag(): Gtag | null {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return null;
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js expects the Arguments object itself, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    // Page views are sent manually on every route change (see <Analytics />).
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }
  return window.gtag;
}

export function trackPageView(path: string) {
  getGtag()?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: Record<string, string | number | undefined>) {
  getGtag()?.("event", name, { ...params, transport_type: "beacon" });
}
