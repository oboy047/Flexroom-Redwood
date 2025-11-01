import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: {
        name: "worker",
        // @ts-ignore - Cloudflare runtime støtter dette, men typene er ikke oppdatert ennå
        compatibilityFlags: ["react_server_components"],
      },
    }),
    redwood(),
  ],
});
