import { render, screen } from "@testing-library/react";
import SignInWithFacebook from "./SignInWithFacebook";
import React from "react";

test("renders Navigation Bar Component", () => {
    render(<SignInWithFacebook />);
    const element = screen.getByText("Sign In With Facebook Component");
    expect(element).toBeInTheDocument();
});
