import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TodoForm />
      </div>

      <TodoItem />
    </>
  );
}

export default App;
