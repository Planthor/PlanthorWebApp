import { render, screen } from "@testing-library/react";
import EveryoneGoalsComponent from "./EveryoneGoalsComponent";
import React from "react";

test("renders Everyone Goals Component", () => {
    render(<EveryoneGoalsComponent />);
    const element = screen.getByText("Everyone Goals Component");
    expect(element).toBeInTheDocument();
});
