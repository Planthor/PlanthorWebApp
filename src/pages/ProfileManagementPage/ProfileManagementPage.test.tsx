import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileManagementPage from "./ProfileManagementPage";

test("renders Profile Management Page", () => {
    render(<ProfileManagementPage />);
    expect(
        screen.getByText("This is the Profile Management Page")
    ).toBeInTheDocument();
});
