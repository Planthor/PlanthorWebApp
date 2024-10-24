<script lang="ts">
  import type { PageData } from "./$types";
  import GoalForm from "./goal-form.svelte";

  export let data: PageData;
</script>

<GoalForm bind:data={data.form} />
