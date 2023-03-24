import { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initState = [];

const init = () => {
  const initValue = localStorage.getItem("todos");
  if (!initValue) {
    localStorage.setItem("todos", JSON.stringify([]));
    return [];
  }
  return JSON.parse(initValue);
};

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  return (
    <>
      <h1>
        TodoApp (10) <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
