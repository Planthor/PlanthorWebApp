import React from "react";
import { render, screen } from "@testing-library/react";
import NavBarMenu from "./NavBarMenu";

test("renders Nav Bar Register Component", () => {
    render(<NavBarMenu />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeInTheDocument();
});
