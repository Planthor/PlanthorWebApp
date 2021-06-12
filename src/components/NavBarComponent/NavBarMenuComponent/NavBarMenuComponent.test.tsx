import { render, screen } from "@testing-library/react";
import NavBarMenuComponent from "./NavBarMenuComponent";
import React from "react";

test("renders Nav Bar Register Component", () => {
    render(<NavBarMenuComponent />);
    const element = screen.getByText("Navigation Menu");
    expect(element).toBeInTheDocument();
});
