<script lang="ts">
  import type { PageData } from "./$types.js";
  import * as Card from "$components/ui/card/index.js";
  import Button from "$components/ui/button/button.svelte";
  import Plus from "lucide-svelte/icons/plus";
  import { goto } from "$app/navigation";

  export let data: PageData;
</script>

<div class="flex justify-end mb-8">
  <form action="/goals/create">
    <Button type="submit">
      <Plus />
      New Goal</Button
    >
  </form>
</div>

{#each data.goalDB as item}
  <div>
    <Card.Root class="mb-8 hover:cursor-pointer">
      <Card.Header>
        <Card.Title>{item.goalname}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Goal Content</p>
      </Card.Content>
      <Card.Footer class="flex justify-end">
        <Button
          type="button"
          on:click={() => {
            goto(`goals/${item.goalId}`);
          }}>Edit</Button
        >
      </Card.Footer>
    </Card.Root>
  </div>
{/each}
