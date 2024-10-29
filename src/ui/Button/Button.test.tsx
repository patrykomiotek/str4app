import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { Button } from "./Button";

describe("Button component", () => {
  // it("should render correctly", () => {
  //   // anti-pattern
  //   const { debug } = render(<Button />);
  //   debug();
  //   const buttonElem = screen.getByText("Click me");
  //   expect(buttonElem).toBeInTheDocument();
  // });

  it("should not have violations", async () => {
    const { container } = render(<Button />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
    // console.log({ container });
  });
});
