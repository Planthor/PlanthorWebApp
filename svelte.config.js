import preprocess from "svelte-preprocess";
import adapterVercel from "@sveltejs/adapter-vercel";
import adapterNode from "@sveltejs/adapter-node";
import dotenv from 'dotenv'

dotenv.config()

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      prependData: '@use "src/styles/functions"; @import "src/styles/colors";',
    },
  }),

  kit: {
    adapter: process.env.SVELTE_ADAPTER === 'node'
    ? adapterNode()
    : adapterVercel(),
    alias: {
      $components: "src/lib/components",
    },
  },
};

export default config;
