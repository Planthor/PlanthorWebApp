import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import NavBarMenu from "./NavBarMenu";

test("renders Nav Bar Register Component", () => {
    render(<NavBarMenu />);
    const element = screen.getByTestId("navbar-menu");
    expect(element).toBeEnabled();
});
