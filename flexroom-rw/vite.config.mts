import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

// Detect local Windows dev environment
const isWindowsDev = process.platform === "win32" && process.env.NODE_ENV !== "production";

export default defineConfig({
  define: {
    global: {}, // ✅ polyfill WeakRef/global scope issues
  },
  plugins: [
    // ✅ Only load Cloudflare plugin if NOT on Windows dev
    !isWindowsDev &&
      cloudflare({
        viteEnvironment: { name: "worker" },
      }),
    redwood(),
    tailwindcss(),
  ].filter(Boolean),
  server: {
    hmr: { overlay: false },
  },
});
