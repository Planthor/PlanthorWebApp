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
  <div class="app">
    <Header user={data.user} />

    <main>
      <slot />
    </main>

    <footer>
      <p>
        visit <a
          href="https://github.com/Planthor-Team/Planthor_ClientFrontEndWebApp"
          >Planthor</a
        > to Discover
      </p>
    </footer>
  </div>
{/if}

<svelte:head>
  <title>Planthor{$page.data.title ? ` - ${$page.data.title}` : ""}</title>
</svelte:head>