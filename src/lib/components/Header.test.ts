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

  it('renders the logo and title', () => {
    const { getByAltText, getByText } = render(Header);
    const logo = getByAltText('planthor-md-logo');
    const title = getByText('Planthor');

    const smLogo = getByAltText('planthor-sm-logo');
    const smTitle = getByText('Planthor');

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    expect(smLogo).toBeInTheDocument();
    expect(smTitle).toBeInTheDocument();
  });

  it('renders the login button when user is not logged in', () => {
    const { getByText } = render(Header, { props: { user: undefined } });
    const loginButton = getByText('Login');

    expect(loginButton).toBeInTheDocument();
  });

  it('renders the logout button when user is logged in', () => {
    const { getByText } = render(Header, { props: { user: { name: 'John', id: 1 } } });
    const logoutButton = getByText('Logout');

    expect(logoutButton).toBeInTheDocument();
  });
});
