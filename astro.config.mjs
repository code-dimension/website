import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { siteConfig } from "./site-config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // estilos são aplicados em GlobalStyles.astro
    tailwind({ applyBaseStyles: false }),
  ],
  site: siteConfig.url,
});
