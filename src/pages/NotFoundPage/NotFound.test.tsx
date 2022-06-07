import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import NotFound from "./NotFound";
import Introduction from "./NotFound";

test("renders Not Found", () => {
  render(<NotFound />);
  expect(screen.getByText("Not Found..."));
});
