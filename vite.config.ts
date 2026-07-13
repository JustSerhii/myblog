import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";


export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      routeFileIgnorePrefix: "-",
      quoteStyle: "single",
    }),
    tailwindcss(),
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [
          [rehypePrettyCode, { theme: "github-dark", keepBackground: true }],
        ],
      }),
    },
    react(),
  ],
});
