import React, { useState, useRef, useEffect } from "react";
import "./TaskListItem.css";
import { Todo } from "./utility/model.ts";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";

interface Props {
  item: Todo;
  handleEdit: (id: number, newTask: string) => void;
  handleDelete: (id: number) => void;
  handleToggleDone: (id: number) => void;
}

const TaskListItem: React.FC<Props> = ({
  item,
  handleEdit,
  handleDelete,
  handleToggleDone,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>(item.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  const handleSave = () => {
    if (newTask.trim()) {
      handleEdit(item.id, newTask.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className={`item ${item.isDone ? "done" : ""}`}>
      {isEditing ? (
        <input
          ref={inputRef}
          key={item.id}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{item.todo}</span>
      )}

      <div className="icons">
        {isEditing ? (
          <span className="icon" onClick={handleSave}>
            <AiFillSave />
          </span>
        ) : (
          <span
            className="icon"
            onClick={() => {
              handleEdit(item.id, item.todo);
              setIsEditing(true);
            }}
          >
            <AiFillEdit />
          </span>
        )}
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleToggleDone(item.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default TaskListItem;
