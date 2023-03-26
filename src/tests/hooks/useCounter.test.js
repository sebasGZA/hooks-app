import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("Test in useCounter", () => {
  test("Should return the value set ", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Should return 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => increment());

    expect(result.current.counter).toBe(11);
  });

  test("Should decrement counter", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(9);
  });

  test("Should reset counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
