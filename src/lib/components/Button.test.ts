import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import Button from "./Button.svelte";

test("renders_correctly_with_unexpected_variant", () => {
  const { container } = render(Button, { variant: "unexpected" });
  const button = container.querySelector("button");
  expect(button).toBeInTheDocument();
  expect(button).not.toHaveClass("btn-primary");
  expect(button).not.toHaveClass("btn-secondary");
});