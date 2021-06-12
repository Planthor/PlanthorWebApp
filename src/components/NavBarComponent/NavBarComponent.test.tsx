import { render, screen } from "@testing-library/react";
import NavBarComponent from "./NavBarComponent";
import React from "react";

test("renders Navigation Bar Component", () => {
    render(<NavBarComponent />);
    const element = screen.getByText("Nav Bar Component");
    expect(element).toBeInTheDocument();
});
