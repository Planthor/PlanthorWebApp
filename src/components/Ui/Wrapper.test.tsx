import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Wrapper from "./Wrapper";

test("renders Wrapper Component", () => {
  render(
    <Wrapper className="">
      <div>TestWrapperChildren</div>
    </Wrapper>
  );
  const element = screen.getByText("TestWrapperChildren");
  expect(element).toBeInTheDocument();
});