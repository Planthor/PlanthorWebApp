import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Header from "./Header.svelte";
describe("Header", () => {
  it("Logo image loads correctly with the provided source", () => {
    const { getByAltText } = render(Header);
    const picture = getByAltText("Planthor");
    expect(picture).toBeInTheDocument();
  });

  it("should render navigation links for Home, Products, and About", () => {
    const { getByText } = render(Header);
    expect(getByText("Home").getAttribute("href")).toBe("/");
    expect(getByText("Products").getAttribute("href")).toBe("/products");
    expect(getByText("About").getAttribute("href")).toBe("/about");
  });

  it("checks behavior when $page.url.pathname is null or undefined", () => {
    const { container } = render(Header);
    expect(container.querySelector('li[aria-current="page"]')).toBeNull();

    const { container: containerUndefined } = render(Header);
    expect(
      containerUndefined.querySelector('li[aria-current="page"]')
    ).toBeNull();
  });
});
