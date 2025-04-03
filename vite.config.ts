import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
      preview: {allowedHosts: [" berkompeten.id\, \www.berkompeten.id\]\n },\n},
    preview: {allowedHosts: [" berkompeten.id\, \www.berkompeten.id\]\n },\n},
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      preview: {allowedHosts: [" berkompeten.id\, \www.berkompeten.id\]\n },\n},
    preview: {allowedHosts: [" berkompeten.id\, \www.berkompeten.id\]\n },\n},
});
