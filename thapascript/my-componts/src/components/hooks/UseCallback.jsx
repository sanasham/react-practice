import { useCallback, useState } from 'react';
import GreegingBox from './GreegingBox';

const UseCallback = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const getGreeting = useCallback(() => {
    return `Hello, ${name || 'Guest'}!`;
  }, [name]);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded shadow-md w-80 text-center space-y-4'>
        <input
          className='border border-gray-400 rounded px-2 py-1 w-full'
          type='text'
          value={name}
          onChange={handleChange}
        />
        {/* <h2>Your name is: {name}</h2> */}
        <button
          className='border border-gray-400 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200'
          onClick={() => setCount(count + 1)}
        >
          Increment by 1
        </button>
        <GreegingBox greeting={getGreeting} />
        <h2>Count: {count}</h2>
      </div>
    </div>
  );
};

export default UseCallback;
