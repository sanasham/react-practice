import React, { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}

export default Counter;
