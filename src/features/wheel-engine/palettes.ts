export interface Palette {
  id: string;
  name: string;
  colors: string[];
}

export const PALETTES: Palette[] = [
  { id: "whirl", name: "Whirl", colors: ["#5B5BF0", "#FF6B5B", "#FFC53D", "#2EC4B6", "#9D4EDD", "#FF9F1C"] },
  { id: "candy", name: "Candy", colors: ["#FF7AA2", "#FFB86B", "#FFE66D", "#7BE0AD", "#6EC3FF", "#B69CFF"] },
  { id: "classic", name: "Classic", colors: ["#E63946", "#F4A261", "#E9C46A", "#2A9D8F", "#264653", "#8338EC"] },
  { id: "ocean", name: "Ocean", colors: ["#03045E", "#0077B6", "#00B4D8", "#48CAE4", "#90E0EF", "#0096C7"] },
  { id: "forest", name: "Forest", colors: ["#2D6A4F", "#40916C", "#52B788", "#74C69D", "#95D5B2", "#1B4332"] },
  { id: "sunset", name: "Sunset", colors: ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#F9844A", "#E76F51"] },
  { id: "berry", name: "Berry", colors: ["#7B2CBF", "#9D4EDD", "#C77DFF", "#E0AAFF", "#5A189A", "#3C096C"] },
  { id: "pastel", name: "Pastel", colors: ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#BDB2FF"] },
  { id: "neon", name: "Neon", colors: ["#FF00A8", "#00F5D4", "#FEE440", "#9B5DE5", "#00BBF9", "#F15BB5"] },
  { id: "earth", name: "Earth", colors: ["#7F5539", "#9C6644", "#B08968", "#DDB892", "#E6CCB2", "#606C38"] },
  { id: "mono", name: "Monochrome", colors: ["#111827", "#374151", "#6B7280", "#9CA3AF", "#D1D5DB", "#4B5563"] },
  { id: "school", name: "Schoolhouse", colors: ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C", "#F78C6B"] },
  { id: "citrus", name: "Citrus", colors: ["#FFBE0B", "#FB5607", "#FF006E", "#8AC926", "#FFCA3A", "#FF924C"] },
  { id: "mint", name: "Mint Chip", colors: ["#B7E4C7", "#95D5B2", "#74C69D", "#52B788", "#2D6A4F", "#D8F3DC"] },
  { id: "royal", name: "Royal", colors: ["#1D3557", "#457B9D", "#A8DADC", "#E63946", "#F1FAEE", "#2B2D42"] },
  { id: "retro", name: "Retro", colors: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51", "#8AB17D"] },
  { id: "holiday", name: "Holiday", colors: ["#C1121F", "#2D6A4F", "#FDF0D5", "#780000", "#40916C", "#E9C46A"] },
  { id: "spring", name: "Spring", colors: ["#F72585", "#B5179E", "#7209B7", "#4CC9F0", "#4895EF", "#F6BD60"] },
  { id: "coffee", name: "Coffee", colors: ["#6F4E37", "#A67B5B", "#C8A27A", "#ECE0D1", "#3E2723", "#8D6E63"] },
  { id: "arcade", name: "Arcade", colors: ["#3A0CA3", "#F72585", "#4CC9F0", "#FFD60A", "#06D6A0", "#EF233C"] },
  { id: "sport", name: "Team Spirit", colors: ["#0B3D91", "#C8102E", "#FFFFFF", "#FFB612", "#00843D", "#4B2E83"] },
  { id: "gold", name: "Prize Gold", colors: ["#B8860B", "#FFD700", "#7F1D1D", "#FACC15", "#991B1B", "#CA8A04"] },
  { id: "rainbow", name: "Rainbow", colors: ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787"] },
  { id: "cool", name: "Cool Breeze", colors: ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241", "#5FA8D3"] },
];

export const DEFAULT_PALETTE_ID = "whirl";

export function getPalette(id: string): Palette {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}

/** Relative luminance (WCAG) of a #rrggbb color. */
export function luminance(hex: string): number {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return 0.5;
  const n = parseInt(m[1], 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}

/** Black or white, whichever has more contrast with the background. */
export function contrastText(bg: string): string {
  const L = luminance(bg);
  return (L + 0.05) / 0.05 > 1.05 / (L + 0.05) ? "#111111" : "#FFFFFF";
}

/**
 * Picks a segment color so that neighbors differ, including the wrap-around
 * between the last and first segment when the count isn't a multiple of the palette size.
 */
export function segmentColor(colors: string[], index: number, count: number): string {
  const len = colors.length;
  if (count > 1 && count % len === 1 && index === count - 1) {
    return colors[Math.floor(len / 2)];
  }
  return colors[index % len];
}
