import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ComponentWidget from "./ComponentWidget";

test("renders ComponentWidget page", () => {
  render( <MemoryRouter>
    <ComponentWidget />
  </MemoryRouter>);
  expect(screen.getByText("This is an ComponentWidget Page")).toBeInTheDocument();
});
