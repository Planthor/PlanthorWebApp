<script>
  import { InputField } from "$components";
</script>

<div class="bg-login">
  <h1>Welcome to Planthor</h1>
  <form method="POST">
    <div class="form-row__input">
      <label for="username">Username or Email</label>
      <!-- <input type="text" id="username" /> -->
      <InputField element="input" variant="normal" />
    </div>
    <div class="form-row__input">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

<style lang="scss">
  .bg-login {
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    height: 50vh;
    width: 50%;
  }
</style>
