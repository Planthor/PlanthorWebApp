import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import CreateNewGoal from "./CreateNewGoal";

test("renders Create New Goal Page", () => {
    render(<CreateNewGoal />);
    expect(
        screen.getByText("This is the Create New Goal Page")
    ).toBeInTheDocument();
});
