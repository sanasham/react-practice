import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const buttonRef = useRef(null);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddOrUpdateTask = () => {
    if (task.trim()) {
      if (editIndex === -1) {
        setTodos([...todos, task]);
      } else {
        const updateTodos = [...todos];
        updateTodos[editIndex] = task;
        setTodos(updateTodos);
        setEditIndex(-1);
      }
      setTask("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };
  const handleEditTask = (index) => {
    console.log(`index ${index}`);
    console.log(`todos[index] ${todos[index]}`);
    setTask(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="text-4xl text-center">sample</h1>
      <div className=" items-center m-5">
        <label className="relative block ">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className=" bg-white w-[50%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            name="search"
            value={task}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Add a new task"
          />
        </label>
      </div>
      <div className=" items-center m-5">
        <button
          ref={buttonRef}
          onClick={handleAddOrUpdateTask}
          onKeyDown={(e) => (e.key === "Enter" ? handleAddOrUpdateTask : "")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <div>
        <ul className="m-5 w-[50%] max-w-md">
          {todos?.map((item, index) => (
            // <li key={item}>{item}</li>
            <TodoItem
              key={index}
              item={item}
              onEdit={() => handleEditTask(index)}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
