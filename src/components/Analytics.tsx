"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics";

/**
 * Loads gtag.js and sends a page_view on the first load and on every client-side
 * navigation. Renders nothing visible. Without a measurement ID it renders nothing at all.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !GA_MEASUREMENT_ID) return;
    // After a client-side navigation the new <title> is applied a moment later;
    // wait for it (up to ~1s) so reports show the right page title.
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;
    const send = () => {
      if (document.title || attempts++ >= 20) trackPageView(pathname);
      else timer = setTimeout(send, 50);
    };
    timer = setTimeout(send, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`}
      strategy="afterInteractive"
    />
  );
}
