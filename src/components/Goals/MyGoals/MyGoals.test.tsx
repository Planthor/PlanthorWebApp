import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyGoals from "./MyGoals";

test("renders My Goals Component", () => {
    render(<MyGoals />);
    const element = screen.getByText("My Goals Component");
    expect(element).toBeInTheDocument();
});
