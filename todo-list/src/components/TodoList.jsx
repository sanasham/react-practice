import { Plus } from 'lucide-react';
import { useState } from 'react';

const TodoList = () => {
  let [todosList, setTodosList] = useState(() => {
    let saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const hangleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const updatedTodos = [
      ...todosList,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ];
    setTodosList(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setNewTodo('');
  };

  console.log('rendering', todosList);
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6'>
        <h1 className='text-2xl font-bold text-center mb-6 text-indigo-600'>
          ✅ Todo List
        </h1>

        {/* Input */}
        <div className='flex gap-2 mb-6'>
          <input
            type='text'
            placeholder='Add a new task...'
            value={newTodo}
            onChange={hangleTodoChange}
            className='flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none'
          />
          <button
            onClick={addTodo}
            className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center'
          >
            <Plus size={18} />
          </button>
        </div>

        {/* Todo List */}
        <ul className='space-y-3'>
          {todosList?.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-xl border shadow-sm ${
                todo.completed ? 'bg-green-50' : 'bg-gray-50'
              }`}
            >
              {todo.text}

              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  className='w-5 h-5'
                />
              </div>
            </li>
          ))}
        </ul>

        {todosList.length === 0 && (
          <p className='text-center text-gray-400 mt-4'>No tasks yet 👀</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
