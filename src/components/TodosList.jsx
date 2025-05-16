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
        disabled={!todo.complete}
        onClick={() => dispatch({ type: "delete", id: todo.id })}
      >
        Remove
      </button>
    </li>
  );
};

export default TodosList;
