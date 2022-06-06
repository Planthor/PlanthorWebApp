import { render } from "@testing-library/react";
import Router from "./index";
test("renders App Component", () => {
  render(<Router/>);
  expect(true);
});
