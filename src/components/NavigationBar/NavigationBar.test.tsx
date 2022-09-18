import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavigationBar from "./NavigationBar";

test("This is Navigation bar", () => {
  render(
  <MemoryRouter>
    <NavigationBar />
  </MemoryRouter>);
  expect(screen.getByText("Menu"));
});