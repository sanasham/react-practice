import React, { useState } from "react";

function TodoForm({ updateTaskName }) {
  const [childState, setChildState] = useState("");
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setChildState(newValue);
  };
  const handleTaskChange = () => {
    updateTaskName(childState);
    setChildState("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write task name"
        className="border rounded-md p-2 m-4 focus:outline-none focus:border-blue-500"
        value={childState}
        onChange={handleInputChange}
      />
      <button
        className="border p-2 rounded-md"
        type="submit"
        onClick={handleTaskChange}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
