/// <reference types="vitest" />
import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { compilerOptions } from "./tsconfig.json";

const sanitizeAlias = (val: string): string => val.replace("/*", "");

const alias = Object.entries(compilerOptions.paths).reduce(
  (acc, [key, value]) => {
    acc[sanitizeAlias(key)] = sanitizeAlias(join(__dirname, value[0]));
    return acc;
  },
  {}
);

console.log({ alias });


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
  },
});
