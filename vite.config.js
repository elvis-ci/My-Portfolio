import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: "https://your-domain.com",
      routes: [
        {
          path: "/", // Homepage
          priority: 1.0, // Most important
          changefreq: "monthly",
        },
        {
          path: "/resume",
          priority: 0.9,
          changefreq: "monthly",
        },
        {
          path: "/portfolio",
          priority: 0.8,
          changefreq: "monthly",
        },
        {
          path: "/blog",
          priority: 0.6,
          changefreq: "monthly",
        },
        {
          path: "/contact",
          priority: 0.7,
          changefreq: "monthly",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
