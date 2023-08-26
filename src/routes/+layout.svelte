<script>
  import { page } from "$app/stores";
  import "../app.postcss";
  import Header from "./Header.svelte";
  import "./styles.scss";
  import "../styles/common.scss";
</script>

{#if $page.url.pathname === "/login"}
  <div class="background login-wrapper"><slot /></div>
{/if}

{#if $page.url.pathname !== "/login"}
  <div class="app">
    <Header />

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

<style lang="scss">
  .background {
    background-image: linear-gradient(to right, #141e30, #243b55);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  .login-wrapper {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
