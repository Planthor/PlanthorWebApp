import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("here", () => {
  render(<Footer />);
  expect(screen.getByText("©2021 Planthor"));
});