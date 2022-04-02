import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import ProfileManagement from "./ProfileManagement";

test("renders Profile Management Page", () => {
  render(<ProfileManagement />);
  expect(
    screen.getByText("This is the Profile Management Page")
  ).toBeInTheDocument();
});
