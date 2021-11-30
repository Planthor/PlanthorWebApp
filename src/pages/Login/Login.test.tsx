import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders Activity page", () => {
    render(<Login />);
    expect(screen.getByText("This is an Login Page")).toBeInTheDocument();
});
