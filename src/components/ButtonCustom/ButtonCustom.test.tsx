import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonCustom from "./ButtonCustom";

test("renders ButtonCustom Component", () => {
    render(<ButtonCustom />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeEnabled();
});
