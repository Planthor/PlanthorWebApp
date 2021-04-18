import { render, screen } from "@testing-library/react";
import React from "react";
import HelloComponent from "../components/HelloComponent/HelloComponent";
import MainLayout from "./MainLayout";

test("renders navigation bar", () => {
    render(
        <MainLayout>
            <HelloComponent />
        </MainLayout>
    );

    expect(screen.getByText("Hello...")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("Navigation Bar")).toBeInTheDocument();
});
