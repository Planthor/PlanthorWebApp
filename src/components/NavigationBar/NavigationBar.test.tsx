import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

test("This is Navigation bar", () => {
  render(<NavigationBar />);
  expect(screen.getByText("Menu"));
});