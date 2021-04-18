import HelloComponent from "./HelloComponent";
import React from "react";
import { render, screen } from "@testing-library/react";

test("renders hello component", () => {
    render(<HelloComponent />);
    expect(screen.getByText("Hello...")).toBeInTheDocument();
});
