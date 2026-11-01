import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// Kept separate from vite.config.ts so unit tests don't load the vinext/Cloudflare plugins.
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
});
