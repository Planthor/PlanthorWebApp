<script lang="ts">
  import { page } from "$app/stores";
  import Header from "../lib/components/Header.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import "../app.css";
</script>

{#if $page.url.pathname === "/login"}
  <div class="background login-wrapper"><slot /></div>
{/if}

<div class="container">
  {#if $page.url.pathname !== "/login"}
    <Header />

    <main class="content mx-auto w-[90%] xl:w-[1250px] max-h-full lg:h-full">
      <slot />
    </main>

    <footer class="footer w-full bg-black bottom-0">
      <div class="h-12 mx-auto w-[90%] flex items-center">
        <p class="text-white">Copyright @2024 Planthor</p>
      </div>
    </footer>
  {/if}
</div>
<svelte:head>
  <title>Planthor{$page.data.title ? ` - ${$page.data.title}` : ""}</title>
</svelte:head>
<Toaster />
