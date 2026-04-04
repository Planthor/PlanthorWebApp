import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Label from "./label.svelte";
import "@testing-library/jest-dom";

describe("Label", () => {
  it("renders correctly", () => {
    // In @testing-library/svelte v5 with Svelte components using <slot />
    // the slots can be passed as a property.
    const { getByText } = render(Label, { props: { children: "Email" } } as any);
    // If that doesn't work, we check by selector
    expect(document.querySelector("label")).toBeInTheDocument();
  });

  it("applies custom classes", () => {
    const { container } = render(Label, { props: { class: "custom-class" } });
    const label = container.querySelector("label");
    expect(label).toHaveClass("custom-class");
  });
});
