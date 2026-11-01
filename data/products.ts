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
 *   Cards highlight screen size, refresh rate and panel type when available;
 *   all specifications appear on product detail and comparison views.
 * - `category` must match the category the product is listed under (the build
 *   fails with a clear message if it doesn't).
 * - `tags` drive the filters on each category page (see data/sections.ts).
 *   Leave `tags: {}` if a category has no filters yet.
 * - Draft IDs starting with `placeholder-` and example.com links stay hidden.
 */

export type KeySpec = { label: string; value: string };

/** Add a new id here when you add a category below. */
export type CategoryId = "monitors" | "laptops" | "gpus" | "desktops" | "accessories" | "helmets";

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
  /** Optional editorial context. Only add claims supported by the listed specs. */
  badge?: string;
  bestFor?: string;
  benefits?: string[];
  considerations?: string[];
  merchant?: string;
  /** Extra local product photos; the main image is included automatically. */
  gallery?: string[];
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
        id: "benq-gw2790",
        category: "monitors",
        name: 'BenQ GW2790 27" Full HD IPS Monitor',
        shortDescription: "A comfortable everyday monitor with eye-care features and built-in speakers.",
        price: "₹9,888",
        image: "/images/monitors/benq-gw2790.jpg",
        badge: "Everyday workspace",
        bestFor: "Work, browsing, and a simpler desk",
        merchant: "Amazon",
        benefits: [
          "A 27-inch flat IPS display gives everyday work a straightforward, spacious canvas.",
          "The listed 100 Hz refresh rate offers a step up from a 60 Hz screen.",
          "Built-in speakers let you keep basic audio on the desk without a separate speaker set.",
        ],
        considerations: [
          "Full HD at 27 inches has less pixel density than a same-size QHD display.",
          "100 Hz sits below the gaming monitors in this collection if high-refresh gaming is your priority.",
          "Check the retailer for the exact ports, stand adjustments, and warranty before buying.",
        ],
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
        badge: "Curved everyday pick",
        bestFor: "Everyday work with a curved screen",
        merchant: "Amazon",
        gallery: [
          "/images/monitors/samsung-lc27r500-side.jpg",
          "/images/monitors/samsung-lc27r500-angle.jpg",
        ],
        benefits: [
          "A 27-inch curved screen is an option for a more wraparound desk view.",
          "The listed Full HD resolution and 60 Hz refresh rate suit browsing and everyday office use.",
          "A VA panel offers a different panel choice from the flat IPS model in this collection.",
        ],
        considerations: [
          "60 Hz is the lowest refresh rate in this collection; consider the faster options for gaming.",
          "Full HD at 27 inches offers less pixel density than a same-size QHD screen.",
          "Check the retailer's final price, condition, and availability before making a decision.",
        ],
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
      {
        id: "samsung-s3-22-ls22d300",
        category: "monitors",
        name: 'Samsung S3 22" Full HD IPS Monitor (LS22D300GAWXXL)',
        shortDescription: "A slim, low-cost everyday monitor with a 100Hz IPS screen and eye-care modes.",
        price: "₹5,999",
        image: "/images/monitors/samsung-s3-22-ls22d300.jpg",
        badge: "Budget everyday pick",
        bestFor: "A first monitor for work, study, and browsing",
        merchant: "Flipkart",
        benefits: [
          "An IPS panel gives consistent colour from wider viewing angles.",
          "The listed 100 Hz refresh rate is a step up from a basic 60 Hz screen.",
          "Eye Saver Mode and a slim, borderless design suit long work sessions on a small desk.",
        ],
        considerations: [
          "22 inches is compact; pick a 24- or 27-inch screen if you want more room for windows.",
          "Ports are listed as HDMI and VGA, so check your laptop or PC has a matching output.",
          "Check the retailer for the stand adjustments and warranty before buying.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "22 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "100 Hz" },
          { label: "Response Time", value: "5 ms" },
          { label: "Best For", value: "Work & everyday use" },
        ],
        affiliateUrl: "https://fktr.in/JDn0x7r",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "office", resolutionTier: "fhd", refreshTier: "75-100hz" },
      },
      {
        id: "acer-ka222q",
        category: "monitors",
        name: 'Acer KA222Q 22" Full HD 120Hz Monitor',
        shortDescription: "The cheapest smooth-scrolling screen here — 120Hz on a compact, frameless 22-inch monitor.",
        price: "₹5,299",
        image: "/images/monitors/acer-ka222q.jpg",
        badge: "Lowest price",
        bestFor: "Tight budgets that still want smooth motion",
        merchant: "Flipkart",
        benefits: [
          "The listed 120 Hz refresh rate makes scrolling and casual games look smoother than 60 Hz.",
          "A ZeroFrame (thin-bezel) design keeps the screen compact on a small desk.",
          "The listing quotes 99% sRGB colour coverage, which is good for everyday photos and video.",
        ],
        considerations: [
          "It uses a VA panel; colours can shift more at wide angles than on an IPS screen.",
          "22 inches is compact; pick a larger screen if you multitask with several windows.",
          "Ports are listed as HDMI and VGA, and the stand is listed as tilt-adjustable.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "22 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "120 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Budget everyday use" },
        ],
        affiliateUrl: "https://fktr.in/v7zUqCn",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "office", resolutionTier: "fhd", refreshTier: "120-165hz" },
      },
      {
        id: "lg-24u411a",
        category: "monitors",
        name: 'LG 24" Full HD IPS 120Hz Monitor (24U411A)',
        shortDescription: "A 24-inch IPS monitor with 120Hz refresh and reader and flicker-safe modes for long days.",
        price: "₹6,799",
        image: "/images/monitors/lg-24u411a.jpg",
        badge: "Best value 24-inch",
        bestFor: "Daily work with a bit more screen",
        merchant: "Flipkart",
        benefits: [
          "A 24-inch IPS screen gives clear, consistent colour for documents and video.",
          "The listed 120 Hz refresh rate makes everyday scrolling feel smoother.",
          "Reader Mode and Flicker Safe are listed for more comfortable long sessions.",
        ],
        considerations: [
          "Full HD is fine at 24 inches but not as sharp as a QHD screen.",
          "Ports are listed as HDMI and VGA; check your computer's outputs.",
          "The listing describes a slim stand; check the retailer if you need height adjustment.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "24 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "120 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Work & everyday use" },
        ],
        affiliateUrl: "https://fktr.in/I1uXQr2",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "office", resolutionTier: "fhd", refreshTier: "120-165hz" },
      },
      {
        id: "samsung-s3-24-curved-ls24d368",
        category: "monitors",
        name: 'Samsung Essential S3 24" Curved Full HD Monitor (LS24D368GAWXXL)',
        shortDescription: "An affordable curved 24-inch screen with a 100Hz refresh rate for everyday use.",
        price: "₹7,699",
        image: "/images/monitors/samsung-s3-24-curved-ls24d368.jpg",
        badge: "Budget curved",
        bestFor: "A curved screen without a big spend",
        merchant: "Flipkart",
        benefits: [
          "A curved 24-inch screen gives a gently wraparound view on a standard desk.",
          "The listed 100 Hz refresh rate is smoother than a basic 60 Hz monitor.",
          "One of the lowest-priced curved monitors in this collection.",
        ],
        considerations: [
          "It uses a VA panel; colours can shift more at wide angles than on an IPS screen.",
          "Curved screens matter less at 24 inches than on larger or ultrawide monitors.",
          "Check the retailer for ports, stand adjustments, and warranty before buying.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "24 inch (Curved)" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "100 Hz" },
          { label: "Response Time", value: "4 ms" },
          { label: "Best For", value: "Everyday use" },
        ],
        affiliateUrl: "https://fktr.in/u71s9G4",
        rel: "nofollow sponsored noopener",
        tags: { form: "curved", useCase: "office", resolutionTier: "fhd", refreshTier: "75-100hz" },
      },
      {
        id: "lg-ultragear-25g523b",
        category: "monitors",
        name: 'LG UltraGear 25" Full HD 200Hz Gaming Monitor (25G523B)',
        shortDescription: "A fast 200Hz IPS gaming screen at a budget price — great for competitive shooters.",
        price: "₹9,499",
        image: "/images/monitors/lg-ultragear-25g523b.jpg",
        badge: "Budget esports",
        bestFor: "Fast competitive games on a budget",
        merchant: "Flipkart",
        benefits: [
          "The listed 200 Hz refresh rate gives very fluid motion in fast games.",
          "An IPS panel keeps colours consistent from different angles.",
          "A 25-inch Full HD screen keeps the whole game view within easy sight, as many competitive players prefer.",
        ],
        considerations: [
          "You need a graphics card that can run your games at high frame rates to benefit from 200 Hz.",
          "Full HD at 25 inches is less sharp than a QHD screen for work and detail.",
          "The listed 1 ms response time is a manufacturer figure, not our own test result.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "25 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "200 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Competitive gaming" },
        ],
        affiliateUrl: "https://fktr.in/es4ytFF",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "gaming", resolutionTier: "fhd", refreshTier: "180-240hz" },
      },
      {
        id: "msi-mag-255f",
        category: "monitors",
        name: 'MSI MAG 255F 25" Full HD 200Hz Gaming Monitor',
        shortDescription: "A 200Hz IPS gaming monitor with a very quick listed response time, at an entry-level price.",
        price: "₹8,599",
        image: "/images/monitors/msi-mag-255f.jpg",
        badge: "Fast for less",
        bestFor: "High-refresh gaming at the lowest price",
        merchant: "Flipkart",
        benefits: [
          "The listed 200 Hz refresh rate suits fast shooters and esports titles.",
          "A 0.5 ms listed response time is among the quickest figures in this collection.",
          "An IPS panel gives consistent colour from different angles.",
        ],
        considerations: [
          "You need a graphics card that can push high frame rates to benefit from 200 Hz.",
          "Full HD at 25 inches is less sharp than a QHD screen for work and detail.",
          "Response-time figures are manufacturer specifications, not our own test results.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "25 inch" },
          { label: "Resolution", value: "Full HD (1920 x 1080)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "200 Hz" },
          { label: "Response Time", value: "0.5 ms" },
          { label: "Best For", value: "Competitive gaming" },
        ],
        affiliateUrl: "https://fktr.in/1aPJdBd",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "gaming", resolutionTier: "fhd", refreshTier: "180-240hz" },
      },
      {
        id: "samsung-odyssey-g5-27-ls27fg530",
        category: "monitors",
        name: 'Samsung Odyssey G5 27" QHD 200Hz Gaming Monitor (LS27FG530EWXXL)',
        shortDescription: "A sharp 27-inch QHD gaming screen with 200Hz refresh — the sweet spot for most gamers.",
        price: "₹14,999",
        image: "/images/monitors/samsung-odyssey-g5-27-ls27fg530.jpg",
        badge: "Best all-round gaming",
        bestFor: "Gaming that looks sharp and feels fast",
        merchant: "Flipkart",
        benefits: [
          "QHD (2560 x 1440) at 27 inches is noticeably sharper than Full HD for games and work.",
          "The listed 200 Hz refresh rate gives very fluid motion.",
          "HDR10 and FreeSync Premium are listed, plus DisplayPort and two HDMI ports.",
        ],
        considerations: [
          "Running games at QHD and high frame rates needs a capable graphics card.",
          "Check the stand adjustments at the retailer; the listing highlights wall mounting.",
          "The listed 1 ms response time is a manufacturer figure, not our own test result.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "27 inch" },
          { label: "Resolution", value: "QHD (2560 x 1440)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "200 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://fktr.in/XnH6wKf",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "gaming", resolutionTier: "qhd", refreshTier: "180-240hz" },
      },
      {
        id: "acer-nitro-xv272u-x1",
        category: "monitors",
        name: 'Acer Nitro XV272U X1 27" WQHD 200Hz Gaming Monitor',
        shortDescription: "A 27-inch QHD gaming monitor with 200Hz, HDR400, speakers, and an adjustable stand.",
        price: "₹15,448",
        image: "/images/monitors/acer-nitro-xv272u-x1.jpg",
        badge: "Feature-packed gaming",
        bestFor: "A QHD gaming setup with an adjustable stand",
        merchant: "Flipkart",
        benefits: [
          "QHD (2560 x 1440) on a 27-inch IPS panel gives sharp, consistent visuals.",
          "The listed 200 Hz refresh rate and 0.5 ms response time suit fast games.",
          "The listing includes HDR400, 90% DCI-P3 colour, 2 W x 2 speakers, and an ErgoStand.",
        ],
        considerations: [
          "QHD at high frame rates needs a capable graphics card.",
          "Built-in speakers are basic; most gamers will still want headphones.",
          "Response-time figures are manufacturer specifications, not our own test results.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "27 inch" },
          { label: "Resolution", value: "QHD (2560 x 1440)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "200 Hz" },
          { label: "Built-in Speakers", value: "Yes" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://fktr.in/sktFOSE",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "gaming", resolutionTier: "qhd", refreshTier: "180-240hz" },
      },
      {
        id: "lg-ultragear-32g600a",
        category: "monitors",
        name: 'LG UltraGear 32" Curved QHD 180Hz Gaming Monitor (32G600A)',
        shortDescription: "A big curved 32-inch QHD gaming screen with 180Hz and a fully adjustable stand.",
        price: "₹19,499",
        image: "/images/monitors/lg-ultragear-32g600a.jpg",
        badge: "Big-screen gaming",
        bestFor: "Immersive gaming on a larger screen",
        merchant: "Flipkart",
        benefits: [
          "A curved 32-inch QHD screen fills more of your view for immersive games.",
          "The listed 180 Hz refresh rate keeps motion smooth.",
          "Tilt, height, and swivel adjustment plus an anti-glare finish are listed.",
        ],
        considerations: [
          "It uses a VA panel; colours can shift more at wide angles than on an IPS screen.",
          "A 32-inch screen needs a deep desk to sit at a comfortable distance.",
          "Few buyer reviews so far on Flipkart, so check recent ratings before buying.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "32 inch (Curved)" },
          { label: "Resolution", value: "QHD (2560 x 1440)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "180 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://fktr.in/hae2hzY",
        rel: "nofollow sponsored noopener",
        tags: { form: "curved", useCase: "gaming", resolutionTier: "qhd", refreshTier: "180-240hz" },
      },
      {
        id: "samsung-viewfinity-s6-ls27f610",
        category: "monitors",
        name: 'Samsung ViewFinity S6 27" QHD Monitor (LS27F610EAWXXL)',
        shortDescription: "A sharp 27-inch QHD work monitor with a height, tilt, and pivot adjustable stand.",
        price: "₹13,999",
        image: "/images/monitors/samsung-viewfinity-s6-ls27f610.jpg",
        badge: "Best for work",
        bestFor: "Sharp, comfortable productivity",
        merchant: "Flipkart",
        benefits: [
          "QHD (2560 x 1440) at 27 inches gives crisper text and more workspace than Full HD.",
          "The stand adjusts for height, tilt, and pivot — including portrait mode for documents and code.",
          "The listed 100 Hz refresh rate makes scrolling smoother than a 60 Hz screen.",
        ],
        considerations: [
          "100 Hz is fine for work but below the gaming monitors in this collection.",
          "Ports are listed as two HDMI and one DisplayPort; there's no USB-C listed.",
          "Few buyer reviews so far on Flipkart, so check recent ratings before buying.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "27 inch" },
          { label: "Resolution", value: "QHD (2560 x 1440)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "100 Hz" },
          { label: "Stand", value: "Height, tilt & pivot adjustable" },
          { label: "Best For", value: "Work & productivity" },
        ],
        affiliateUrl: "https://fktr.in/5jqvWCD",
        rel: "nofollow sponsored noopener",
        tags: { form: "flat", useCase: "office", resolutionTier: "qhd", refreshTier: "75-100hz" },
      },
      {
        id: "acer-ed340cur",
        category: "monitors",
        name: 'Acer ED340CUR 34" Curved WQHD Ultrawide Monitor',
        shortDescription: "An affordable 34-inch curved ultrawide — like two monitors side by side, with 120Hz refresh.",
        price: "₹20,299",
        image: "/images/monitors/acer-ed340cur.jpg",
        badge: "Ultrawide value",
        bestFor: "Multitasking and immersive games",
        merchant: "Flipkart",
        benefits: [
          "A 34-inch ultrawide screen fits two full windows side by side without a gap.",
          "WQHD (3440 x 1440) resolution keeps text sharp across the wide screen.",
          "The listed 120 Hz refresh rate makes games and scrolling smoother.",
        ],
        considerations: [
          "Measure your desk: a 34-inch ultrawide is about as wide as two 24-inch screens.",
          "Not every game supports the ultrawide format; some show black bars at the sides.",
          "Few buyer reviews so far on Flipkart, so check recent ratings before buying.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "34 inch (Curved)" },
          { label: "Resolution", value: "WQHD (3440 x 1440)" },
          { label: "Panel Type", value: "IPS" },
          { label: "Refresh Rate", value: "120 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Multitasking & gaming" },
        ],
        affiliateUrl: "https://fktr.in/6XXWt4d",
        rel: "nofollow sponsored noopener",
        tags: { form: ["curved", "ultrawide"], useCase: "gaming", resolutionTier: "qhd", refreshTier: "120-165hz" },
      },
      {
        id: "samsung-odyssey-oled-g9-ls49dg910",
        category: "monitors",
        name: 'Samsung Odyssey OLED G9 49" Curved Gaming Monitor (LS49DG910SWXXL)',
        shortDescription: "A huge 49-inch curved OLED screen — as wide as two 27-inch monitors, with deep blacks.",
        price: "₹77,999",
        image: "/images/monitors/samsung-odyssey-oled-g9-ls49dg910.jpg",
        badge: "Ultimate setup",
        bestFor: "A no-compromise, wraparound gaming desk",
        merchant: "Flipkart",
        benefits: [
          "A 49-inch super-ultrawide screen is as wide as two 27-inch QHD monitors side by side.",
          "An OLED panel gives deep blacks and very fast listed response (0.03 ms).",
          "Dual QHD (5120 x 1440) resolution keeps everything sharp across the full width.",
        ],
        considerations: [
          "It needs a very wide desk and a powerful graphics card to drive 5120 x 1440 at high frame rates.",
          "Many games and apps don't support the 32:9 format natively.",
          "A premium price with very few buyer reviews on Flipkart so far.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "49 inch (Curved)" },
          { label: "Resolution", value: "Dual QHD (5120 x 1440)" },
          { label: "Panel Type", value: "OLED" },
          { label: "Refresh Rate", value: "144 Hz" },
          { label: "Response Time", value: "0.03 ms" },
          { label: "Best For", value: "Immersive gaming" },
        ],
        affiliateUrl: "https://fktr.in/luUkA8l",
        rel: "nofollow sponsored noopener",
        tags: { form: ["curved", "super-ultrawide"], useCase: "gaming", resolutionTier: "qhd", refreshTier: "120-165hz" },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // DRAFT PRODUCTS — retained as editing examples, excluded from the public catalog.
  // Replace each `products` array with real products and working affiliate links.
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
    id: "desktops",
    name: "Desktops",
    description: "A home for your next complete setup.",
    products: [],
  },
  {
    id: "accessories",
    name: "Desk gadgets",
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
