// setupTest.ts
/* eslint-disable @typescript-eslint/no-empty-function */
import type { Navigation } from "@sveltejs/kit";
import { readable, type Subscriber } from "svelte/store";
import { vi } from "vitest";

// Mock SvelteKit runtime module $app/environment
vi.mock("$app/environment", () => ({
  browser: false,
  dev: true,
  prerendering: false,
}));

// Mock SvelteKit runtime module $app/navigation
vi.mock("$app/navigation", () => ({
  afterNavigate: () => {},
  beforeNavigate: () => {},
  disableScrollHandling: () => {},
  goto: () => Promise.resolve(),
  invalidate: () => Promise.resolve(),
  invalidateAll: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
  prefetchRoutes: () => Promise.resolve(),
}));

// Mock SvelteKit runtime module $app/stores
vi.mock("$app/stores", () => {
  const getStores = () => {
    const navigating = readable<Navigation | null>(null);
    const page = readable({
      url: new URL("http://localhost"),
      params: {},
      routeId: null,
      status: 200,
      error: null,
      data: {},
    });
    const updated = {
      subscribe: readable(false).subscribe,
      check: () => false,
    };

    return { navigating, page, updated };
  };

  const page = {
    subscribe(
      fn: Subscriber<{
        url: URL;
        params: object;
        routeId: null;
        status: number;
        error: null;
        data: object;
      }>
    ) {
      return getStores().page.subscribe(fn);
    },
  };
  const navigating = {
    subscribe(fn: Subscriber<Navigation | null>) {
      return getStores().navigating.subscribe(fn);
    },
  };
  const updated = {
    subscribe(fn: Subscriber<boolean>) {
      return getStores().updated.subscribe(fn);
    },
    check: async () => false,
  };

  return {
    getStores,
    navigating,
    page,
    updated,
  };
});
