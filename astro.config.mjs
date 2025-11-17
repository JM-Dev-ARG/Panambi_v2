// @ts-ignore
import { defineConfig } from "astro/config";
/* import node from "@astrojs/node"; */
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://panambi.net',
  integrations: [sitemap()],

  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
