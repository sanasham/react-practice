import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [msg, setMsg] = useState('Hello');
  const [count, setCount] = useState(0);
  const handleMessageAndCount = () => {
    setMsg('Hello World ');
    setCount((pre) => pre + 1);
  };
  console.log('rendering parent');
  console.log('count', count);
  return (
    <div>
      <Child name={'sayyed'} />
      {/* <Child name={'Diay'} />
      <Child name={'Shamreen'} />
      <Child /> */}
      <button className='border rounded-2xl  ' onClick={handleMessageAndCount}>
        Click Me
      </button>
    </div>
  );
}

export default Parent;
