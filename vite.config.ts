import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import Icons from "unplugin-icons/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    Icons({ autoInstall: true, compiler: "vue3" }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
