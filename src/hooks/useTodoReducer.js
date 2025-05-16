import { useReducer } from "react";

const todosArr = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [{ id: Date.now(), text: action.text, complete: false }, ...state];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    case "edit":
      return state.map((todo) => {
        todo.id === action.id ? { ...todo, isEdit: true } : todo;
      });
    case "update":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "save":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isEdit: false } : todo
      );
    default:
      return state;
  }
};

function useTodoReducer() {
  return useReducer(todoReducer, todosArr);
}

export default useTodoReducer;
