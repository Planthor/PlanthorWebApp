import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

test("renders Nav Bar Register Component", () => {
  render(<Footer />);
  const element = screen.getByText("© 2021 Planthor.");
  expect(element).toBeInTheDocument();
});
