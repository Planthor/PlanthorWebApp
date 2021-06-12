import { render, screen } from "@testing-library/react";
import ProfileComponent from "./ProfileComponent";
import React from "react";

test("renders Profile Component", () => {
    render(<ProfileComponent />);
    const element = screen.getByText("Profile Component");
    expect(element).toBeInTheDocument();
});
