import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Textarea from "./textarea.svelte";
import "@testing-library/jest-dom";

describe("Textarea", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(Textarea, { placeholder: "Write here..." });
    const textarea = getByPlaceholderText("Write here...");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass("min-h-[80px]");
  });

  it("handles value binding", () => {
    const { getByDisplayValue } = render(Textarea, { value: "Initial value" });
    const textarea = getByDisplayValue("Initial value");
    expect(textarea).toBeInTheDocument();
  });

  it("applies custom classes", () => {
    const { container } = render(Textarea, { class: "custom-class" });
    const textarea = container.querySelector("textarea");
    expect(textarea).toHaveClass("custom-class");
  });

  it("handles readonly attribute", () => {
    const { container } = render(Textarea, { readonly: true });
    const textarea = container.querySelector("textarea");
    expect(textarea).toHaveAttribute("readonly");
  });
});
