import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import type { Todo } from '../types/todo-types';
import AddTodo from './AddTodo';
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'test1', completed: false },
  ]);

  const [editingTodo, setEditingTodo] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const addTodos = (title: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map((todo) => todo.id)) + 1,
      title,
      completed: false,
    };
    console.log('newTodo', newTodo);
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: number, newTitle: string) => {
    setEditingTodo({ id, title: newTitle });
  };
  const saveEditedTodo = (id: number, newTitle: string) => {
    if (newTitle.trim() === '') return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
    setEditingTodo(null);
  };

  return (
    <div className='flex justify-start items-start flex-col w-full'>
      {/* <div className='flex flex-col items-start'>
        <button
          type='button'
          className='flex flex-col items-start gap-2 mb-4 bg-gray-100 p-4 rounded shadow-md border border-gray-300 mb-4 ml-4'
        >
          Add Todo
        </button>
      </div> */}
      <AddTodo
        addTodos={addTodos}
        editTodo={editTodo}
        saveEditedTodo={saveEditedTodo}
        editingTodo={editingTodo}
      />
      <hr className='border-pink-500 border-2 ml-2 mr-2 w-full' />
      <div className='flex flex-col items-start gap-2 w-full'>
        <ul className='w-full space-y-3'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='w-full p-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md'
            >
              <label
                htmlFor={`todo-${todo.id}`}
                className='flex items-center cursor-pointer w-full gap-4'
              >
                <input
                  type='checkbox'
                  id={`todo-${todo.id}`}
                  className='w-6 h-6 text-pink-400 bg-white/50 rounded focus:ring-pink-400 focus:ring-2 border-2 border-white/30 shrink-0'
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span
                  className={`flex-1 text-lg font-medium ${
                    todo.completed
                      ? 'line-through text-gray/70'
                      : 'text-gray/90 drop-shadow-lg'
                  }`}
                >
                  {todo.id}. {todo.title}
                </span>
                <div className='flex gap-2'>
                  <Pencil
                    size={16}
                    className='cursor-pointer'
                    onClick={() => editTodo(todo.id, todo.title)}
                  />
                  <Trash2
                    size={16}
                    className='cursor-pointer'
                    onClick={() => deleteTodo(todo.id)}
                  />
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
