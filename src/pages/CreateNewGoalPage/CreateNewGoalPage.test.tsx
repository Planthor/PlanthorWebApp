import React from "react";
import { render, screen } from "@testing-library/react";
import CreateNewGoalPage from "./CreateNewGoalPage";

test("renders Create New Goal Page", () => {
    render(<CreateNewGoalPage />);
    expect(
        screen.getByText("This is the Create New Goal Page")
    ).toBeInTheDocument();
});
