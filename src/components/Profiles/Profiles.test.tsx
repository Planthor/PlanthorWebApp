import { render, screen } from "@testing-library/react";
import Profile from "./Profiles";
import React from "react";

test("renders Profile Component", () => {
    render(<Profile />);
    const element = screen.getByText("Profile Component");
    expect(element).toBeInTheDocument();
});
