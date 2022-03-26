import { render, screen } from "@testing-library/react";
import NavBarButton from "./NavBarButton";
import "@testing-library/jest-dom";

test("renders Nav Bar Profile Component", () => {
  render(<NavBarButton />);
  const element = screen.getByText("Sign In");
  expect(element).toBeInTheDocument();
});
