import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SignInWithFacebook from "./SignInWithFacebook";
import React from "react";

test("renders Navigation Bar Component", () => {
    render(<SignInWithFacebook />);
    const element = screen.getByText("Sign In With Facebook Component");
    expect(element).toBeInTheDocument();
});
