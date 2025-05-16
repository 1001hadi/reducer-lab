import useTodoReducer from "./hooks/useTodoReducer";
import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, dispatch] = useTodoReducer();

  function handleAddTodo(text) {
    dispatch({ type: "addTodo", text });
  }
  return (
    <>
      <div className="container">
        <Header />
        <TodoForm onAddTodo={handleAddTodo} />
        <ul>
          {todos.map((todo) => {
            <li key={todo.id}>{todo.text}</li>;
            console.log(todo.text);
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
