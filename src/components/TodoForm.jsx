import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todo) {
      onAddTodo(todo);
      setTodo("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Add todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
