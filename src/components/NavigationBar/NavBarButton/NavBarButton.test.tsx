import { render, screen } from "@testing-library/react";
import NavBarButton from "./NavBarButton";
import React from "react";

test("renders Nav Bar Profile Component", () => {
    render(<NavBarButton />);
    const element = screen.getByText("Sign In");
    expect(element).toBeInTheDocument();
});
