import { render } from "@testing-library/svelte";
import { it } from "vitest";
import Header from "./Header.svelte";
it("Logo image loads correctly with the provided source", () => {
  const { getByAltText } = render(Header);
  const picture = getByAltText("Planthor");
  expect(picture).toBeInTheDocument();
});

it('should render navigation links for Home, Products, and About', () => {
  const { getByText } = render(Header);
  expect(getByText('Home').getAttribute('href')).toBe('/');
  expect(getByText('Products').getAttribute('href')).toBe('/products');
  expect(getByText('About').getAttribute('href')).toBe('/about');
});
