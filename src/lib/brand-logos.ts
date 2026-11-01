import { siAcer, siApple, siAsus, siDell, siHp, siMotorola, siSamsung, type SimpleIcon } from "simple-icons";

export type BrandLogo = {
  path: string;
  /** Tight crop of the drawing, so wide wordmarks aren't shrunk into a square. */
  viewBox: string;
  /** Wordmarks already spell the brand name, so buttons show them without extra text. */
  wordmark: boolean;
};

const icon = (si: SimpleIcon, viewBox = "0 0 24 24", wordmark = false): BrandLogo => ({ path: si.path, viewBox, wordmark });

/**
 * Brand logos for the category brand buttons (from simple-icons, CC0).
 * Keys match the `brand` field in data/products.ts. To add a brand, import its
 * icon from "simple-icons" (names at simpleicons.org) and add it here. For a
 * wordmark, pass the drawing's bounding box as the viewBox. Brands without a
 * logo still get a text button.
 */
const logos: Record<string, BrandLogo> = {
  Acer: icon(siAcer, "0 9.11 24 5.78", true),
  Apple: icon(siApple, "2.22 0 19.55 24"),
  ASUS: icon(siAsus, "0 9.52 24 4.96", true),
  Dell: icon(siDell),
  HP: icon(siHp),
  Motorola: icon(siMotorola),
  Samsung: icon(siSamsung, "0 10.17 24 3.67", true),
};

export function brandLogo(brand: string): BrandLogo | undefined {
  return logos[brand];
}
