import preprocess from "svelte-preprocess";
import adapterVercel from "@sveltejs/adapter-vercel";
import adapterNode from "@sveltejs/adapter-node";
import dotenv from 'dotenv'

dotenv.config()

let adapter_selector;
if (process.env.SVELTE_ADAPTER === 'node') {
  adapter_selector = adapterNode();
} else {
  adapter_selector = adapterVercel();
}

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
    adapter: adapter_selector,
    alias: {
      $components: "src/lib/components",
    },
  },
};

export default config;
