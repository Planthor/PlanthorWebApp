<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type Element = $$Generic<"input">;

  interface InputFieldComponentElements {
    input: HTMLInputAttributes;
  }

  type $$Props = InputFieldComponentElements[Element] & {
    element: Element;
    variant?: "normal";
    className?: string;
  };

  export let element: Element;
  // export let variant: "normal";
  export let className: string = "";
</script>

<svelte:element this={element} class={className}>
  <slot />
</svelte:element>
