const TodosList = ({ todo }) => {
  return (
    <li>
      <span>{todo.text}</span>
    </li>
  );
};

export default TodosList;
