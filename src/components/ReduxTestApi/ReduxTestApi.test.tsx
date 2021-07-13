import { render, screen } from "@testing-library/react";
import ReduxTestApi from "./ReduxTestApi";
import React from "react";

test("renders navigation bar", () => {
    render(<ReduxTestApi />);
    const element = screen.getByText("Navigation Bar");
    expect(element).toBeInTheDocument();
});
