import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { svelteTesting } from "@testing-library/svelte/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteTesting({
      autoCleanup: false,
      resolveBrowser: false,
    }),
  ],

  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{test,spec}.ts"],
    setupFiles: ["src/setupTest.ts"],

    coverage: {
      enabled: true,
      provider: "v8",
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/.vercel/**",
        "**/svelte.config.js/**",
        "**/.eslintrc.cjs/**",
        "**/.{idea,git,cache,output,temp,svelte-kit}/**",
        "src/routes/**",
        "src/routes/**.server.ts",
        "src/hooks.server.ts",
        "**/postcss.config.js/**",
        "**/tailwind.config.js/**",
        "setupTest.ts",
      ],
      reporter: ["json", "json-summary", "html", "lcov", "text"],
    },
  },
});
