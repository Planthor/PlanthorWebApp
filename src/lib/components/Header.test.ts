import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Header from "./Header.svelte";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("shows login button when user is not logged in", () => {
    const { getByText } = render(Header, { props: { user: undefined } });
    expect(getByText("Login")).toBeTruthy();
  });

  it("shows login button when user is not logged in", () => {
    const { getByText } = render(Header, { props: { user: undefined } });
    expect(getByText("Login")).toBeTruthy();
  });

  it("checks behavior when $page.url.pathname is null or undefined", () => {
    const { container } = render(Header);
    expect(container.querySelector('li[aria-current="page"]')).toBeNull();

    const { container: containerUndefined } = render(Header);
    expect(
      containerUndefined.querySelector('li[aria-current="page"]'),
    ).toBeNull();
  });
});
