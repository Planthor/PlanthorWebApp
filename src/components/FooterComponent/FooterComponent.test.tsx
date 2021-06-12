import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";
import React from "react";

test("renders Nav Bar Register Component", () => {
    render(<FooterComponent />);
    const element = screen.getByText("Footer");
    expect(element).toBeInTheDocument();
});
