<script>
  export let variant = "primary";
  export let size = "base";
  export let href = null;
</script>

<!-- Default Button -->
{#if !href}
  <button
    class="btn {variant === 'primary' ? 'btn-primary' : ''} {variant ===
    'secondary'
      ? 'btn-secondary'
      : ''} {size === 'sm' ? 'btn-sm' : ''} {size === 'lg' ? 'btn-lg' : ''}"
    on:click
  >
    <slot />
  </button>
{:else}
  <!-- Link Button -->
  <a
    {href}
    class="btn {variant === 'primary' ? 'btn-primary' : ''} {variant ===
    'secondary'
      ? 'btn-secondary'
      : ''} {size === 'sm' ? 'btn-sm' : ''} {size === 'lg' ? 'btn-lg' : ''}"
  >
    <slot />
  </a>
{/if}

<style lang="postcss">
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply text-white bg-indigo-600 hover:bg-blue-500 focus:ring-indigo-500;
  }

  .btn-secondary {
    @apply text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500;
  }

  .btn-sm {
    @apply px-2 py-1 text-sm;
  }

  .btn-lg {
    @apply px-6 py-3 text-lg;
  }
</style>