import { render, screen } from "@testing-library/react";
import NavBarLogoComponent from "./NavBarLogoComponent";
import React from "react";

test("renders Nav Bar Register Component", () => {
    render(<NavBarLogoComponent />);
    const element = screen.getByText("Planthor LOGO");
    expect(element).toBeInTheDocument();
});
