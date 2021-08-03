import { render, screen } from "@testing-library/react";
import ButtonCustom from "./ButtonCustom";
import React from "react";

test("renders ButtonCustom Component", () => {
    render(<ButtonCustom />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeEnabled();
});
