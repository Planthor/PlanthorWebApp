import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Input from "./input.svelte";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders correctly", () => {
    const { getByRole } = render(Input, { placeholder: "Search..." });
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Search...");
  });

  it("handles value binding", () => {
    const { getByRole } = render(Input, { value: "Hello" });
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Hello");
  });

  it("applies custom classes", () => {
    const { getByRole } = render(Input, { class: "custom-class" });
    const input = getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("handles readonly attribute", () => {
    const { getByRole } = render(Input, { readonly: true });
    const input = getByRole("textbox");
    expect(input).toHaveAttribute("readonly");
  });

  it("forwards rest props", () => {
    const { getByRole } = render(Input, { type: "email", id: "email-input" });
    const input = getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("id", "email-input");
  });
});
