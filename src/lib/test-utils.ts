/**
 * Planthor Test Utilities
 *
 * A central helper module that makes it easy to render and test any
 * Svelte component consistently across the project.
 *
 * Usage:
 *   import { renderComponent } from '$lib/test-utils';
 *
 * When adding a new component, simply import it and call renderComponent(MyComponent).
 */

import { render } from "@testing-library/svelte";
import { expect } from "vitest";

// ─── Types ────────────────────────────────────────────────────────────────────

export type RenderOptions = {
  /** Props to pass directly to the component */
  props?: Record<string, unknown>;
};

// ─── Core Helpers ─────────────────────────────────────────────────────────────

/**
 * Renders a Svelte component and returns all Testing Library queries.
 *
 * @example
 * const { getByText } = renderComponent(Button, { props: { variant: 'outline' } });
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderComponent(Component: any, options: RenderOptions = {}): any {
  return render(Component, options.props ?? {});
}

/**
 * Returns the root DOM element rendered by the component.
 * Useful for checking classes, data-attributes, etc.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRootElement(result: any): Element {
  const el = result.container.firstElementChild;
  if (!el) throw new Error("No root element found in rendered component");
  return el;
}

// ─── Assertion Helpers ────────────────────────────────────────────────────────

/**
 * Asserts that an element has the given class(es).
 *
 * @example
 * expectClasses(element, ['flex', 'items-center']);
 */
export function expectClasses(element: Element, classes: string[]): void {
  for (const cls of classes) {
    expect(element.classList.contains(cls)).toBe(true);
  }
}

/**
 * Asserts that an element renders a slot/child text correctly.
 */
export function expectText(element: Element, text: string): void {
  expect(element.textContent?.trim()).toContain(text);
}
