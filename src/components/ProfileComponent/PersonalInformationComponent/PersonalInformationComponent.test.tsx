import { render, screen } from "@testing-library/react";
import PersonalInformationComponent from "./PersonalInformationComponent";
import React from "react";

test("renders Personal Information Component", () => {
    render(<PersonalInformationComponent />);
    const element = screen.getByText("Personal Information Component");
    expect(element).toBeInTheDocument();
});
