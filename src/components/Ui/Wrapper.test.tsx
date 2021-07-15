import { render, screen } from "@testing-library/react";
import Wrapper from "./Wrapper";
import React from "react";

test("renders Wrapper Component", () => {
    render(<Wrapper />);
    const element = screen.getByText("Wrapper components");
    expect(element).toBeInTheDocument();
});
