import React from "react";
import { render, screen } from "@testing-library/react";
import ActivityPage from "./ActivityPage";

test("renders Activity page", () => {
    render(<ActivityPage />);
    expect(screen.getByText("This is an Activity Page")).toBeInTheDocument();
});
