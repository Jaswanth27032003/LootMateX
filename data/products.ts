/**
 * All categories and products live here — edit this file, not the components.
 *
 * - Add a product: append an object to a category's `products` array.
 * - Add a category: append a new object to `categories`. It automatically
 *   gets a nav link, a filter chip, and its own section on the homepage.
 * - Images go in /public/images/<category>/ and are referenced as
 *   "/images/<category>/<file>.jpg". If the file isn't there yet, the card
 *   shows a neutral placeholder block instead.
 * - `keySpecs`: 4–6 plain-language specs, in the order you want them shown.
 *   The first 3 also appear as chips on the card; all of them appear under
 *   "See specs".
 * - `category` must match the category the product is listed under (the build
 *   fails with a clear message if it doesn't).
 * - `tags` decide which sub-sections a product appears in on its category page
 *   (see data/sections.ts). Leave `tags: {}` if a category has no sub-sections yet.
 */

export type KeySpec = { label: string; value: string };

/** Add a new id here when you add a category below. */
export type CategoryId = "monitors" | "laptops" | "gpus" | "accessories" | "helmets";

export type MonitorForm = "flat" | "curved" | "ultrawide" | "super-ultrawide";

/**
 * Taxonomy tags drive the sub-sections on category pages (see data/sections.ts).
 * All optional. `form` can be a list when a product fits several types —
 * e.g. ["curved", "ultrawide"] — so it appears in each section without being duplicated.
 */
export type ProductTags = {
  form?: MonitorForm | MonitorForm[];
  useCase?: "gaming" | "office";
  resolutionTier?: "hd" | "fhd" | "qhd" | "uhd4k" | "5k" | "6k" | "8k";
  refreshTier?: "60hz" | "75-100hz" | "120-165hz" | "180-240hz" | "360hz-plus";
};

export type Product = {
  id: string;
  category: CategoryId; // must match the category this product is listed under
  name: string;
  shortDescription: string; // 1-2 lines, plain English
  price: string; // display string, e.g. "₹30,799"
  image: string; // local path, e.g. "/images/monitors/samsung-odyssey-g5.jpg"
  keySpecs: KeySpec[]; // 4-6 curated, plain-language specs
  affiliateUrl: string;
  rel: "nofollow sponsored noopener";
  tags: ProductTags;
};

