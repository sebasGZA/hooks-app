console.log("intro-reducer");

const initState = [
  {
    id: 1,
    todo: "Get the soul's rock",
    done: false,
  },
];

const todoReducer = (state = initState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Get the power's rock",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
