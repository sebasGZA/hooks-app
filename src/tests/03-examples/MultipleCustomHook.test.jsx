import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../03-examples";

import { useFetch } from "../../hooks/useFetch";
jest.mock("../../hooks/useFetch");
import { useCounter } from "../../hooks/useCounter";
jest.mock("../../hooks/useCounter");

describe("Test in <MultipleCustomHook />", () => {
  const increment = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should show this component by default", () => {
    useFetch.mockReturnValue({
      isLoading: true,
      data: null,
      hasError: null,
    });

    const { container } = render(<MultipleCustomHook />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getAllByText("Breaking Bad Quotes")).toBeTruthy();

    const nextBtn = screen.getByRole("button", {
      name: "Next Quote",
    });

    expect(nextBtn.disabled).toBeTruthy();
  });

  test("Should show a quote", () => {
    useFetch.mockReturnValue({
      isLoading: false,
      data: [{ author: "Sebas", quote: "Hello world" }],
      hasError: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText("Sebas")).toBeTruthy();
    expect(screen.getByText("Hello world")).toBeTruthy();

    const nextBtn = screen.getByRole("button", {
      name: "Next Quote",
    });

    expect(nextBtn.disabled).toBeFalsy();
  });

  test("Should call the increment function", () => {
    useFetch.mockReturnValue({
      isLoading: false,
      data: [{ author: "Sebas", quote: "Hello world" }],
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextBtn = screen.getByRole("button", {
      name: "Next Quote",
    });

    fireEvent.click(nextBtn);

    expect(increment).toHaveBeenCalled();
  });
});
