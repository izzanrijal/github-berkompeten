import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: ["berkompeten.id", "www.berkompeten.id", "localhost"],
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["berkompeten.id", "www.berkompeten.id", "localhost"]
  }
});
