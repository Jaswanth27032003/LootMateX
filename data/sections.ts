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
        { id: "qhd", title: "QHD / WQHD (1440p)", description: "1440-pixel-high displays, including standard and ultrawide formats. Check each product for its exact resolution.", tag: "resolutionTier", value: "qhd" },
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
  laptops: [
    {
      id: "by-use",
      title: "Use",
      sections: [
        { id: "student", title: "Students & everyday", description: "Reliable laptops for classes, browsing, documents, and streaming.", tag: "laptopUse", value: "student" },
        { id: "work", title: "Work & productivity", description: "Comfortable machines for office work, video calls, and multitasking.", tag: "laptopUse", value: "work" },
        { id: "gaming", title: "Gaming", description: "Laptops with a dedicated graphics card and a fast screen for games.", tag: "laptopUse", value: "gaming" },
        { id: "creator", title: "Creative work", description: "Extra power for photo editing, video, and other creative apps.", tag: "laptopUse", value: "creator" },
      ],
    },
    {
      id: "by-budget",
      title: "Budget",
      sections: [
        { id: "under-50k", title: "Under ₹50,000", description: "Solid everyday laptops at the lowest prices.", tag: "budget", value: "under-50k" },
        { id: "50k-80k", title: "₹50,000 – ₹80,000", description: "The sweet spot: faster chips, more memory, and better screens.", tag: "budget", value: "50k-80k" },
        { id: "80k-120k", title: "₹80,000 – ₹1,20,000", description: "Gaming laptops and premium thin-and-lights.", tag: "budget", value: "80k-120k" },
        { id: "above-120k", title: "Above ₹1,20,000", description: "High-end performance and premium builds.", tag: "budget", value: "above-120k" },
      ],
    },
    {
      id: "by-os",
      title: "Operating system",
      sections: [
        { id: "windows", title: "Windows", description: "Runs the widest range of software and games.", tag: "os", value: "windows" },
        { id: "macos", title: "macOS", description: "Apple's MacBooks, with long battery life and a polished experience.", tag: "os", value: "macos" },
      ],
    },
  ],
  gpus: [
    {
      id: "by-resolution",
      title: "Resolution",
      sections: [
        { id: "1080p", title: "1080p (Full HD)", description: "The most common gaming resolution — the best value for most players.", tag: "gpuResolution", value: "1080p" },
        { id: "1440p", title: "1440p (QHD)", description: "Sharper than 1080p — the sweet spot for 27-inch gaming monitors.", tag: "gpuResolution", value: "1440p" },
        { id: "4k", title: "4K (Ultra HD)", description: "The sharpest gaming — needs the most powerful cards.", tag: "gpuResolution", value: "4k" },
      ],
    },
    {
      id: "by-budget",
      title: "Budget",
      sections: [
        { id: "under-50k", title: "Under ₹50,000", description: "Entry-level and 1080p cards.", tag: "budget", value: "under-50k" },
        { id: "50k-100k", title: "₹50,000 – ₹1,00,000", description: "Current-gen 1080p and entry 1440p cards.", tag: "budget", value: "50k-100k" },
        { id: "100k-200k", title: "₹1,00,000 – ₹2,00,000", description: "High-end 1440p and 4K-capable cards.", tag: "budget", value: "100k-200k" },
        { id: "above-200k", title: "Above ₹2,00,000", description: "Flagship cards for no-compromise 4K.", tag: "budget", value: "above-200k" },
      ],
    },
    {
      id: "by-vram",
      title: "Video memory",
      sections: [
        { id: "6-8gb", title: "6 – 8 GB", description: "Fine for 1080p; may limit textures in the newest games.", tag: "vram", value: "6-8gb" },
        { id: "10-12gb", title: "10 – 12 GB", description: "Comfortable headroom for 1080p and 1440p.", tag: "vram", value: "10-12gb" },
        { id: "16gb-plus", title: "16 GB or more", description: "Room for high textures, 4K, and creative apps.", tag: "vram", value: "16gb-plus" },
      ],
    },
  ],
};
