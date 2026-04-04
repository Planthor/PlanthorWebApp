import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { svelteTesting } from "@testing-library/svelte/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteTesting({
      autoCleanup: true,
      resolveBrowser: true,
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
      all: true,
      include: ["src/lib/**"],
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
        "src/lib/images/**",
        // UI primitives from shadcn-svelte — covered by their own upstream tests
        "src/lib/components/ui/calendar/**",
        "src/lib/components/ui/popover/**",
        "src/lib/components/ui/select/**",
        "src/lib/components/ui/sonner/**",
        "src/lib/components/ui/form/**",
        // Barrel index files — just re-exports, no logic
        "**/ui/*/index.ts",
        "src/lib/components/index.ts",
        // Test infrastructure — not production code
        "src/lib/test-utils.ts",
      ],
      reporter: ["json", "json-summary", "html", "lcov", "text"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
