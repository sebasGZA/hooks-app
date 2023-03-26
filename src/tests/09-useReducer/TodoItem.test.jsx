const { render, screen } = require("@testing-library/react");
const { TodoItem } = require("../../09-useReducer/TodoItem");

describe("Test in <TodoItem />", () => {
  const todo = {
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
});
