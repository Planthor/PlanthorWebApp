import adapterNode from "@sveltejs/adapter-node";
import adapterVercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapterNetlify from "@sveltejs/adapter-netlify";
import dotenv from "dotenv";

dotenv.config();

let adapter_selector;
if (process.env.SVELTE_ADAPTER === "node") {
  adapter_selector = adapterNode();
} else if (process.env.SVELTE_ADAPTER === "netlify") {
  adapter_selector = adapterNetlify();
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