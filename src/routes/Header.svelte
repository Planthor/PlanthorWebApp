<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/logo-planthor.svg";
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src={logo} alt="Planthor" />
    </a>
  </div>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/products" ? "page" : undefined}
      >
        <a href="/products">Products</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
  <nav>
    <ul>
      <li
        aria-current={$page.url.pathname === "/login" ? "page" : undefined}
      >
        <a href="/login">Login</a>
      </li>
      <li aria-current={$page.url.pathname === "/sign-up" ? "page" : undefined}>
        <a href="/sign-up">Sign Up</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    display: flex;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
