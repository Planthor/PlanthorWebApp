import { render, screen } from "@testing-library/react";
import MyGoals from "./MyGoals";
import React from "react";

test("renders My Goals Component", () => {
    render(<MyGoals />);
    const element = screen.getByText("My Goals Component");
    expect(element).toBeInTheDocument();
});
