import { useState } from 'react';
import Siblings from './Siblings';

const CounterDisplay = ({ count }) => {
  return <p>Count: {count}</p>;
};

const ParentSibling = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterDisplay count={count} />
      <br />
      <Siblings title='second' increment={() => setCount(count + 1)} />
    </div>
  );
};

export default ParentSibling;
