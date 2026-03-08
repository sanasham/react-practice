import { useEffect, useState } from 'react';
interface AddTodo {
  addTodos: (title: string) => void;
  editTodo: (id: number, newTitle: string) => void;
  saveEditedTodo: (id: number, newTitle: string) => void;
  editingTodo: { id: number; title: string } | null;
}
const AddTodo = ({
  addTodos,
  editTodo,
  saveEditedTodo,
  editingTodo,
}: AddTodo) => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>('');
  useEffect(() => {
    if (editingTodo) {
      setIsModelOpen(true);
      setTodoTitle(editingTodo.title);
    }
  }, [editingTodo]);
  const handleTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoTitle(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodos(todoTitle);
      setIsModelOpen(false);
      setTodoTitle('');
    }
  };
  const handleSubmit = () => {
    if (todoTitle.trim() === '') return;
    if (editingTodo) {
      saveEditedTodo(editingTodo.id, todoTitle); // ← call save when editing
    } else {
      addTodos(todoTitle); // ← call add when new
    }
    setIsModelOpen(false);
    setTodoTitle('');
  };
  return (
    <div>
      <div className='flex flex-col items-start'>
        <button
          type='button'
          className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md transition-colors mb-4 ml-4'
          onClick={() => setIsModelOpen(true)}
        >
          Add Todo
        </button>
      </div>
      {isModelOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Add New Todo
            </h2>

            <input
              type='text'
              className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4'
              placeholder='Enter todo title...'
              value={todoTitle}
              onChange={handleTodoTitle}
              onKeyDown={handleKeyPress}
              autoFocus
            />

            <div className='flex gap-3 justify-end'>
              <button
                type='button'
                className='px-6 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors'
                onClick={() => {
                  setIsModelOpen(false);
                  setTodoTitle('');
                }}
              >
                Cancel
              </button>
              <button
                type='button'
                className='px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors'
                onClick={handleSubmit}
              >
                {editingTodo ? 'Save Changes' : 'Add Todo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
