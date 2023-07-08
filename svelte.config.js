import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess({
      scss: {
        prependData: '@use "src/styles/functions";@use "@unsass/breakpoint";',
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components",
    },
  },
};

export default config;
