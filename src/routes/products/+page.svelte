<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { goto } from "$app/navigation";
</script>

<div class="mx-auto w-2/4 min-w-0 lg:py-8">
  <Button on:click={() => goto("/products/create")}>Create Goal</Button>
</div>
