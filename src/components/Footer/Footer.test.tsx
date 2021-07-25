import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders Nav Bar Register Component", () => {
    render(<Footer />);
    const element = screen.getByText("© 2021 Planthor.");
    expect(element).toBeInTheDocument();
});
