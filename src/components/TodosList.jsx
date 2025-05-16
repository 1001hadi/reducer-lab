const TodosList = ({ todo, dispatch }) => {
  function handleToggle() {
    return dispatch({ type: "toggle", id: todo.id });
  }

  function handleDelete() {
    return dispatch({ type: "delete", id: todo.id });
  }

  function handleEdit() {
    return dispatch({ type: "edit", id: todo.id });
  }

  return (
    <li>
      {todo.isEdit ? (
        <>
          <input
            type="text"
            value={todo.text}
            onChange={(e) =>
              dispatch({ type: "update", id: todo.id, text: e.target.value })
            }
          />
          <button onClick={() => dispatch({ type: "save", id: todo.id })}>
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleToggle}
          />
          <span>{todo.text}</span>
          <button disabled={!todo.complete} onClick={handleDelete}>
            Remove
          </button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TodosList;
