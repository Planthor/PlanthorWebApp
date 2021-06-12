import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders react link", async () => {
    // Currently we have error on test in pipeline "Module history not found ...."
    render(<App />);
    const element = screen.getByText("Planthor LOGO");
    expect(element).toBeInTheDocument();
});
