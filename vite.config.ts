import { defineConfig } from "vite";
// import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@ui": path.resolve(__dirname, "./src/ui"),
  //     // "@components": path.resolve(__dirname, "./src/components"),
  //   },
  // },
  // aliases
  // tests
});
