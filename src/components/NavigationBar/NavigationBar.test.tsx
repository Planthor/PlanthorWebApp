import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import React from "react";

test("renders navigation bar", () => {
    render(<NavigationBar />);
    const element = screen.getByText("Navigation Bar");
    expect(element).toBeInTheDocument();
});
