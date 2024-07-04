import { defineConfig } from "vite";
import simpleComponent from "@simple-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [simpleComponent()],

  build: {
    minify: false,
  },
});
