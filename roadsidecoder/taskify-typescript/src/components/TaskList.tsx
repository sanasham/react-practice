import React from "react";
import { Todo } from "./utility/model";
import TaskListItem from "./TaskListItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ todos, setTodos }) => {
  const handleEdit = (id: number, newTask: string) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo: newTask } : item))
    );
  };
  const handleDelete = (id: number) => {
    console.log("delete clicked");
    if (id) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const handleToggleDone = (id: number) => {
    console.log("toggle clicked");
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div>
      {todos &&
        todos?.map((item) => {
          return (
            <TaskListItem
              item={item}
              key={item.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleToggleDone={handleToggleDone}
            />
          );
        })}
    </div>
  );
};

export default TaskList;
