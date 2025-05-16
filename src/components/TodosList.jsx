const TodosList = ({ todo, dispatch }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch({ type: "toggle", id: todo.id })}
      />
      <span>{todo.text}</span>
      <button
        onClick={() => dispatch({ type: "delete", id: todo.id })}
        disabled={!todo.complete}
      >
        Remove
      </button>
    </li>
  );
};

export default TodosList;
