<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
</script>

<div class="flex justify-end mx-auto w-2/4 min-w-0 lg:py-8">
  <Button
    on:click={() => {
      goto("goals/create");
    }}>Create Goal</Button
  >
</div>
