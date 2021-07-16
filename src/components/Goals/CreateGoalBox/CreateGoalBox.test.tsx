import { render, screen } from "@testing-library/react";
import CreateGoalBox from "./CreateGoalBox";
import React from "react";

test("renders Create Goal Box Component", () => {
    render(<CreateGoalBox />);
    const element = screen.getByText("Create Goal Box Component");
    expect(element).toBeInTheDocument();
});
