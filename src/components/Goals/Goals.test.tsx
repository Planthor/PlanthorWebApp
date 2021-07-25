import { render, screen } from "@testing-library/react";
import Goals from "./Goals";
import React from "react";

test("renders My Goal Component", () => {
    render(<Goals />);
    const element = screen.getByText("Goal Component");
    expect(element).toBeInTheDocument();
});
