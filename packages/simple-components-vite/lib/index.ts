import type { Plugin } from "vite";
const simpleComponent = (): Plugin => {
  return {
    name: "simple-component",
    config() {
      return {
        esbuild: {
          jsx: "transform",
          jsxDev: true,
          jsxImportSource: "@simple-components/core",
          jsxInject: `import { h, Fragment } from '@simple-components/core/jsx-runtime'`,
          jsxFactory: `h`,
          jsxFragment: `Fragment`,
        },
      };
    },
  };
};

export default simpleComponent;
