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
export type LaptopUse = "student" | "work" | "gaming" | "creator";

export type ProductTags = {
  // Monitors
  form?: MonitorForm | MonitorForm[];
  useCase?: "gaming" | "office";
  resolutionTier?: "hd" | "fhd" | "qhd" | "uhd4k" | "5k" | "6k" | "8k";
  refreshTier?: "60hz" | "75-100hz" | "120-165hz" | "180-240hz" | "360hz-plus";
  // Laptops
  laptopUse?: LaptopUse | LaptopUse[];
  budget?: "under-50k" | "50k-80k" | "80k-120k" | "above-120k";
  os?: "windows" | "macos";
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
        id: "samsung-odyssey-g5",
        category: "monitors",
        name: 'Samsung Odyssey G5 Curved 34" WQHD Gaming Monitor',
        shortDescription: "A big curved screen with fast 165Hz refresh for smooth, immersive gaming.",
        price: "₹31,328",
        image: "/images/monitors/samsung-odyssey-g5.jpg",
        badge: "Ultrawide gaming",
        bestFor: "A wider view for your gaming setup",
        merchant: "Flipkart",
        gallery: [
          "/images/monitors/samsung-odyssey-g5-side.webp",
          "/images/monitors/samsung-odyssey-g5-top.webp",
        ],
        benefits: [
          "A 34-inch curved, ultrawide screen gives games and multiple windows more room.",
          "The listed 165 Hz refresh rate suits a setup focused on fluid motion.",
          "3440 × 1440 resolution gives you more horizontal workspace than a standard 2560 × 1440 display.",
        ],
        considerations: [
          "Measure your desk before choosing a 34-inch ultrawide screen.",
          "Check your graphics card and connection can support the resolution and refresh rate you want.",
          "The listed 1 ms response time is a specification, not a result from our own testing.",
        ],
        keySpecs: [
          { label: "Screen Size", value: "34 inch (Curved)" },
          { label: "Resolution", value: "WQHD (3440 x 1440)" },
          { label: "Panel Type", value: "VA" },
          { label: "Refresh Rate", value: "165 Hz" },
          { label: "Response Time", value: "1 ms" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://fktr.in/pRPwKhQ",
        rel: "nofollow sponsored noopener",
        tags: { form: ["curved", "ultrawide"], useCase: "gaming", resolutionTier: "qhd", refreshTier: "120-165hz" },
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
        id: "apple-macbook-neo-13",
        category: "laptops",
        name: 'Apple MacBook Neo 13" (A18 Pro, 8GB/256GB)',
        shortDescription: "Apple's most affordable MacBook — light, colourful, and built for everyday tasks with all-day battery.",
        price: "₹68,990",
        image: "/images/laptops/apple-macbook-neo-13.jpg",
        badge: "#1 bestseller",
        bestFor: "Students and first-time Mac users",
        merchant: "Amazon",
        benefits: [
          "The cheapest way into a MacBook, with a sharp 13-inch Liquid Retina display (2408 x 1506).",
          "Apple lists up to 16 hours of battery life, enough for a full day of classes or work.",
          "At 1.22 kg with an aluminium body, it's easy to carry every day.",
        ],
        considerations: [
          "8 GB of memory and 256 GB of storage are fine for everyday use but limited for heavy multitasking or big files.",
          "It uses Apple's A18 Pro phone-class chip rather than an M-series chip, so it's aimed at everyday tasks, not heavy creative work.",
          "macOS doesn't run some Windows-only software and many PC games.",
        ],
        keySpecs: [
          { label: "Processor", value: "Apple A18 Pro" },
          { label: "Memory & Storage", value: "8GB / 256GB SSD" },
          { label: "Display", value: '13" Liquid Retina' },
          { label: "Battery", value: "Up to 16 hours (Apple)" },
          { label: "Weight", value: "1.22 kg" },
          { label: "Best For", value: "Students & everyday use" },
        ],
        affiliateUrl: "https://link.amazon/B0eV4Tqlo",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["student", "work"], budget: "50k-80k", os: "macos" },
      },
      {
        id: "apple-macbook-air-15-m5",
        category: "laptops",
        name: 'Apple MacBook Air 15" M5 (16GB/512GB)',
        shortDescription: "A big, sharp 15-inch screen with Apple's M5 chip in a thin MacBook Air.",
        price: "₹1,61,900",
        image: "/images/laptops/apple-macbook-air-15-m5.jpg",
        badge: "Premium pick",
        bestFor: "Professionals who want a big screen and long battery life",
        merchant: "Amazon",
        benefits: [
          "The M5 chip with 16 GB of unified memory handles multitasking, photo editing, and light video work smoothly.",
          "A 15.3-inch Liquid Retina display (2880 x 1864) gives plenty of room for side-by-side windows.",
          "512 GB of storage, a 12 MP Center Stage camera, and Touch ID in a 1.51 kg body.",
        ],
        considerations: [
          "A premium price — the MacBook Neo covers everyday tasks for much less.",
          "macOS doesn't run some Windows-only software and many PC games.",
          "Storage and memory can't be upgraded later, so choose the configuration you'll need.",
        ],
        keySpecs: [
          { label: "Processor", value: "Apple M5" },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Display", value: '15.3" Liquid Retina' },
          { label: "Camera", value: "12MP Center Stage" },
          { label: "Weight", value: "1.51 kg" },
          { label: "Best For", value: "Work & creative tasks" },
        ],
        affiliateUrl: "https://link.amazon/B0izpMrDy",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["work", "creator"], budget: "above-120k", os: "macos" },
      },
      {
        id: "asus-tuf-a15-rtx-3050",
        category: "laptops",
        name: "ASUS TUF A15 Gaming Laptop (Ryzen 7 8845HS, RTX 3050)",
        shortDescription: "A tough, popular gaming laptop with a fast 144Hz screen and memory you can upgrade later.",
        price: "₹99,990",
        image: "/images/laptops/asus-tuf-a15-rtx-3050.jpg",
        badge: "Top gaming bestseller",
        bestFor: "Gamers on a sensible budget",
        merchant: "Amazon",
        benefits: [
          "An 8-core Ryzen 7 8845HS with an RTX 3050 graphics card runs popular games at Full HD.",
          "The 15.6-inch Full HD screen refreshes at 144 Hz for smoother gameplay.",
          "16 GB DDR5 memory, upgradeable to 64 GB, plus Office Home 2024 included.",
        ],
        considerations: [
          "The RTX 3050 has 4 GB of graphics memory, so the newest demanding games need lower settings.",
          "At 2.3 kg it's heavier than a thin-and-light laptop.",
          "The screen is rated at 250 nits, so it's best used indoors.",
        ],
        keySpecs: [
          { label: "Processor", value: "Ryzen 7 8845HS" },
          { label: "Graphics", value: "RTX 3050 (4GB)" },
          { label: "Display", value: '15.6" FHD 144Hz' },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Weight", value: "2.3 kg" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://link.amazon/B07VWx9zo",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: "gaming", budget: "80k-120k", os: "windows" },
      },
      {
        id: "hp-victus-rtx-4050",
        category: "laptops",
        name: "HP Victus Gaming Laptop (Ryzen 7 7445HS, RTX 4050)",
        shortDescription: "A step up in gaming power — an RTX 4050 with 6GB of graphics memory and a 144Hz screen.",
        price: "₹1,37,990",
        image: "/images/laptops/hp-victus-rtx-4050.jpg",
        badge: "More gaming power",
        bestFor: "Gamers who want higher settings in new games",
        merchant: "Amazon",
        benefits: [
          "An RTX 4050 with 6 GB of graphics memory handles newer games better than an RTX 3050.",
          "A 15.6-inch 144 Hz IPS screen at 300 nits for smooth, bright gameplay.",
          "16 GB DDR5 memory you can upgrade, plus Office 2024 included.",
        ],
        considerations: [
          "It costs more than the ASUS TUF A15; check whether the extra graphics power matters for your games.",
          "At 2.29 kg it's a desk-first laptop, not one to carry all day.",
          "512 GB fills up quickly with modern games; budget for extra storage if needed.",
        ],
        keySpecs: [
          { label: "Processor", value: "Ryzen 7 7445HS" },
          { label: "Graphics", value: "RTX 4050 (6GB)" },
          { label: "Display", value: '15.6" FHD 144Hz' },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Weight", value: "2.29 kg" },
          { label: "Best For", value: "Gaming" },
        ],
        affiliateUrl: "https://link.amazon/B01sMQpfg",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["gaming", "creator"], budget: "above-120k", os: "windows" },
      },
      {
        id: "dell-15-i5-1334u",
        category: "laptops",
        name: "Dell 15 (Core i5-1334U, 16GB, 1TB SSD)",
        shortDescription: "A dependable everyday Dell with lots of storage, a smooth 120Hz screen, and Office included.",
        price: "₹76,990",
        image: "/images/laptops/dell-15-i5-1334u.jpg",
        badge: "Most reviewed",
        bestFor: "Office work and everyday multitasking",
        merchant: "Amazon",
        benefits: [
          "16 GB of memory and a roomy 1 TB SSD for documents, photos, and many apps at once.",
          "A 15.6-inch Full HD screen at 120 Hz makes scrolling feel smoother.",
          "Backlit keyboard and Office 2024 included, at 1.62 kg.",
        ],
        considerations: [
          "Integrated Intel graphics are fine for work and video but not for modern games.",
          "The i5-1334U is a 13th-gen chip; newer Core Ultra laptops cost more but are more efficient.",
          "Check the retailer for the exact ports and warranty before buying.",
        ],
        keySpecs: [
          { label: "Processor", value: "Intel Core i5-1334U" },
          { label: "Memory & Storage", value: "16GB / 1TB SSD" },
          { label: "Display", value: '15.6" FHD 120Hz' },
          { label: "Graphics", value: "Intel Iris Xe" },
          { label: "Weight", value: "1.62 kg" },
          { label: "Best For", value: "Work & everyday use" },
        ],
        affiliateUrl: "https://link.amazon/B03doUokI",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["work", "student"], budget: "50k-80k", os: "windows" },
      },
      {
        id: "hp-omnibook-5-oled-snapdragon",
        category: "laptops",
        name: 'HP OmniBook 5 14" OLED (Snapdragon X, 16GB, 1TB)',
        shortDescription: "A light 14-inch OLED laptop with a Snapdragon chip built for very long battery life.",
        price: "₹74,990",
        image: "/images/laptops/hp-omnibook-5-oled-snapdragon.jpg",
        badge: "Battery champion",
        bestFor: "Working on the go without a charger",
        merchant: "Amazon",
        benefits: [
          "HP lists up to 34 hours of battery life — the longest in this collection.",
          "A 14-inch OLED screen gives deep blacks and vivid colour, in a 1.29 kg body.",
          "16 GB of memory and a 1 TB SSD, with Office 2024 included.",
        ],
        considerations: [
          "Snapdragon (ARM) laptops run most apps, but some older Windows software, drivers, and many games won't work.",
          "Battery figures are manufacturer claims; real-world life depends on what you do.",
          "Amazon lists the screen as 1920 x 1200 while the title says 2K — check the exact resolution on the retailer page.",
        ],
        keySpecs: [
          { label: "Processor", value: "Snapdragon X" },
          { label: "Memory & Storage", value: "16GB / 1TB SSD" },
          { label: "Display", value: '14" OLED' },
          { label: "Battery", value: "Up to 34 hours (HP)" },
          { label: "Weight", value: "1.29 kg" },
          { label: "Best For", value: "Work on the go" },
        ],
        affiliateUrl: "https://link.amazon/B0gkozLbp",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["work", "student"], budget: "50k-80k", os: "windows" },
      },
      {
        id: "acer-aspire-lite-ryzen-7",
        category: "laptops",
        name: "Acer Aspire Lite (Ryzen 7 7730U, 16GB/512GB)",
        shortDescription: "A lot of laptop for the money — an 8-core Ryzen 7 and 16GB of memory at an entry price.",
        price: "₹59,990",
        image: "/images/laptops/acer-aspire-lite-ryzen-7.jpg",
        badge: "Best value",
        bestFor: "Students who want speed without overspending",
        merchant: "Amazon",
        benefits: [
          "An 8-core Ryzen 7 7730U with 16 GB of memory handles multitasking well for the price.",
          "A 15.6-inch Full HD IPS screen for comfortable study and streaming.",
          "Office 2024 included, at 1.59 kg.",
        ],
        considerations: [
          "Integrated Radeon graphics are fine for light games only.",
          "Acer lists around 7 hours of battery, shorter than the thin-and-light picks here.",
          "512 GB of storage can fill up; check whether you'll need more.",
        ],
        keySpecs: [
          { label: "Processor", value: "Ryzen 7 7730U" },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Display", value: '15.6" FHD IPS' },
          { label: "Graphics", value: "AMD Radeon" },
          { label: "Weight", value: "1.59 kg" },
          { label: "Best For", value: "Students & everyday use" },
        ],
        affiliateUrl: "https://link.amazon/B05nSc5z6",
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["student", "work"], budget: "50k-80k", os: "windows" },
      },
      {
        id: "samsung-galaxy-book4-metal-i5",
        category: "laptops",
        name: "Samsung Galaxy Book4 Metal (Core i5-1335U, 16GB/512GB)",
        shortDescription: "One of India's most-bought laptops — a slim metal 15.6-inch machine for work and study.",
        price: "₹62,990",
        image: "/images/laptops/samsung-galaxy-book4-metal-i5.jpg",
        badge: "Fan favourite",
        bestFor: "Everyday work with a premium metal build",
        merchant: "Flipkart",
        benefits: [
          "Over 21,000 ratings on Flipkart with a 4.4-star average — a proven, popular choice.",
          "A 15.6-inch Full HD screen with 16 GB of memory and a 512 GB SSD.",
          "A metal body at 1.55 kg for a laptop this size.",
        ],
        considerations: [
          "The screen is 60 Hz, so scrolling isn't as smooth as on the 120 Hz Dell 15.",
          "Integrated Intel graphics are fine for work but not for modern games.",
          "The i5-1335U is a 13th-gen chip; check newer models if you want the latest efficiency.",
        ],
        keySpecs: [
          { label: "Processor", value: "Intel Core i5-1335U" },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Display", value: '15.6" FHD' },
          { label: "Graphics", value: "Intel integrated" },
          { label: "Weight", value: "1.55 kg" },
          { label: "Best For", value: "Work & study" },
        ],
        affiliateUrl: "https://example.com", // TODO: EarnKaro link
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["work", "student"], budget: "50k-80k", os: "windows" },
      },
      {
        id: "acer-aspire-3-i3-1305u",
        category: "laptops",
        name: 'Acer Aspire 3 14" (Core i3-1305U, 8GB/512GB)',
        shortDescription: "A light, affordable 14-inch laptop for students — the lowest price in this collection.",
        price: "₹40,990",
        image: "/images/laptops/acer-aspire-3-i3-1305u.jpg",
        badge: "Budget pick",
        bestFor: "Students on a tight budget",
        merchant: "Flipkart",
        benefits: [
          "The most affordable laptop here, with a 512 GB SSD for fast start-up and plenty of space.",
          "A compact 14-inch Full HD screen at 1.45 kg — easy to carry to class.",
          "Rated 4.3 stars from nearly 4,000 buyers on Flipkart.",
        ],
        considerations: [
          "8 GB of memory is fine for study and browsing but tight for heavy multitasking.",
          "A Core i3 is an entry-level chip; choose a Ryzen 7 or Core i5 for more speed.",
          "Integrated graphics aren't meant for gaming.",
        ],
        keySpecs: [
          { label: "Processor", value: "Intel Core i3-1305U" },
          { label: "Memory & Storage", value: "8GB / 512GB SSD" },
          { label: "Display", value: '14" FHD' },
          { label: "Graphics", value: "Intel integrated" },
          { label: "Weight", value: "1.45 kg" },
          { label: "Best For", value: "Students & basics" },
        ],
        affiliateUrl: "https://example.com", // TODO: EarnKaro link
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: "student", budget: "under-50k", os: "windows" },
      },
      {
        id: "motorola-motobook-60-oled",
        category: "laptops",
        name: 'Motorola Motobook 60 14" OLED (Core 5 210H, 16GB/512GB)',
        shortDescription: "A full-metal 14-inch laptop with a vivid OLED screen at a mid-range price.",
        price: "₹64,990",
        image: "/images/laptops/motorola-motobook-60-oled.jpg",
        badge: "OLED for less",
        bestFor: "Streaming and work on a beautiful screen",
        merchant: "Flipkart",
        benefits: [
          "A 14-inch WUXGA (1920 x 1200) OLED screen gives deep blacks and rich colour.",
          "A full-metal body at 1.39 kg, with 16 GB of memory and a 512 GB SSD.",
          "Rated 4.4 stars from over 4,500 buyers on Flipkart.",
        ],
        considerations: [
          "The screen is 60 Hz, so scrolling isn't as smooth as a high-refresh display.",
          "Integrated Intel graphics are fine for work and video but not modern games.",
          "Motorola is newer to laptops than Dell, HP, or Lenovo — check local service options.",
        ],
        keySpecs: [
          { label: "Processor", value: "Intel Core 5 210H" },
          { label: "Memory & Storage", value: "16GB / 512GB SSD" },
          { label: "Display", value: '14" WUXGA OLED' },
          { label: "Graphics", value: "Intel integrated" },
          { label: "Weight", value: "1.39 kg" },
          { label: "Best For", value: "Work & streaming" },
        ],
        affiliateUrl: "https://example.com", // TODO: EarnKaro link
        rel: "nofollow sponsored noopener",
        tags: { laptopUse: ["work", "student"], budget: "50k-80k", os: "windows" },
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
