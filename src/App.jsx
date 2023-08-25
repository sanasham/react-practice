import { Fragment, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const hangleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <Fragment>
      <h1 className="text-3xl font-bold">{count}</h1>
      <button
        className="border-solid border-2 border-indigo-600"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="border-solid border-2 border-indigo-600 mx-4 px-2"
        onClick={hangleDecrement}
      >
        Decrement
      </button>
    </Fragment>
  );
}

export default App;
