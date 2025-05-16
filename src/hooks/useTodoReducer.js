import { useReducer } from "react";

const todosArr = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [{ id: Date.now(), text: action.text, complete: false }, ...state];
    default:
      return state;
  }
};

function useTodoReducer() {
  return useReducer(todoReducer, todosArr);
}

export default useTodoReducer;
