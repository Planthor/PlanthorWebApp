import { render, screen } from "@testing-library/react";
import HelloComponent from "./HelloComponent";
import React from "react";

test("renders learn react link", () => {
    render(<HelloComponent />);
    const linkElement = screen.getByText(/Project../);
    expect(linkElement).toBeInTheDocument();
});
