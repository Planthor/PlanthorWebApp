<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import logo from "$lib/images/planthor-logo.svg";
  import { Button } from "$lib/components/ui/button";
  import "iconify-icon";

  type User = { name: string; id: number } | undefined;
  export let user: User;

  let isNavOpen = false;

  const toggleNav = () => {
    isNavOpen = !isNavOpen;
  };

  const navigateAndClose = (href: string) => {
    isNavOpen = false;
    goto(href);
  };
</script>

<header class="max-w-8xl bg-white border-b lg:border-slate-900/10">
  <div class="flex w-[90%] justify-between mx-auto lg:py-2 py-[2.125rem]">
    <a href="/" class="flex items-center justify-center">
      <img
        src={logo}
        alt="planthor-md-logo"
        class="w-auto object-contain h-8"
      />
      <span class="ml-2 text-3xl font-bold">Planthor</span>
    </a>
    <nav class="hidden lg:flex content-between items-center gap-4 bg-white">
      <ul
        class="relative p-0 m-0 h-12 gap-2 flex justify-center align-center list-none
      bg-white bg-contain"
      >
        {#each ["Home", "Products", "About"] as item}
          {@const href = item === "Home" ? "/" : `/${item.toLowerCase()}`}
          <li>
            <a {href} class="font-bold">
              {item}
            </a>
          </li>
        {/each}
      </ul>
      <!-- <div> -->
      <!--   {#if !user} -->
      <!--     <Button>Login</Button> -->
      <!--   {:else} -->
      <!--     <Button variant="secondary">Logout</Button> -->
      <!--   {/if} -->
      <!-- </div> -->
    </nav>
    <button
      name="hamburger-menu-icon"
      type="button"
      class="flex items-center justify-center lg:hidden"
      on:click={toggleNav}
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
<div
  class="fixed inset-0 z-50 overflow-hidden lg:hidden transition-opacity duration-150 ease-in-out {isNavOpen
    ? 'opacity-100 pointer-events-auto'
    : 'opacity-0 pointer-events-none'}"
>
  <div class="absolute inset-0 bg-slate-900/25 backdrop-blur-sm">
    <div class="fixed inset-0 flex items-start justify-end overflow-y-auto">
      <div
        class="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition-transform duration-150 ease-in-out transform {isNavOpen
          ? 'translate-x-0'
          : 'translate-x-full'}"
      >
        <button
          type="button"
          class="absolute right-6 top-5 flex h-8 w-8 items-center justify-center"
          on:click={toggleNav}
        >
          <iconify-icon icon="ic:round-close" width="2rem" height="2rem" />
        </button>
        <nav
          class="divide-y divide-slate-900/10 text-base leading-7 text-slate-900"
        >
          <div class="px-8 py-6">
            <img
              src={logo}
              alt="planthor-sm-logo"
              class="w-auto object-contain h-8"
            />
          </div>
          <div class="px-8 py-6">
            <div class="-my-2 items-start space-y-2">
              <ul class="-my-2 items-start space-y-2">
                {#each ["Home", "Products", "About"] as item}
                  {@const href =
                    item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  <li>
                    <a
                      {href}
                      class="w-full py-2 font-semibold"
                      on:click|preventDefault={() => navigateAndClose(href)}
                    >
                      {item}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
          <!-- <div class="px-7 py-6"> -->
          <!--   {#if !user} -->
          <!--     <a class="w-full py-2 font-semibold" href="#"> Sign in </a> -->
          <!--   {:else} -->
          <!--     <a class="w-full py-2 font-semibold" href="#"> Sign out</a> -->
          <!--   {/if} -->
          <!-- </div> -->
        </nav>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  ul > li {
    @apply relative;
  }

  nav a {
    @apply flex h-full items-center tracking-widest no-underline
    transition-colors duration-200 ease-linear hover:text-blue-500;
  }
</style>