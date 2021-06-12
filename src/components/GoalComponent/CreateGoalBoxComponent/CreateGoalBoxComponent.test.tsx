import { render, screen } from "@testing-library/react";
import CreateGoalBoxComponent from "./CreateGoalBoxComponent";
import React from "react";

test("renders Create Goal Box Component", () => {
    render(<CreateGoalBoxComponent />);
    const element = screen.getByText("Create Goal Box Component");
    expect(element).toBeInTheDocument();
});
