import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cn"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    },
    fallback: {
      cn: "en"
    }
  },
  integrations: [icon()],
  site: "https://aolotto.com",
  trailingSlash: 'ignore'
});