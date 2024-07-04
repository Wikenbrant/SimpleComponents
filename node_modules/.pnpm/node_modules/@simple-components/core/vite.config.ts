import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import simpleComponents from "@simple-components/vite";
import path from "node:path";

export default defineConfig({
  plugins: [dts({}), tsconfigPaths(), simpleComponents()],

  build: {
    emptyOutDir: true,

    lib: {
      entry: {
        index: path.resolve(__dirname, "lib", "index.ts"),
        "jsx-runtime": path.resolve(__dirname, "lib", "jsx-runtime.ts"),
        render: path.resolve(__dirname, "lib", "render.ts"),
        reactivity: path.resolve(__dirname, "lib", "reactivity.ts"),
        decorators: path.resolve(__dirname, "lib", "decorators.ts"),
        hooks: path.resolve(__dirname, "lib", "hooks.ts"),
      },
      formats: ["es", "cjs"],
    },

    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
      external: ["@preact/signals-core"],
    },
  },

  // test: {
  //   environment: "jsdom",
  // },
});
