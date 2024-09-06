import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Header from "./Header.svelte";
import "@testing-library/jest-dom";

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
    const logo = getByAltText("planthor-md-logo");
    const title = getByText("Planthor");

    const smLogo = getByAltText("planthor-sm-logo");
    const smTitle = getByText("Planthor");

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    expect(smLogo).toBeInTheDocument();
    expect(smTitle).toBeInTheDocument();
  });
});
