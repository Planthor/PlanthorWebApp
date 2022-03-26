import { render, screen } from "@testing-library/react";
import NavBarRegisterComponent from "./NavBarRegister";
import "@testing-library/jest-dom";

test("renders Nav Bar Register Component", () => {
  render(<NavBarRegisterComponent />);
  const element = screen.getByText("Sign In Sign Up Here");
  expect(element).toBeInTheDocument();
});
