import React from "react";
import { screen, render } from "@testing-library/react";
import NavBarLogo from "./NavBarLogo";

test("renders Nav Bar Register Component", () => {
    render(<NavBarLogo />);
    const element = screen.getByTestId("logo-planthor");
    expect(element).toBeInTheDocument();
});
