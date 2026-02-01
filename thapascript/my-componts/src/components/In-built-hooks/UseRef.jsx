import { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const [count, setCount] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  const renderCountRef = useRef(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    renderCountRef.current += 1;
    setRenderCount(renderCountRef.current); // safe UI update
    console.log('Render Count:', renderCountRef.current);
  });

  return (
    <div className='flex flex-col gap-4 items-center'>
      <input
        className='border-2 border-black rounded-xl pl-2'
        type='text'
        value={count}
        onChange={handleChange}
        placeholder='Please enter value'
      />

      <h1>Render count value is {renderCount}</h1>
    </div>
  );
};

export default UseRef;
