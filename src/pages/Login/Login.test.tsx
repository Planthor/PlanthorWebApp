import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "./Login";

test("renders Activity page", () => {
  render( <MemoryRouter>
    <Login />
  </MemoryRouter>);
  expect(screen.getByText("Sign in to Planthor"));
});
