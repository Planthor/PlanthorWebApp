<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type Element = $$Generic<"input">;

  interface InputFieldComponentElements {
    input: HTMLInputAttributes;
  }

  type $$Props = InputFieldComponentElements[Element] & {
    element: Element;
    variant?: "text" | "textarea";
    className?: string;
    value?: string;
    placeholder: string;
  };

  export let element: Element;
  export let className: string = "";
</script>

<svelte:element
  this={element}
  class="default-input {className}"
  {...$$restProps}
/>

<style lang="scss">
  .default-input {
    padding: 0.5rem 0.7rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: $color-grey-900;
    background: #fff;
    border: 1px solid $color-grey-200;
    box-shadow: 0px 2px 24px $color-blue-100;
    &:hover {
      border-color: $color-blue-400;
    }
    &:focus {
      border-color: $color-blue-400;
      box-shadow: 0 0 0 3px $color-blue-200;
    }
    &:focus-visible {
      outline: 0;
    }
  }
</style>
