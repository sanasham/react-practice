import React from 'react';
import './style.css';
interface ITodoProps {
  title: string;
}

const TodoItem: React.FC<ITodoProps> = (props) => {
  return (
    <div>
      <li>{props.title}</li>
    </div>
  );
};

export default TodoItem;
