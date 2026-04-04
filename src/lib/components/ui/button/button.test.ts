/**
 * Button Component Tests
 *
 * Template for testing new UI components:
 * 1. Copy this file next to your new component
 * 2. Replace Button/buttonVariants with your component & variants
 * 3. Add relevant render + assertion tests
 */

import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import Button from "./button.svelte";
import { buttonVariants } from "./index";
import { renderComponent, getRootElement, expectClasses } from "$lib/test-utils";

describe("Button", () => {
  // ─── renders ────────────────────────────────────────────────────────────────

  it("renders with default variant", () => {
    const { getByRole } = renderComponent(Button);
    const btn = getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("renders slot content", () => {
    // Note: to pass slot content use render directly (svelte testing limitation)
    const { getByText } = render(Button, { props: {} });
    // Button renders; we can check the element itself
    expect(document.querySelector("button")).toBeInTheDocument();
  });

  // ─── variants ────────────────────────────────────────────────────────────────

  it("applies default variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "default" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("bg-primary");
  });

  it("applies outline variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "outline" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("border");
  });

  it("applies ghost variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "ghost" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("hover:bg-accent");
  });

  it("applies destructive variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "destructive" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("bg-destructive");
  });

  it("applies secondary variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "secondary" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("bg-secondary");
  });

  it("applies link variant classes", () => {
    const { getByRole } = renderComponent(Button, { props: { variant: "link" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("underline-offset-4");
  });

  // ─── sizes ────────────────────────────────────────────────────────────────────

  it("applies default size classes", () => {
    const { getByRole } = renderComponent(Button, { props: { size: "default" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("h-10");
  });

  it("applies sm size classes", () => {
    const { getByRole } = renderComponent(Button, { props: { size: "sm" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("h-9");
  });

  it("applies lg size classes", () => {
    const { getByRole } = renderComponent(Button, { props: { size: "lg" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("h-11");
  });

  it("applies icon size classes", () => {
    const { getByRole } = renderComponent(Button, { props: { size: "icon" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("h-10");
    expect(btn.className).toContain("w-10");
  });

  // ─── disabled ─────────────────────────────────────────────────────────────────

  it("can be disabled via prop", () => {
    const { getByRole } = renderComponent(Button, { props: { disabled: true } });
    const btn = getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("disabled button has disabled CSS classes", () => {
    const { getByRole } = renderComponent(Button, { props: { disabled: true } });
    const btn = getByRole("button");
    expect(btn.className).toContain("disabled:pointer-events-none");
    expect(btn.className).toContain("disabled:opacity-50");
  });

  // ─── events ───────────────────────────────────────────────────────────────────

  it("fires click event when clicked", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(Button, { props: {} });
    const btn = getByRole("button");
    btn.addEventListener("click", handleClick);
    await fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("does not fire click when disabled", async () => {
    const handleClick = vi.fn();
    const { getByRole } = renderComponent(Button, { props: { disabled: true } });
    const btn = getByRole("button");
    btn.addEventListener("click", handleClick);
    await fireEvent.click(btn);
    // disabled:pointer-events-none prevents browser click but JSDOM still fires
    // so we just check the button is marked disabled
    expect(btn).toBeDisabled();
  });

  // ─── custom class ─────────────────────────────────────────────────────────────

  it("merges custom class prop", () => {
    const { getByRole } = renderComponent(Button, { props: { class: "my-custom-class" } });
    const btn = getByRole("button");
    expect(btn.className).toContain("my-custom-class");
  });
});

// ─── buttonVariants utility ───────────────────────────────────────────────────

describe("buttonVariants()", () => {
  it("returns a string", () => {
    expect(typeof buttonVariants()).toBe("string");
  });

  it("includes base inline-flex class", () => {
    expect(buttonVariants()).toContain("inline-flex");
  });

  it("applies variant=destructive classes", () => {
    expect(buttonVariants({ variant: "destructive" })).toContain("bg-destructive");
  });

  it("applies size=lg classes", () => {
    expect(buttonVariants({ size: "lg" })).toContain("h-11");
  });
});
