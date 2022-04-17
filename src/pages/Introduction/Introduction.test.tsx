import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Introduction from "./Introduction";

test("renders Landing page", () => {
  render(<Introduction />);
  expect(screen.getByText("Learn More"));
});
