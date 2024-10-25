import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { siteConfig } from "./site-config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
  // estilos são aplicados em GlobalStyles.astro
  tailwind({
    applyBaseStyles: false
  }), sitemap()],
  site: siteConfig.url
});