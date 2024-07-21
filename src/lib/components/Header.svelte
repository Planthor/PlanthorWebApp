<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { page } from "$app/stores";
  import logo from "$lib/images/planthor-logo.svg";
  import { Button } from "$lib/components/ui/button";
  import "iconify-icon";

  type User = { name: string; id: number } | undefined;
  export let user: User;

  const logout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });
    if (response.ok) {
      invalidateAll();
    }
  };
</script>

<header class="max-w-8xl bg-white border-b lg:border-slate-900/10">
  <div class="flex w-[90%] justify-between mx-auto py-2">
    <a href="/" class="flex items-center justify-center">
      <img src={logo} alt="Planthor" class="w-auto object-contain h-8" />
      <span class="ml-2 text-3xl font-bold">Planthor</span>
    </a>
    <nav class="hidden lg:flex content-between items-center gap-4 bg-white">
      <ul
        class="relative p-0 m-0 h-12 gap-2 flex justify-center align-center list-none
      bg-white bg-contain"
      >
        <li aria-current={$page.url.pathname === "/"}>
          <a href="/">Home</a>
        </li>
        <li aria-current={$page.url.pathname === "/products"}>
          <a href="/products">Products</a>
        </li>
        <li aria-current={$page.url.pathname === "/about"}>
          <a href="/about">About</a>
        </li>
      </ul>
      <div>
        {#if !user}
          <Button
            on:click={() => {
              goto("/api/auth/login");
            }}>Login</Button
          >
        {:else}
          <Button variant="secondary" on:click={logout}>Logout</Button>
        {/if}
      </div>
    </nav>
    <button
      type="button"
      class="flex items-center justify-center lg:hidden"
      on:click={() => {
        console.log("here");
      }}
    >
      <iconify-icon
        icon="ci:hamburger-md"
        style="font-size: 1rem;"
        width="2rem"
        height="2rem"
      />
    </button>
  </div>
</header>

<style lang="postcss">
  ul > li {
    @apply relative;
  }

  nav a {
    @apply flex h-full items-center font-bold tracking-widest no-underline
    transition-colors duration-200 ease-linear hover:text-blue-500;
  }
</style>
