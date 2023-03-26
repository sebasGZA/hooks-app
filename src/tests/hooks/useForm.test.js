const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../hooks/useForm");

describe("Test in useForm", () => {
  const initValue = {
    name: "Sebas",
    email: "test@test.com",
  };

  const target = {
    name: "name",
    value: "Jose",
  };

  test("Should return default value", () => {
    const { result } = renderHook(() => useForm(initValue));

    expect(result.current).toEqual({
      name: initValue.name,
      email: initValue.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Should change the form name", () => {
    const { result } = renderHook(() => useForm(initValue));
    const { onInputChange } = result.current;

    act(() => onInputChange({ target }));

    expect(result.current.name).toBe(target.value);
  });

  test("Should reset the form values", () => {
    const { result } = renderHook(() => useForm(initValue));
    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({ target });
      onResetForm();
    });

    expect(result.current).toEqual({
      ...initValue,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
});
