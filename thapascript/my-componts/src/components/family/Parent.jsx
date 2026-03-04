import { useContext, useState } from 'react';
import Child from './Child';
import { FamilyContext } from './FamilyContext';

const Parent = () => {
  const [count, setCount] = useState(0);
  const secret = useContext(FamilyContext);
  console.log('parent rendering');
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='border-2 border-red-400 rounded-md p-6 w-105 bg-white text-center space-y-4'>
        <h1 className='font-bold'>Parent</h1> <strong>Family Name:</strong>{' '}
        {secret.familyName}
        <br />
        <p className='text-gray-700 font-medium'>You clicked {count} times</p>
        <button
          onClick={() => setCount(count + 1)}
          className='px-4 py-1 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200'
        >
          Click me
        </button>
        <Child header={`I am a child with ${count} clicks`} secret={secret} />
      </div>
    </div>
  );
};

export default Parent;
