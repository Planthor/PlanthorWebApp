import { render, screen } from "@testing-library/react";
import ProfileGoalsComponent from "./ProfileGoalsComponent";
import React from "react";

test("renders Profile Goals Component", () => {
    render(<ProfileGoalsComponent />);
    const element = screen.getByText("Profile Goals Component");
    expect(element).toBeInTheDocument();
});
