import type { SVGProps } from "react";

const paths = {
  "arrow-right": "M4 12h16m-6-6 6 6-6 6",
  "arrow-up-right": "M6 18 18 6M6 6h12v12",
  "arrow-down": "M12 4v16m-6-6 6 6 6-6",
  check: "m5 12 4 4L19 6",
  close: "m6 6 12 12M6 18 18 6",
  search: "M21 21l-5-5M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0",
  monitor: "M3 4h18v13H3zM12 17v4m-4 0h8",
  laptop: "M5 4h14v12H5zM2 20h20l-3-4H5z",
  gpu: "M3 5h18v13H3zM7 18v3m4-3v3m4-3v3M8 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m9 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  desktop: "M6 2h12v20H6zM9 6h6m-6 4h6m-3 6v1",
  gadgets: "M6 3h12v18H6zM9 7h6m-6 4h6m-3 5v1",
  helmet: "M3 14a9 9 0 0 1 18 0v5H9l-6-5zm0 0h9v5",
  compare: "M4 4h6v16H4zM14 4h6v16h-6z",
  sparkle: "m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8z",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3zm-4 9 3 3 5-6",
  bookmark: "M6 3h12v18l-6-4-6 4z",
  menu: "M4 6h16M4 12h16M4 18h16",
  plus: "M12 5v14M5 12h14",
} as const;

export type IconName = keyof typeof paths;
export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
