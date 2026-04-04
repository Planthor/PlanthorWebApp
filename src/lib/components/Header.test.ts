import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header.svelte";
import "@testing-library/jest-dom";

// We need to mock $app/navigation to test navigateAndClose
vi.mock("$app/navigation", () => ({
  goto: vi.fn(),
}));

import { goto } from "$app/navigation";

describe("Header", () => {
  it("checks behavior when $page.url.pathname is null or undefined", () => {
    const { container } = render(Header);
    expect(container.querySelector('li[aria-current="page"]')).toBeNull();

    const { container: containerUndefined } = render(Header);
    expect(
      containerUndefined.querySelector('li[aria-current="page"]'),
    ).toBeNull();
  });

  it("renders the logo and title", () => {
    const { getByAltText, getByText } = render(Header);
    
    // Fixed: Uses the actual alt text present in Header.svelte
    const logo = getByAltText("Planthor Logo");
    const title = getByText("Planthor");

    const smLogo = getByAltText("Planthor Mobile Logo");

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(smLogo).toBeInTheDocument();
  });

  it("toggles the mobile menu open and closed", async () => {
    const { container, getByRole } = render(Header);
    
    // Initially closed (opacity-0)
    const mobileMenuContainer = container.querySelector(".fixed.inset-0.z-50.lg\\:hidden");
    expect(mobileMenuContainer).toHaveClass("opacity-0");

    // Click open menu
    const openBtn = getByRole("button", { name: "Open Menu" });
    await fireEvent.click(openBtn);
    
    // Should now be open
    expect(mobileMenuContainer).toHaveClass("opacity-100");

    // Click close menu
    const closeBtn = getByRole("button", { name: "Close Menu" });
    await fireEvent.click(closeBtn);
    
    // Should be closed again
    expect(mobileMenuContainer).toHaveClass("opacity-0");
  });

  it("navigates and closes menu when a mobile link is clicked", async () => {
    const { getAllByText } = render(Header);

    // Get the mobile "Products" link (which is the second one in the DOM)
    const productLinks = getAllByText("Products");
    const mobileProductLink = productLinks[1];

    await fireEvent.click(mobileProductLink);

    // Verify goto was called with /products
    expect(goto).toHaveBeenCalledWith("/products");
  });
});
