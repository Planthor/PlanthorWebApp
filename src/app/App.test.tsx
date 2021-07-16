import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App Component", async () => {
    // Currently we have error on test in pipeline "Module history not found ...."
    render(<App />);
    const element = screen.getByText("Planthor LOGO");
    expect(element).toBeInTheDocument();
});
