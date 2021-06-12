import { render, screen } from "@testing-library/react";
import NavBarProfileComponent from "./NavBarProfileComponent";
import React from "react";

test("renders Nav Bar Profile Component", () => {
    render(<NavBarProfileComponent />);
    const element = screen.getByText("Nav Bar Profile Component");
    expect(element).toBeInTheDocument();
});
