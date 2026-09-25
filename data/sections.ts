/**
 * Sub-sections for category pages (e.g. /monitors), grouped under jump-links.
 *
 * Each section lists every product whose `tags[tag]` equals (or, for a list,
 * contains) `value`. A product can appear in several sections. Sections with
 * no matching products are hidden automatically.
 *
 * A category with no entry here gets a single grid of all its products.
 * To add sub-sections for another category, add its id below with the same shape.
 */

import type { CategoryId, ProductTags } from "./products";

type TagKey = keyof ProductTags;

export type SubSection = {
  id: string; // URL anchor — lowercase, no spaces, unique on the page
  title: string;
  description: string; // one plain-English line for shoppers
  tag: TagKey;
  value: string;
};

export type SectionGroup = {
  id: string; // anchor for the jump-link
  title: string; // shown in the jump-link bar and as the group heading
  sections: SubSection[];
};

export const categorySections: Partial<Record<CategoryId, SectionGroup[]>> = {
  monitors: [
    {
      id: "by-type",
      title: "By Type",
      sections: [
        { id: "flat", title: "Flat Monitors", description: "Classic straight screens — simple, versatile, and easy to fit on any desk.", tag: "form", value: "flat" },
        { id: "curved", title: "Curved Monitors", description: "The screen gently wraps around your view for a more immersive feel.", tag: "form", value: "curved" },
        { id: "ultrawide", title: "Ultrawide Monitors", description: "Extra-wide screens — like two monitors side by side, with no gap in the middle.", tag: "form", value: "ultrawide" },
        { id: "super-ultrawide", title: "Super-Ultrawide Monitors", description: "Twice as wide as a normal screen — fills your whole field of view.", tag: "form", value: "super-ultrawide" },
      ],
    },
    {
      id: "by-use-case",
      title: "By Use Case",
      sections: [
        { id: "gaming", title: "Gaming Monitors", description: "Fast, smooth screens that make games look and feel better.", tag: "useCase", value: "gaming" },
        { id: "office", title: "Office / Productivity Monitors", description: "Comfortable, clear screens for work, study, and everyday browsing.", tag: "useCase", value: "office" },
      ],
    },
    {
      id: "by-resolution",
      title: "By Resolution",
      sections: [
        { id: "hd", title: "HD (1280×720)", description: "Basic sharpness — fine for small screens and tight budgets.", tag: "resolutionTier", value: "hd" },
        { id: "fhd", title: "Full HD / 1080p (1920×1080)", description: "The everyday standard — sharp enough for most people on screens up to 27 inches.", tag: "resolutionTier", value: "fhd" },
        { id: "qhd", title: "QHD / 2K (2560×1440)", description: "Noticeably crisper than Full HD — the sweet spot for 27-inch and wider screens.", tag: "resolutionTier", value: "qhd" },
        { id: "uhd4k", title: "4K UHD (3840×2160)", description: "Very sharp detail — great for big screens, photos, and movies.", tag: "resolutionTier", value: "uhd4k" },
        { id: "5k", title: "5K (5120×2880)", description: "Extra-fine detail for designers and photo editors.", tag: "resolutionTier", value: "5k" },
        { id: "6k", title: "6K (6016×3384)", description: "Professional-grade sharpness for high-end creative work.", tag: "resolutionTier", value: "6k" },
        { id: "8k", title: "8K (7680×4320)", description: "The sharpest screens you can buy — for cutting-edge setups.", tag: "resolutionTier", value: "8k" },
      ],
    },
    {
      id: "by-refresh-rate",
      title: "By Refresh Rate",
      sections: [
        { id: "60hz", title: "60 Hz — Basic / Office", description: "Fine for work, browsing, and videos; motion in fast games looks less smooth.", tag: "refreshTier", value: "60hz" },
        { id: "75-100hz", title: "75–100 Hz — Smoother Everyday Use", description: "A step up from basic screens — smoother scrolling and nicer casual gaming.", tag: "refreshTier", value: "75-100hz" },
        { id: "120-165hz", title: "120–165 Hz — Gaming / High-Refresh", description: "Smooth motion, great for most gamers.", tag: "refreshTier", value: "120-165hz" },
        { id: "180-240hz", title: "180–240 Hz — Competitive Gaming", description: "Very fast, fluid motion for competitive shooters and serious players.", tag: "refreshTier", value: "180-240hz" },
        { id: "360hz-plus", title: "360 Hz+ — High-End Esports", description: "The fastest screens made — built for pro-level esports.", tag: "refreshTier", value: "360hz-plus" },
      ],
    },
  ],
};
