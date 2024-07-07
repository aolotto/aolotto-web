import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["cn", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      cn : "en"
    }
  },
  integrations: [tailwind()],
  site: "https://aolotto.com"
});