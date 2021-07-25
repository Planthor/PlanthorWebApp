import React from "react";
import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

test("renders Navigation Bar Component", () => {
    render(<NavigationBar />);
    expect(true);
});
