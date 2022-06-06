import { render } from "@testing-library/react";
import Router from "./index";
test("renders App Component", async () => {
  render(<Router/>);
  expect(true);
});
