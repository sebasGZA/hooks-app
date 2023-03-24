export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "ABC":
      throw new Error("action.type: ABC is not available");

    default:
      return initialState;
  }
};
