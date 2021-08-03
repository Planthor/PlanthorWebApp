import { render, screen } from "@testing-library/react";
import PersonalInformation from "./PersonalInformation";
import React from "react";

test("renders Personal Information Component", () => {
    render(<PersonalInformation />);
    const element = screen.getByText("Personal Information Component");
    expect(element).toBeInTheDocument();
});
