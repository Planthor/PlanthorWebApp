import { render, screen } from "@testing-library/react";
import ProfileGoals from "./ProfileGoals";
import "@testing-library/jest-dom";

test("renders Profile Goals Component", () => {
  render(<ProfileGoals />);
  const element = screen.getByText("Profile Goals Component");
  expect(element).toBeInTheDocument();
});
