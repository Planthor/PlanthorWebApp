import { render, screen } from "@testing-library/react";
import GoalComponent from "./GoalComponent";
import React from "react";

test("renders My Goal Component", () => {
    render(<GoalComponent />);
    const element = screen.getByText("Goal Component");
    expect(element).toBeInTheDocument();
});
