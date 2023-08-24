import React from 'react';
import TodoItem from './TodoItem';

interface ITodoProps {
  items: TodoItems[];
}
interface TodoItems {
  id: number;
  title: string;
}
const Todo: React.FC<ITodoProps> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TodoItem key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default Todo;
