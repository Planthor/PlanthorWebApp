import React from "react";
import { render, screen } from "@testing-library/react";
import Activity from "./Activity";

test("renders Activity page", () => {
    render(<Activity />);
    expect(screen.getByText("This is an Activity Page")).toBeInTheDocument();
});
