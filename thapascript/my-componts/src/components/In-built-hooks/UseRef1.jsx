import { useEffect, useRef } from 'react';

const UseRef1 = () => {
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <div>
      <input
        className='border-2 border-amber-500 rounded-xl mt-2 p-2'
        type='text'
        placeholder='Example of useRef hook'
        ref={focusRef}
      />
    </div>
  );
};

export default UseRef1;
