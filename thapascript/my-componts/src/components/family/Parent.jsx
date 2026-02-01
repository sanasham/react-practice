import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log('parent rendering');
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='border-2 border-red-400 rounded-md p-6 w-[420px] bg-white text-center space-y-4'>
        <p className='text-gray-700 font-medium'>You clicked {count} times</p>

        <button
          onClick={() => setCount(count + 1)}
          className='px-4 py-1 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200'
        >
          Click me
        </button>
        <Child header={`I am a child with ${count} clicks`} />
      </div>
    </div>
  );
};

export default Parent;
