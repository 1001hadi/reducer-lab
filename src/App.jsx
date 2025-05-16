import useTodoReducer from "./hooks/useTodoReducer";
import { Header } from "./components/Header";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";

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
          {todos.map((todo) => (
            <TodosList key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
