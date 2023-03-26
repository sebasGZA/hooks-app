import { useReducer, useEffect } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";

const init = () => {
  const initValue = localStorage.getItem("todos");
  if (!initValue) {
    localStorage.setItem("todos", JSON.stringify([]));
    return [];
  }
  return JSON.parse(initValue);
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

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

  const handleRemoveTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const todoCounter = () => {
    return todos.length || 0;
  };

  const todoPendingCounter = () => {
    return todos.filter((todo) => !todo.done).length || 0;
  };

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todoCounter,
    todoPendingCounter,
  };
};
