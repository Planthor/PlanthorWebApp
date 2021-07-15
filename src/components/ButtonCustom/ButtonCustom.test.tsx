import { render, screen } from "@testing-library/react";
import ButtonCustom from "./ButtonCustom";
import React from "react";

test("renders ButtonCustom Component", () => {
    render(<ButtonCustom />);
    const element = screen.getByText("ButtonCustom");
    expect(element).toBeInTheDocument();
});
