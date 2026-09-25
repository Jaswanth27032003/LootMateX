import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes a fully static site to /out.
  output: "export",
  images: {
    // The built-in image optimizer needs a server; static export serves images as-is
    // (still lazy-loaded and sized by next/image).
    unoptimized: true,
  },
};

export default nextConfig;
