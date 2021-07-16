import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import React from "react";

test("renders Navigation Bar Component", () => {
    render(<NavigationBar />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeInTheDocument();
});
