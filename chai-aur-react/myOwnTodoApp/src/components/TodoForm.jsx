import React from "react";

function TodoForm() {
  return (
    <div>
      <input
        type="text"
        placeholder="write task name"
        className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
      />
      <button type="submit">Add</button>
    </div>
  );
}

export default TodoForm;
