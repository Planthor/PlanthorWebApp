import React from "react";
import { render, screen } from "@testing-library/react";
import IntroductionPage from "./IntroductionPage";

test("renders introduction page", () => {
    render(<IntroductionPage />);
    expect(screen.getByText("Navigation Bar")).toBeInTheDocument();
});
