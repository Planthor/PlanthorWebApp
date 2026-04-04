/**
 * Card Component Tests
 *
 * Covers Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
 *
 * Template: copy this pattern for any composite UI component.
 */

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import Card from "./card.svelte";
import CardHeader from "./card-header.svelte";
import CardTitle from "./card-title.svelte";
import CardDescription from "./card-description.svelte";
import CardContent from "./card-content.svelte";
import CardFooter from "./card-footer.svelte";
import { renderComponent } from "$lib/test-utils";

// ─── Card ─────────────────────────────────────────────────────────────────────

describe("Card", () => {
  it("renders a div element", () => {
    const { container } = renderComponent(Card);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("includes base card classes", () => {
    const { container } = renderComponent(Card);
    const el = container.firstElementChild;
    expect(el?.className).toContain("rounded-lg");
    expect(el?.className).toContain("border");
    expect(el?.className).toContain("shadow-sm");
  });

  it("merges additional class prop", () => {
    const { container } = renderComponent(Card, { props: { class: "extra-class" } });
    expect(container.firstElementChild?.className).toContain("extra-class");
  });
});

// ─── CardHeader ───────────────────────────────────────────────────────────────

describe("CardHeader", () => {
  it("renders a div with padding classes", () => {
    const { container } = renderComponent(CardHeader);
    const el = container.firstElementChild;
    expect(el).toBeInTheDocument();
    expect(el?.className).toContain("p-6");
  });

  it("merges additional class prop", () => {
    const { container } = renderComponent(CardHeader, { props: { class: "custom-header" } });
    expect(container.firstElementChild?.className).toContain("custom-header");
  });
});

// ─── CardTitle ────────────────────────────────────────────────────────────────

describe("CardTitle", () => {
  it("renders as h3 by default", () => {
    const { container } = renderComponent(CardTitle);
    expect(container.querySelector("h3")).toBeInTheDocument();
  });

  it("renders as a custom tag when specified", () => {
    const { container } = renderComponent(CardTitle, { props: { tag: "h1" } });
    expect(container.querySelector("h1")).toBeInTheDocument();
  });

  it("includes font-semibold class", () => {
    const { container } = renderComponent(CardTitle);
    const el = container.firstElementChild;
    expect(el?.className).toContain("font-semibold");
  });
});

// ─── CardDescription ──────────────────────────────────────────────────────────

describe("CardDescription", () => {
  it("renders a paragraph element", () => {
    const { container } = renderComponent(CardDescription);
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  it("includes muted text classes", () => {
    const { container } = renderComponent(CardDescription);
    const el = container.firstElementChild;
    expect(el?.className).toContain("text-muted-foreground");
  });
});

// ─── CardContent ──────────────────────────────────────────────────────────────

describe("CardContent", () => {
  it("renders a div with padding", () => {
    const { container } = renderComponent(CardContent);
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
    expect(el?.className).toContain("p-6");
  });

  it("merges additional class prop", () => {
    const { container } = renderComponent(CardContent, { props: { class: "no-padding" } });
    expect(container.firstElementChild?.className).toContain("no-padding");
  });
});

// ─── CardFooter ───────────────────────────────────────────────────────────────

describe("CardFooter", () => {
  it("renders a flex container", () => {
    const { container } = renderComponent(CardFooter);
    const el = container.firstElementChild;
    expect(el).toBeInTheDocument();
    expect(el?.className).toContain("flex");
  });

  it("merges additional class prop", () => {
    const { container } = renderComponent(CardFooter, { props: { class: "card-footer-extra" } });
    expect(container.firstElementChild?.className).toContain("card-footer-extra");
  });
});
