import { todoReducer } from "../../09-useReducer/todoReducer";

describe("Test in todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("Should return the initState", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  test("Should add a todo task", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Should remove a todo task", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("Should change the toggle function", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState).toEqual([{ ...initialState[0], done: true }]);
  });
});
