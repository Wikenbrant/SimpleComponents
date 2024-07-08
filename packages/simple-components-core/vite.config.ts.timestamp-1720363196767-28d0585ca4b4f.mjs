// vite.config.ts
import { defineConfig } from "file:///G:/Repos/SimpleComponents/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.9/node_modules/vite/dist/node/index.js";
import dts from "file:///G:/Repos/SimpleComponents/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.9_rollup@4.18.0_typescript@5.5.3_vite@5.3.3_@types+node@20.14.9_/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///G:/Repos/SimpleComponents/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.3_vite@5.3.3_@types+node@20.14.9_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import simpleComponents from "file:///G:/Repos/SimpleComponents/packages/simple-components-vite/dist/index.js";
import path from "node:path";
var __vite_injected_original_dirname = "G:\\Repos\\SimpleComponents\\packages\\simple-components-core";
var vite_config_default = defineConfig({
  plugins: [dts({}), tsconfigPaths(), simpleComponents()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: path.resolve(__vite_injected_original_dirname, "lib", "index.ts"),
        "jsx-runtime": path.resolve(__vite_injected_original_dirname, "lib", "jsx-runtime.ts"),
        render: path.resolve(__vite_injected_original_dirname, "lib", "client.ts"),
        reactivity: path.resolve(__vite_injected_original_dirname, "lib", "reactivity.ts"),
        decorators: path.resolve(__vite_injected_original_dirname, "lib", "decorators.ts"),
        hooks: path.resolve(__vite_injected_original_dirname, "lib", "hooks.ts")
      },
      formats: ["es", "cjs"]
    },
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      },
      external: ["@preact/signals-core"]
    }
  }
  // test: {
  //   environment: "jsdom",
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxSZXBvc1xcXFxTaW1wbGVDb21wb25lbnRzXFxcXHBhY2thZ2VzXFxcXHNpbXBsZS1jb21wb25lbnRzLWNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXFJlcG9zXFxcXFNpbXBsZUNvbXBvbmVudHNcXFxccGFja2FnZXNcXFxcc2ltcGxlLWNvbXBvbmVudHMtY29yZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovUmVwb3MvU2ltcGxlQ29tcG9uZW50cy9wYWNrYWdlcy9zaW1wbGUtY29tcG9uZW50cy1jb3JlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBzaW1wbGVDb21wb25lbnRzIGZyb20gXCJAc2ltcGxlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbZHRzKHt9KSwgdHNjb25maWdQYXRocygpLCBzaW1wbGVDb21wb25lbnRzKCldLFxuXG4gIGJ1aWxkOiB7XG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG5cbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiB7XG4gICAgICAgIGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImxpYlwiLCBcImluZGV4LnRzXCIpLFxuICAgICAgICBcImpzeC1ydW50aW1lXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIsIFwianN4LXJ1bnRpbWUudHNcIiksXG4gICAgICAgIHJlbmRlcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJsaWJcIiwgXCJjbGllbnQudHNcIiksXG4gICAgICAgIHJlYWN0aXZpdHk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIsIFwicmVhY3Rpdml0eS50c1wiKSxcbiAgICAgICAgZGVjb3JhdG9yczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJsaWJcIiwgXCJkZWNvcmF0b3JzLnRzXCIpLFxuICAgICAgICBob29rczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJsaWJcIiwgXCJob29rcy50c1wiKSxcbiAgICAgIH0sXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSxcbiAgICB9LFxuXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWluaWZ5SW50ZXJuYWxFeHBvcnRzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogW1wiQHByZWFjdC9zaWduYWxzLWNvcmVcIl0sXG4gICAgfSxcbiAgfSxcblxuICAvLyB0ZXN0OiB7XG4gIC8vICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgLy8gfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VyxTQUFTLG9CQUFvQjtBQUNwWSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztBQUFBLEVBRXRELE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUViLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxRQUNMLE9BQU8sS0FBSyxRQUFRLGtDQUFXLE9BQU8sVUFBVTtBQUFBLFFBQ2hELGVBQWUsS0FBSyxRQUFRLGtDQUFXLE9BQU8sZ0JBQWdCO0FBQUEsUUFDOUQsUUFBUSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxXQUFXO0FBQUEsUUFDbEQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxlQUFlO0FBQUEsUUFDMUQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxlQUFlO0FBQUEsUUFDMUQsT0FBTyxLQUFLLFFBQVEsa0NBQVcsT0FBTyxVQUFVO0FBQUEsTUFDbEQ7QUFBQSxNQUNBLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBRUEsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sdUJBQXVCO0FBQUEsTUFDekI7QUFBQSxNQUNBLFVBQVUsQ0FBQyxzQkFBc0I7QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFLRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
