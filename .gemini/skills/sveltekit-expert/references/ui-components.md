# UI Component Pattern

## Component Structure
The project follows a modular structure for UI primitives in `src/lib/components/ui/`.

### Directory Layout
Each component (e.g., `button`) lives in its own folder:
- `src/lib/components/ui/button/button.svelte`: The component implementation.
- `src/lib/components/ui/button/index.ts`: Exports the component and its types.

### Example: index.ts
```typescript
import Root from "./button.svelte";
export {
  Root,
  // other sub-components if applicable
  Root as Button,
};
```

### Using Components
Reference components using the `$components` alias.
```svelte
<script lang="ts">
  import * as Card from "$components/ui/card/index.js";
  import Button from "$components/ui/button/button.svelte";
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>
    <Button>Action</Button>
  </Card.Content>
</Card.Root>
```

### Lucide Icons
Use `lucide-svelte` for icons.
```svelte
<script>
  import Plus from "lucide-svelte/icons/plus";
</script>
<Plus />
```
