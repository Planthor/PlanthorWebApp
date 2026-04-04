# SvelteKit Routing & Logic

## Directory Structure
- `src/routes/[id]/+page.svelte`: Frontend component for the route.
- `src/routes/[id]/+page.server.ts`: Server-side load functions and actions.
- `src/routes/[id]/goal-form.svelte`: Shared form component.

## Load Functions
Prefer `PageServerLoad` when data fetching requires server-side logic or secrets.
```typescript
import { goalDB } from "$lib/goals";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return { goalDB };
};
```

## Actions
Use SvelteKit actions for form submissions.
```typescript
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    // process form data
  }
};
```
