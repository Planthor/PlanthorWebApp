import { render, screen } from "@testing-library/react";
import NavBarRegisterComponent from "./NavBarRegister";
import React from "react";

test("renders Nav Bar Register Component", () => {
    render(<NavBarRegisterComponent />);
    const element = screen.getByText("Sign In Sign Up Here");
    expect(element).toBeInTheDocument();
});
