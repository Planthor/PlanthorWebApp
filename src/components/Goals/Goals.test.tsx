import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Goals from "./Goals";

test("renders My Goal Component", () => {
  render(<Goals />);
  const element = screen.getByText("Goal Component");
  expect(element).toBeInTheDocument();
});
