import React, { useState } from "react";
import "./Taskify.css";
import InputField from "./InputField";
import { Todo } from "./utility/model.ts";
import TaskList from "./TaskList.tsx";

const Taskify: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task) {
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 1000), todo: task, isDone: false },
      ]);
      setTask("");
    }
  };
  return (
    <div className="container">
      <span className="heading">Taskify</span>

      <InputField
        task={task}
        handleTask={setTask}
        handleAddTodos={handleAddTodos}
      />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Taskify;
