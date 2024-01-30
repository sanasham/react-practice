import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Dropdown from "./components/Dropdown";

function App() {
  const [taskName, settaskName] = useState([]);

  const updateTaskName = (newValue) => {
    settaskName((prev) => [...prev, newValue]);
  };

  return (
    <>
      <div>
        <Dropdown />
      </div>
      <div>
        <TodoForm updateTaskName={updateTaskName} />
      </div>

      {taskName?.map((task) => (
        <li key={task}>
          <TodoItem task={task} />
        </li>
      ))}
    </>
  );
}

export default App;
