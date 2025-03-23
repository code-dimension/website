import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { siteConfig } from "./site-config";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // estilos são aplicados em GlobalStyles.astro
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    sentry(),
  ],
  site: siteConfig.url,
});