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
    sentry({
      dsn: "https://ce95855eb081b6a3f6711a15374a279a@o4509015588864000.ingest.us.sentry.io/4509024436158464",
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: "website",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  site: siteConfig.url,
});