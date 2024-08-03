// src/TodoItem.js
import React from "react";

const TodoItem = ({ item, onEdit, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-white p-2 mb-2 shadow-sm rounded border">
      <span>{item}</span>
      <div>
        <button
          onClick={onEdit}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
