import { useState } from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <p>{counter}</p>
        <br></br>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
      </div>
    </>
  );
};

export default Button;
