<script lang="ts">
  import { page } from "$app/stores";
  import Header from "../lib/components/Header.svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

{#if $page.url.pathname === "/login"}
  <div class="background login-wrapper"><slot /></div>
{/if}

{#if $page.url.pathname !== "/login"}
  <Header user={data.user} />

  <main class="mx-auto w-[90%] max-h-full">
    <slot />
  </main>

  <footer class="w-full bg-black fixed bottom-0">
    <div class="h-12 mx-auto w-[90%] flex items-center">
      <p class="text-white">Copyright @2024 Planthor</p>
    </div>
  </footer>
{/if}

<svelte:head>
  <title>Planthor{$page.data.title ? ` - ${$page.data.title}` : ""}</title>
</svelte:head>