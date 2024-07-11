import adapterNode from "@sveltejs/adapter-node";
import adapterVercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import dotenv from "dotenv";
import preprocess from "svelte-preprocess";

dotenv.config();

let adapter_selector;
if (process.env.SVELTE_ADAPTER === "node") {
  adapter_selector = adapterNode();
} else {
  adapter_selector = adapterVercel();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter_selector,
    alias: {
      $components: "src/lib/components",
    },
  },
};

export default config;