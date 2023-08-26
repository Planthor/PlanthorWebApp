<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { InputField } from "$components";
  import Button from "$components/Button.svelte";
  import logo from "$lib/images/logo-planthor.svg";
  import type { ActionData } from "./$types";

  export let form: ActionData;
  $: console.log($page.form, $page.status);
</script>

<div class="login-container">
  <div class="login-content bg-login">
    <div class="login-header">
      <div class="logo">
        <a href="/">
          <img src={logo} alt="Planthor" />
        </a>
      </div>
      <h3>Welcome to Planthor</h3>
    </div>
    <form method="POST" action="?/login" use:enhance>
      <div class="form-row__input">
        <label for="username">Username or Email</label>
        <InputField element="input" placeholder="User name" name="username" />
        {#if form?.usernameMissing}
          <p style="color: red; margin:0">Username is required!</p>
        {/if}
      </div>
      <div class="form-row__input">
        <label for="password">Password</label>
        <InputField
          element="input"
          placeholder="Password"
          name="password"
          type="password"
        />
        {#if form?.passwordMissing}
          <p style="color: red; margin:0">Password is required!</p>
        {/if}
      </div>
      <Button element="button" variant="fullwidth">Login</Button>
    </form>
  </div>
</div>

<style lang="scss">
  .login-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    z-index: 2;
    .bg-login {
      background-color: white;

      width: 100%;
      padding: 2rem 5rem;
      border-radius: 0.5rem;
      .form-row__input {
        margin-bottom: 1rem;
        gap: 0.5rem;
      }
    }

    .login-header {
      text-align: center;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          text-align: center;
          object-fit: contain;

          height: 1.5em;
        }
      }
    }
  }
</style>
