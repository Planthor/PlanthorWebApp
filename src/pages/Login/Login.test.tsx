import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Login from "./Login";

test("renders Activity page", () => {
  render(<Login />);
  expect(screen.getByAltText("Sign in")).toBeInTheDocument();
});
