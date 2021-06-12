import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders react link", async () => {
    render(<App />);
    const element = screen.getByText("Planthor LOGO");
    expect(element).toBeInTheDocument();
});
