import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import ComponentWidget from "./ComponentWidget";

test("renders ComponentWidget page", () => {
  render(<ComponentWidget />);
  expect(screen.getByText("This is an ComponentWidget Page")).toBeInTheDocument();
});
