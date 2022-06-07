import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import LoginModal from "./LoginModal";

test("renders Login Modal", () => {
  render(<LoginModal />);
  expect(screen.getByText("Sign in to Planthor"));
});
