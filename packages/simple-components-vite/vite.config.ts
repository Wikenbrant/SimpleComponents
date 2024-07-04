import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [dts({}), tsconfigPaths()],

  build: {
    lib: {
      entry: [path.resolve(__dirname, "lib", "index.ts")],
      formats: ["es", "cjs"],
    },

    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
      // external: ["path"],
    },
  },
});
