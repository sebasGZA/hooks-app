const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../09-useReducer/TodoItem");

describe("Test in <TodoItem />", () => {
  let todo = {
    id: 1,
    description: "Rock of the soul",
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should make match with snapshot", () => {
    const { container } = render(
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    expect(container).toMatchSnapshot();

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
  });

  test("Should show the component completed", () => {
    todo.done = true;

    render(
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe(
      "align-self-center text-decoration-line-through"
    );
  });

  test("Should call the toggle todo when it is double-clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.doubleClick(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("Should call the remove todo when it is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(onRemoveTodoMock).toHaveBeenCalled();
    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
