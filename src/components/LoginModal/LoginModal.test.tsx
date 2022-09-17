import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import LoginModal from "./LoginModal";

test("renders Login Modal", () => {
  render( <MemoryRouter>
    <LoginModal />
  </MemoryRouter>);
  expect(screen.getByText("Sign in to Planthor"));
});
