import { render, screen } from "@testing-library/react";
import NavBarLogo from "./NavBarLogo";
import React from "react";

test("renders Nav Bar Register Component", () => {
    render(<NavBarLogo />);
    const element = screen.getByAltText("logo");
    expect(element).toBeInTheDocument();
});
