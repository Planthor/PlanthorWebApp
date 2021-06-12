import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("renders Landing page", () => {
    render(<LandingPage />);
    expect(screen.getByText("This is the Landing Page")).toBeInTheDocument();
});
