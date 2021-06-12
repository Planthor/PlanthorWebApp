import { render, screen } from "@testing-library/react";
import SignInWithFacebookComponent from "./SignInWithFacebookComponent";
import React from "react";

test("renders Navigation Bar Component", () => {
    render(<SignInWithFacebookComponent />);
    const element = screen.getByText("Sign In With Facebook Component");
    expect(element).toBeInTheDocument();
});
