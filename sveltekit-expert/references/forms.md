# Forms and Validation

## Superforms + Zod
The project uses `sveltekit-superforms` and `zod` for all form handling.

### 1. Define Schema
Define your Zod schema in a logic file (e.g., `src/lib/goals.ts`).
```typescript
import { z } from "zod";
export const mySchema = z.object({
  name: z.string().min(2),
  count: z.number().default(0)
});
```

### 2. Server-side Initialization
In `+page.server.ts`:
```typescript
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { mySchema } from "$lib/my-logic";

export const load = async () => {
  const form = await superValidate(zod(mySchema));
  return { form };
};
```

### 3. Client-side Usage
In `+page.svelte` or a component:
```svelte
<script lang="ts">
  import { superForm } from "sveltekit-superforms";
  export let data;
  const { form, errors, enhance } = superForm(data.form);
</script>

<form use:enhance method="POST">
  <input name="name" bind:value={$form.name} />
  {#if $errors.name}<span class="text-red-500">{$errors.name}</span>{/if}
  <button type="submit">Submit</button>
</form>
```