export type Category = {
  /** Page URL (/<id>), section anchor, and image folder name — lowercase, no spaces. */
  id: CategoryId;
  name: string;
  description: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "monitors",
    name: "Monitors",
    description: "Sharp displays worth the desk space.",
    products: [
      {
        id: "samsung-odyssey-g5",
        category: "monitors",
        name: 'Samsung Odyssey G5 Curved 34" WQHD Gaming Monitor',
        shortDescription: "A big curved screen with fast 165Hz refresh for smooth, immersive gaming.",
        price: "₹30,799",
        image: "/images/monitors/samsung-odyssey-g5.jpg",
        keySpecs: [
          { label: "Screen Size", value: "34 inch (Curved)" },
          { label: "Resolution", value: "WQHD (3440 x 1440)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "165 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://fktr.in/I5k2iqe",
        rel: "nofollow sponsored noopener",
        tags: { form: ["curved", "ultrawide"], useCase: "gaming", resolutionTier: "qhd", refreshTier: "120-165hz" },
      },
      {
        id: "benq-gw2790",
        category: "monitors",
        name: 'BenQ GW2790 27" Full HD IPS Monitor',
        shortDescription: "A comfortable everyday monitor with eye-care features and built-in speakers.",
        price: "₹10,650",
        image: "/images/monitors/benq-gw2790.jpg",
        keySpecs: [
          { label: "Screen Size", value: "27 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "100 Hz" },
          { label: "Built-in Speakers", value: "Yes" },
          { label: "Best For", value: "Work & everyday use" },
        ],
        affiliateUrl: "https://link.amazon/B04VVjb5C",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "office", resolutionTier: "fhd", refreshTier: "75-100hz" },
      },
      {
        id: "samsung-lc27r500",
        category: "monitors",
        name: 'Samsung 27" FHD Curved Monitor (LC27R500FHWXXL)',
        shortDescription: "An affordable curved monitor for everyday work, browsing, and casual use.",
        price: "₹4,498",
        image: "/images/monitors/samsung-lc27r500.jpg",
        keySpecs: [
          { label: "Screen Size", value: "27 inch (Curved)" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "60 Hz" },
          { label: "Response Time", value: "4 ms" },
          { label: "Best For", value: "Everyday & office use" },
        ],
        affiliateUrl: "https://link.amazon/B01Vds5P1",
        rel: "nofollow sponsored noopener",
        tags: { form: "curved", useCase: "office", resolutionTier: "fhd", refreshTier: "60hz" },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PLACEHOLDER CATEGORIES — dummy entries so the layout is visible.
  // Replace each `products` array with real products.
  // ---------------------------------------------------------------------------
  {
    id: "laptops",
    name: "Laptops",
    description: "From featherlight to full workstation.",
    products: [
      {
        id: "placeholder-laptop-1", // PLACEHOLDER — replace
        category: "laptops",
        name: "Placeholder Laptop One",
        shortDescription: "Dummy entry — replace with a real laptop.",
        price: "₹00,000",
        image: "/images/laptops/placeholder-laptop-1.jpg",
        keySpecs: [
          { label: "Screen Size", value: "14 inch" },
          { label: "Battery Life", value: "Up to 12 hours" },
          { label: "Weight", value: "1.3 kg" },
          { label: "Best For", value: "Everyday use" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
      {
        id: "placeholder-laptop-2", // PLACEHOLDER — replace
        category: "laptops",
        name: "Placeholder Laptop Two",
        shortDescription: "Dummy entry — replace with a real laptop.",
        price: "₹00,000",
        image: "/images/laptops/placeholder-laptop-2.jpg",
        keySpecs: [
          { label: "Screen Size", value: "16 inch" },
          { label: "Battery Life", value: "Up to 8 hours" },
          { label: "Weight", value: "2.1 kg" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
    ],
  },
  {
    id: "gpus",
    name: "GPUs",
    description: "More frames, less waiting.",
    products: [
      {
        id: "placeholder-gpu-1", // PLACEHOLDER — replace
        category: "gpus",
        name: "Placeholder GPU One",
        shortDescription: "Dummy entry — replace with a real graphics card.",
        price: "₹00,000",
        image: "/images/gpus/placeholder-gpu-1.jpg",
        keySpecs: [
          { label: "Video Memory", value: "12 GB" },
          { label: "Good For", value: "1440p gaming" },
          { label: "Power Supply Needed", value: "650 W" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
      {
        id: "placeholder-gpu-2", // PLACEHOLDER — replace
        category: "gpus",
        name: "Placeholder GPU Two",
        shortDescription: "Dummy entry — replace with a real graphics card.",
        price: "₹00,000",
        image: "/images/gpus/placeholder-gpu-2.jpg",
        keySpecs: [
          { label: "Video Memory", value: "8 GB" },
          { label: "Good For", value: "1080p gaming" },
          { label: "Power Supply Needed", value: "550 W" },
          { label: "Best For", value: "Budget builds" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "The small upgrades that change everything.",
    products: [
      {
        id: "placeholder-accessory-1", // PLACEHOLDER — replace
        category: "accessories",
        name: "Placeholder Accessory One",
        shortDescription: "Dummy entry — replace with a real accessory.",
        price: "₹0,000",
        image: "/images/accessories/placeholder-accessory-1.jpg",
        keySpecs: [
          { label: "Connection", value: "Wireless" },
          { label: "Battery Life", value: "Up to 30 days" },
          { label: "Works With", value: "Windows & Mac" },
          { label: "Best For", value: "Work" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
      {
        id: "placeholder-accessory-2", // PLACEHOLDER — replace
        category: "accessories",
        name: "Placeholder Accessory Two",
        shortDescription: "Dummy entry — replace with a real accessory.",
        price: "₹0,000",
        image: "/images/accessories/placeholder-accessory-2.jpg",
        keySpecs: [
          { label: "Connection", value: "USB-C" },
          { label: "Ports", value: "6 in 1" },
          { label: "Works With", value: "Laptops & tablets" },
          { label: "Best For", value: "Travel" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
    ],
  },
  {
    id: "helmets",
    name: "Helmets",
    description: "Protection that doesn't feel like a compromise.",
    products: [
      {
        id: "placeholder-helmet-1", // PLACEHOLDER — replace
        category: "helmets",
        name: "Placeholder Helmet One",
        shortDescription: "Dummy entry — replace with a real helmet.",
        price: "₹0,000",
        image: "/images/helmets/placeholder-helmet-1.jpg",
        keySpecs: [
          { label: "Type", value: "Full face" },
          { label: "Safety Rating", value: "ISI certified" },
          { label: "Weight", value: "1.4 kg" },
          { label: "Best For", value: "Daily commute" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
      {
        id: "placeholder-helmet-2", // PLACEHOLDER — replace
        category: "helmets",
        name: "Placeholder Helmet Two",
        shortDescription: "Dummy entry — replace with a real helmet.",
        price: "₹0,000",
        image: "/images/helmets/placeholder-helmet-2.jpg",
        keySpecs: [
          { label: "Type", value: "Open face" },
          { label: "Safety Rating", value: "ISI certified" },
          { label: "Weight", value: "1.1 kg" },
          { label: "Best For", value: "City rides" },
        ],
        affiliateUrl: "https://example.com",
        rel: "nofollow sponsored noopener",
        tags: {},
      },
    ],
  },
];
