import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../09-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";
jest.mock("../../hooks/useTodo");

describe("Test in <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Task 1",
        done: false,
      },
      {
        id: 2,
        description: "Task 2",
        done: true,
      },
    ],
    todoCounter: () => 2,
    todoPendingCounter: () => 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("Should make match with snapshot", () => {
    const { container } = render(<TodoApp />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText("Task 1")).toBeTruthy();
    expect(screen.getByText("Task 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
