// Generates PNG icons and the Open Graph image without any image dependencies.
// Usage: node scripts/generate-images.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const COLORS = ["#5B5BF0", "#FF6B5B", "#FFC53D", "#2EC4B6", "#9D4EDD", "#FF9F1C", "#5B5BF0", "#FF6B5B", "#FFC53D", "#2EC4B6", "#9D4EDD", "#FF9F1C"];
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const INK = hex("#141625");

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}

/** Returns [r,g,b,a] for a point in a wheel of radius r centered at (0,0), or null if outside. */
function wheelColor(x, y, r, segments) {
  const d = Math.hypot(x, y);
  // Pointer triangle above the wheel
  // Pointer: downward triangle, tip at 0.78r above center, base at 1.15r.
  if (y < -r * 0.78 && y > -r * 1.15 && Math.abs(x) < (r * 0.18 * (-y - r * 0.78)) / (r * 0.37)) return [...INK, 255];
  if (d > r) return null;
  if (d > r * 0.93) return [...INK, 255];
  if (d < r * 0.14) return [...INK, 255];
  if (d < r * 0.2) return [255, 255, 255, 255];
  let a = Math.atan2(x, -y); // clockwise from top
  if (a < 0) a += Math.PI * 2;
  const seg = Math.floor((a / (Math.PI * 2)) * segments);
  // Thin white dividers
  const local = (a / (Math.PI * 2)) * segments - seg;
  if ((local < 0.012 * (r / d) || local > 1 - 0.012 * (r / d)) && segments > 4) return [255, 255, 255, 255];
  return [...hex(COLORS[seg % COLORS.length]), 255];
}

function render(w, h, bg, wheels) {
  const out = Buffer.alloc(w * h * 4);
  const SS = 3;
  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      let R = 0, G = 0, B = 0, A = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = px + (sx + 0.5) / SS;
          const y = py + (sy + 0.5) / SS;
          let c = bg ? bg(x, y) : [0, 0, 0, 0];
          for (const wh of wheels) {
            const hit = wheelColor(x - wh.cx, y - wh.cy, wh.r, wh.segments);
            if (hit) c = hit;
          }
          R += c[0] * c[3]; G += c[1] * c[3]; B += c[2] * c[3]; A += c[3];
        }
      }
      const i = (py * w + px) * 4;
      const n = SS * SS;
      out[i] = A ? R / A : 0;
      out[i + 1] = A ? G / A : 0;
      out[i + 2] = A ? B / A : 0;
      out[i + 3] = A / n;
    }
  }
  return png(w, h, out);
}

const white = () => [255, 255, 255, 255];
for (const size of [192, 512]) {
  writeFileSync(`public/icon-${size}.png`, render(size, size, white, [{ cx: size / 2, cy: size * 0.54, r: size * 0.4, segments: 4 }]));
}
writeFileSync("public/apple-touch-icon.png", render(180, 180, white, [{ cx: 90, cy: 97, r: 70, segments: 4 }]));

// Open Graph: light background, soft brand stripes, large wheel.
const ogBg = (x, y) => {
  const t = y / 630;
  const base = [248 - t * 8, 249 - t * 6, 252, 255];
  if (x < 640 && y > 470 && y < 490 && x > 80) return [...hex("#5B5BF0"), 255];
  if (x < 520 && y > 505 && y < 525 && x > 80) return [...hex("#FF6B5B"), 255];
  if (x < 400 && y > 540 && y < 560 && x > 80) return [...hex("#FFC53D"), 255];
  return base;
};
writeFileSync("public/og.png", render(1200, 630, ogBg, [{ cx: 860, cy: 330, r: 250, segments: 12 }, { cx: 240, cy: 250, r: 150, segments: 6 }]));
console.log("Generated icons and og.png");
