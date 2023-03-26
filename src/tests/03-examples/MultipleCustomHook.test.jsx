import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../03-examples";

describe("Test in <MultipleCustomHook />", () => {
  test("Should show this component by default", () => {
    const { container } = render(<MultipleCustomHook />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getAllByText("Breaking Bad Quotes")).toBeTruthy();

    const nextBtn = screen.getByRole("button", {
      name: "Next Quote",
    });

    expect(nextBtn.disabled).toBeTruthy();
  });
});
