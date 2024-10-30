/// <reference types="vitest" />
import { defineConfig } from "vite";
// import path from "node:path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest-setup.ts"],
  },
  // resolve: {
  //   alias: {
  //     "@ui": path.resolve(__dirname, "./src/ui"),
  //     // "@components": path.resolve(__dirname, "./src/components"),
  //   },
  // },
  // aliases
  // tests
});
