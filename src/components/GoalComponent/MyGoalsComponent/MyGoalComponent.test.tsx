import { render, screen } from "@testing-library/react";
import MyGoalsComponent from "./MyGoalsComponent";
import React from "react";

test("renders My Goals Component", () => {
    render(<MyGoalsComponent />);
    const element = screen.getByText("My Goals Component");
    expect(element).toBeInTheDocument();
});
