import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TodoForm />
      </div>
    </>
  );
}

export default App;
